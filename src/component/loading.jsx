import React from "react";
import { MutatingDots } from "react-loader-spinner";
export default function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <MutatingDots
        height="100"
        width="100"
        color="#9F2A48"
        secondaryColor="#9F2A48"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
