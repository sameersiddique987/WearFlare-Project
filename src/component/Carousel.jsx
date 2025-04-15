import React from "react";
import Carousel from "react-material-ui-carousel";

function ImageCarousel() {
  const images = [
    {
      src: "https://lamaretail.com/cdn/shop/files/new-arrivals-for-summer-at-lama-retail.jpg?v=1743144117&width=1920",
      alt: "First Image",
    },
    {
      src: "https://lamaretail.com/cdn/shop/files/new-ahirts-for-men-at-lama-retail_5ea66952-4678-4557-8e8f-46197a0e2180.jpg?v=1741076126&width=1920",
      alt: "Second Image",
    },
    {
      src: "https://lamaretail.com/cdn/shop/files/new-woman-summer-dresses.jpg?v=1741083175&width=1920",
      alt: "Third Image",
    },
    {
      src: "https://lamaretail.com/cdn/shop/files/sale-at-lama-retail_5a37a4bb-65a3-4c18-b7fd-bd61b7ce3ab6.jpg?v=1742542738&width=1920",
      alt: "Fourth Image",
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      animation="fade"
      duration={500}
      indicators={true}
      navButtonsAlwaysVisible={true}
    >
      {images.map((item, i) => (
        <ImageItem key={i} item={item} />
      ))}
    </Carousel>
  );
}

function ImageItem({ item }) {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ImageCarousel;
