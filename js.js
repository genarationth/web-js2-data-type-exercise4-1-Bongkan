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
console.log(product.product_name);
console.log(product.quantity_in_stock);
console.log(product.unit_price);
console.log(product.product_brand);
console.log(product.product_description);
console.log(product.product_description.size_or_quantity);
console.log(product.product_description.taste_or_scent);
console.log(product.product_description.colour);
console.log(product.product_description.additional_description);
