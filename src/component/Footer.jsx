import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* About Us Section */}
          <div>
            <h5 className="text-lg font-bold mb-3">About Us</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Careers</a></li>
              <li><a href="#" className="hover:text-blue-300">Press & Blog</a></li>
              <li><a href="#" className="hover:text-blue-300">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h5 className="text-lg font-bold mb-3">Categories</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-300">Summer Collection</a></li>
              <li><a href="#" className="hover:text-blue-300">Winter Collection</a></li>
              <li><a href="#" className="hover:text-blue-300">New Arrivals</a></li>
              <li><a href="#" className="hover:text-blue-300">Best Sellers</a></li>
            </ul>
          </div>

          {/* Payment Methods & Contact Section */}
          <div>
            <h5 className="text-lg font-bold mb-3">Secure Payment Methods</h5>
            <div className="flex flex-col items-center space-y-2 mb-4">
              <img
                width="50%"
                alt="payment methods"
                src="https://static.priceoye.pk/images/payment_method.svg"
                className="mb-2"
              />
              <img
                width="40%"
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              />
            </div>
            <h5 className="text-lg font-bold mb-3">Contact Us</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+1234567890" className="hover:text-blue-300">Call Us: 92 3178871763</a></li>
              <li><a href="mailto:support@example.com" className="hover:text-blue-300">Email: sameersiddique301@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-sm text-gray-300 mb-4">
            Copyright © 2024 Ecommers.pk
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.priceoye.pk/images/social-youtube.svg" alt="YouTube" width={27} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.priceoye.pk/images/social-fb.svg" alt="Facebook" width={27} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.priceoye.pk/images/social-instagram.svg" alt="Instagram" width={27} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.priceoye.pk/images/tiktok.svg" alt="TikTok" width={27} />
            </a>
          </div>

          <div className="text-xs text-gray-300">
            Designed & Developed by Sameer Siddique
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
