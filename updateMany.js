const {client} = require('./dbConfig');

const updateMany = async ()=>{
    try {
        const DB = client.db('shop');
        const products = DB.collection('products');

        const filter = { 'general.brand': 'Canon'};
        const updateDocs = {
            $set: {
                'general.brand': 'NIKON'
            }
        };

        const result = await products.updateMany(filter, updateDocs);
        // console.log(result);
        console.log(`${result.matchedCount} documents matched, Updated ${result.modifiedCount} documents `);
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
}

module.exports = { updateMany };