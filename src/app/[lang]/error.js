"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error); // Log the error for debugging
  }, [error]);

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-2">
        <h1>Oops! Something went wrong.</h1>
        <p>{error.message}</p>
        <button
          onClick={() => reset()} // Retry the page load
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
