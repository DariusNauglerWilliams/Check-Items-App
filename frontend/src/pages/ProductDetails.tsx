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
     <h1>{product.name}</h1>
     <p>{product.brand}</p>
     <p>{product.image}</p>
     <p>{product.healthscore}</p>
     <p>{product.healthgrade}</p>
     <p>{product.ingredients}</p>
     <p>{product.calories}</p>
     <p>{product.sugar}</p>
     <p>{product.protein}</p>
     <p>{product.fat}</p>
     <p>{product.salt}</p>
     <p>{product.allergens}</p>
     <p>{product.additives}</p>
     


    </section>

</>
)
}

export default ProductDetails