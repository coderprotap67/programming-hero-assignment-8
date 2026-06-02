import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export default function Home() {
  const popularProducts = products.slice(0, 3); 

  return (
    <div className="px-10">
      <Hero />
      
      <section className="my-16">
        <h2 className="text-4xl font-bold mb-10">Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      
      <div className="bg-blue-50 p-10 rounded-2xl mb-20">
         <h2 className="text-2xl font-bold mb-4">Summer Care Tips ☀️</h2>
         <div className="grid md:grid-cols-2 gap-10">
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Drink at least 3 liters of water daily.</li>
                <li>Wear breathable cotton clothes.</li>
                <li>Apply sunscreen every 4 hours.</li>
            </ul>
            <div className="grid grid-cols-2 gap-4 font-bold text-center">
                <div className="bg-white p-4 rounded-xl shadow-sm text-blue-600">SunShade</div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-blue-600">Breeze</div>
            </div>
         </div>
      </div>
    </div>
  );
}