import React from "react";

function DragInput() {
  return (
    <div className="border border-[#0b08ad0f] rounded-md p-6 w-2xl">
      <div
        className="w-full rounded-md flex justify-center items-center p-4"
        style={{ border: "1px dashed #2b44e740" }}
      >
        <div className="flex justify-center items-center flex-col">
          <div className="sphere-anim" />

          <p className="font-medium text-sm">
            Drop anything to capture feedback
          </p>
        </div>
      </div>
    </div>
  );
}

export default DragInput;
