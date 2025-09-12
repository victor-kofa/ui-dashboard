// components/AutoSpinningButton.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AutoSpinningButton = () => {
  const [spinning, setSpinning] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const router = useRouter();

  useEffect(() => {
    // Start the countdown when component mounts
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Redirect after 3 seconds
    const redirectTimer = setTimeout(() => {
      setSpinning(false);
      router.push("//dashboard");
    }, 3000);

    // Clean up timers
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        {/* Spinning outer circle */}
        <div
          className={`
          w-32 h-32 rounded-full 
          bg-gradient-to-br from-blue-500 to-purple-600 
          shadow-lg
          flex items-center justify-center
          ${spinning ? "animate-spin" : ""}
        `}
          style={{
            animationDuration: "1s",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          }}
        >
          {/* Inner circle */}
          <div className="w-24 h-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            {/* Countdown text */}
            <span className="text-white text-2xl font-bold">{countdown}</span>
          </div>
        </div>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>

      {/* Status message */}
      <div className="mt-6 text-center">
        <p className="text-xl text-gray-700 font-medium">
          {spinning ? "Preparing your dashboard..." : "Redirecting..."}
        </p>
        <p className="text-gray-500 mt-2">
          You&apos;ll be automatically redirected in {countdown} second
          {countdown !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Optional: Skip button for impatient users */}
      {/* <button
        onClick={() => router.push("/dashboard")}
        className="mt-6 px-4 py-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
      >
        Skip waiting
      </button> */}
    </div>
  );
};

export default AutoSpinningButton;
