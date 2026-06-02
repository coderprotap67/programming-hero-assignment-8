"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; 
import { useSession } from "@/lib/auth-client"; 
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const router = useRouter();
  const pathname = usePathname(); 
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push(`/auth/login?callbackUrl=${pathname}`);
    }
  }, [session, isPending, router, pathname]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  
  if (!session) return null;

  return (
    <div className="container mx-auto p-6 md:p-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-[#403F3F] mb-4">Our Products</h1>
        <p className="text-gray-500">Explore our full collection of summer essentials</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-16 text-center">
        <button 
          onClick={() => router.push('/')} 
          className="btn btn-outline px-8 border-gray-300 hover:bg-gray-100"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}