import React from "react";

function BgGradient() {
  return (
    <div
      className="w-[45rem] h-[25rem] absolute right-0 top-[-15rem] blur-[78px]"
      style={{
        background: `
      radial-gradient(circle at 20% 30%, #c2e6fc 0%, transparent 60%),
      radial-gradient(circle at 70% 40%, #a0d4f7 0%, transparent 60%),
      radial-gradient(circle at 50% 80%, #e0f7ff 0%, transparent 60%),
      radial-gradient(circle at 80% 70%, #b8e7fb 0%, transparent 60%)
    `,
        backgroundColor: "#c2e6fc",
        opacity: 0.5,
      }}
    />
  );
}

export default BgGradient;
