import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Notes_form = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !detail.trim()) return;

    const oldNotes = JSON.parse(localStorage.getItem("notes")) || [];
    localStorage.setItem(
      "notes",
      JSON.stringify([...oldNotes, { title, detail, createdAt: Date.now() }])
    );

    navigate("/note");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0d18] flex items-center justify-center px-6">

      {/* GLOW BACKGROUND */}
     
      {/* CARD */}
      <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)]">

        {/* TOP BAR */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-white/20">
          <h2 className="text-xl font-semibold text-white">✨ New Note</h2>

          <button
            onClick={() => navigate("/note")}
            className="text-gray-300 hover:text-white text-sm"
          >
            ✕ Close
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={submitHandler} className="px-8 py-10 space-y-8">

          {/* TITLE */}
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full bg-transparent text-4xl font-bold text-white outline-none placeholder:text-gray-400"
          />

          {/* SEPARATOR */}
          <div className="h-px bg-white/20" />

          {/* CONTENT */}
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Start writing your thoughts here..."
            className="w-full min-h-[260px] bg-transparent text-lg text-gray-200 leading-relaxed outline-none resize-none placeholder:text-gray-400"
          />

          {/* ACTIONS */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/note")}
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
            >
              Save Note
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Notes_form;