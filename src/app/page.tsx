import { auth } from "@/auth";

"use client";
export default async function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-gradient-x px-4">
      <div className="flex flex-col items-center gap-8 w-full max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center animate-fade-in-up">
          Welcome to PearsThought
        </h1>
        <div className="flex gap-4 w-full justify-center animate-fade-in-up delay-200">
          <a href="/signup" className="w-1/2 md:w-40">
            <button className="w-full py-3 rounded-lg bg-white text-black font-semibold text-lg shadow-lg hover:bg-gray-200 transition-colors duration-200">
              Sign Up
            </button>
          </a>
          <a href="/login" className="w-1/2 md:w-40">
            <button className="w-full py-3 rounded-lg bg-black text-white font-semibold text-lg shadow-lg border border-white hover:bg-gray-900 transition-colors duration-200">
              Log In
            </button>
          </a>
        </div>
      </div>
      <style jsx global>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </main>
  );
}