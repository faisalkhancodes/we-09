import React, { useState, useEffect } from 'react';

// Reusable Component for Product Cards
const ProductCard = ({ item, onAddToCart }) => {
  return (
    <div className="glass-card animate-fade-in" style={cardStyle}>
      <div className="icon-box" style={iconBoxStyle}>
        {item.icon}
      </div>
      <h3 style={{ marginTop: '15px' }}>{item.name}</h3>
      <p style={{ color: 'var(--text-secondary)', margin: '10px 0 20px' }}>
        {item.price} <span className="text-gradient">BNB</span>
      </p>
      <button 
        className="btn-primary" 
        onClick={() => onAddToCart(item)}
        style={buttonStyle}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default function App() {
  // 1. STATE: Manage cart items and connection status
  const [cart, setCart] = useState([]);
  const [isConnected, setIsConnected] = useState(true);

  // 2. DATA: Product List
  const products = [
    { id: 1, name: 'Donate', price: '0.0001', icon: '💎' },
    { id: 2, name: 'test1', price: '0.0002', icon: '⚡' },
    { id: 3, name: 'test2', price: '0.0003', icon: '🔥' },
  ];

  // 3. FUNCTIONALITY: Add to Cart Logic
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to your Web3 wallet cart!`);
  };

  // 4. FUNCTIONALITY: Toggle Connection
  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>
      
      {/* NAVBAR SECTION */}
      <nav className="glass-card" style={navStyle}>
        <h2 className="text-gradient" style={{ fontSize: '1.4rem' }}>IqraSofts Web3</h2>
        <button 
          onClick={toggleConnection}
          style={{ 
            color: isConnected ? '#ff4d4d' : '#4ade80', 
            fontWeight: '600',
            cursor: 'pointer' 
          }}
        >
          {isConnected ? 'Disconnect' : 'Connect Wallet'}
        </button>
      </nav>

      {/* HERO SECTION */}
      <header style={{ textAlign: 'center', margin: '60px 0' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800' }}>
          Web3 <span className="text-gradient">Store</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          {isConnected ? 'Connected: 0x71C...8e2' : 'Please connect your wallet to shop'}
        </p>
      </header>

      {/* PRODUCT GRID SECTION */}
      <div style={gridStyle}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            item={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>

      {/* FLOATING CART FUNCTIONALITY */}
      <div className="glass-card animate-fade-in" style={floatingCartStyle}>
        <span>🛒</span>
        {cart.length > 0 && (
          <div style={badgeStyle}>{cart.length}</div>
        )}
      </div>
    </div>
  );
}

// --- Dynamic Styles ---

const navStyle = {
  display: 'flex', 
  justifyContent: 'space-between', 
  padding: '1.2rem 2.5rem', 
  alignItems: 'center', 
  marginTop: '20px'
};

const gridStyle = {
  display: 'flex', 
  gap: '2.5rem', 
  justifyContent: 'center', 
  flexWrap: 'wrap'
};

const cardStyle = {
  padding: '2.5rem', 
  width: '280px', 
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const iconBoxStyle = {
  background: 'var(--glass-border)', 
  width: '70px', 
  height: '70px', 
  borderRadius: '18px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  fontSize: '2rem'
};

const buttonStyle = {
  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', 
  color: 'white', 
  width: '100%', 
  padding: '14px', 
  borderRadius: '15px', 
  fontWeight: 'bold',
  marginTop: 'auto',
  cursor: 'pointer'
};

const floatingCartStyle = {
  position: 'fixed', 
  bottom: '40px', 
  right: '40px', 
  width: '70px', 
  height: '70px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  fontSize: '1.8rem', 
  borderRadius: '50%',
  cursor: 'pointer',
  zIndex: 100
};

const badgeStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  background: 'var(--accent-secondary)',
  color: 'white',
  borderRadius: '50%',
  width: '24px',
  height: '24px',
  fontSize: '0.8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  border: '2px solid var(--bg-primary)'
};