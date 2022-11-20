import React from 'react';
import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp"></span>
        <span className="siSubtitle">
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp"> </span>
        <span className="siCancelOpSubtitle">
          
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span></span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siTaxOp"></span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Check availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
