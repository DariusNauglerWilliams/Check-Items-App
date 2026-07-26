import Express from "express";


const router = Express.Router();

router.get("/:barcode", async (req,res) => {

const barcode = req.params.barcode;


res.json({
    barcode: barcode
});


});


export default router;