import { useState } from 'react';
import './App.css';
import ShopItemClass from './Components/ShopItemClass';
import ShopItemFn from './Components/ShopItemFn';

function App() {
  const [show, setShow] = useState(true);
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£',
  };

  // Внутри компонента App
  return (
    <div className="container">
      <button type="button" onClick={() => setShow(!show)} className="btn-switch">
        {
      show ? 'use function' : 'use class'
    }
      </button>
      <div className="background-element" />
      <div className="highlight-window">
        <div className="highlight-overlay" />
      </div>
      <div className="window">
        {show ? <ShopItemFn item={item} /> : <ShopItemClass item={item} />}
      </div>
    </div>
  );
}

export default App;
