import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCartStore();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty. <Link to="/products" className="text-blue-500">Shop Now!</Link></p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id} className="flex items-center justify-between border-b py-2 bg-white">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover ml-3" />
              <div className="flex-1 ml-4">
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center">
                  <label>Qty:</label>
                  <input type="number" value={item.quantity} min="1" className="border px-2 py-1 ml-2 w-16" onChange={(e) => updateQuantity(item._id, Number(e.target.value))} />
                </div>
              </div>
              <button onClick={() => removeFromCart(item._id)} className="text-red-500 mr-4">Remove</button>
            </div>
          ))}

          <div className="mt-4 text-right">
            <p className="text-lg font-bold">Total: ${getTotalPrice().toFixed(2)}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart