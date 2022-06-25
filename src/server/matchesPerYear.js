//question 1
const fs = require('fs');
const data = fs.readFileSync('../data/output.json' , { encoding: 'utf8', flag: 'r' });
const updatedData = JSON.parse(data);

const matchesperyear = (matches, year) =>{
    if (matches[year.season]) {
        matches[year.season] += 1;
    } else {
        matches[year.season] = 1;
    }
    return matches;
}
const result = JSON.stringify(updatedData.reduce(matchesperyear,{}))

//console.log(result)

fs.writeFileSync('../public/output/matches.json', result, (err) => {
    if (err) {
        console.log(err)
    }
    else{
    console.log('The file has been saved!') }
 }
 );

 module.exports=result;

