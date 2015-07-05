/**
 * Created by rohitghatol on 7/4/15.
 */
module.exports = {

    substance_warnings: {
        host: 'api.fda.gov',
        path: '/drug/label.json?api_key='+(process.env.API_KEY||'pwf1NjqoKDItYyTxb8FHoCft9J2sij1paFwLJOTN')+
                '&search=warnings:"For+external+use+only"'+
                '&count=openfda.substance_name.exact'+
                '&limit=40',
        method: 'GET',

    }
}