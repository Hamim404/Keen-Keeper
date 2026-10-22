import ContactRequest from "@/components/ContactRequest";
import Image from "next/image";
import React from "react";

const statusMap = {
  overdue: { label: "Overdue", style: "bg-error" },
  "almost due": { label: "Almost Due", style: "bg-secondary" },
  "on-track": { label: "On-Track", style: "bg-primary" },
};

const FriendDetailPage = async ({ params }) => {
  const { friendId } = await params;
  const friendRes = await fetch("http://localhost:3000/friends.json");
  const friends = await friendRes.json();
  const friend = friends.find((f) => f.id === parseInt(friendId));
  const status = statusMap[friend.status];

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 md:grid-cols-[210px_1fr]">
        {/* ───────── Left column ───────── */}
        <aside className="flex flex-col gap-2">
          {/* Profile card */}
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body items-center gap-0 px-4 py-6 text-center">
              <div className="avatar">
                <div className="w-[72px] rounded-full">
                  <Image
                    src={friend.picture}
                    alt={friend.name}
                    width={200}
                    height={100}
                  />
                </div>
              </div>

              <h2 className="mt-3 text-sm font-semibold text-neutral">
                {friend.name}
              </h2>

              <span
                className={`badge mt-3 h-6 border-0 px-3 text-xs font-medium text-white ${status.style}`}
              >
                {status.label}
              </span>
              <div className="flex gap-3">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge badge-xs mt-2 h-4 border-0 bg-accent px-2 text-[8px] font-medium uppercase text-neutral"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-[11px] italic text-base-content/70">
                &quot;{friend.bio}&quot;
              </p>
              <p className="mt-1 text-[9px] text-base-content/60">
                Preferred: {friend.email}
              </p>
            </div>
          </div>

          {/* Snooze */}
          <button className="btn btn-sm h-9 w-full justify-center gap-2 border border-base-300 bg-base-100 text-[11px] font-normal text-neutral shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.3 21a1.9 1.9 0 0 0 3.4 0"
              />
            </svg>
            Snooze 2 Weeks
          </button>

          {/* Archive */}
          <button className="btn btn-sm h-9 w-full justify-center gap-2 border border-base-300 bg-base-100 text-[11px] font-normal text-neutral shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="5" rx="1" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M10 13h4"
              />
            </svg>
            Archive
          </button>

          {/* Delete */}
          <button className="btn btn-sm h-9 w-full justify-center gap-2 border border-base-300 bg-base-100 text-[11px] font-normal text-error shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L5 6M10 11v6M14 11v6"
              />
            </svg>
            Delete
          </button>
        </aside>

        {/* ───────── Right column ───────── */}
        <div className="flex flex-col gap-4">
          {/* Stat cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body items-center gap-1 px-4 py-6 text-center">
                <p className="text-2xl font-bold text-primary">
                  {friend.days_since_contact}
                </p>
                <p className="text-xs text-base-content/60">
                  Days Since Contact
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body items-center gap-1 px-4 py-6 text-center">
                <p className="text-2xl font-bold text-primary">{friend.goal}</p>
                <p className="text-xs text-base-content/60">Goal (Days)</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body items-center gap-1 px-4 py-6 text-center">
                <p className="text-2xl font-bold text-primary">
                  {friend.next_due_date}
                </p>
                <p className="text-xs text-base-content/60">Next Due</p>
              </div>
            </div>
          </div>

          {/* Relationship goal */}
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body gap-3 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-primary">
                  Relationship Goal
                </h3>
                <button className="btn btn-xs h-6 min-h-0 border border-base-300 bg-base-200 px-3 text-[10px] font-normal text-neutral">
                  Edit
                </button>
              </div>
              <p className="text-xs text-base-content/70">
                Connect every{" "}
                <span className="font-bold text-neutral">
                  {friend.goal} days
                </span>
              </p>
            </div>
          </div>

          {/* Quick check-in */}
          <ContactRequest friend={friend}></ContactRequest>
          
        </div>
      </div>
    </section>
  );
};

export default FriendDetailPage;
