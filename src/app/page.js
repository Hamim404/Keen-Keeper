import Image from "next/image";
import Link from "next/link";

const statusMap = {
  overdue: { label: "Overdue", style: "bg-error" },
  "almost due": { label: "Almost Due", style: "bg-secondary" },
  "on-track": { label: "On-Track", style: "bg-primary" },
};

export default async function Home() {
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();

  const onTrack = friends.filter((f) => f.status === "on-track").length;

  const stats = [
    { value: friends.length, label: "Total Friends" },
    { value: onTrack, label: "On Track" },
    { value: friends.length - onTrack, label: "Need Attention" },
    { value: 12, label: "Interactions This Month" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      {/* Banner */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold tracking-tight text-neutral sm:text-4xl">
          Friends to keep close in your life
        </h1>
        <p className="mt-4 max-w-sm text-xs leading-relaxed text-base-content/60">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
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
          {friends.map((f) => {
            const status = statusMap[f.status];
            return (
              <Link key={f.id} href={`/friend/${f.id}`}>
                <article className="card cursor-pointer rounded-lg bg-base-100 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-md">
                  <div className="card-body items-center gap-0 px-4 py-6 text-center">
                    <div className="avatar">
                      <div className="w-[72px] rounded-full">
                        <Image
                          width={50}
                          height={50}
                          src={f.picture}
                          alt={f.name}
                        ></Image>
                      </div>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold leading-tight text-neutral">
                      {f.name}
                    </h3>
                    <p className="mt-2 text-xs text-base-content/60">
                      {f.days_since_contact}d ago
                    </p>

                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {f.tags.map((t) => (
                        <span
                          key={t}
                          className="badge h-6 border-0 bg-accent px-3 text-xs font-normal uppercase text-neutral"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span
                      className={`badge mt-3 h-6 border-0 px-3 text-xs font-medium text-white ${status.style}`}
                    >
                      {status.label}
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
