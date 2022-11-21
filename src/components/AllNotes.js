import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Note from "./Note";

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://personal-not-server.vercel.app/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data)
        setIsLoading(false)
      });
  }, []);
  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2 px-2 mt-3">
      {/* <h2>All notes</h2> */}
      
      {notes.map((note) => (
        <Note 
        key={note._id} 
        note={note}
        notes ={notes}
        setNotes={setNotes} 
         
        />
      ))}
    </div>
  );
};

export default AllNotes;
