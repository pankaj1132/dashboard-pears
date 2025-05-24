"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const hasRedirected = useRef(false);

  useEffect(() => {
    if (status === "unauthenticated" && !hasRedirected.current) {
      hasRedirected.current = true;
      toast.error("You must be logged in to view this page.");
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="p-4">Loading...</div>;
  }

  if (!session) {
    return null; // Prevents rendering protected content
  }

  return (
  







<div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center font-inter">
  <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-10 max-w-md w-full text-center">
    <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
       Hello, {session?.user?.name || "User"}!
    </h1>
    <p className="text-lg text-gray-700">Welcome to your dashboard.</p>
  </div>

  
</div>
  );
}
