import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Booking</li>
          <li className="fListItem">Allotment</li>
          <li className="fListItem">Auditorium</li>
          <li className="fListItem">Senate Room</li>
          <li className="fListItem">Meeting Room</li>
          <li className="fListItem">Conference</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Complaints </li>
          <li className="fListItem">Register Complaints </li>
          <li className="fListItem">Handle Complaints</li>
          <li className="fListItem">Check Status</li>
          
        </ul>
        <ul className="fList">
          <li className="fListItem">Campus Maintenence</li>
          <li className="fListItem">Maintenance Data</li>
          <li className="fListItem">Maintenance Procedures </li>
          <li className="fListItem">Reports </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Institute Furniture </li>
          <li className="fListItem">Spec Sheet</li>
          <li className="fListItem">Inventory </li>
        </ul>
      </div>
      <div className="fText">2022</div>
    </div>
  );
};

export default Footer;
