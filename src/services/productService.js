import Product from "../models/Product.js";

const createProduct = async(data)=>{
    return await Product.create(data);
}

const getAllProduct = async (query = {})=>{

    const filters = {}
    if(query.brands) {filters.brand ={$in: query.brands.split(',')} }
    if(query.ram) {filters.ram = {$in: query.ram.split(',').map(n=>parseInt(n))}}
    if(query.use) (filters.use = {$in: query.use.split(',')})

    if(query.price) {filters.price = {$in: query.price.split(',').map(p=>parseInt(p))}}
    if(query.gen) (filters.gen = {$in:query.gen.split(',').map(g=>parseInt(g))})
    if(query.rom) (filters.rom = {$in: query.rom.split(',').map(r=>parseInt(r))})

    if(query.product) (filters.productName= {$regex: query.product, $options: "i"}) //Regex for case insensitive search
    // if(query.ram) {filters.ram = {$in: query.ram.split(',')}}
    console.log(filters) 

  
    
    const sort = JSON.parse(query.sort || '{}')


   
    // return sort
    // console.log(query.ram?.split(',').map(n=>parseInt(n)))
    // console.log(query.brands.split(','))
    // return filters
 
    return await Product.find(filters).sort({price: 1});  //Ascwending  and descending order
    //Yoh talako chai statistically
    // ({
        // {brand:"Asus", ram: 8});
        // brand:{$in:['Asus','Dell', 'HP']},
        // ram:{$in:[8,16, 2]}
    // })
}

const getProductById = async (id)=>{
    return await Product.findById(id)
}

const deleteProductById = async(id)=>{
    return await Product.deleteOne( {_id : id});
}

const updateProductById = async(data, id)=>{
    return await Product.findByIdAndUpdate(id,data, {new:true});
}


export default {createProduct, getAllProduct, getProductById, deleteProductById , updateProductById};