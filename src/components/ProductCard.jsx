import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-brand">
          <strong>Marca:</strong> {product.brand}
        </p>
        <p className="product-description">{product.description}</p>
        
        <div className="product-details">
          <div className="detail-item">
            <span className="detail-label">Cor:</span>
            <span className="detail-value">{product.color}</span>
            <div 
              className="color-preview" 
              style={{ backgroundColor: product.colorHex }}
            ></div>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Tipo:</span>
            <span className="detail-value">{product.type}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Acabamento:</span>
            <span className="detail-value">{product.finish}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Rendimento:</span>
            <span className="detail-value">{product.yield}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Volume:</span>
            <span className="detail-value">{product.volume}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Tempo de Secagem:</span>
            <span className="detail-value">{product.dryingTime}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Aplicação:</span>
            <span className="detail-value">{product.application}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Preço:</span>
            <span className="detail-value price">R$ {product.price.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="product-features">
          <h3>Características:</h3>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <button className="btn-add-cart">Adicionar ao Carrinho</button>
      </div>
    </div>
  );
}

export default ProductCard;
