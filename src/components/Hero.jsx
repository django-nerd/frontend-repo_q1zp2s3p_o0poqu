import { Star, Truck, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold">Welcome to Amozone</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Everything you love, delivered fast
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Discover trending products, curated deals, and everyday essentials — all in one place.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#trending" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-white font-medium shadow hover:bg-emerald-700 transition">Shop Trending</a>
              <a href="#categories" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-slate-700 font-medium hover:border-slate-400 transition">Browse Categories</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-700"><Truck className="h-4 w-4 text-emerald-600" /> Free 2-day delivery</div>
              <div className="flex items-center gap-2 text-slate-700"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Buyer protection</div>
              <div className="flex items-center gap-2 text-slate-700"><Star className="h-4 w-4 text-emerald-600" /> 4.8+ rated sellers</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[5/4] rounded-2xl bg-gradient-to-br from-emerald-200/50 to-cyan-200/50 p-1">
              <div className="h-full w-full rounded-2xl bg-white shadow-inner p-6 grid grid-cols-3 gap-3">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded-xl bg-slate-100/80 h-24 animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
