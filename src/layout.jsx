import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="max-w-7xl mx-auto bg-gray-50">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="footer p-10 bg-neutral text-neutral-content mt-20">
          <div>
            <span className="footer-title">Contact Info</span> 
            <p>Email: support@summer-sale.com</p>
          </div> 
          <div>
            <span className="footer-title">Legal</span> 
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Terms of use</a>
          </div>
        </footer>
      </body>
    </html>
  );
}