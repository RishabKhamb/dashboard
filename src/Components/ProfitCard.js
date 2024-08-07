import {React, useEffect, useState} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProfitCard.css';

const ProfitCard = ({ title, amount, percentage }) => {
  const [loadPercentage, setLoadPercentage] = useState(0);
  // Transition to 70% after 100ms
  useEffect(() => {
    const timer = setTimeout(() => setLoadPercentage(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);
  return (
    <div className="card mb-3 card-container">
      <div className='row'>
        <div className='col-6'>
          <div className="card-content text-light">
              <p className='ms-3 card-title'>{title}</p>
            <div className="card-body">
              <h1 className='card-amount'>
                <strong>${amount}</strong>
              </h1>
              <span className='card-percentage'>
                <i className="ph-fill ph-caret-up"></i> {percentage}%
              </span>
            </div>
          </div>
        </div>
        <div className='col-6 mt-2 d-flex flex-column align-items-center justify-content-center'>
          <div className='circular-progress'>
            <CircularProgressbar
              value={loadPercentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: '#ffffff',
                pathColor: '#7396FF',
                trailColor: '#2D3566',
                transition: 'stroke-dashoffset 0.5s ease 0s',
                pathTransitionDuration: 2,
              })}
              strokeWidth={12}
            />
          </div>
          <p className='rounded-off mt-3'>
            The values here have been rounded off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfitCard;
