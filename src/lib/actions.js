"use server"; 
import { database } from "@/lib/auth"; 
export async function updateUserProfile({ name, image }) {
  try {
    console.log("Updating on server:", name, image);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
}