import React, { useContext } from "react";
import { Mycontext } from "./useContext";
const Cards = ({ image, title }) => {
  const { name } = useContext(Mycontext);
  return (
    <>
      <div
        className="card "
        style={{
          width: "90%",
          height: "fit-content",
          justifyContent: "center",
          margin: "auto",
          display: "flex",
          justifyItems: "center",
          justifySelf: "center",

          justifyContent: "space-between",
          gap: "10px",
          justifyContent: "space-around",
        }}
      >
        <img
          src={image}
          style={{
            width: "50%",
            height: "120px",
            display: "flex",
            justifyContent: "space-between",
            justifyContent: "space-around",
            margin: "auto",
          }}
        />

        <div className="card-body  d-flex align-items-center flex-column ">
          <h5 className="card-title">Card</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary bg-danger">
            {" "}
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
