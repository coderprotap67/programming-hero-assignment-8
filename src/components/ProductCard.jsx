import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow p-4">
      <figure className="bg-gray-100 h-48 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={product.image} alt={product.name} className="object-contain h-full w-full p-4" />
      </figure>
      <div className="mt-4">
        <h2 className="text-xl font-bold h-14">{product.name}</h2>
        <p className="text-gray-500 text-sm mb-2">{product.description.slice(0, 60)}...</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-gray-800">${product.price}</span>
          <span className="text-orange-500 font-semibold">⭐ {product.rating}</span>
        </div>
        <div className="card-actions mt-4">
          <Link href={`/products/${product.id}`} className="btn btn-neutral w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}