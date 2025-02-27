import { FaDribbble, FaPinterest, FaCodepen } from 'react-icons/fa';

export default function AviProfile() {
  return (
    <div className="flex items-center justify-center min-h-screen font-sans">
      <div className="flex items-center w-3/4 max-w-4xl p-10 bg-gray-800 rounded-2xl shadow-lg">
        <img
          src="/image.jpg"
          alt="Profile Image"
          className="w-36 h-72 object-cover rounded-xl shadow-lg -ml-16 mr-8 transition-all duration-300"
        />
        <div>
          <h2 className="text-xl font-normal mb-2">Jill Scott</h2>
          <h3 className="text-sm opacity-75 mb-2">Frontend Engineer</h3>
          <p className="text-xs opacity-50 mb-6">
            Transforming ideas into realities, creating interfaces that inspire and engage users' dreams.
          </p>
          <div className="flex items-center gap-2">
            <button className="relative flex items-center justify-center w-12 h-12 border-4 border-gray-800 bg-gray-700 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-300 transition-all">
              <FaDribbble className="text-white text-2xl" />
            </button>
            <button className="relative flex items-center justify-center w-12 h-12 border-4 border-gray-800 bg-gray-700 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-300 transition-all">
              <FaPinterest className="text-white text-2xl" />
            </button>
            <button className="relative flex items-center justify-center w-12 h-12 border-4 border-gray-800 bg-gray-700 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-300 transition-all">
              <FaCodepen className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
