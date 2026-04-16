import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faRightFromBracket, faHouse, faBoxOpen, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-[#0a0a0a]/70 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-all duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo on Left */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] group-hover:scale-105 transition-all duration-300">
              <FontAwesomeIcon icon={faStore} className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 group-hover:brightness-110 transition-all">
              S-Shopify
            </span>
          </div>

          {/* Links in Between */}
          <nav className="hidden md:flex space-x-1 sm:space-x-8">
            <Link href="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group relative overflow-hidden">
              <FontAwesomeIcon icon={faHouse} className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Dashboard</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/products" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group relative overflow-hidden">
              <FontAwesomeIcon icon={faBoxOpen} className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Products</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/customers" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group relative overflow-hidden">
              <FontAwesomeIcon icon={faUsers} className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Customers</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Logout Button on Right */}
          <div className="flex items-center">
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-red-50 dark:bg-gray-800/80 dark:hover:bg-red-950/30 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:border-red-200 dark:hover:border-red-900 border border-transparent px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-md active:scale-95 group">
              <span>Logout</span>
              <FontAwesomeIcon icon={faRightFromBracket} className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
