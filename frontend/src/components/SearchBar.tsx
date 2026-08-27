import { useState } from "react";
import './Navbar.css'
import searchIcon from "../assets/search-icon.png"
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";



function SearchBar(){

const [query, setQuery] = useState("");

const [result, newResult] = useState<searchResult[]>([])

const [loading, setLoading] = useState(false)

const [error, setError] = useState("")

const location = useLocation()

const searchRef = useRef<HTMLInputElement>(null)

type searchResult = {

barcode: string
name?: string
brand?: string
image?: string


}

  useEffect(() => {
    newResult([])
  }, [location.pathname])

  

  useEffect(() => {
  if (location.hash === "#search-bar") {
    searchRef.current?.focus()
    searchRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    })
  }
}, [location.hash])


function handleSearch(){
if(!query.trim()) return;

setError("")
setLoading(true)
    
fetch(`http://localhost:3000/products/search?q=${query}`)
.then(res => {
    if(!res.ok){

        throw new Error("Search Failed")
    }
    return res.json()
})
.then(result =>{
    newResult(result.slice(0, 5))
    
})
.catch(() =>{

    setError("Search temporarily unavaliable try again")

})
.finally(() => {

    setLoading(false)
})



}

return(
<>


  
{loading && <p>Loading...</p>}
{error && <p>{error}</p>}
<div className="search-bar" id="search-bar">

<input 
ref={searchRef}
type="text"  
placeholder="Search products..." 
className="SearcherBar" 

value={query}
onChange={e => setQuery(e.target.value)}/>

<button onClick={handleSearch}>
<img src={searchIcon} alt="Search" className="search-icon" />
</button>

{result.map(product => (
   <Link
  key={product.barcode}
  to={`/products/${product.barcode}`}
  onClick={() => newResult([])}
>
      <div>
        <p>{product.name}</p>
        <p>{product.brand}</p>
        <img src={product.image} alt={product.name} />
        
      </div>
      </Link>
    ))}


</div>


           
</>
)
}

export default SearchBar