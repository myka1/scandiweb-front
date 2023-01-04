import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <>
      <h1>Product</h1>
      <button>
        <Link to="/">Save</Link>
      </button>
      <button>
        <Link to="/">Cancel</Link>
      </button>
    </>
  );
};

export default AddProduct;
