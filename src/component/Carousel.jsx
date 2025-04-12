// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper } from "@mui/material";
// function ImageCarousel() {
// const images = [
//     {
//         src: "https://img.freepik.com/free-vector/aesthetic-elegant-special-offer-newsletter_1421494-492.jpg?t=st=1744371014~exp=1744374614~hmac=39e05d59e2a62f36e11562fc7c6aac9988eceea984031c5dfd5f91ba318611ee&w=826",  
//         alt: "First Image"
//     },
//     {
//         src: "https://lamaretail.com/cdn/shop/files/new-ahirts-for-men-at-lama-retail_5ea66952-4678-4557-8e8f-46197a0e2180.jpg?v=1741076126&width=1920",
//         alt: "Second Image"
//     },
//     {
//         src: "https://lamaretail.com/cdn/shop/files/new-woman-summer-dresses.jpg?v=1741083175&width=1920",
//         alt: "Third Image"
//     },
   
// ];
//     return (
//         <Carousel
//             autoPlay={true}
//             animation="fade"
//             duration={500}
//             indicators={true}
//             navButtonsAlwaysVisible={true}
//         >
//             {images.map((item, i) => (
//                 <ImageItem key={i} item={item} />
//             ))}
//         </Carousel>
//     );
// }

// function ImageItem(props) {
//     return (
//         <Paper>
//             <img
//                 src={props.item.src}
//                 alt={props.item.alt}
//                 style={{ width: "100%", height: "400px", objectFit: "cover" }}
//             />
//         </Paper>
//     );
// }

// export default ImageCarousel;




import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function ImageCarousel() {
  const images = [
    {
      src: "https://lamaretail.com/cdn/shop/files/new-arrivals-for-summer-at-lama-retail.jpg?v=1743144117&width=1920",  
      alt: "First Image"
    },
    {
      src: "https://lamaretail.com/cdn/shop/files/new-ahirts-for-men-at-lama-retail_5ea66952-4678-4557-8e8f-46197a0e2180.jpg?v=1741076126&width=1920",
      alt: "Second Image"
    },
    {
      src: "https://lamaretail.com/cdn/shop/files/new-woman-summer-dresses.jpg?v=1741083175&width=1920",
      alt: "Third Image"
    },
    {
        src: "https://lamaretail.com/cdn/shop/files/sale-at-lama-retail_5a37a4bb-65a3-4c18-b7fd-bd61b7ce3ab6.jpg?v=1742542738&width=1920",
        alt: "Forth Image"
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

function ImageItem(props) {
  return (
    <Paper>
      <img
        src={props.item.src}
        alt={props.item.alt}
        style={{ width: "100%", height: "530px", objectFit: "contain" }} // Use contain to avoid zoom/cropping
      />
    </Paper>
  );
}

export default ImageCarousel;
