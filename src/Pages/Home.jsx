


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

      {/* Search Input */}
      {/* <div className="flex justify-center my-5">
        <input
          type="text"
          placeholder="Search products..."
          className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div> */}






      <div className="ml-9 text-4xl font-extrabold">
        <i>
          <span>RECOMMENDED</span> FOR YOU
        </i>
      </div>

      {/* Banner Section */}
      <div className="px-10 flex flex-wrap justify-center mt-5">
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
