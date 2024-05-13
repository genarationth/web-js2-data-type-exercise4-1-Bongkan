const product = {
    product_id: 123,
    product_name: "fear",
    quantity_in_stock: 12,
    unit_price: 32,
    product_brand: "BK",
    product_description: {
        size_or_quantity: "100ml",
        taste_or_scent: "fishy",
        colour: "Brown",
        additional_description: "Fishy white thing"
    }
};

console.log(product.product_id);
console.log(product.product_description.colour);