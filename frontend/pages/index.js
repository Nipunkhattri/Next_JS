import Image from "next/image";
import { Inter } from "next/font/google";
import ProductList from "./product/ProductList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <ProductList/>
    </>
  );
}
