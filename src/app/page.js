const stats = [
  { value: 10, label: "Total Friends" },
  { value: 3, label: "On Track" },
  { value: 6, label: "Need Attention" },
  { value: 12, label: "Interactions This Month" },
];

const statusStyles = {
  "Almost Due": "bg-secondary text-white",
  Overdue: "bg-error text-white",
  "On-Track": "bg-primary text-white",
};

const friends = [
  { name: "David Kim", days: "62d ago", tags: ["Work"], status: "Almost Due", img: 47 },
  { name: "Emma Wilson", days: "42d ago", tags: ["Family"], status: "Overdue", img: 32 },
  { name: "Lisa Nakamura", days: "62d ago", tags: ["Work"], status: "Overdue", img: 12 },
  { name: "James Wright", days: "62d ago", tags: ["Hobby", "Travel"], status: "Overdue", img: 15 },
  { name: "David Kim", days: "62d ago", tags: ["Work"], status: "Overdue", img: 45 },
  { name: "Emma Wilson", days: "52d ago", tags: ["Family"], status: "On-Track", img: 25 },
  { name: "Lisa Nakamura", days: "52d ago", tags: ["Work"], status: "On-Track", img: 53 },
  { name: "James Wright", days: "32d ago", tags: ["Hobby", "Travel"], status: "Almost Due", img: 60 },
  { name: "David Kim", days: "62d ago", tags: ["Work"], status: "Almost Due", img: 49 },
  { name: "Emma Wilson", days: "52d ago", tags: ["Family"], status: "Overdue", img: 44 },
  { name: "Lisa Nakamura", days: "52d ago", tags: ["Work"], status: "Overdue", img: 5 },
  { name: "James Wright", days: "62d ago", tags: ["Hobby", "Travel"], status: "On-Track", img: 68 },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      {/* Banner */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold tracking-tight text-neutral sm:text-4xl">
          Friends to keep close in your life
        </h1>
        <p className="mt-4 max-w-sm text-xs leading-relaxed text-base-content/60">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
        <button className="btn btn-primary btn-sm mt-6 rounded-md font-medium">
          <span className="text-base leading-none">+</span> Add a Friend
        </button>
      </section>

      {/* Summary */}
      <section className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card bg-base-100 shadow-sm">
            <div className="card-body items-center gap-1 px-4 py-6 text-center">
              <p className="text-2xl font-bold text-primary">{s.value}</p>
              <p className="text-xs text-base-content/60">{s.label}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="divider my-10"></div>

      {/* Friends */}
      <section>
        <h2 className="text-base font-semibold text-neutral">Your Friends</h2>

        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {friends.map((f, i) => (
            <article key={i} className="card bg-base-100 shadow-sm">
              <div className="card-body items-center gap-0 px-4 py-6 text-center">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src={`https://i.pravatar.cc/150?img=${f.img}`} alt={f.name} />
                  </div>
                </div>

                <h3 className="mt-3 text-sm font-semibold text-neutral">{f.name}</h3>
                <p className="mt-1 text-[10px] text-base-content/50">{f.days}</p>

                <div className="mt-2 flex flex-wrap justify-center gap-1">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="badge badge-sm border-0 bg-accent/60 text-[9px] font-semibold uppercase text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className={`badge badge-sm mt-2 border-0 text-[10px] font-semibold ${statusStyles[f.status]}`}>
                  {f.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}