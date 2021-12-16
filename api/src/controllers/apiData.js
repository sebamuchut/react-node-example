const dataJson = require('../data_tipie.json')

const apiData = (req, res) => {
    try {
        res.json(dataJson)        
    } catch (error) {
        console.log(error)
    }
};

module.exports = apiData;