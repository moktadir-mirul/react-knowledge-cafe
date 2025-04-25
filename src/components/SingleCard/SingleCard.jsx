import React from "react";

const SingleCard = ({card, handleAdd}) => {
    const {cover, title} = card;
  return (
    <div>
      <div className="card bg-base-100 h-[450px] shadow-sm">
        <figure>
          <img
            className="w-full h-[250px] object-cover"
            src={cover}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => handleAdd(card)}>Add to Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
