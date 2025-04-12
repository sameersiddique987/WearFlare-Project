import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleCard from '../component/SingleCard';
import Footer from '../component/Footer';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Swal from "sweetalert2";

function SingleUser() {
  const [data, setData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const { id } = useParams();

  const dummyData = [
    
    {
      "id": 1,
      "image": "https://assets.mediamodifier.com/mockups/64c32101b5c1b1f4d4cc1cd1/male-model-with-t-shirt-mockup.jpg",
      "title": "Men's Casual T-Shirt",
      "category": "T-Shirts",
      "price": "15.99",
      "description": "Soft and breathable cotton t-shirt perfect for everyday casual wear."
    },
    {
      "id": 2,
      "image": "https://cdn.pixabay.com/photo/2024/01/20/01/54/ai-generated-8520248_640.jpg",
      "title": "Women's Casual T-Shirt",
      "category": "T-Shirts",
      "price": "14.99",
      "description": "Lightweight and comfortable tee with a stylish fit for women."
    },
    {
      "id": 3,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpjWHAcDcAKSujHI1lcPhS6hj0voJxd_Q1E9_y85cEdWc_NJTOTkzML4EtgUHmUp8lck&usqp=CAU",
      "title": "Men's Formal Shirt",
      "category": "Shirts",
      "price": "22.99",
      "description": "Classic formal shirt crafted for a clean, professional look."
    },
    {
      "id": 4,
      "image": "https://img.freepik.com/free-photo/vertical-shot-concentrated-businessman-listening-carefully-with-crossed-hands_181624-29443.jpg?semt=ais_hybrid&w=740",
      "title": "Women's Formal Shirt",
      "category": "Shirts",
      "price": "21.99",
      "description": "Elegant formal shirt with a tailored fit, ideal for office wear."
    },
    {
      "id": 5,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MVNONXAI25NPY2I20scHw7k-zyUj-tuR4Q&s",
      "title": "Men's Denim Jeans",
      "category": "Pants",
      "price": "29.99",
      "description": "Durable and stylish denim jeans, ideal for casual outings."
    },
    {
      "id": 6,
      "image": "https://n.nordstrommedia.com/it/4ec70d03-0040-4d0a-8a2e-b1f7c2d8f68f.jpeg?h=938&w=750",
      "title": "Women's Skinny Jeans",
      "category": "Pants",
      "price": "27.99",
      "description": "Flattering skinny jeans designed to hug your curves comfortably."
    },
    {
      "id": 7,
      "image": "https://t3.ftcdn.net/jpg/06/31/34/18/360_F_631341802_ZzBNbP15w7If69vtgvIElLIO3qX7uZzH.jpg",
      "title": "Men's Winter Hoodie",
      "category": "Winter Collection",
      "price": "35.99",
      "description": "Warm fleece-lined hoodie perfect for chilly winter days."
    },
    {
      "id": 8,
      "image": "https://www.shutterstock.com/image-photo/fashionable-young-beautiful-woman-slim-260nw-2077986460.jpg",
      "title": "Women's Winter Hoodie",
      "category": "Winter Collection",
      "price": "34.99",
      "description": "Cozy and trendy hoodie with a slim fit to keep you warm in style."
    },
    {
      "id": 9,
      "image": "https://img.freepik.com/free-photo/young-handsome-man-walking-down-street_1303-24594.jpg?semt=ais_hybrid&w=740",
      "title": "Men's Leather Jacket",
      "category": "Winter Collection",
      "price": "55.99",
      "description": "Premium leather jacket with a bold look for cold weather fashion."
    },
    {
      "id": 10,
      "image": "https://images.garmentory.com/images/3043383/large/Anine-Bing-Maverick-Leather-Jacket---Black-20190922052622.jpeg?1569129984",
      "title": "Women's Leather Jacket",
      "category": "Winter Collection",
      "price": "53.99",
      "description": "Chic and edgy leather jacket designed to elevate any outfit."
    }
  ,
  
    {
      "id": 11,
      "image": "https://d1wtanddiqif0k.cloudfront.net/spree/images/attachments/000/014/740/product/Tempelfjord_1.jpg?1730204768",
      "title": "Men's Knitted Sweater",
      "category": "Winter Collection",
      "price": "25.99",
      "description": "Warm knitted sweater made from soft wool, ideal for layering in cold weather."
    },
    {
      "id": 12,
      "image": "https://www.shutterstock.com/image-photo/fashionable-happy-smiling-woman-wearing-260nw-2423598487.jpg",
      "title": "Women's Knitted Sweater",
      "category": "Winter Collection",
      "price": "24.99",
      "description": "Stylish and cozy knitted sweater that pairs perfectly with jeans or skirts."
    },
    {
      "id": 13,
      "image": "https://i1.wp.com/mrkoachman.com/wp-content/uploads/2017/01/SHorts-For-Men.jpg",
      "title": "Men's Summer Shorts",
      "category": "Summer Collection",
      "price": "19.99",
      "description": "Breathable cotton shorts designed to keep you cool and relaxed in summer."
    },
    {
      "id": 14,
      "image": "https://media.istockphoto.com/id/1296732370/photo/beautiful-girl.jpg?s=612x612&w=0&k=20&c=g9dlv0spIRz-KfCbVeOeP94ixGsKTVjO6GbYU5PoVhI=",
      "title": "Women's Summer Shorts",
      "category": "Summer Collection",
      "price": "18.99",
      "description": "Lightweight and breathable shorts with a flattering high-waist fit."
    },
    {
      "id": 15,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mTm3DoeRf1WHjQ67n0aw1HwQb7XSpSiSjA&s",
      "title": "Men's Polo Shirt",
      "category": "T-Shirts",
      "price": "20.99",
      "description": "Classic cotton polo shirt with a sharp collar and comfortable fit."
    },
    {
      "id": 16,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReP0vzfCjR5YS23cUsd6vbS3Z1t6ApSQjFBouNC5oaFw1HFJ7VOwS8R40_1mYI-Mcy-Pc&usqp=CAU",
      "title": "Women's Polo Shirt",
      "category": "T-Shirts",
      "price": "19.99",
      "description": "Smart and sporty polo shirt with a fitted cut for casual elegance."
    },
    {
      "id": 17,
      "image": "https://images.wrangler.com/is/image/Wrangler/70ABW4M-HERO?$PDP24-XXLARGE$&fit=crop",
      "title": "Men's Cargo Pants",
      "category": "Pants",
      "price": "32.99",
      "description": "Utility-style cargo pants with multiple pockets and rugged stitching."
    },
    {
      "id": 18,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQ4n0pbgarhT34VYwzTKit2ubpXC1lbqA7Q&s",
      "title": "Women's Cargo Pants",
      "category": "Pants",
      "price": "31.99",
      "description": "Trendy cargo pants with a high-waisted design and practical pockets."
    },
    {
      "id": 19,
      "image": "https://images.bestsellerclothing.in/data/selected/13-jan-2025/286956701_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto",
      "title": "Men's Formal Blazer",
      "category": "Shirts",
      "price": "45.99",
      "description": "Tailored formal blazer with a sleek silhouette, perfect for office or events."
    },
    {
      "id": 20,
      "image": "https://i.pinimg.com/474x/9c/6a/86/9c6a86ec5eda4576b0d6f093421adb72.jpg",
      "title": "Women's Formal Blazer",
      "category": "Shirts",
      "price": "44.99",
      "description": "Elegant formal blazer with a structured cut to complete any professional look."
    }
  ,
    {
      "id": 21,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MOxtkRE8ugVqpbkOfYiM2_YCeNX-UPUV9A&s",
      "title": "Men's Tank Top",
      "category": "Summer Collection",
      "price": "12.99",
      "description": "Lightweight and breathable tank top, perfect for gym or casual wear in hot weather."
    },
    {
      "id": 22,
      "image": "https://files.cdn.printful.com/o/upload/bfl-image/f5/10333_l_collage%20vintage%20design%20.jpg",
      "title": "Men's Graphic Tee",
      "category": "T-Shirts",
      "price": "17.49",
      "description": "Trendy graphic T-shirt with a bold design and relaxed fit."
    },
    {
      "id": 23,
      "image": "https://i.pinimg.com/originals/3c/d0/79/3cd079b4d4f871ae797a4a5370869f47.jpg",
      "title": "Women's Printed T-Shirt",
      "category": "T-Shirts",
      "price": "16.99",
      "description": "Vibrant printed T-shirt made from soft fabric for all-day comfort."
    },
    {
      "id": 24,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaL9U9DbTGNk1E9g-IiNEnESa5peSA2iVieA&s",
      "title": "Men's Cotton Shirt",
      "category": "Shirts",
      "price": "23.99",
      "description": "Breathable cotton shirt with a clean look, suitable for both work and casual outings."
    },
    {
      "id": 25,
      "image": "https://img.freepik.com/free-photo/beautiful-woman-wearing-blue-shirt-apparel-studio-shoot_53876-102838.jpg?semt=ais_hybrid&w=740",
      "title": "Women's Office Shirt",
      "category": "Shirts",
      "price": "22.99",
      "description": "Elegant office shirt with a tailored fit, ideal for professional settings."
    },
    {
      "id": 26,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pJn5lBv6wI9S2FQiCMnLl5ozAhLp_1dp2Q&s",
      "title": "Men's Slim Jeans",
      "category": "Pants",
      "price": "30.99",
      "description": "Modern slim-fit jeans crafted from durable denim for everyday style."
    },
    {
      "id": 27,
      "image": "https://www.shutterstock.com/image-photo/full-body-photo-pretty-young-260nw-2376257691.jpg",
      "title": "Women's Flared Pants",
      "category": "Pants",
      "price": "28.99",
      "description": "Chic flared pants with a high-rise waist for a flattering silhouette."
    },
    {
      "id": 28,
      "image": "https://media.istockphoto.com/id/1357323248/photo/man-on-a-gray-background-is-warmly-dressed-in-a-black-down-jacket.jpg?s=612x612&w=0&k=20&c=rVGoyy8uK8jIFjHxSsvMjUp0E-nh6zCP8d8SXzpMxT0=",
      "title": "Men's Puffer Jacket",
      "category": "Winter Collection",
      "price": "59.99",
      "description": "Insulated puffer jacket designed to keep you warm in freezing temperatures."
    },
    {
      "id": 29,
      "image": "https://i.pinimg.com/564x/6d/d2/61/6dd26193e4980fbd3c8d452450c3affc.jpg",
      "title": "Women's Puffer Jacket",
      "category": "Winter Collection",
      "price": "57.99",
      "description": "Stylish puffer jacket with quilted texture and cozy insulation."
    },
    {
      "id": 30,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSLzZpflnIvCuugTbkwzwukzoy7b0EMvfFg&s",
      "title": "Men's Zip Hoodie",
      "category": "Winter Collection",
      "price": "33.99",
      "description": "Comfortable zip-up hoodie made with fleece lining for chilly days."
    },
    {
      "id": 31,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGnttuwO6XLNLRCb1RJOeWIvMyaCfS6yOSw&s",
      "title": "Women's Zip Hoodie",
      "category": "Winter Collection",
      "price": "32.99",
      "description": "Cozy zip hoodie with a flattering fit and warm fleece interior."
    },
    {
      "id": 32,
      "image": "https://i.pinimg.com/736x/a4/d6/cd/a4d6cddd844d44cbc71d1708d1b23d18.jpg",
      "title": "Men's Linen Shirt",
      "category": "Shirts",
      "price": "26.99",
      "description": "Breathable linen shirt with a relaxed fit, ideal for warm weather."
    },
    {
      "id": 33,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgQSyLn4qf_zUsz_tANGeHIVlHZiabi5gIQ&s",
      "title": "Women's Linen Shirt",
      "category": "Shirts",
      "price": "25.49",
      "description": "Light and airy linen shirt for a comfortable and breezy look."
    },
    {
      "id": 34,
      "image": "https://i.pinimg.com/736x/5e/9b/a9/5e9ba9e2666416b26b3ddd4a2c76af0a.jpg",
      "title": "Men's Jogger Pants",
      "category": "Pants",
      "price": "27.99",
      "description": "Stretchy jogger pants with tapered legs for active or casual wear."
    },
    {
      "id": 35,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuEWIltnQMspNQjABEs2AINqGQCYUAWRnWg&s",
      "title": "Women's Jogger Pants",
      "category": "Pants",
      "price": "26.49",
      "description": "Soft and stylish jogger pants that blend comfort with trendiness."
    },
    {
      "id": 36,
      "image": "https://m.media-amazon.com/images/I/41XaMGP1wqL._AC_UY1100_.jpg",
      "title": "Women's Short Blazer",
      "category": "Shirts",
      "price": "42.99",
      "description": "Tailored short blazer with a modern cropped fit for smart dressing."
    }
  ];

  useEffect(() => {
    const selectedItem = dummyData.find(item => item.id === parseInt(id));
    setData(selectedItem || null);
  }, [id]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const syncLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event("storage"));
  };

  const addToCart = () => {
    if (!data) return;

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = savedCart.find(item => item.id === data.id);

    if (existingItem) {
      Swal.fire({
        title: "Already in Cart!",
        text: "This item is already in your cart.",
        icon: "info",
        confirmButtonColor: "#234e94",
        confirmButtonText: "OK",
      });
      return;
    }

    const updatedCart = [...savedCart, { ...data, quantity: 1 }];
    syncLocalStorage(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));

    Swal.fire({
      title: "Success!",
      text: "Item added to cart successfully.",
      icon: "success",
      confirmButtonColor: "#234e94",
      confirmButtonText: "OK",
    });
  };

  const increaseQuantity = () => {
    if (!data) return;

    const updatedCart = cartItems.map(item =>
      item.id === data.id
        ? { ...item, quantity: Math.min(3, item.quantity + 1) }
        : item
    );
    syncLocalStorage(updatedCart);
  };

  const decreaseQuantity = () => {
    const updatedCart = cartItems.map(item =>
      item.id === data.id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    syncLocalStorage(updatedCart);
  };

  const payNow = async () => {
    if (!data) {
      console.error("No product selected!");
      return;
    }

    const stripe = await loadStripe("pk_test_51QarspP9DXcr8WfKlzEFIRiy58vELHNKXtMmd2Il0dyfRiG1ftHz7f6Kwjl1ecwLs8evwTntGprfHFTZkXOzfYzq00ujS5MHYl");

    try {
      const productToCheckout = {
        id: data.id,
        category: data.category,
        title: data.title,
        price: parseFloat(data.price) * (cartItems.find(item => item.id === data.id)?.quantity || 1),
        quantity: cartItems.find(item => item.id === data.id)?.quantity || 1,
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
            price={parseFloat(data.price) * (cartItems.find(data => data.id === data.id)?.quantity || 1)}
            quantity={cartItems.find(item => item.id === data.id)?.quantity || 0}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            addCard={addToCart}
            payNow={payNow}
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












