
const IngredientList = (props) => {
    return <ul>
        {props.availableIngredients.map((Ingredient)=>(

            <li key={Ingredient.name}
             style={{backgroundColor:Ingredient.color}}>
            {Ingredient.name}

            <button onClick={()=> props.addIngeredients(Ingredient)}> + </button>

            </li>

        ))}
    </ul>;
  };
  
  export default IngredientList;
  