import { create } from "zustand";

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface CartItem extends Product {
    quantity: number;
}

interface CartStore {
    cart: CartItem[];
    addToCart: (product: Product, quantity? : number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
}

const useCartStore = create<CartStore>((set, get) => ({
    cart: [],

    addToCart: (product, quantity = 1) =>
        set((state) => {
            const existingItem = state.cart.find((item) => item._id === product._id);
            if(existingItem) {
                return {
                    cart: state.cart.map((item) =>
                        item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item
                    ),
                };
            }
            return { cart: [...state.cart, { ...product, quantity }] };
        }),

        removeFromCart: (productId) =>
            set((state) => ({
                cart: state.cart.filter((item) => item._id !== productId),
            })),

            updateQuantity: (productId, quantity) =>
                set((state) => ({
                    cart: state.cart
                    .map((item) => (item._id === productId ? { ...item, quantity } : item))
                    .filter((item) => item.quantity > 0),
                })),
            
            clearCart: () => set({ cart: [] }),

            getTotalPrice: () => 
                get().cart.reduce((total, item) => total + item.price * item.quantity, 0)
}));

export default useCartStore;