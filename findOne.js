const { client } = require('./dbConfig');

const findOne = async ()=>{
    try {
        const DB = client.db('shop');
        const products = DB.collection('products');

        const query = { 'general.brand': 'Canon'};

       const options = {
            sort: {'regularPrice': -1},
            projection: {_id:0, name: 1, regularPrice: 1, specialPrice: 1, warranty: 1, image: 1, 'general.brand': 1}
        }

        const result = await products.findOne(query, options);
        console.log(result);
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
}

module.exports = { findOne }
