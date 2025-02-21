const products =[]

function insert(arr,product){
    if(!arr || !product) return

    try{
        if (arr.includes(product)){
            throw new Error('Product already exists')
        }
        arr.push(product)
    }catch(error){
        console.error(error.message, error.trace)
        throw error
    }
}


try{
    insert(products,'Apple')
    console.log(products)
    insert(products,'Apple')
}
catch(error){
    console.error(error.message)
}
