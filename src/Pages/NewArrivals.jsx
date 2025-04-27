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
    const dummyData = [
      {
        id: 1,
        image: "https://beom.in/cdn/shop/files/IMG_7957.jpg?v=1740641181&width=720",
        title: "Skyline Breeze Tee",
        category: "T-Shirts",
        price: "$16.49",
        newArrival: true
      },
      {
        id: 2,
        image: "https://us.motelrocks.com/cdn/shop/products/TASYA-TOP-MOONLIGHT-63928_1200x1200.jpg?v=1603120116",
        title: "Moonlight Crop Top",
        category: "T-Shirts",
        price: "$14.99",
        newArrival: true
      },
      {
        id: 3,
        image: "https://www.sclothers.com/cdn/shop/products/AuroraRedEmbroideredPoloShirt.jpg?v=1658820780&width=1080",
        title: "Aurora Polo Shirt",
        category: "Shirts",
        price: "$21.99",
        newArrival: false
      },
      {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKCIYjYy9tO7b48iEZhxgP0cA494tJlpO6cg&s",
        title: "Velvet Mist Shirt",
        category: "Shirts",
        price: "$24.49",
        newArrival: true
      },
      {
        id: 5,
        image: "https://www.travismathew.com/medias/sys_master/images/images/h3a/h33/9260672876574/1MY544-4BLN.jpg?im=Resize,width=700",
        title: "Solar Flare Tee",
        category: "T-Shirts",
        price: "$18.79",
        newArrival: false
      },
      {
        id: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXMXoQIh14Hn0JSEYeHIO9Fe0Y2vB7Or69g&s",
        title: "Ocean Drift Tee",
        category: "T-Shirts",
        price: "$17.49",
        newArrival: false
      },
      {
        id: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGWid8WyxsmIkjoNbS4IqBA1OwrxApWwawg&s",
        title: "Desert Vibe Shorts",
        category: "Shorts",
        price: "$19.99",
        newArrival: true
      },
      {
        id: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMEkOMAAeveGEIJIPEnGNjtbIFqP0kH1i8M7f1HC9NvQI99-fA0LX4JaEYyXDN4McBC8&usqp=CAU",
        title: "Twilight Breeze Shorts",
        category: "Shorts",
        price: "$18.29",
        newArrival: true
      },
      {
        id: 9,
        image: "https://www.mp.com/images?url=https://static.thcdn.com/productimg/original/12962093-1155011265876670.jpg&format=webp&auto=avif&crop=1100,1200,smart",
        title: "Crimson Tank",
        category: "Tank Tops",
        price: "$14.19",
        newArrival: false
      },
      {
        id: 10,
        image: "https://storage.googleapis.com/lulu-fanatics/product/5231/1280/lululemon-sunset-flow-tank-cape-red-024678-17721.jpg",
        title: "Sunset Flow Tank",
        category: "Tank Tops",
        price: "$13.79",
        newArrival: true
      }
    ];
    setRender(dummyData);
  }, []);

  
  return (
    <>

<div className="flex justify-center items-center py-8">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
  New Arrivals
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



