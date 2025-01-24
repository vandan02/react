import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For modal JavaScript functionality
import AddProduct from './addproduct';

const Showproduct = ({ name, title, price, description, category, image, _id, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="main">
      <div>
        <img src={image} alt={name} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Category: {category}</p>
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          Delete
        </button>
        <button className="btn btn-primary" onClick={toggleModal}>
          Update
        </button>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Product</h5>
                <button type="button" className="btn-close" onClick={toggleModal}></button>
              </div>
              <div className="modal-body">
                <AddProduct changedata={ { name, title, price, description, category, image, _id, onDelete }} />
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showproduct;
