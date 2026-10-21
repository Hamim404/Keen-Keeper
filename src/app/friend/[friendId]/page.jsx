import Image from "next/image";
import React from "react";

const FriendDetailPage = async ({ params }) => {
  const { friendId } = await params;
  const friendRes = await fetch("http://localhost:3000/friends.json");
  const friends = await friendRes.json();
  const friend = friends.find((f) => f.id === parseInt(friendId));

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

              <span className="badge badge-xs mt-2 h-5 border-0 bg-error px-2 text-[10px] font-medium text-white">
                {friend.status}
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
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body gap-4 p-5">
              <h3 className="text-sm font-medium text-primary">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {/* Call */}
                <button className="flex h-[52px] flex-col items-center justify-center gap-1 rounded-md border border-base-300 bg-base-200 text-xs text-neutral">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 2a8 8 0 0 1 8 8M14 6a4 4 0 0 1 4 4"
                    />
                  </svg>
                  Call
                </button>

                {/* Text */}
                <button className="flex h-[52px] flex-col items-center justify-center gap-1 rounded-md border border-base-300 bg-base-200 text-xs text-neutral">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9h.01M12 9h.01M16 9h.01"
                    />
                  </svg>
                  Text
                </button>

                {/* Video */}
                <button className="flex h-[52px] flex-col items-center justify-center gap-1 rounded-md border border-base-300 bg-base-200 text-xs text-neutral">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m22 8-6 4 6 4V8Z"
                    />
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                  </svg>
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetailPage;
