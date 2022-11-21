import { Link } from "react-router-dom";
import AllNotes from "./AllNotes";

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <Link
          to="/add-note"
          className="px-5 py-2 rounded-full bg-purple-700 text-white"
        >
          <button className="uppercase">Add note</button>
        </Link>
        <AllNotes />
      </div>
    </div>
  );
};

export default Home;
