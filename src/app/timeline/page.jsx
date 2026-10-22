'use client';

import AppContext from "@/context/AppContext";
import { useContext } from "react";

const icons = {
  Text: "💬",
  Video: "📹",
  Call: "📞",
};


export default function TimelinePage() {
    const {contactHistory} = useContext(AppContext);
    const entries = contactHistory;    
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-neutral">Timeline</h1>

      {/* Filter */}
      <select
        defaultValue="Filter timeline"
        className="select select-sm mt-5 w-48 border-base-300 bg-base-100 text-xs text-base-content/60 shadow-sm"
      >
        <option disabled>Filter timeline</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>
      </select>

      {/* Entries */}
      <ul className="mt-5 flex flex-col gap-4">
        {entries.map((e, i) => (
          <li
            key={i}
            className="flex items-center gap-3 rounded-md border border-base-300 bg-base-100 px-3 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
          >
            <span className="text-3xl leading-none">{icons[e.label]}</span>
            <div>
              <p className="text-sm leading-tight">
                <span className="font-medium text-primary">{e.label}</span>{" "}
                <span className="text-xs text-base-content/60">with {e.name}</span>
              </p>
              <p className="mt-1 text-xs text-base-content/70">{new Date().toLocaleDateString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}