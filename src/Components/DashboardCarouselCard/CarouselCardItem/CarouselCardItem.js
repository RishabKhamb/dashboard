import React from "react";
import PropTypes from 'prop-types';
import './CarouselCardItem.css';

const CarouselCardItem = ({ iconBgColor, iconColor, icon, secondaryIcon, title, value, percentage, valueColor, percentageColor, increase }) => {
    return <div className='col-lg-3 col-md-6 col-sm-6'>
    <div className="card mb-3" style={{ background: "#1D202A" }}>
      <div className="card-body">
        <div
          className="icon-container"
          style={{
            width: "3em",
            height: "3em",
            background: iconBgColor,
            padding: "1em",
            borderRadius: "0.5em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <i className={`ph-fill ${icon}`} style={{ color: iconColor, fontSize: "1.5em", position: "relative" }}></i>
          {secondaryIcon && (
            <i style={{ position: "absolute", top: "22px", right: "8px", color: secondaryIcon.color }} className={`ph-fill ${secondaryIcon.icon}`}></i>
          )}
        </div>
        <p className="card-text text-light mt-3">{title}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span className='text-light' style={{ fontSize: 'calc(1.5rem + 0.5vw)', color: valueColor }}>
            {value}
          </span>
          <span style={{ color: percentageColor, fontSize: 'calc(1rem + 0.5vw)' }}>
            <i className={`ph-fill ${increase ? 'ph-caret-up' : 'ph-caret-down'}`}></i> {percentage}%
          </span>
        </div>
      </div>
    </div>
  </div>
}

CarouselCardItem.propTypes = {
    iconBgColor: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    secondaryIcon: PropTypes.shape({
      icon: PropTypes.string,
      color: PropTypes.string
    }),
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    valueColor: PropTypes.string,
    percentageColor: PropTypes.string,
    increase: PropTypes.bool.isRequired
  };

export default CarouselCardItem;