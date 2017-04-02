import productData from './content.json';

class ProductApi {
    static getProduct(){
    return new Promise((resolve, reject) => {
        //uncomment below line to simulate error
        //reject('JSON file not found');
        resolve(Object.assign({}, productData));
    });        
    } 
}

export default ProductApi;