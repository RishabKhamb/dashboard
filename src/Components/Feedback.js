import React from 'react';
import PropTypes from 'prop-types';
import './Feedback.css';

const Feedback = ({ feedbackData }) => {
  return (
    <div className="feedback-container">
      <h3 className="text-white">Customer’s Feedback</h3>
      <div className="feedback-content">
        {feedbackData.map((item, index) => (
          <div key={index} className="feedback-item">
            <div className="d-flex align-items-center mb-2">
              <img src={item.image} alt={item.name} className="rounded-circle me-3" id="image-container" />
              <div>
                <h5 className="text-white mb-0">{item.name}</h5>
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < item.rating ? 'text-warning' : 'text-light'}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-light">{item.feedback}</p>
            {index < feedbackData.length - 1 && <hr className="divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

Feedback.propTypes = {
  feedbackData: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    feedback: PropTypes.string.isRequired
  })).isRequired
};

export default Feedback;
