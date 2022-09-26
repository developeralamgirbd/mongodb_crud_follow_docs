const { client } = require('./dbConfig');

const updateOne = async ()=>{
    try {
        const DB = client.db('shop');
        const products = DB.collection('products');

        const filter = {'general.brand': 'Canon', 'general.modelNo': 'EOS 200D II'};
        const options = { upsert: true };

        const updateDoc = {
            $set: {
                regularPrice: '49,999',
                specialPrice: '47,999',
            }
        };

       const result = await products.updateOne(filter, updateDoc, options);
        // console.log(result);
        console.log(`${result.matchedCount} documents matched the filter, updated ${result.modifiedCount} documents`);
    }catch (error) {
        console.log(error)
    }finally {
        await client.close();
    }
}

module.exports = { updateOne }