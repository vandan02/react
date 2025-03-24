import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../src/redux/api"; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const App = () => {
  const dispatch = useDispatch();

  // Access products, loading, and error states from Redux
  const { products, isLoading, isError } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchApi());  
  }, [dispatch]);

  // Show loading spinner or message if still fetching data
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  // Show error message if there is an error fetching the data
  if (isError) {
    return <div className="text-center text-danger">Error: {isError}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
               
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>Price: ${product.price}</strong>
                </p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
