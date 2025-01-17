import './App.css';
import IngredientList from './components/IngredientList/IngredientList.jsx'
import BurgerStack from './components/BurgerStack/BurgerStack.jsx'
import { useState } from 'react';

const App = () => {
  {/* useState */} 
  const [stack, setStack] = useState([]);
  {/* data: would be placed in a new component if too lengthy, note to self when building p2 */} 
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];
  {/* Functions */} 
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  }
  const removeFromBurger = (i) => {
  setStack([...stack.slice(0, i), ...stack.slice(i + 1)]);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList ingredients={availableIngredients} onClick={addToBurger} />
      <BurgerStack ingredients={stack} onClick={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
