import React, { useState } from "react";
import ImageCarousel from "../component/Carousel";
import MediaCard from "../component/Card";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import VideoCarousel from "../component/VideoCarousel";
import BannerSection from "../component/BannerSection";
import dummyData from "../component/DummyData";
import axios from "axios"; 

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSize, setSelectedSize] = useState(""); 
  const [cart, setCart] = useState([]); 
  const navigate = useNavigate();

  // Navigate to the product page
  const singleUser = (item) => {
    navigate(`SingleUser/${item.id}`, { state: { selectedSize } });
  };

  // Handle size change
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Add to Cart functionality
  const addToCart = (item) => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart.");
      return;
    }

    const cartItem = {
      ...item,
      selectedSize,
      quantity: 1, 
    };

    setCart([...cart, cartItem]);
  };

  // Handle checkout
  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Prepare the cart data for the API request
    const cartData = cart.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      selectedSize: item.selectedSize,
      quantity: item.quantity,
    }));

    try {
      const response = await axios.post("https://wear-flare-backend.vercel.app/api/v1/checkout", {
        items: cartData,
      });

      if (response.status === 200) {
        alert("Checkout successful!");
        // Optionally, redirect to a thank you page or reset the cart
        setCart([]);
      }
    } catch (error) {
      console.error("Checkout Error: ", error);
      alert("There was an error processing your checkout. Please try again.");
    }
  };

  // Filter products based on search term
  const filteredData = dummyData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ImageCarousel />

      {/* Search Input */}
      <div className="flex justify-center my-5">
        <input
          type="text"
          placeholder="Search products..."
          className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="ml-9 text-4xl font-extrabold">
        <i>
          <span>RECOMMENDED</span> FOR YOU
        </i>
      </div>

      <div className="px-10 flex flex-wrap justify-center gap-3 mt-5">
        <BannerSection />
        {filteredData.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <MediaCard
              image={item.image}
              title={item.category}
              description={item.title}
              price={item.price}
              onClick={() => singleUser(item)}
              selectedSize={selectedSize} 
              onSizeChange={handleSizeChange} 
              addToCart={() => addToCart(item)} 
            />
          </div>
        ))}
      </div>

      <VideoCarousel />

      {/* Cart Summary */}
      <div className="mt-5">
        <div className="px-10 py-5">
          <h3 className="text-2xl font-bold">Cart</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="py-2">
                {item.title} ({item.selectedSize}) - Quantity: {item.quantity} - ${item.price}
              </li>
            ))}
          </ul>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md"
          >
            Checkout
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
