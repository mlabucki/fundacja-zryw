import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="col-span-12 flex justify-between items-center p-4 border-b border-gray-300">
      <nav className="flex space-x-6">
        <a href="#" className="text-black font-semibold">
          O nas
        </a>
        <a href="#" className="text-black font-semibold">
          Mentorzy
        </a>
        <a href="#" className="text-black font-semibold">
          Dołącz
        </a>
        <a href="#" className="text-red-500 font-semibold">
          Zaaplikuj
        </a>
      </nav>

      <div className="flex justify-center flex-1">
        <img src="/logo.png" alt="Logo" className="h-12" />
      </div>

      <div className="flex space-x-4 text-gray-600">
        <a href="#" className="text-xl">
          <FaInstagram />
        </a>
        <a href="#" className="text-xl">
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Header;
