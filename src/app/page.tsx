import Image from "next/image";
import ProductCard from "@/app/components/ProductCard";
export default function Home() {
  return (
    <div className="flex flex-wrap gap-6 p-6">
    <ProductCard title="Кроссовки Nike" price={25000} image="/nike.jpg" />
    <ProductCard title="Adidas Superstars" price={30000} image="/adidas.jpg" />
    <ProductCard title="Puma Classic" price={22000} image="/puma.jpg" />
  </div>
  );
}
