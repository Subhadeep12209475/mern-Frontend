import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const SearchResult=(props)=>{
  const [result,setResults]=useState([]);
  const {searchQuery}=props;
  const getSearchResult=async()=>{
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
    const data= await response.json();
    setResults(data.products);
    console.log(data);
  };
  useEffect(()=>{
    getSearchResult();
  },[searchQuery]);

  return(
    <div>
      <h2>{searchQuery}</h2>
      <div>
        {result.map((elem)=>{
          return<ProductResultCard
          key={elem.id}
          title={elem.title}
          price={elem.price}
          rating={elem.rating}
          thumbnail={elem.thumbnail}
          />

        })}
      </div>
    </div>
  )
}

export{SearchResult}