/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { create } from "zustand";

type ModalType =
  | "createProject"
  | "editProject"
  | "deleteProject"
  | "createBugReport"
  | null;

interface ModalStore {
  isOpen: boolean;
  type: ModalType;
  data?: any;
  onOpen: (type: ModalType, data?: any) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set: (arg0: { isOpen: boolean; type: any; data: any; }) => any) => ({
  isOpen: false,
  type: null,
  data: undefined,
  onOpen: (type: any, data: any) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false, type: null, data: undefined }),
}));

interface TabStore {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

export const useTabStore = create<TabStore>((set: (arg0: { activeTab: any; }) => any) => ({
  activeTab: "metadata",
  setActiveTab: (tabId: any) => set({ activeTab: tabId }),
}));

export const useSettingsTabStore = create<TabStore>((set: (arg0: { activeTab: any; }) => any) => ({
  activeTab: "logs",
  setActiveTab: (tabId: any) => set({ activeTab: tabId }),
}));

export const useKeyboardShortcut = () => {
  const { onOpen } = useModal();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "m") {
        event.preventDefault(); // Prevent the default behavior of the browser
        onOpen("createProject");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onOpen]);
};
