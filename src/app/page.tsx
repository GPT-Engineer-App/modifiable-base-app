"use client";

import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Bare-Bones App</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a minimalistic application structure that you can modify and build upon.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}