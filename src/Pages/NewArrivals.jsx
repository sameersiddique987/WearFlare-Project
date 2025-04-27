import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import MediaCard from '../component/Card';
import { useNavigate } from 'react-router-dom';

function NewArrivals() {
  const [render, setRender] = useState([]);
const navigate = useNavigate();

  const summersingleUser = (item) => {
    navigate(`/SingleUser/${item.id}`);
  };

  useEffect(() => {
    const dummyData= [
      
      {
        id: 13,
        image: "https://i1.wp.com/mrkoachman.com/wp-content/uploads/2017/01/SHorts-For-Men.jpg",
        title: "Men's Summer Shorts",
        category: "Summer Collection",
        price: "$19.99"
      },
      {
        id: 14,
        image: "https://media.istockphoto.com/id/1296732370/photo/beautiful-girl.jpg?s=612x612&w=0&k=20&c=g9dlv0spIRz-KfCbVeOeP94ixGsKTVjO6GbYU5PoVhI=",
        title: "Women's Summer Shorts",
        category: "Summer Collection",
        price: "$18.99"
      },
      {
        id: 21,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MOxtkRE8ugVqpbkOfYiM2_YCeNX-UPUV9A&s",
        title: "Men's Tank Top",
        category: "Summer Collection",
        price: "$12.99"
      },
      {
        id: 1,
        image: "https://assets.mediamodifier.com/mockups/64c32101b5c1b1f4d4cc1cd1/male-model-with-t-shirt-mockup.jpg",
        title: "Men's Casual T-Shirt",
        category: "T-Shirts",
        price: "$15.99"
      },
      {
        id: 2,
        image: "https://cdn.pixabay.com/photo/2024/01/20/01/54/ai-generated-8520248_640.jpg",
        title: "Women's Casual T-Shirt",
        category: "T-Shirts",
        price: "$14.99"
      },
      {
        id: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mTm3DoeRf1WHjQ67n0aw1HwQb7XSpSiSjA&s",
        title: "Men's Polo Shirt",
        category: "T-Shirts",
        price: "$20.99"
      },
      {
        id: 16,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReP0vzfCjR5YS23cUsd6vbS3Z1t6ApSQjFBouNC5oaFw1HFJ7VOwS8R40_1mYI-Mcy-Pc&usqp=CAU",
        title: "Women's Polo Shirt",
        category: "T-Shirts",
        price: "$19.99"
      },
      {
        id: 22,
        image: "https://files.cdn.printful.com/o/upload/bfl-image/f5/10333_l_collage%20vintage%20design%20.jpg",
        title: "Men's Graphic Tee",
        category: "T-Shirts",
        price: "$17.49"
      },
      {
        id: 23,
        image: "https://i.pinimg.com/originals/3c/d0/79/3cd079b4d4f871ae797a4a5370869f47.jpg",
        title: "Women's Printed T-Shirt",
        category: "T-Shirts",
        price: "$16.99"
      },
      {
        id: 24,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaL9U9DbTGNk1E9g-IiNEnESa5peSA2iVieA&s",
        title: "Men's Cotton Shirt",
        category: "Shirts",
        price: "$23.99"
      }
    ];
    setRender(dummyData);
  }, []);

  
  return (
    <>

<div className="flex justify-center items-center py-8">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
    Summer Collection
  </h1>
</div>

<div className="w-full overflow-hidden whitespace-nowrap bg-black text-white py-2 relative">
  <div className="flex animate-marquee">
    {/* First Set */}
    <div className="flex space-x-10">
      <span className="text-2xl font-semibold">
        Elevate Your Style with Wearflare’s Latest Arrivals!
      </span>
      <span className="text-2xl font-semibold">
        Elevate Your Style with Wearflare’s Latest Arrivals!
      </span>
      <span className="text-2xl font-semibold">
        Elevate Your Style with Wearflare’s Latest Arrivals!
      </span>
    </div>

    {/* Second Set (Duplicate for smooth scroll) */}
    <div className="flex space-x-20 ml-20">
      <span className="text-2xl font-semibold">
        Elevate Your Style with Wearflare’s Latest Arrivals!
      </span>
      <span className="text-2xl font-semibold">
        Elevate Your Style with Wearflare’s Latest Arrivals!
      </span>
      <span className="text-2xl font-semibold">
        Elevate Your Style with Wearflare’s Latest Arrivals!
      </span>
    </div>
  </div>
</div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {render.map((data) => (
          <MediaCard
            key={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
            price={data.price}
            onClick={() => summersingleUser(data)}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default NewArrivals;



