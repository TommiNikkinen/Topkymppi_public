import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 flex flex-row">
      <div className="icon-bar flex flex-row justify-start items-center ">
        <a
          href="https://www.instagram.com/topkymppicom/?hl=fi/"
          className="instagram h-12 w-10 items-center mx-1"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/topkymppi/"
          className="twitter h-12 w-10 mr-1"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/Topkymppi/"
          className="facebook h-12 w-10 mr-1"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://www.tiktok.com/@topkymppi/"
          className="tiktok h-12  w-10 mr-1"
        >
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      <div className="flex flex-row mx-auto">
        <p className="text-sm mr-5">
          <Link href="/privacy_policy">
            <a className="hover:underline">Privacy policy</a>
          </Link>
        </p>
        <p className="text-sm mr-5">Copyright &copy; Topkymppi 2022</p>
      </div>
    </footer>
  );
}
