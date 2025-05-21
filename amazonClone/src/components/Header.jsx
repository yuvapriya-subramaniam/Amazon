import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  return (
    <header className="bg-gray-900 text-white flex items-center">
      <div className="px-3 flex flex-1 items-center">
        <img
          src="../public/images/amazonLogo_white.png"
          className="flex-1 w-20 max-w-30 sm:w-10 md:w-28 lg:w-30 pt-2 pb-1 pl-1"
        />
        <span className="flex-1 text-sm font-[490] ">.co.uk</span>
      </div>
      <div className="flex flex-1 items-center relative">
        <input
          type="text"
          id="search"
          placeholder="Search Amazon.co.uk"
          className="bg-white pl-1 text-gray-900 w-full max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-9 rounded-sm"
        />
        <div className="absolute right-0 top-0">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            className="bg-yellow-500 w-6 p-2 rounded-tr-sm rounded-br-sm cursor-pointer"
          />
        </div>
      </div>
      <div className="pl-2 pb-1 flex-1 leading-3">
        <span className="text-xs">
          Hello, {user ? user.name : <Link to="/login">sign in</Link>}
        </span><br/>
        <span className="font-semibold">Account & Lists</span>
      </div>
    </header>
  );
};

export default Header;
