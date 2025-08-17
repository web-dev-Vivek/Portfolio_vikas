import React, { useEffect, useMemo, useRef, useState } from "react";

// --- Reusable Command Palette ---
function CommandPalette({ open, onClose, commands = [] }) {
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (open && dialogRef.current && !dialogRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 sm:p-6"
      aria-hidden={!open}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Command Palette"
        className="w-full max-w-2xl rounded-2xl bg-[#0f0f10] shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 opacity-70"
          >
            <path d="M10 2a8 8 0 105.293 14.293l3.707 3.707 1.414-1.414-3.707-3.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands…"
            className="flex-1 bg-transparent outline-none text-white placeholder-white/50 text-sm sm:text-base"
          />
          <span className="hidden sm:inline text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10">
            Esc
          </span>
        </div>

        {/* Results */}
        <div className="max-h-[90vh]">
          {filtered.length === 0 ? (
            <div className="px-5 py-6 text-sm text-white/60">No results</div>
          ) : (
            <ul className="divide-y divide-white/5">
              {filtered.map((cmd) => (
                <li key={cmd.id}>
                  <button
                    onClick={() => {
                      cmd.action?.();
                      onClose();
                    }}
                    className="w-full text-left px-5 py-3 hover:bg-white/5 focus:bg-white/10 focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-white">
                        {cmd.label}
                      </span>
                      {cmd.kbd ? (
                        <span className="ml-4 text-[10px] sm:text-xs px-2 py-1 rounded bg-white/10 border border-white/10 text-white/80">
                          {cmd.kbd}
                        </span>
                      ) : null}
                    </div>
                    {cmd.hint ? (
                      <p className="mt-1 text-xs text-white/60">{cmd.hint}</p>
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const mod = isMac ? e.metaKey : e.ctrlKey;
      if (mod && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // 🚀 Only external / useful commands (no Home/About/Contact)
  const commands = [
    {
      id: "resume",
      label: "Download Resume",
      action: () => window.open("/Resume.pdf", "_blank"),
    },
    {
      id: "X",
      label: "Open X",
      action: () => window.open("https://x.com/Dominusteleios", "_blank"),
    },
    {
      id: "email",
      label: "Send Email",
      action: () => (window.location.href = "mailto:jhavikas2004@gmail.com"),
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      action: () =>
        window.open("https://www.linkedin.com/in/vijha742", "_blank"),
    },
    {
      id: "github",
      label: "Open GitHub",
      action: () => window.open("https://github.com/vijha742", "_blank"),
    },
  ];

  return (
    <div className="w-screen fixed mt-3 text-white top-0 left-0 z-50">
      <div className="flex items-center h-full px-4 sm:px-6 lg:px-10 gap-4">
        {/* Brand */}
        <div
          className="text-5xl md:text-5xl font-bold"
          style={{ fontFamily: "'VT323', monospace" }}
        >
          VJ
        </div>

        {/* Social / Quick Links */}
        <div
          style={{ fontFamily: "'Share Tech Mono', monospace" }}
          className="hidden md:flex items-center ml-4 lg:ml-10 gap-3 lg:gap-3 text-xs lg:text-sm"
        >
          <a
            href="/Resume.pdf"
            target="_blank"
            className="cursor-pointer md:border-b border-transparent hover:border-white transition-all duration-500"
          >
            Resume{" "}
          </a>
          <span>•</span>
          <a
            href="https://x.com/Dominusteleios"
            target="_blank"
            className="cursor-pointer md:border-b border-transparent hover:border-white transition-all duration-500"
          >
            X{" "}
          </a>
          <span>•</span>
          <a
            href="mailto:jhavikas2004@gmail.com"
            target="_blank"
            className="cursor-pointer md:border-b border-transparent hover:border-white transition-all duration-500"
          >
            Email{" "}
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/vijha742"
            target="_blank"
            className="cursor-pointer md:border-b border-transparent hover:border-white transition-all duration-500"
          >
            LinkedIn{" "}
          </a>
          <span>•</span>
          <a
            href="https://github.com/vijha742"
            target="_blank"
            className="cursor-pointer md:border-b border-transparent hover:border-white transition-all duration-500"
          >
            Github
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center  gap-3 lg:gap-4 ml-auto">
          {/* 🔍 Search button */}
          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-2 backdrop-blur-lg rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-3 sm:px-4 py-2 text-left text-white/70 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Open search (Ctrl or ⌘ + K)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 opacity-70"
            >
              <path d="M10 2a8 8 0 105.293 14.293l3.707 3.707 1.414-1.414-3.707-3.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
            </svg>
            <span className="text-xs sm:text-sm">Search</span>
            <span className="ml-2 hidden sm:inline text-[10px] px-1.5 py-0.5 rounded bg-white/10 border border-white/10">
              Ctrl/⌘ K
            </span>
          </button>
        </div>
      </div>

      {/* Command Palette */}
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        commands={commands}
      />
    </div>
  );
}
