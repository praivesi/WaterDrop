const MindStat = require('../models/mind-statistics-model')

getMindStats = async (req, res) => {
    await MindStat.find({}, (err, mindstats) => {

        console.log("Enter getMindStats")

        if(err) {
            console.log("Reading Mind statistics data from MongoDB is failed.")
            return res.status(400).json({sucess: false, error:err})
        }

        if(!mindstats.length)
        {
            console.log("Mind statistics data not found.")
            return res.status(404).json({success: false, error: 'Mindstats not found'})
        }

        return res.status(200).json({success: true, data: mindstats})
        /*
        for (i = 0; i < mindStats.length; i++) {
            console.log("COUNTRY: " + mindStats[i].country)
            console.log("LIFE SATISFICATION: " + mindStats[i].lifeSatisfication)
        }
        */
    })
    .catch(err => console.log(err))
}

insertMindStats = (datas) => {
    for (i = 0; i < datas.length; i++) {
        const newMindStat = MindStat(datas[i])
        newMindStat
            .save()
            .then(() => {
                console.log("country: " + newMindStat.country)
                console.log("lifeSatisfication: " + newMindStat.lifeSatisfication)
            })
    }
}

module.exports = {
    getMindStats,
    insertMindStats
}