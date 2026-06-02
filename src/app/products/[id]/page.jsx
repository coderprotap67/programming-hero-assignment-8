"use client";
import { use } from "react"; 
import products from "@/data/products.json";
import { useRouter } from "next/navigation";

export default function ProductDetails({ params }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="text-center p-20 text-2xl">products not found!</div>;
  }

  return (
    <div className="p-10 text-center">
      <img src={product.image} alt={product.name} className="mx-auto w-64" />
      <h1 className="text-4xl font-bold mt-4">{product.name}</h1>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <p className="text-2xl font-bold text-blue-600 mt-4">${product.price}</p>
      <button onClick={() => router.back()} className="btn mt-6">Back</button>
    </div>
  );
}