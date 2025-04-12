"use client";

type ResultToastProps = {
  message: string | null;
  show: boolean;
};

export default function ResultToast({ message, show }: ResultToastProps) {
  if (!show || !message) return null;
  
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-black text-white p-4 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
}