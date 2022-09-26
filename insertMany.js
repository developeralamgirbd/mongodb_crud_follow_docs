const { client } = require('./dbConfig');

const insertMany = async ()=>{
    try {
        const DB = client.db('shop');
        const products = DB.collection('products');

        const data = [
            {
                'name': 'NIKON Z 50 Mirrorless Camera Body with 16-50mm Lens  (Black)',
                'regularPrice': '85,995',
                'specialPrice': '75,399',
                'warranty': '2 Year Warranty',
                'image': 'https://rukminim1.flixcart.com/image/416/416/k5o7r0w0/dslr-camera/z/h/4/z-50-z-50-nikon-original-imafzasjeyewfhwy.jpeg?q=70',
                'general': {
                    'brand': 'NIKON',
                    'modelNo': 'Z 50',
                    'brandColor': 'Black',
                    'type': 'Mirrorless',
                    'effectivePixels': '20.9 MP',
                    'wifi': 'Yes',
                },
                'sensorFeatures':{
                    'sensorType': 'CMOS',
                    'imageSensorSize': '23.5 x 15.7 mm',
                },
                'viewFinderFeatures': {
                    'viewFinder': 'Yes',
                    'viewFinderType': 'OLED'
                }
            },
            {
                'name': 'Canon EOS 200D II DSLR Camera EF-S18-55mm IS STM  (Black)',
                'regularPrice': '61,995',
                'specialPrice': '54,390',
                'warranty': '2 Year Warranty',
                'image': 'https://rukminim1.flixcart.com/image/416/416/juwzf680/dslr-camera/g/a/q/200d-ii-200d-ii-canon-original-imaffvrhzyqzayys.jpeg?q=70',
                'general': {
                    'brand': 'Canon',
                    'modelNo': 'EOS 200D II',
                    'brandColor': 'Black',
                    'type': 'DSLR',
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
            },
            {
                'name': 'Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens  (Black)',
                'regularPrice': '41,995',
                'specialPrice': '36,390',
                'warranty': '2 Year Warranty',
                'image': 'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/dslr-camera/s/q/k/eos-1500d-canon-original-imafzfughbzn7tmg.jpeg?q=70',
                'general': {
                    'brand': 'Canon',
                    'modelNo': '1500D',
                    'brandColor': 'Black',
                    'type': 'DSLR',
                    'effectivePixels': '24.1 MP',
                    'wifi': 'Yes',
                },
                'sensorFeatures':{
                    'sensorType': 'CMOS',
                    'imageSensorSize': '22.3 x 14.9 mm',
                },
                'viewFinderFeatures': {
                    'viewFinder': 'Yes',
                    'viewFinderType': 'OLED'
                }
            },
        ];

        const result = await products.insertMany(data);
        // console.log(result);
        console.log(`${result.insertedCount} documents were inserted`)
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
}

module.exports = { insertMany }