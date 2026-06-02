"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
 
export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const image = form.get("image");
    const password = form.get("password");
    console.log("name:",name , "email:",email,image , "password",password);
    console.log("form data : ",e.currentTarget);

    try {
      await authClient.signUp.email(
        {
          name,
          email,
          password,
          image: image || "",
          callbackURL: "/",
        },
        {
          onSuccess: () => {
            console.log("Registration successful");
            router.push("/");
          },
          onError: (ctx) => {
            console.error("Signup Error:", ctx.error);
            alert(ctx.error.message || "Registration failed");
          },
        }
      );
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex flex-col items-center py-10 font-poppins">
      <div className="bg-white w-full max-w-[750px] p-16 rounded-md shadow-sm border border-gray-50">
        <h2 className="text-4xl font-bold text-center text-[#403F3F] mb-12">
          Register your account
        </h2>

        <hr className="mb-12 border-gray-200" />

        <form
          onSubmit={handleRegister}
          className="max-w-[550px] mx-auto space-y-6"
        >
          {/* Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold text-[#403F3F]">
                Your Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold text-[#403F3F]">
                Email address
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full focus:outline-none"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold text-[#403F3F]">
                Photo URL
              </span>
            </label>
            <input
              name="image"
              type="text"
              placeholder="Enter your photo URL (optional)"
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold text-[#403F3F]">
                Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full focus:outline-none"
              required
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-3 py-2">
            <input
              type="checkbox"
              required
              className="checkbox checkbox-sm rounded-none border-[#403F3F]"
            />
            <span className="text-base text-[#706F6F] font-medium">
              Accept{" "}
              <span className="font-bold text-[#403F3F]">
                Terms & Conditions
              </span>
            </span>
          </div>

          {/* Register Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`btn w-full h-14 text-white text-lg bg-[#403F3F] border-none rounded-md hover:bg-black transition-all ${
                loading ? "loading" : ""
              }`}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>

        {/* Login + Google */}
        <div className="mt-8 text-center space-y-6">
          <p className="text-[#706F6F] font-semibold text-lg">
            Already Have An Account?{" "}
            <Link
              href="/auth/login"
              className="text-[#F75B5F] hover:underline"
            >
              Login
            </Link>
          </p>

          <div className="divider text-gray-400">OR</div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full max-w-[550px] mx-auto h-14 flex items-center justify-center gap-3 border-gray-300 hover:bg-gray-50 text-[#403F3F]"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="google"
              className="w-6"
            />
            Register with Google
          </button>
        </div>
      </div>
    </div>
  );
}