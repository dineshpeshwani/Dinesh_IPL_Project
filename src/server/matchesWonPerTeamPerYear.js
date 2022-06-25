//question 2

const fs = require('fs');
const data = fs.readFileSync('../data/output.json', {encoding:'utf8', flag:'r'});
const updatedData = JSON.parse(data);

function matchesWonPerTeamPerYear(year, match){
    if(!year[match['season']]){
        year[match['season']] = {};
    }
    if(!year[match['season']][match['winner']]){
        year[match['season']][match['winner']] = 0;
    }
    year[match['season']][match['winner']]++;
    return year;
}
const winnerData = JSON.stringify(updatedData.reduce( matchesWonPerTeamPerYear ,{}));

fs.writeFile('../public/output/matchesWonPerTeamPerYear.json', winnerData, (err) => {
    if (err) {
        console.log(err)
    }
    else{
    console.log('The file has been saved!') }
 }
 );