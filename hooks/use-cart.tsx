import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/type";
import toast from "react-hot-toast";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (data: Product) => {
        const currentItems = get().items;
        const exisitingItems = currentItems.find((item) => item.id === data.id);

        if (exisitingItems) {
          return toast("제품이 장바구니에 이미 있습니다.");
        }

        set({ items: [...get().items, data] });
        toast.success("제품을 장바구니에 담았습니다.");
      },

      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id != id)] });
        toast.success("제품을 장바구니에서 삭제했습니다.");
      },

      removeAll: () => set({ items: [] }),
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
