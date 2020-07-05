import React from 'react'
import FoodRecipes from './FoodRecipes'

const Recipes  = ((props)=>{
    const {recipes} = props;
    return (
        <div className="row">
        {
            recipes.map((recipe)=>
            (
                <FoodRecipes name={recipe.recipe.label} image= {recipe.recipe.image} ingredientLines={recipe.recipe.ingredientLines}/>
            ))
        }    
        </div>
    )
})

export default Recipes