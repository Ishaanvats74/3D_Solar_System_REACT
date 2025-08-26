import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-between bg-white/5 backdrop-blur-lg py-4 fixed w-full px-4">
      <div className="flex justify-between  items-center w-1/3">
        <Link className="text-3xl  hover:cursor-pointer" to="/planets">
          Solar system
        </Link>
        <a
          className="text-xl p-2 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200 ease-in-out"
          href="/"
        >
          Plantes
        </a>
        <a
          className="text-xl p-2 rounded-lg hover:bg-white/10 cursor-pointer"
          href="/"
        >
          Ask more about Plantes.
        </a>
      </div>

      <div>Sign In</div>
    </div>
  );
};

export default Navbar;
