import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

function ProductDetails(){


  type Product = {

  name: string
  brand?: string
  image?: string
  healthscore?: number
  healthgrade?: string
  ingredients?: string
  calories?: number
  sugar?: number
  protein?: number
  fat?: number
  salt?: number
  allergens?: string[]
  additives?: string[]

  }
  const { barcode } = useParams()

  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {

fetch(`http://localhost:3000/products/${barcode}`)
.then(res => res.json())
.then(product => {
  setProduct(product)
})

}, [barcode])

if(!product){


  return <p>Loading...</p>
}




return(
<>
<section>
  <h4>Nutrition values are per 100 g.</h4>
</section>

  <section>
     <h1>{product.name}</h1>

     <img src={product.image} alt={product.name}></img>
          <p>Brand: {product.brand ?? "N/A"}</p>
     <p>Overall Score: {product.healthscore ?? "N/A"}</p>
     <p>Overall Grade: {product.healthgrade?.toUpperCase() ?? "N/A"}</p>
     <p>Ingredients: {product.ingredients ?? "N/A"}</p>
     <p>Calories: {product.calories ?? "N/A:"}kcal</p>
     <p>Sugar: {product.sugar ?? "N/A:"}g</p>
     <p>Protein: {product.protein ?? "N/A:"}g</p>
     <p>Fat: {product.fat ?? "N/A:"}g</p>
     <p>Salt: {product.salt ?? "N/A:"}g</p>
     <p>Allergens: {product.allergens?.map(item => item.replace("en:", "")).join(", ") || "N/A"} </p>
     <p>Additives: {product.additives?.map(item => item.replace("en:", "")).join(", ").toUpperCase() || "N/A"}</p>
     


    </section>

    

</>
)
}

export default ProductDetails