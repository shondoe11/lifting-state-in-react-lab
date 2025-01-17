const Ingredient = ({ ingredient, onClick, toSibling}) => {
    return (
        <li style={{backgroundColor: ingredient.color}}>
            {ingredient.name}
            <button onClick={onClick}>
                {/* conditional rendering */}
                {toSibling === 'IngredientList' ? '+' : 'x'}
            </button>
        </li>
    )
}
export default Ingredient;