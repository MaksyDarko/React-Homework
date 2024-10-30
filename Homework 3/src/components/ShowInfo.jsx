import React, { useState } from "react";

const ShowInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bgColor, setBgColor] = useState("bg-gray-200");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const changeColor = () => {
    setBgColor((prevColor) =>
      prevColor === "bg-gray-200" ? "bg-cyan-200" : "bg-gray-200"
    );
  };

  return (
    <section
      className={`max-w-2xl mx-auto mb-5 p-4 ${bgColor} rounded-lg shadow-md text-center mt-5`}
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        Toggle Additional Info
      </h2>
      <button
        onClick={toggleVisibility}
        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-200"
      >
        {isVisible ? "Hide Info" : "Show Info"}
      </button>
      <button
        onClick={changeColor}
        className="ml-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-200"
      >
        Change Color
      </button>
      {isVisible && (
        <div className="mt-4 p-2 border rounded">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            dolorem officiis provident veritatis dolorum, quia eum nostrum
            dolores cum perspiciatis maxime nihil minus autem qui consequatur
            magni facere pariatur sed ipsum harum omnis rem eveniet impedit
            dignissimos? Maxime esse error quas, excepturi, quaerat
            reprehenderit temporibus, tenetur voluptate aspernatur sit placeat.
          </p>
        </div>
      )}
    </section>
  );
};

export default ShowInfo;
