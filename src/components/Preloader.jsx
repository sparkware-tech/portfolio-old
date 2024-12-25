import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[2000]">
      {/* Spinner or any loader graphic */}
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
