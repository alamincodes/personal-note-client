import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateNote = () => {
  const [note, setNote] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://personal-not-server.vercel.app/note/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNote(data));
  }, []);

  const navigate = useNavigate();
  const handleUpdateData = (e) => {
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
    const url = `https://personal-not-server.vercel.app/note-update/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notes),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        e.target.reset();
        navigate("/");
      });
  };

  const colorsCode = ["#CFF5E7", "#FFE15D", "#BA94D1"];

  return (
    <div className="px-3">
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center bangla">
          <h1>
            <span className="text-rose-600 bg-rose-200 px-10 py-2 font-bold text-[20px] rounded-full">
              হিসাব আপডেট করুন
            </span>
          </h1>
          <form onSubmit={handleUpdateData} className="flex flex-col px-3 mt-2">
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
              className="border border-gray-700 rounded-full  p-3 my-1 outline-none"
              type="date"
              name="date"
              placeholder="পরিশোধের তারিখ"
            />
            <input
              required
              className="border border-gray-700 p-3 my-1 outline-none bg-black text-white rounded-full"
              type="submit"
              value="সাবমিট"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateNote;
