export const customFetch = (products, id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            if (id){
                const product = products.find((prod) => prod.id == id)
                resolve (product)
            } else {         
                resolve(products)
            }
        }, 2000)
    })
}

