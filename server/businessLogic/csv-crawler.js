const fs = require('fs')
const results = []
const iconv = require('iconv-lite')

function loadCSV()
{
    var path = './businessLogic/life_quality.csv'
    var data = fs.readFileSync(path, {encoding: "binary"})
    var data2EUCKR = iconv.decode(data, 'euc-kr')
    var rows = data2EUCKR.split("\n")

    for (var rowIndex in rows) {
        // TODO: Parse row and create data filled list
        results.push(rows[rowIndex])
    }

    console.log(results)
}

module.exports =
{
    loadCSV
}