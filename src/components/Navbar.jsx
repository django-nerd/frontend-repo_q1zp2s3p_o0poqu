import { ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500" />
            <span className="font-bold text-xl tracking-tight">Amozone</span>
          </div>
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search products, brands and more..."
                className="w-full rounded-lg border border-slate-200 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 bg-white/60"
              />
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#deals" className="text-sm text-slate-700 hover:text-emerald-600">Deals</a>
            <a href="#new" className="text-sm text-slate-700 hover:text-emerald-600">New</a>
            <a href="#support" className="text-sm text-slate-700 hover:text-emerald-600">Support</a>
            <button className="relative inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-white text-sm font-medium shadow hover:bg-emerald-700 transition">
              <ShoppingCart className="h-4 w-4" />
              Cart
              <span className="absolute -right-2 -top-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-rose-500 text-[11px] font-semibold">2</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
