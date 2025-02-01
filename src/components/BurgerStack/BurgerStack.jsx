// src/components/BurgerStack/BurgerStack.jsx
const BurgerStack = (props) => {
    return <ul>
        {props.stack.map((Ingredient,index)=> (

            <li key={index}
            style={{ backgroundColor : Ingredient.color}}>
            {Ingredient.name}

            <button onClick= {() => props.removeStackBurger(Ingredient.name)}>X</button>

            </li>
        ))}
    </ul>;
  };
  
  export default BurgerStack;
  