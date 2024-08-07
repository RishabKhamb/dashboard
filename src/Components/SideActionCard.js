import React from 'react';
import PropTypes from 'prop-types';
import './SideActionCard.css';

const SideActionCard = ({ items }) => {
  return (
    <div className='side-card card-margin'>
      {items.map((item, index) => (
        <div key={index} className={`side-card-item ${index > 0 ? 'mt-1' : ''}`}>
          <div className="icon-container" style={{ background: item.iconBg }}>
            <i className={`ph-fill ${item.icon}`} style={{ color: item.iconColor, fontSize: "1.5em" }}></i>
          </div>
          <span>{item.label}</span>
          <button className='btn'>
            <i className="ph-fill ph-arrow-circle-right" style={{ color: item.buttonColor, fontSize: "1.5em" }}></i>
          </button>
        </div>
      ))}
    </div>
  );
};

SideActionCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconBg: PropTypes.string.isRequired,
      iconColor: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      buttonColor: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default SideActionCard;
