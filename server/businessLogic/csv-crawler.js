const fs = require('fs')
const results = []
const iconv = require('iconv-lite')
const MindStat = require('../models/mind-statistics-model')
  


function loadCSV()
{
    var path = './businessLogic/life_quality.csv'
    var data = fs.readFileSync(path, {encoding: "binary"})
    var data2EUCKR = iconv.decode(data, 'euc-kr')
    var rows = data2EUCKR.split("\n")
    var column = rows[1].split(',')

    var lifeStatisfyColumnIdx = -1

    for (i = 0; i < column.length; i++) {
        if (column[i] === "삶의 만족도 (점)") {
            lifeStatisfyColumnIdx = i;
            break;
        }
    }

    if (lifeStatisfyColumnIdx === -1) return;

    // for (var rowIndex in rows) 
    for (i = 2; i < rows.length; i++) {
        var row = rows[i].split(',')
        var newMStat = new MindStat()

        newMStat.country = row[0]
        newMStat.lifeSatisfication = row[lifeStatisfyColumnIdx]

        results.push(newMStat)
    }

    results.sort(function(a, b){
        return b.lifeSatisfication - a.lifeSatisfication;
    })    

    for (i = 0; i < results.length; i++) {
        console.log("COUNTRY: " + results[i].country + ", LIFE STATIFACTION: " + results[i].lifeSatisfication)
    }
}

module.exports =
{
    loadCSV
}