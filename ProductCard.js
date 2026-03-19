import React from 'react';

const ProductCard = ({ name, price, icon }) => {
  return (
    <div style={cardStyle}>
      <div style={iconContainer}>
        <img src={icon} alt={name} style={{ width: '50px' }} />
      </div>
      <h3>{name}</h3>
      <p style={{ fontWeight: 'bold' }}>{price} BNB</p>
      <button style={buttonStyle}>ADD TO CART</button>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  width: '200px'
};

const iconContainer = {
  backgroundColor: '#e3f2fd',
  borderRadius: '50%',
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 15px'
};

const buttonStyle = {
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '20px',
  cursor: 'pointer',
  fontWeight: 'bold',
  width: '100%'
};

export default ProductCard;