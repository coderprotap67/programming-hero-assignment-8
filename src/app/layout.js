import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from 'next/font/google';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Summer Sale | Home",
  description: "Best summer products for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="min-h-[calc(100vh-200px)] max-w-7xl mx-auto px-4">
          {children}
        </main>

        <footer className="footer p-10 bg-[#403F3F] text-white mt-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="footer-title text-white opacity-100 text-lg">Contact Info</span> 
              <div className="mt-4 space-y-2 text-gray-300">
                <p>Email: chakmaprotap855@gmail.com</p>
                <p>Location: Chattogram, Bangladesh</p>
                <p>Support: 24/7 Summer Sale Service</p>
              </div>
            </div> 
            <div>
              <span className="footer-title text-white opacity-100 text-lg">Social Links</span> 
              <div className="flex gap-5 text-2xl mt-4">
                <a 
                  href="https://www.facebook.com/protap.chakma.54" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#F75B5F] transition-all"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://github.com/coderprotap67" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#F75B5F] transition-all"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/protap-chakma-53185630a/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#F75B5F] transition-all"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://www.instagram.com/protap_chakma/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#F75B5F] transition-all"
                >
                  <FaInstagram />
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                © {new Date().getFullYear()} SunCart. All rights reserved.
              </p>
            </div> 
            <div>
              <span className="footer-title text-white opacity-100 text-lg">Legal</span> 
              <div className="flex flex-col space-y-2 mt-4 text-gray-300">
                <a href="/privacy-policy" className="link link-hover">Privacy policy</a>
                <a href="/terms" className="link link-hover">Terms of use</a>
                <a href="/cookie-policy" className="link link-hover">Cookie policy</a>
              </div>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}