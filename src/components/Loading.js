import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-10 h-10 border-4 border-dashed border-gray-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
