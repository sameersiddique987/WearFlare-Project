import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import MediaCard from '../component/Card';
import { useNavigate } from 'react-router-dom';

function WinterCollection() {
  const [render, setRender] = useState([]);
const navigate = useNavigate();

  const summersingleUser = (item) => {
    navigate(`/SingleUser/${item.id}`);
  };

  useEffect(() => {
    const dummyData = [
    
      {
        "id": 7,
        "image": "https://t3.ftcdn.net/jpg/06/31/34/18/360_F_631341802_ZzBNbP15w7If69vtgvIElLIO3qX7uZzH.jpg",
        "title": "Men's Winter Hoodie",
        "category": "Winter Collection",
        "price": "$35.99"
      },
      {
        "id": 8,
        "image": "https://www.shutterstock.com/image-photo/fashionable-young-beautiful-woman-slim-260nw-2077986460.jpg",
        "title": "Women's Winter Hoodie",
        "category": "Winter Collection",
        "price": "$34.99"
      },
      {
        "id": 9,
        "image": "https://img.freepik.com/free-photo/young-handsome-man-walking-down-street_1303-24594.jpg?semt=ais_hybrid&w=740",
        "title": "Men's Leather Jacket",
        "category": "Winter Collection",
        "price": "$55.99"
      },
      {
        "id": 10,
        "image": "https://images.garmentory.com/images/3043383/large/Anine-Bing-Maverick-Leather-Jacket---Black-20190922052622.jpeg?1569129984",
        "title": "Women's Leather Jacket",
        "category": "Winter Collection",
        "price": "$53.99"
      },
      {
        "id": 11,
        "image": "https://d1wtanddiqif0k.cloudfront.net/spree/images/attachments/000/014/740/product/Tempelfjord_1.jpg?1730204768",
        "title": "Men's Knitted Sweater",
        "category": "Winter Collection",
        "price": "$25.99"
      },
      {
        "id": 12,
        "image": "https://www.shutterstock.com/image-photo/fashionable-happy-smiling-woman-wearing-260nw-2423598487.jpg",
        "title": "Women's Knitted Sweater",
        "category": "Winter Collection",
        "price": "$24.99"
      },
      {
        "id": 28,
        "image": "https://media.istockphoto.com/id/1357323248/photo/man-on-a-gray-background-is-warmly-dressed-in-a-black-down-jacket.jpg?s=612x612&w=0&k=20&c=rVGoyy8uK8jIFjHxSsvMjUp0E-nh6zCP8d8SXzpMxT0=",
        "title": "Men's Puffer Jacket",
        "category": "Winter Collection",
        "price": "$59.99"
      },
      {
        "id": 29,
        "image": "https://i.pinimg.com/564x/6d/d2/61/6dd26193e4980fbd3c8d452450c3affc.jpg",
        "title": "Women's Puffer Jacket",
        "category": "Winter Collection",
        "price": "$57.99"
      },
      {
        "id": 30,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSLzZpflnIvCuugTbkwzwukzoy7b0EMvfFg&s",
        "title": "Men's Zip Hoodie",
        "category": "Winter Collection",
        "price": "$33.99"
      },
      {
        "id": 31,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGnttuwO6XLNLRCb1RJOeWIvMyaCfS6yOSw&s",
        "title": "Women's Zip Hoodie",
        "category": "Winter Collection",
        "price": "$32.99"
      }
    ];
    
    setRender(dummyData);
  }, []);

  
  return (
    <>

<div className="flex justify-center items-center py-8">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
    Winter Collection
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

export default WinterCollection


