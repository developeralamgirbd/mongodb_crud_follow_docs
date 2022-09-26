const { client }= require('./dbConfig');

const insertOne = async ()=>{
    try {
        const DB = client.db('shop');
        const products = DB.collection('products');

        const data = {
            'name': 'Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm is STM Lens  (Black)',
            'regularPrice': '60,995',
            'specialPrice': '53,890',
            'warranty': '2 Year Warranty',
            'general': {
                'brand': 'Canon',
                'modelNo': 'EOS M50 Mark II',
                'brandColor': 'Black',
                'effectivePixels': '24.1 MP',
                'wifi': 'Yes',
            },
            'sensorFeatures':{
                'sensorType': 'CMOS',
                'imageSensorSize': '22.3 x 14.9',
            },
            'viewFinderFeatures': {
                'viewFinder': 'Yes',
                'viewFinderType': 'OLED'
            }
        };

        const result = await products.insertOne(data);
        // console.log(result);
        console.log(`A document was inserted with the _id: ${result.insertedId}`)

    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
}

module.exports = { insertOne };