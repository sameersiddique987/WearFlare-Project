


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

  const singleUser = (item) => {
    navigate(`SingleUser/${item.id}`, { state: { selectedSize } });
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

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

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

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
        setCart([]);
      }
    } catch (error) {
      console.error("Checkout Error: ", error);
      alert("There was an error processing your checkout. Please try again.");
    }
  };

  const filteredData = dummyData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ImageCarousel />

    

{/* Search Input with Icon */}
<div className="flex justify-center my-5">
  <div className="relative w-1/2">
    {/* Search Icon */}
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111.65 6.65a7.5 7.5 0 014.35 10.5z" />
      </svg>
    </div>

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search products..."
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
</div>





      <div className="ml-28 text-4xl font-extrabold">
        <i>
          <span>RECOMMENDED</span> FOR YOU
        </i>
      </div>

      
      {/* <div className="px-10 flex flex-wrap justify-center mt-5">
          <BannerSection />
      </div>  */}
{/* Banner Section */}
<div className="px-4 md:px-10 flex flex-wrap justify-center mt-5">
  <BannerSection />
</div>



<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-5 mx-auto mt-8">
  {filteredData.map((item) => (
    <div key={item.id} className="flex justify-center">
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
      <Footer />
    </>
  );
}

export default Home;
