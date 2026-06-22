import { useState } from "react";
import './Navbar.css'

function SearchBar(){

const [query, setQuery] = useState("");

return(
<>

<div className="SearchBar">
<label className="SearchText">Search</label>
<input type="text" className="SearcherBar" onChange={e => setQuery(e.target.value)}></input>
</div>


</>
)
}

export default SearchBar