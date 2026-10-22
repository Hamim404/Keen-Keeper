'use client'

import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ContactRequest = ({friend}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <ToastContainer/>
            <div className="card-body gap-4 p-5">
              <h3 className="text-sm font-medium text-primary">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {/* Call */}
                <button
                  className="flex h-[52px] flex-col items-center justify-center gap-1 rounded-md border border-base-300 bg-base-200 text-xs text-neutral cursor-pointer"
                  onClick={() => toast.success(`Call with ${friend.name}!`)}
                >
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
                <button
                  className="flex h-[52px] flex-col items-center justify-center gap-1 rounded-md border border-base-300 bg-base-200 text-xs text-neutral cursor-pointer"
                  onClick={() => toast.success(`Text with ${friend.name}!`)}
                >
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
                <button
                  className="flex h-[52px] flex-col items-center justify-center gap-1 rounded-md border border-base-300 bg-base-200 text-xs text-neutral cursor-pointer"
                  onClick={() => toast.success(`Video with ${friend.name}!`)}
                >
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
    );
};

export default ContactRequest;