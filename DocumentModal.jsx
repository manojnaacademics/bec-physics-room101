import React from 'react';

export default function DocumentModal({
  isOpen,
  onClose,
  fileUrl,
  title = "CV Syllabus 2026-27",
  tag = "SYLLABUS",
  author = "Prof. Jayashree G Ghantimath",
  date = "25 Sept 2026"
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      {/* Modal Box */}
      <div className="relative flex flex-col w-full max-w-4xl h-[88vh] bg-[#0c101c] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-5 pb-3 border-b border-slate-800/80">
          <div>
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              {tag}
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              {title}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              By {author} • {date}
            </p>
          </div>

          {/* Top-Right 'X' Close Button */}
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full bg-slate-900 overflow-hidden relative">
          {fileUrl ? (
            <iframe
              src={fileUrl}
              title={title}
              className="w-full h-full border-none"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400 text-sm">
              No document URL found.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center px-6 py-4 border-t border-slate-800/80 bg-[#0c101c]">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-[#5542f6] hover:bg-[#4635e2] rounded-xl transition duration-150 shadow-md"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
}
