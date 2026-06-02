import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
export default function Home() {
  const popularProducts = products.slice(0, 3);

  return (
    <div className="container mx-auto px-4 md:px-10 pb-20">
      <Hero />
      <section className="my-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Popular Products</h2>
          <button className="btn btn-outline btn-sm">Show All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="bg-yellow-50 rounded-3xl p-8 md:p-12 mb-16 shadow-sm border border-yellow-100">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Summer Care Tips ☀️</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-white p-1 rounded-full shadow-sm">✅</span>
                <p className="text-gray-700"><strong>Stay Hydrated:</strong> Drink at least 8-10 glasses of water daily to keep your skin glowing.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white p-1 rounded-full shadow-sm">✅</span>
                <p className="text-gray-700"><strong>Sun Protection:</strong> Always apply SPF 50+ sunscreen 20 minutes before stepping out.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white p-1 rounded-full shadow-sm">✅</span>
                <p className="text-gray-700"><strong>Light Clothing:</strong> Wear breathable cotton fabrics to stay cool in the heat.</p>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
             <div className="bg-white p-6 rounded-2xl shadow-inner border-2 border-dashed border-yellow-200 text-center">
                <p className="italic text-gray-400">&quot;Your health is your greatest wealth this summer!&quot;</p>
             </div>
          </div>
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-400 mb-8 uppercase tracking-widest">Top Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white border p-6 rounded-xl hover:shadow-md transition-all font-black text-xl text-gray-300">SUNSHADE</div>
          <div className="bg-white border p-6 rounded-xl hover:shadow-md transition-all font-black text-xl text-gray-300">BREEZE</div>
          <div className="bg-white border p-6 rounded-xl hover:shadow-md transition-all font-black text-xl text-gray-300">HYDRO</div>
          <div className="bg-white border p-6 rounded-xl hover:shadow-md transition-all font-black text-xl text-gray-300">COOLAIR</div>
        </div>
      </section>
    </div>
  );
}