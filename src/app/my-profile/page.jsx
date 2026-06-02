"use client";
import { useSession } from "@/lib/auth-client"; 
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MyProfile() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500"></div>

        <div className="px-8 pb-10">
          <div className="relative flex justify-center mt-[-64px] mb-6">
            <div className="avatar">
              <div className="w-32 h-32 rounded-full ring ring-white ring-offset-base-100 ring-offset-4 shadow-lg overflow-hidden bg-gray-200">
                <img 
                  src={session.user.image || "https://i.ibb.co/vB05Y7D/avatar-placeholder.png"} 
                  alt="Profile" 
                />
              </div>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold text-gray-800">
              Welcome, {session.user.name}!
            </h1>
            <p className="text-gray-500 font-medium">{session.user.email}</p>
          </div>

          <div className="divider my-8">Account Details</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">User Name</p>
              <p className="text-gray-700 font-semibold">{session.user.name}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">Account Status</p>
              <p className="text-green-600 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Active
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/my-profile/update" 
              className="btn btn-neutral px-10 rounded-xl shadow-md hover:scale-105 transition-all"
            >
              Update Profile
            </Link>
            <Link 
              href="/" 
              className="btn btn-outline px-10 rounded-xl"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}