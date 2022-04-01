import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    Viihde: "yellow",
    Terveys: "blue",
    Raha: "green",
    Pelit: "purple",
    Ruoka: "red",
    Koti: "brown",
  };
  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
