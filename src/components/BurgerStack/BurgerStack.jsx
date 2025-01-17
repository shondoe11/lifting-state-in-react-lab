import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ingredients, onClick}) => {
  return (
  <ul>
    {/* conditional rendering */}
    {ingredients.length === 0 ? (
        <p style={{color: 'red', fontWeight: 'bold', fontSize: '3rem'}}>No Ingredients! Click '+' to add the ingredient you want!</p>
    ) : (
        ingredients.map((ingredient, index) => (
            <Ingredient key={index} ingredient={ingredient} onClick={() => onClick(index)} />
        ))
    )}
  </ul>
  );
};

export default BurgerStack;
