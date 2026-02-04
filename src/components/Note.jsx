import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Note = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDetail, setEditDetail] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteHandler = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditTitle(notes[index].title);
    setEditDetail(notes[index].detail);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditTitle("");
    setEditDetail("");
  };

  const saveEdit = (index) => {
    if (!editTitle.trim() || !editDetail.trim()) return;

    const updated = [...notes];
    updated[index] = { ...updated[index], title: editTitle, detail: editDetail };
    setNotes(updated);
    cancelEdit();
  };

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.detail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (t) =>
    new Date(t).toLocaleString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
return (
  <div className="min-h-screen bg-[#0b0f19] text-white px-6 py-10">
    <div className="max-w-7xl mx-auto space-y-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            🧠 Notes Dashboard
          </h1>
          <p className="text-gray-400 mt-1">
            All your thoughts, ideas, and plans in one place
          </p>
        </div>

        <Link
          to="/form"
          className="px-7 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:scale-105 transition"
        >
          + New Note
        </Link>
      </div>

      {/* STATS + SEARCH */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Stats Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <p className="text-gray-400 text-sm">Total Notes</p>
          <h2 className="text-4xl font-bold mt-2">{notes.length}</h2>
        </div>

        {/* Search */}
        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="🔍 Search notes by title or content..."
            className="w-full px-5 py-4 rounded-xl text-white bg-transparent border border-white/20 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* EMPTY STATE */}
      {filteredNotes.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
          <p className="text-2xl mb-2">No notes yet</p>
          <p className="italic">Your ideas will live here ✨</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNotes.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-6
              bg-gradient-to-br from-white/10 via-white/5 to-transparent
              border border-white/15 backdrop-blur-xl
              shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >

              {/* ACTIONS */}
              <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition">
                {editIndex === index ? (
                  <>
                    <button
                      onClick={() => saveEdit(index)}
                      className="text-green-400 hover:text-green-300 text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startEdit(index)}
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteHandler(index)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>

              {/* NOTE CONTENT */}
              {editIndex === index ? (
                <>
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 text-xl font-bold outline-none mb-4"
                  />
                  <textarea
                    rows={5}
                    value={editDetail}
                    onChange={(e) => setEditDetail(e.target.value)}
                    className="w-full bg-transparent text-gray-300 resize-none outline-none"
                  />
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-5 whitespace-pre-wrap">
                    {item.detail}
                  </p>
                </>
              )}

              {/* DATE */}
              <p className="text-xs text-gray-500 mt-6 text-right">
                {item.createdAt ? formatDate(item.createdAt) : ""}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
}
export default Note;