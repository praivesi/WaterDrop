const MindStat = require('../models/mind-statistics-model')

getMindStats = async(req, res) => {
    await MindStat.find({}, (err, mindStats) => {
        if(err) {
            return res.status(400).json({success:false, error:err})
        }

        if(!mindStats.length) {
            return res
                .status(404)
                .json({success: false, error: 'Mind statistics not found'})
        }

        return res.status(200).json({success:true, data: mindStats})
    })
    .catch(err => console.log(err))
}

module.exports = {
    getMindStats
}