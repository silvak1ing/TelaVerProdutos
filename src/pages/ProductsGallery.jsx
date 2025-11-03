import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { paintProducts } from '../data/products';
import '../styles/ProductsGallery.css';

function ProductsGallery() {
  const [selectedType, setSelectedType] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Obter tipos únicos de tinta
  const paintTypes = ['Todos', ...new Set(paintProducts.map(p => p.type))];

  // Filtrar produtos
  const filteredProducts = paintProducts.filter(product => {
    const matchType = selectedType === 'Todos' || product.type === selectedType;
    const matchSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.color.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchType && matchSearch;
  });

  return (
    <div className="products-gallery">
      <header className="gallery-header">
        <h1>Galeria de Tintas</h1>
        <p>Explore nossa coleção completa de tintas de alta qualidade</p>
      </header>

      <div className="gallery-filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por nome, marca ou cor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="type-filters">
          <h3>Filtrar por Tipo:</h3>
          <div className="filter-buttons">
            {paintTypes.map(type => (
              <button
                key={type}
                className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="results-info">
        <p>Mostrando {filteredProducts.length} de {paintProducts.length} produtos</p>
      </div>

      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="no-results">
            <p>Nenhum produto encontrado com os filtros selecionados.</p>
            <button 
              onClick={() => {
                setSelectedType('Todos');
                setSearchTerm('');
              }}
              className="reset-btn"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsGallery;
