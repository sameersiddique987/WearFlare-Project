// import React, { useState } from 'react';

// const ProductTabs = () => {
//   const [activeTab, setActiveTab] = useState('description');

//   return (
//     <div className="w-full mt-12">
//       {/* Tabs */}
//       <div className="flex flex-wrap gap-4 border-b border-gray-300">
//         <button
//           className={`pb-3 text-lg font-semibold ${
//             activeTab === 'description'
//               ? 'border-b-4 border-black text-black'
//               : 'text-gray-500 hover:text-black'
//           }`}
//           onClick={() => setActiveTab('description')}
//         >
//           Description
//         </button>
//         <button
//           className={`pb-3 text-lg font-semibold ${
//             activeTab === 'material'
//               ? 'border-b-4 border-black text-black'
//               : 'text-gray-500 hover:text-black'
//           }`}
//           onClick={() => setActiveTab('material')}
//         >
//           Material
//         </button>
//         <button
//           className={`pb-3 text-lg font-semibold ${
//             activeTab === 'reviews'
//               ? 'border-b-4 border-black text-black'
//               : 'text-gray-500 hover:text-black'
//           }`}
//           onClick={() => setActiveTab('reviews')}
//         >
//           Reviews
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className="mt-6 text-gray-700 text-base leading-relaxed">
//         {activeTab === 'description' && (
//           <>
//             <p>Banda ho ya bandi, agar <strong>"chill bhi rehna hai, but drip bhi maintain karni hai"</strong> wala scene karna hai, toh yeh <strong>Lumslam Black Drop Shoulder T-Shirt</strong> aapke liye bani hai! 😎</p>
//             <h3 className="font-bold text-xl my-4">Kya Khaas Hai Is Shirt Mein?</h3>
//             <ul className="space-y-2">
//               <li>🖤 <strong>Fabric ka level hi alag hai</strong> – 95% Cotton + 5% Lycra, soft bhi, stretch bhi, comfort next level.</li>
//               <li>🖤 <strong>Drop Shoulder = Automatic Swag</strong> – Banday streetwear drip aur bandiyan casual chic vibe le sakti hain.</li>
//               <li>🖤 <strong>Kahin bhi carry kar lo</strong> – College, gym, ya Netflix aur chill, sab jagah 100/100.</li>
//               <li>🖤 <strong>Har mausam ka dost</strong> – Garmi ya sardi, breathable fabric chill zone maintain karega.</li>
//             </ul>
//             <p className="mt-4">Matlab ek dafa le lo, phir dosray din khud pocho ge, <strong>"Bhai doosri colors mein bhi hai?"</strong> 👀</p>
//             <p className="mt-2">🛒 <strong>Order now warna baad mein ‘Out of Stock’ ka rona ro rahay ho gay!</strong> 😭🔥</p>
//           </>
//         )}
        
//         {activeTab === 'material' && (
//           <p>95% Cotton, 5% Lycra — Soft, Breathable aur Stretchable. Har weather aur har scene ke liye perfect material! 💯</p>
//         )}
        
       
//       </div>
//     </div>
//   );
// };

// export default ProductTabs;







import React, { useState } from 'react';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="w-full mt-12 px-4">
      {/* Tabs Buttons */}
      <div className="flex flex-wrap gap-6 border-b border-gray-300">
        {/* Description Tab */}
        <button
          className={`pb-3 text-lg font-medium tracking-wide ${
            activeTab === 'description'
              ? 'border-b-4 border-black text-black'
              : 'text-gray-500 hover:text-black transition-all duration-300'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>

        {/* Material Tab */}
        <button
          className={`pb-3 text-lg font-medium tracking-wide ${
            activeTab === 'material'
              ? 'border-b-4 border-black text-black'
              : 'text-gray-500 hover:text-black transition-all duration-300'
          }`}
          onClick={() => setActiveTab('material')}
        >
          Material
        </button>

     
      </div>

      {/* Tabs Content */}
      <div className="my-8 text-gray-700 text-[17px] leading-[1.8]">
        {/* Description Content */}
        {activeTab === 'description' && (
          <>
            <p className="mb-4">
              Agar aapko apne style ko elevate karna ho, aur har jaga pe WearFlare ka swag dikhana ho, toh yeh  perfect hai! 😎 
              Yeh ek aisi Product hai, jo har kisi ka attention apni taraf kheench leti hai. 
            </p>

            <h3 className="font-bold text-2xl mb-4">Kya Khaas Hai?</h3>

            <ul className="space-y-3 list-disc list-inside">
              <li>
                🖤 <strong>Fabric ka level hi alag hai</strong> – 95% Cotton + 5% Lycra, soft bhi, stretch bhi, comfort next level.
              </li>
              <li>
                🖤 <strong>Drop Shoulder = Automatic Swag</strong> – WearFlare ki style aur comfort ka ek perfect combo.
              </li>
              <li>
                🖤 <strong>Kahin bhi carry kar lo</strong> – College ho, gym ho, ya bas ghar pe chill, WearFlare ke saath har jagah ka look perfect hoga.
              </li>
              <li>
                🖤 <strong>Har mausam ka dost</strong> – Garmi ya sardi, breathable fabric har scene pe chill zone maintain karega.
              </li>
            </ul>

            <p className="mt-6">
              Matlab ek dafa le lo, phir doosray din khud pocho ge, <strong>"Bhai doosri colors mein bhi hai?"</strong> 👀
            </p>
            <p className="mt-3">
              🛒 <strong>Order now warna baad mein ‘Out of Stock’ ka rona ro rahay ho gay!</strong> 😭🔥
            </p>
          </>
        )}

        {/* Material Content */}
        {activeTab === 'material' && (
          <p>
            95% Cotton, 5% Lycra — Soft, Breathable aur Stretchable. Har weather aur har scene ke liye perfect material!  WearFlare ne yeh material aise design kiya hai ke comfort, style, aur quality sab ek saath milein.
          </p>
        )}

     
      </div>
    </div>
  );
};

export default ProductTabs;
