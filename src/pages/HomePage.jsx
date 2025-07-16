import { Navbar } from "../components/navbar";
import { Link } from "react-router";

const HomePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="text-center py-10 bg-emerald-200">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Subhify!</h1>
                <p className="text-gray-600 mb-6">Discover the best deals on electronics, fashion, and more.</p>
                <Link to="/products">
                    <button className="bg-green-600 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-700 transition">
                        Shop Now
                    </button>
                </Link>
            </section>

            {/* Featured Products */}
            <section className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Example Product Cards */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <img src="https://via.placeholder.com/150" alt="Product 1" className="w-full mb-4 rounded" />
                        <h3 className="font-semibold text-lg">Product Name 1</h3>
                        <p className="text-gray-600">$49.99</p>
                        <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded">Add to Cart</button>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                        <img src="https://via.placeholder.com/150" alt="Product 2" className="w-full mb-4 rounded" />
                        <h3 className="font-semibold text-lg">Product Name 2</h3>
                        <p className="text-gray-600">$79.99</p>
                        <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded">Add to Cart</button>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                        <img src="https://via.placeholder.com/150" alt="Product 3" className="w-full mb-4 rounded" />
                        <h3 className="font-semibold text-lg">Product Name 3</h3>
                        <p className="text-gray-600">$99.99</p>
                        <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded">Add to Cart</button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="p-8 bg-gray-100">
                <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/category/electronics">
                        <button className="bg-emerald-500 text-white py-2 px-4 rounded-lg">Electronics</button>
                    </Link>
                    <Link to="/category/fashion">
                        <button className="bg-emerald-500 text-white py-2 px-4 rounded-lg">Fashion</button>
                    </Link>
                    <Link to="/category/home">
                        <button className="bg-emerald-500 text-white py-2 px-4 rounded-lg">Home & Living</button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-4 bg-emerald-200 text-gray-700">
                © Subhadeep. All rights reserved.
            </footer>
        </div>
    );
};

export { HomePage };
