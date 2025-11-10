const categories = [
  { title: "Electronics", color: "from-indigo-500 to-sky-500" },
  { title: "Home & Kitchen", color: "from-emerald-500 to-lime-500" },
  { title: "Beauty", color: "from-rose-500 to-pink-500" },
  { title: "Fashion", color: "from-fuchsia-500 to-purple-500" },
  { title: "Sports", color: "from-orange-500 to-amber-500" },
  { title: "Books", color: "from-cyan-500 to-teal-500" },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Shop by category</h2>
          <a href="#" className="text-sm text-emerald-700 hover:underline">View all</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <a key={c.title} href="#" className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.color} p-1`}> 
              <div className="h-36 rounded-2xl bg-white/90 p-5 flex items-end shadow">
                <div>
                  <h3 className="font-semibold text-lg">{c.title}</h3>
                  <p className="text-sm text-slate-600 group-hover:text-slate-700">Explore now →</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
