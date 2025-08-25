import type { IPostState } from "@/types/app";
import { create } from "zustand";

interface Store {

  hasRequestedPosts: boolean;
  setHasRequestedPosts: (status: boolean) => void;

  username: string;
  setUsername: (name: string) => void;

  posts: IPostState[];
  setPosts: (data: IPostState[]) => void;

  selectedPostID: number;
  setSelectedPostID: (id: number) => void;

  selectedPostData: {
    title: string;
    content: string;
  };
  setSelectedPostData: (data: Partial<Store["selectedPostData"]>) => void;

  modalShow: {
    delete: boolean;
    edit: boolean;
  };
  setModalShow: (data: Partial<Store["modalShow"]>) => void;
}

export const useStore = create<Store>((set) => ({

  hasRequestedPosts: false,
  setHasRequestedPosts: (status: boolean) => set({ hasRequestedPosts: status }),

  username: "",
  setUsername: (name: string) => set({ username: name }),

  posts: [],
  setPosts: (data: IPostState[]) => set({ posts: data }),

  selectedPostID: 0,
  setSelectedPostID: (id: number) => set({ selectedPostID: id }),

  modalShow: {
    delete: false,
    edit: false,
  },

  setModalShow: (data) =>
    set((state) => ({
      modalShow: {
        ...state.modalShow,
        ...data,
      },
    })),

  selectedPostData: {
    title: '',
    content: ''
  },

  setSelectedPostData: (data) =>
    set((state) => ({
      selectedPostData: {
        ...state.selectedPostData,
        ...data,
      },
    })),
}));
