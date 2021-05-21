var scraper = require('table-scraper');
const fs = require('fs');


scraper
  .get('http://www.mcc-mnc.com/')
  .then(function(tableData) {
    let data = JSON.stringify(tableData);
    fs.writeFileSync('data.json', data);
      console.log(tableData)
  });
