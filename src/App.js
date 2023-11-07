import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <h1>Products</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="data">
        {myData.map((post) => {
          const { id, title, image, description, category, rating } = post;
          return (
            <div key={id} className="card">
              <img src={image} />
              <h4>{title}</h4>
              <p>category: {category}</p>
              {/* <p>{description}</p> */}
              <div className="rating">
                <p>rating: {rating.rate}</p>
                <p> count: {rating.count}</p>
              </div>
              <button>Add to cart </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
