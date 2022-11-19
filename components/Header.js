import { FaMoon } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-5 shadow-md mb-10">
      <h1 className="font-xl">Where in the word</h1>

      <div className="flex gap-2 content-center justify-center cursor-pointer">
        <FaMoon className="my-auto" />
        <p> Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
