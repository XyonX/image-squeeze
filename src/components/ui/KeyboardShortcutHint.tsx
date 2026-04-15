"use client";

import { Keyboard } from "lucide-react";

interface KeyboardShortcutHintProps {
  shortcut: string;
  description?: string;
  className?: string;
}

export function KeyboardShortcutHint({ shortcut, description, className = "" }: KeyboardShortcutHintProps) {
  const keys = shortcut.split("+").map(key => key.trim());
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        {keys.map((key, index) => (
          <span key={index}>
            <kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-xs font-medium text-slate-800">
              {key}
            </kbd>
            {index < keys.length - 1 && (
              <span className="mx-1 text-slate-400 text-xs">+</span>
            )}
          </span>
        ))}
      </div>
      {description && (
        <span className="text-xs text-slate-600">{description}</span>
      )}
    </div>
  );
}

interface KeyboardShortcutHintsProps {
  shortcuts?: Array<{
    shortcut: string;
    description: string;
  }>;
}

export function KeyboardShortcutHints({ shortcuts }: KeyboardShortcutHintsProps) {
  const defaultShortcuts = [
    { shortcut: "Ctrl+V", description: "Paste image" },
    { shortcut: "Ctrl+Enter", description: "Process" },
    { shortcut: "Ctrl+S", description: "Save all" },
    { shortcut: "Esc", description: "Reset" },
  ];

  const displayShortcuts = shortcuts || defaultShortcuts;

  return (
    <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Keyboard className="w-4 h-4 text-slate-600" />
        <span className="text-sm font-medium text-slate-800">Keyboard Shortcuts</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {displayShortcuts.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center gap-1">
              {item.shortcut.split("+").map((key, keyIndex) => (
                <span key={keyIndex}>
                  <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-xs font-medium text-slate-800">
                    {key}
                  </kbd>
                  {keyIndex < item.shortcut.split("+").length - 1 && (
                    <span className="mx-0.5 text-slate-400 text-xs">+</span>
                  )}
                </span>
              ))}
            </div>
            <span className="text-xs text-slate-600 mt-0.5">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}