import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">MyApp</a>
        </Link>
        <nav className="space-x-6">
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/about">
            <a className="hover:underline">About</a>
          </Link>
          <Link href="/posts">
            <a className="hover:underline">Posts</a>
          </Link>
          <Link href="/users">
            <a className="hover:underline">Users</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

