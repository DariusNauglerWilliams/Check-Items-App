import { useState } from "react";
import './Navbar.css'
import searchIcon from "../assets/search-icon.png"

function SearchBar(){

const [query, setQuery] = useState("");

function handleSearch(){

if (!query.trim()) return;

console.log("Searching for:", query)

}

return(
<>

<div className="search-bar">

<input 
type="text"  
placeholder="Search products..." 
className="SearcherBar" 
value={query}
onChange={e => setQuery(e.target.value)}/>

<button>
<img src={searchIcon} alt="Search" className="search-icon"/>
</button>
</div>


           
</>
)
}

export default SearchBar