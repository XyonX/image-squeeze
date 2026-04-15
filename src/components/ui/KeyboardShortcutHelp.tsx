"use client";

import { useState, useEffect } from "react";
import { Keyboard, X, HelpCircle } from "lucide-react";
import { commonShortcuts } from "@/lib/keyboard-shortcuts";

interface KeyboardShortcutHelpProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function KeyboardShortcutHelp({ isOpen: controlledIsOpen, onClose }: KeyboardShortcutHelpProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Use controlled state if provided, otherwise use internal state
  const showModal = controlledIsOpen !== undefined ? controlledIsOpen : isOpen;

  const shortcuts = [
    { keys: ["Ctrl", "V"], description: "Paste image from clipboard" },
    { keys: ["Ctrl", "Enter"], description: "Start processing images" },
    { keys: ["Ctrl", "S"], description: "Save/download results" },
    { keys: ["Esc"], description: "Reset tool/clear files" },
    { keys: ["Ctrl", "A"], description: "Select all files" },
    { keys: ["?"], description: "Show this help dialog" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "?" && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        if (controlledIsOpen !== undefined && onClose) {
          onClose();
        } else {
          setIsOpen(prev => !prev);
        }
      }
      if (e.key === "Escape" && showModal) {
        e.preventDefault();
        if (controlledIsOpen !== undefined && onClose) {
          onClose();
        } else {
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal, controlledIsOpen, onClose]);

  const toggleModal = () => {
    if (controlledIsOpen !== undefined && onClose) {
      onClose();
    } else {
      setIsOpen(prev => !prev);
    }
  };

  if (!showModal) {
    return (
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-full shadow-lg transition-colors"
        aria-label="Show keyboard shortcuts help"
      >
        <Keyboard className="w-4 h-4" />
        <span className="hidden sm:inline">Shortcuts</span>
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={toggleModal}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Keyboard className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Keyboard Shortcuts</h2>
                <p className="text-sm text-slate-600">Work faster with these shortcuts</p>
              </div>
            </div>
            <button
              onClick={toggleModal}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-4">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{shortcut.description}</p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {shortcut.keys.map((key, keyIndex) => (
                      <span key={keyIndex}>
                        <kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-sm font-medium text-slate-800">
                          {key}
                        </kbd>
                        {keyIndex < shortcut.keys.length - 1 && (
                          <span className="mx-1 text-slate-400">+</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-700">
                    Shortcuts work globally except when typing in text fields. 
                    Press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-xs font-medium">?</kbd> anytime to toggle this help.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-200 bg-slate-50">
            <button
              onClick={toggleModal}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
            >
              Got it, close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}