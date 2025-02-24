export default function Footer() {
    return (
      <footer className="bg-white shadow-md mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">
                Modern e-commerce platform built with Next.js and TypeScript.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/products" className="text-gray-600 hover:text-gray-900">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/cart" className="text-gray-600 hover:text-gray-900">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="/account" className="text-gray-600 hover:text-gray-900">
                    My Account
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="text-gray-600 hover:text-gray-900">
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="/returns" className="text-gray-600 hover:text-gray-900">
                    Returns & Exchanges
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>© 2025 E-Commerce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }