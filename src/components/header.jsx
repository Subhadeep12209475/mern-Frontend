import { useNavigate, Link } from "react-router-dom";

const Header = ({ text, handleSearchText }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <header className="bg-amber-950 text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo */}
      <div className="text-xl font-bold text-amber-300">
        <Link to="/">🛒 Shopping App</Link>
      </div>

      {/* Search */}
      <div className="flex gap-2">
        <input
          className="px-2 py-1 border border-amber-700 bg-transparent text-cyan-300 rounded"
          placeholder="Search..."
          onChange={(e) => handleSearchText(e.target.value)}
          value={text}
        />
        <button
          className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">
        <Link to="/" className="hover:text-amber-300">Home</Link>
        <Link to="/cart" className="hover:text-amber-300">Cart</Link>
        <Link to="/wishlist" className="hover:text-amber-300">Wishlist</Link>
      </div>
    </header>
  );
};

export { Header };
