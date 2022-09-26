const {client} = require('./dbConfig');

const deleteOne = async ()=>{
    try {
        const DB = client.db('shop');
        const products = DB.collection('products');

        const query = {'general.brand': 'NIKON', 'general.modelNo': 'EOS 200D II'};
        const result = await products.deleteOne(query);
        // console.log(result)
        if (result.deletedCount === 1){
            console.log('Successfully deleted one document.')
        }else {
            console.log('No documents matched the query. Deleted 0 documents.')
        }
    }catch (error) {
        console.log(error)
    }finally {
        await client.close()
    }
}

module.exports = {deleteOne}