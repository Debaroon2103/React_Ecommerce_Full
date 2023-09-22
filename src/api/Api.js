import axios from "axios"



export async function productsData() {
    const products = await axios.get("https://fakestoreapi.com/products")

    console.log(products)
    return products
}


