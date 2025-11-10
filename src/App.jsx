import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import ProductShowcase from "./components/ProductShowcase";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <ProductShowcase />
      </main>
      <footer className="border-t border-slate-200 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Amozone. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-700">Privacy</a>
            <a href="#" className="hover:text-emerald-700">Terms</a>
            <a href="#support" className="hover:text-emerald-700">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
