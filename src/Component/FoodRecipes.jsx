import React from 'react';

const Recipes = (props) => {
    const {image,label,ingredientLines} = props;
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={image} className="img-flut"/>
                <div className="card-body">
                    <h5>
                        {label}
                    </h5>
                </div>
                <ul>
                {ingredientLines.map(ingredient => <li>{ingredient}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Recipes;