import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ingredients, onClick}) => {
  return (
  <ul>
    {ingredients.map ((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient} onClick={() => onClick(ingredient)} toSibling="IngredientList" />
    ))}
    </ul>
    );
};

export default IngredientList;
