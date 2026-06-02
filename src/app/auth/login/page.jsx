"use client";
import { signIn } from "@/lib/auth-client"; 
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"; 
import { useState, Suspense } from "react"; 

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const [loading, setLoading] = useState(false); 
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signIn.social({
        provider: "google",
        callbackURL: callbackUrl,
      });
    } catch (error) {
      console.error("Google login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await signIn.email({
        email,
        password,
        callbackURL: callbackUrl,
      }, {
        onSuccess: () => {
           router.push(callbackUrl);
           router.refresh();
        },
        onError: (ctx) => {
           alert(ctx.error.message || "Login failed!");
        }
      });
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex flex-col items-center py-10 font-poppins">
      <div className="bg-white w-full max-w-[750px] p-16 rounded-md shadow-sm border border-gray-50">
        <h2 className="text-4xl font-bold text-center text-[#403F3F] mb-12">
          Login your account
        </h2>
        
        <hr className="mb-12 border-gray-200" />

        <form onSubmit={handleEmailLogin} className="max-w-[550px] mx-auto space-y-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold text-[#403F3F]">Email address</span>
            </label>
            <input 
              name="email" 
              type="email" 
              placeholder="Enter your email address" 
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full focus:outline-none" 
              required 
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold text-[#403F3F]">Password</span>
            </label>
            <input 
              name="password" 
              type="password" 
              placeholder="Enter your password" 
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full focus:outline-none" 
              required 
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-[#706F6F]">Forgot password?</a>
            </label>
          </div>

          <div className="pt-4">
            <button 
              disabled={loading}
              type="submit" 
              className={`btn w-full h-14 text-white text-lg bg-[#403F3F] border-none rounded-md hover:bg-black ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center space-y-6">
          <p className="text-[#706F6F] font-semibold">
            Don’t Have An Account ?{" "}
            <Link href="/auth/register" className="text-[#F75B5F] hover:underline">
              Register
            </Link>
          </p>

          <div className="divider text-gray-400">OR</div>

          <button
            disabled={loading}
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full max-w-[550px] mx-auto h-14 flex items-center justify-center gap-3 border-gray-300 hover:bg-gray-100 text-[#403F3F]"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="google"
              className="w-6"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}