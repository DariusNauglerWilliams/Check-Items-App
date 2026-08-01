import Express from "express";


const router = Express.Router();


router.get("/search" , async (req, res) =>{

const search = req.query.q;

const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${search}`)



})



router.get("/:barcode", async (req,res) => {

const barcode = req.params.barcode;


const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}`)

const data = await response.json()

const name = data.product.product_name_en;

const brand = data.product.brands.split(",")[0].trim()

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