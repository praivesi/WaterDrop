const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MindStat = new Schema(
    {
        country: { type: String, required: true },
        lifeSatisfication: { type: Number, required: true }
    },
    { timestampse: true }
)

module.exports = mongoose.model('mindStats', MindStat)