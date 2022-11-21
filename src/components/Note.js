import React from "react";
import deleteSvg from "../icons/delete.svg";
import editSvg from "../icons/edit.svg";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Note = ({ note, notes, setNotes }) => {
  const { month, house, gas, date, electricity, total, color } = note;

  const finalEnglishToBanglaNumber = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  String.prototype.getDigitBanglaFromEnglish = function () {
    let retStr = this;
    for (const x in finalEnglishToBanglaNumber) {
      retStr = retStr.replace(
        new RegExp(x, "g"),
        finalEnglishToBanglaNumber[x]
      );
    }

    return retStr;
  };

  const handleDelete = (id) => {
    const deleteAlert = window.confirm(
      `আপনি কি ${month.getDigitBanglaFromEnglish()} এর নোট টি ডিলিট করতে চাচ্ছেন?`
    );

    if (deleteAlert) {
      console.log(id);
      const url = `https://personal-not-server.vercel.app/note/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);

          swal({
            title: "Delete successfully!",
            icon: "success",
            button: "Okay!",
          });

          const remaining = notes.filter((note) => note._id !== id);
          setNotes(remaining);
        });
    }
  };
  return (
    <div
      style={{ background: `${color}` }}
      className="rounded text-[17px] shadow-xl p-2 font-semibold text-left bangla"
    >
      <div className="text-right">
        <h2>
          <span className="bg-white rounded-full px-6">
            {month.getDigitBanglaFromEnglish()}
          </span>{" "}
        </h2>
      </div>
      <h2>
        বাড়ি ভারাঃ <span>{house.getDigitBanglaFromEnglish()} টাকা</span>
      </h2>
      <h2>
        বিদ্যুৎ বিলঃ <span>{electricity.getDigitBanglaFromEnglish()} টাকা</span>
      </h2>
      <h2>
        গ্যাস বিলঃ <span>{gas.getDigitBanglaFromEnglish()} টাকা</span>
      </h2>
      <h2>
        মোট পরিশোধঃ <span>{total.getDigitBanglaFromEnglish()} টাকা</span>
      </h2>
      <h2>
        পরিশোধের তারিখঃ <span>{date.getDigitBanglaFromEnglish()}</span>
      </h2>

      <div className="bg-white py-1 rounded-full flex justify-between">
        {/* DELETE BUTTON */}
        <button
          onClick={() => handleDelete(note._id)}
          className="flex text-[15px] font-light bg-red-200 p-1 rounded-full px-2 text-red-600 mx-1"
        >
          <img src={deleteSvg} className="w-4 h-5" alt="" />
        </button>
        {/* EDIT BUTTON*/}
        <Link to={`/update-note/${note._id}`}>
        <button className="flex justify-center text-[15px]  font-light bg-green-200 p-1 rounded-full px-2 text-green-600 mx-1">
          <img src={editSvg} className="w-4 h-4" alt="" />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Note;
