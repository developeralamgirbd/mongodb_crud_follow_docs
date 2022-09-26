const {client} = require('./dbConfig');

const deleteMany = async ()=>{
    try {
        const DB = client.db('shop');
        const products = DB.collection('products');

        // delted all document where brand is canon
        const query = {'general.brand': 'NIKON', regularPrice: {$gt: '50000'}};
        // all data delete
        // const query = {};

       const result = await products.deleteMany(query);
        console.log(`Deleted ${result.deletedCount} documents`)

    }catch (error) {
        console.log(error)
    }finally {
        await client.close()
    }
}

module.exports = { deleteMany }