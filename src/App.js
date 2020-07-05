import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Core/Header'
import Axios from 'axios';
import Recipes from './Component/Recipes'

function App() {

  const [search, setSearch]= useState("banana");
  const [recipes, setRecipes] = useState([])
  const AppId="13d1e81c";
  const AppKey="c7c5392ffa7be7fc353970aca3ddaa48";
  const onInputChange = (e) => {
    setSearch(e.target.value)
    searchData();
  }
  const searchData= async ()=>{
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}
    &app_id=${AppId}&app_key=${AppKey}`);

    setRecipes(result.data.hits)
  }

  useEffect(()=>{
    searchData();
  },[]);

  

  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange}/>
      <div className="container">
        <Recipes recipes={recipes}/>
      </div>
      
    </div>
  );
}

export default App;
