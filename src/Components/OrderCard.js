import React from 'react';
import './OrderCard.css';

const OrderCard = ({ background, iconBackground, icon, iconColor, badgeIcon, badgeColor, title, value, percentage, percentageColor, percentageIcon }) => {
  return (
    <div className='col-lg-3 col-md-6 col-sm-6' >
      <div className="card mb-3" style={{ background }} >
        <div className="card-body text-light">
          <div
            className="icon-container"
            style={{ background: iconBackground }}
          >
            <i className={`ph-fill ${icon} icon`} style={{ color: iconColor }}></i>
            {badgeIcon && (
              <i className={`badge-icon ph-fill ${badgeIcon}`} style={{ color: badgeColor }}></i>
            )}
          </div>
          <p className="card-text card-title" style={{fontSize: 'calc(0.8rem + 0.2vw)'}}>{title}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className='text-light card-value' style={{fontSize: 'calc(1rem + 0.2vw)'}}>{value}</span>
            <span style={{ color: percentageColor, fontSize: 'calc(1rem + 0.2vw)' }}>
              {percentageIcon && <i className={`ph-fill ${percentageIcon}`}></i>} {percentage}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
