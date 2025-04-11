import React from 'react'

function MiniNav() {
  return (
<div className="w-full bg-black text-white py-2">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-center">
      
      <div className="bg-black">
        <p>FREE SHIPPING on orders above Rs 2000</p>
      </div>
      
      <div className="bg-black">
        <p>Pay Online For A Hassle-Free Delivery</p>
      </div>
      
    </div>
  </div>
</div>

  )
}

export default MiniNav