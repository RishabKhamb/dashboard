import React from 'react';
import PropTypes from 'prop-types';
import './OrderTable.css';

const getStatusStyles = (status) => {
  if (status === 'Pending' || status === 'Cancelled') {
    return {
      backgroundColor: "#5E3236",
      color: '#B86472',
    };
  }
  return {
    backgroundColor: "#105446",
    color: "#20A07E",
  };
};

const OrderTable = ({ orders }) => {
  return (
    <div className='table-container'>
      <div className='table-responsive'>
        <table className="table caption-top">
          <caption className='h4'>Recent Orders</caption>
          <thead>
            <tr>
              <th scope="col">Customer</th>
              <th scope="col">Order No.</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={order.customerImage} alt='customer' id='icon-container' />
                    <span>{order.customerName}</span>
                  </div>
                </td>
                <td>{order.orderNumber}</td>
                <td>{order.amount}</td>
                <td>
                  <span className="status-badge" style={getStatusStyles(order.status)}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

OrderTable.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      customerImage: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      orderNumber: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OrderTable;
