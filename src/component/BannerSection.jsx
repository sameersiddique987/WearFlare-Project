import React from 'react';

const BannerSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-screen">
      <div 
  className="relative col-span-3 bg-gray-200 bg-cover bg-center"
  style={{ 
    backgroundImage: "url(https://img.freepik.com/premium-photo/cool-stylish-man-model-street-fashion-outfit-with-leather-jacket-hoodie-walking-city_338491-17525.jpg?semt=ais_hybrid&w=740)",
    backgroundPosition: "center top", 
    backgroundSize: "cover", 
  }}  
>
  <a href="/collections/t-shirt" className="flex items-center justify-center h-full">
    <div className="font-semibold text-3xl text-white text-center">
      CARDIGANS & JACKETS
    </div>
  </a>
</div>

      {/* Right-side Grid for 4 Small Banners */}
      <div className="grid grid-rows-2 grid-cols-2 gap-4 col-span-2">
        {/* First small banner - Pants */}
        <div 
          className="relative bg-gray-200 bg-cover bg-center h-full"
          style={{ backgroundImage: "url(//zed.com.pk/cdn/shop/files/0L0A8388_1920x_crop_center.jpg?v=1618302398)" }}
        >
          <a href="/collections/pants" className="flex items-center justify-center h-full">
            <div className="font-semibold text-xl text-white text-center">
              PANTS
            </div>
          </a>
        </div>

        {/* Second small banner - Shirts */}
        <div 
          className="relative bg-gray-200 bg-cover bg-center h-full"
          style={{ backgroundImage: "url(//zed.com.pk/cdn/shop/files/Shirts_Catergory_1920x_crop_center.JPG?v=1615925500)" }}
        >
          <a href="/collections/shirts" className="flex items-center justify-center h-full">
            <div className="font-semibold text-xl text-white text-center">
            CARDIGANS & JACKETS
            </div>
          </a>
        </div>

        {/* Third small banner - Cardigans & Jackets */}
        <a 
          href="/collections/hoodies-jackets" 
          className="relative bg-gray-200 bg-cover bg-center h-full" 
          style={{ backgroundImage: "url(//zed.com.pk/cdn/shop/files/v_neck_2_1920x_crop_center.jpg?v=1613727715)" }}  
        >
          <div className="flex items-center justify-center w-full h-full text-center">
            <div className="font-semibold text-xl text-white" style={{ fontSize: '30px' }}>
             T-SHIRT
            </div>
          </div>
        </a>

        {/* Fourth small banner */}
        <div 
          className="relative bg-gray-200 bg-cover bg-center h-full"
          style={{ backgroundImage: "url(//zed.com.pk/cdn/shop/files/Shorts_CATEGORY_1920x_crop_center.jpg?v=1613727716)" }}
        >
          <a href="/collections/other" className="flex items-center justify-center h-full">
            <div className="font-semibold text-xl text-white text-center">
              SHORTS
            </div>
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default BannerSection  


