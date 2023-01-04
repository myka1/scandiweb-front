import { Link } from "react-router-dom";

const HomeHeader = ({ handleDelete }: { handleDelete: () => void }) => {
  return (
    <header>
      <div>
        <h1>Product List</h1>
        <button>
          <Link to="/addproduct">ADD</Link>
        </button>
        <button className="delete-checkbox" onClick={handleDelete}>
          MASS DELETE
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
