"use client";
import { updateUserProfile } from "@/lib/actions"; 
import { useState } from "react";

export default function UpdateProfile() {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const name = e.target.name.value;
    const image = e.target.image.value;

    try {
      const result = await updateUserProfile({ name, image });
      
      if (result.success) {
        alert("Information Updated Successfully!");
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">Update Profile</h2>
          
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input 
                name="name" 
                type="text" 
                placeholder="Enter your name" 
                className="input input-bordered focus:input-primary" 
                required 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input 
                name="image" 
                type="text" 
                placeholder="https://example.com/photo.jpg" 
                className="input input-bordered focus:input-primary" 
                required 
              />
            </div>
            <div className="form-control mt-6">
              <button 
                disabled={loading} 
                className={`btn btn-primary w-full text-white ${loading ? 'loading' : ''}`}
              >
                {loading ? "Updating..." : "Update Now"}
              </button>
            </div>
          </form>
          
          <div className="divider">OR</div>
          
          <div className="text-center">
             <button 
               onClick={() => window.history.back()} 
               className="btn btn-ghost btn-sm"
             >
               Go Back
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}