import Link from "next/link";
import Image from "next/image";
import Search from "./Search";

export default function Header() {
  return (
    <header className="bg-gray-800 text-gray-100 shadow w-full">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium  md:justify-start md:flex-row mb-4 md:mb-0">
            <img
              src="/images/t10_logo.png"
              width={100}
              height={100}
              className="rounded-l-lg"
            />
            <br />
          </a>
        </Link>
        <nav className="flex flexwrap flex-col md:w-4/5 md:flex-row items-center justify-end text-base md:ml-auto">
          <Link href="/blog">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              Artikkelit
            </a>
          </Link>
          <Link href="/about">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              Tiedot
            </a>
          </Link>
          <Search />
        </nav>
      </div>
    </header>
  );
}
