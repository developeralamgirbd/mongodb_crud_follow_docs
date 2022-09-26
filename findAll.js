const { client } = require('./dbConfig');

const findAll = async ()=>{
    try {
        const DB = client.db('shop');
        const products = DB.collection('products');

        const query = {};
        const options = {
            sort: {regularPrice: -1},
            projection: {_id: 0, name: 1, 'general.brand': 1}
        }
        const result = await products.find(query, options).toArray();
        console.log(result);
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
}
module.exports = { findAll }