import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleCard from '../component/SingleCard';
import Footer from '../component/Footer';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Swal from "sweetalert2";
import dummyData from '../component/DummyData';

function SingleUser() {
  const [data, setData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const { id } = useParams();

  // Fetch selected item by ID
  useEffect(() => {
    const selectedItem = dummyData.find(item => item.id === parseInt(id));
    setData(selectedItem || null);
  }, [id]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // Sync cart with localStorage
  const syncLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event("storage"));
  };

  // Add item to cart with selected size and quantity
  const addToCart = () => {
    if (!data || !selectedSize) {
      Swal.fire({
        title: "Select a Size",
        text: "Please select a size before adding to cart.",
        icon: "warning",
        confirmButtonColor: "#234e94",
        confirmButtonText: "OK",
      });
      return;
    }

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = savedCart.find(item => item.id === data.id && item.size === selectedSize);

    if (existingItem) {
      Swal.fire({
        title: "Already in Cart!",
        text: "This item with the selected size is already in your cart.",
        icon: "info",
        confirmButtonColor: "#234e94",
        confirmButtonText: "OK",
      });
      return;
    }

    const updatedCart = [...savedCart, { ...data, size: selectedSize, quantity: 1 }];
    syncLocalStorage(updatedCart);

    Swal.fire({
      title: "Success!",
      text: "Item added to cart successfully.",
      icon: "success",
      confirmButtonColor: "#234e94",
      confirmButtonText: "OK",
    });
  };

  // Increase quantity of the item in cart
  const increaseQuantity = () => {
    if (!data) return;

    const updatedCart = cartItems.map(item =>
      item.id === data.id && item.size === selectedSize
        ? { ...item, quantity: Math.min(3, item.quantity + 1) }
        : item
    );
    syncLocalStorage(updatedCart);
  };

  // Decrease quantity of the item in cart
  const decreaseQuantity = () => {
    const updatedCart = cartItems.map(item =>
      item.id === data.id && item.size === selectedSize
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    syncLocalStorage(updatedCart);
  };

  // Handle Stripe payment
  const payNow = async () => {
    if (!data || !selectedSize) {
      console.error("No product or size selected!");
      return;
    }

    const stripe = await loadStripe("pk_test_51QarspP9DXcr8WfKlzEFIRiy58vELHNKXtMmd2Il0dyfRiG1ftHz7f6Kwjl1ecwLs8evwTntGprfHFTZkXOzfYzq00ujS5MHYl");

    try {
      const productToCheckout = {
        id: data.id,
        category: data.category,
        title: data.title,
        price: parseFloat(data.price) * (cartItems.find(item => item.id === data.id && item.size === selectedSize)?.quantity || 1),
        quantity: cartItems.find(item => item.id === data.id && item.size === selectedSize)?.quantity || 1,
        size: selectedSize
      };

      const response = await axios.post(
        "https://wear-flare-backend.vercel.app/api/v1/checkout",
        { products: [productToCheckout] },
        { withCredentials: false }
      );

      if (response.data?.id) {
        const result = await stripe.redirectToCheckout({ sessionId: response.data.id });
        if (result?.error) console.error("Stripe Error:", result.error.message);
      } else {
        console.error("Stripe session ID not received!");
      }
    } catch (err) {
      console.error("Payment Error:", err);
    }
  };

  return (
    <>
      <div className="px-10 flex flex-wrap justify-center gap-3">
        {data ? (
          <SingleCard
  src={data.image}
  category={data.category}
  description={data.description}
  price={parseFloat(data.price) * (cartItems.find(item => item.id === data.id && item.size === selectedSize)?.quantity || 1)}
  quantity={cartItems.find(item => item.id === data.id && item.size === selectedSize)?.quantity || 0}
  increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
  addCard={addToCart}
  payNow={payNow}
  selectedSize={selectedSize}
  setSelectedSize={setSelectedSize}
/>

        ) : (
          <div className='mt-28 pb-20'>
            <div role="status">
              <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591..." fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038..." fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SingleUser;




