"use client";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    });
  };
  const navLinks = (
    <>
      <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
      <li><Link href="/products" className="hover:text-blue-500 transition-colors">Products</Link></li>
      <li><Link href="/my-profile" className="hover:text-blue-500 transition-colors">My Profile</Link></li>
    </>
  );

  return (
    <div className="navbar bg-white sticky top-0 z-50 px-4 md:px-10 py-4 shadow-md">
      <div className="navbar-start">
        {/* মোবাইল মেনু (Hamburger Icon) */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-slate-700 font-semibold border border-gray-100">
            {navLinks}
          </ul>
        </div>
        
        <Link href="/" className="text-xl md:text-3xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
            Summer Essentials
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-slate-700 font-semibold">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <div className="flex items-center gap-3">
          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : session ? (
            <div className="dropdown dropdown-end flex items-center gap-3">
              <span className="hidden md:block font-bold text-slate-700">{session.user.name}</span>
              <div tabIndex={0} role="button" className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center overflow-hidden bg-white shadow-sm cursor-pointer">
                <img 
                  src={session.user.image || "https://i.ibb.co/vB05Y7D/avatar-placeholder.png"} 
                  alt="User" 
                />
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-44 z-[1] p-2 shadow bg-white rounded-box w-52 border border-gray-100">
                <li><Link href="/my-profile">My Profile</Link></li>
                <li><button onClick={handleLogout} className="text-red-500 font-bold">Logout</button></li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link 
                href="/auth/login" 
                className="btn btn-sm md:btn-md bg-gradient-to-r from-blue-500 to-green-500 border-none text-white font-bold"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}