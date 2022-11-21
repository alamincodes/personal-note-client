import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const AddNote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleAddData = (e) => {
    e.preventDefault();
    const house = e.target.house.value;
    const gas = e.target.gas.value;
    const electricity = e.target.electricity.value;
    const total = e.target.total.value;
    const date = e.target.date.value;
    const month = e.target.month.value;
    const color = e.target.color.value;
    const notes = { house, gas, electricity, total, date, month, color };
    console.log(notes);

    setIsLoading(true);
    fetch("https://personal-not-server.vercel.app/note", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notes),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setIsLoading(false);
        e.target.reset();
        navigate("/");
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  const colorsCode = ["#CFF5E7", "#FFE15D", "#BA94D1"];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center bangla">
        <h1>
          <span className="text-rose-600 bg-rose-200 px-10 py-2 font-bold text-[20px] rounded-full">
            নতুন হিসাব অ্যাড করুন
          </span>
        </h1>
        <form onSubmit={handleAddData} className="flex flex-col px-3 mt-2">
          <input
            required
            className="border border-gray-700 md:w-96 w-64 rounded-full  p-3 my-1 outline-none"
            type="month"
            name="month"
            placeholder="date"
          />
          <input
            required
            className="border border-gray-700 rounded-full  p-3 my-1 outline-none"
            type="number"
            name="house"
            placeholder="বাড়ি ভারা"
          />
          <input
            required
            className="border border-gray-700 rounded-full  p-3 my-1 outline-none"
            type="number"
            name="gas"
            placeholder="গ্যাস বিল"
          />
          <input
            required
            className="border border-gray-700 rounded-full  p-3 my-1 outline-none"
            type="number"
            name="electricity"
            placeholder="বিদ্যুৎ বিল"
          />
          <input
            required
            className="border border-gray-700 rounded-full  p-3 my-1 outline-none"
            type="number"
            name="total"
            placeholder="মোট"
          />

          <select
            name="color"
            className="border border-gray-700 rounded-full  p-3 my-1 outline-none"
          >
            {colorsCode.map((color) => (
              <option
                style={{ background: `${color}` }}
                key={color}
                value={color}
              >
                {color}
              </option>
            ))}
          </select>
          <input
            required
            className="border border-gray-700 rounded-full  p-3 my-1 outline-none"
            type="date"
            name="date"
            placeholder="পরিশোধের তারিখ"
          />
          <input
            className="border border-gray-700 p-3 my-1 outline-none bg-black text-white rounded-full"
            type="submit"
            value="সাবমিট"
            id="submit-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNote;
