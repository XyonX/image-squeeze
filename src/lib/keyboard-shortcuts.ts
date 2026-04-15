"use client";

import { useEffect, useCallback } from "react";

export type KeyboardShortcutHandler = (e: KeyboardEvent) => void;

export interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  metaKey?: boolean;
  description: string;
  handler: KeyboardShortcutHandler;
}

export class KeyboardShortcutManager {
  private shortcuts: KeyboardShortcut[] = [];
  private isEnabled = true;

  register(shortcut: KeyboardShortcut) {
    this.shortcuts.push(shortcut);
  }

  unregister(handler: KeyboardShortcutHandler) {
    this.shortcuts = this.shortcuts.filter(s => s.handler !== handler);
  }

  enable() {
    this.isEnabled = true;
  }

  disable() {
    this.isEnabled = false;
  }

  handleKeyDown = (e: KeyboardEvent) => {
    if (!this.isEnabled) return;

    // Don't trigger shortcuts when user is typing in input fields
    const target = e.target as HTMLElement;
    if (
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable
    ) {
      return;
    }

    for (const shortcut of this.shortcuts) {
      if (
        e.key.toLowerCase() === shortcut.key.toLowerCase() &&
        !!e.ctrlKey === !!shortcut.ctrlKey &&
        !!e.shiftKey === !!shortcut.shiftKey &&
        !!e.altKey === !!shortcut.altKey &&
        !!e.metaKey === !!shortcut.metaKey
      ) {
        e.preventDefault();
        shortcut.handler(e);
        break;
      }
    }
  };
}

// Global instance
export const keyboardShortcutManager = new KeyboardShortcutManager();

// React hook for using keyboard shortcuts
export function useKeyboardShortcuts(shortcuts: KeyboardShortcut[], dependencies: any[] = []) {
  useEffect(() => {
    shortcuts.forEach(shortcut => {
      keyboardShortcutManager.register(shortcut);
    });

    return () => {
      shortcuts.forEach(shortcut => {
        keyboardShortcutManager.unregister(shortcut.handler);
      });
    };
  }, dependencies);
}

// Common shortcut handlers
export const commonShortcuts = {
  pasteImage: (callback: (files: File[]) => void): KeyboardShortcut => ({
    key: "v",
    ctrlKey: true,
    description: "Paste image from clipboard",
    handler: async (e) => {
      try {
        const items = await navigator.clipboard.read();
        const imageFiles: File[] = [];
        
        for (const item of items) {
          if (item.types.some(type => type.startsWith("image/"))) {
            const blob = await item.getType(item.types.find(type => type.startsWith("image/"))!);
            const file = new File([blob], `pasted-image-${Date.now()}.png`, { type: blob.type });
            imageFiles.push(file);
          }
        }
        
        if (imageFiles.length > 0) {
          callback(imageFiles);
        }
      } catch (err) {
        // Fallback to traditional paste event (already handled by UploadZone)
        console.log("Clipboard API not available, using fallback");
      }
    },
  }),

  processImages: (callback: () => void): KeyboardShortcut => ({
    key: "Enter",
    ctrlKey: true,
    description: "Start processing images",
    handler: callback,
  }),

  saveResults: (callback: () => void): KeyboardShortcut => ({
    key: "s",
    ctrlKey: true,
    description: "Save/download results",
    handler: callback,
  }),

  resetTool: (callback: () => void): KeyboardShortcut => ({
    key: "Escape",
    description: "Reset tool/clear files",
    handler: callback,
  }),

  selectAll: (callback: () => void): KeyboardShortcut => ({
    key: "a",
    ctrlKey: true,
    description: "Select all files",
    handler: callback,
  }),

  toggleHelp: (callback: () => void): KeyboardShortcut => ({
    key: "?",
    description: "Show keyboard shortcuts help",
    handler: callback,
  }),
};

// Initialize global keyboard listener
if (typeof window !== "undefined") {
  window.addEventListener("keydown", keyboardShortcutManager.handleKeyDown);
}