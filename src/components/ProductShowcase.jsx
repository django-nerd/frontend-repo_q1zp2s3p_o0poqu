const products = [
  {
    id: 1,
    name: "Noise-Cancelling Headphones",
    price: 129.99,
    badge: "Deal",
    img: "https://images.unsplash.com/photo-1518443895914-6c941a6a29c1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Smart Watch Series 7",
    price: 199.99,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1519400197429-404ae1a1e184?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Espresso Machine",
    price: 249.99,
    badge: "Kitchen",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Gaming Keyboard RGB",
    price: 89.99,
    badge: "New",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function ProductShowcase() {
  return (
    <section id="trending" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Trending today</h2>
          <a href="#" className="text-sm text-emerald-700 hover:underline">See more</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <div className="mb-2 inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-[11px] font-semibold">{p.badge}</div>
                <h3 className="font-medium line-clamp-1">{p.name}</h3>
                <div className="mt-1 text-emerald-700 font-semibold">${p.price.toFixed(2)}</div>
                <button className="mt-3 w-full rounded-lg border border-slate-300 py-2 text-sm font-medium hover:border-emerald-500 hover:text-emerald-700 transition">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
