const MindStat = require('../models/mind-statistics-model')

getMindStats = () => {
    MindStat.find({}, (err, mindStats) => {
        if(err) {
            console.log("Reading Mind statistics data from MongoDB is failed.")
            return;
        }

        if(!mindStats.length)
        {
            console.log("Mind statistics data not found.")
            return;
        }

        for (i = 0; i < mindStats.length; i++) {
            console.log("COUNTRY: " + mindStats[i].country)
            console.log("LIFE SATISFICATION: " + mindStats[i].lifeSatisfication)
        }

        return mindStats
    })
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