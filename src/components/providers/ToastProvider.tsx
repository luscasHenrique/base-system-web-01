"use client";

import { ToastContainer } from "react-toastify";

export function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" // ou "dark"
    />
  );
}
