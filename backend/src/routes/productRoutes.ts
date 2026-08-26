import Express from "express";




const router = Express.Router();


router.get("/search" , async (req, res) =>{

const search = req.query.q;

const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${search}&search_simple=1&json=1`)

if(!response.ok){

    return res.status(response.status).json({error: "Open Food Facts search is temporarily unavailable. Please try again later."});
}

const data = await response.json()

const products = data.products.map((product: any) => ({
    barcode: product.code,
    name: product.product_name,
    brand: product.brands?.split(",")[0].trim(),
    image: product.image_url,
    healthscore: product.nutriscore_score,
    healthgrade: product.nutriscore_grade
}));


res.json(products)


})



router.get("/:barcode", async (req,res) => {

const barcode = req.params.barcode;


const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}`)

if(!response.ok){

return res.status(response.status).json({error:  "Open food facts barcode is temporarily unavaliable, please try again later. "})
}


const data = await response.json()


if(!data.product){

    return res.status(404).json({
        error: "Product not found."
    })
}

const name = data.product.product_name_en;

const brand = data.product.brands?.split(",")[0].trim()

const image = data.product.image_url

const healthscore = data.product.nutriscore_score

const healthgrade = data.product.nutriscore_grade

const ingredients = data.product.ingredients_text_en

const calories = data.product.nutriments["energy-kcal_100g"]

const sugar = data.product.nutriments.sugars_100g

const protein = data.product.nutriments.proteins_100g

const fat = data.product.nutriments.fat_100g

const salt = data.product.nutriments.salt_100g

const allergens = data.product.allergens_tags

const additives = data.product.additives_tags


res.json({
    barcode: barcode,
    name: name,
    brand: brand,
    image: image,
    healthscore: healthscore,
    healthgrade: healthgrade,
    ingredients: ingredients,
    calories: calories,
    sugar: sugar,
    protein: protein,
    fat: fat,
    salt: salt,
    allergens: allergens,
    additives: additives
});




});






export default router;