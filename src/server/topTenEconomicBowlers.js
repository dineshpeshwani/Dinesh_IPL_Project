//question 4

const fs = require('fs');
const data1 = fs.readFileSync('../data/deliveriesOutput.json', {encoding:'utf8', flag:'r'});
const updatedData1 = JSON.parse(data1);
const data2 = fs.readFileSync('../data/output.json', {encoding:'utf8', flag:'r'});
const updatedData2 = JSON.parse(data2);

const TopTenEconomicalbowlers =(deliveries,matches,year)=>{
    let bowlersData = {}
    let bowlersEconomy = {}
    const matchID = (matches.filter((match)=>match.season==year)).map((matchData)=>matchData.id)
    for(let i=0; i<deliveries.length; i++)
    {
        if(matchID.includes(deliveries[i].match_id)){
            let ballRuns = deliveries[i]["total_runs"]
            if(bowlersData.hasOwnProperty(deliveries[i].bowler)){
                bowlersData[deliveries[i].bowler]["runsGiven"]  += Number(ballRuns);
                bowlersData[deliveries[i].bowler]["numberOfDeliveries"] += 1;
            }
            else{
                bowlersData[deliveries[i].bowler] = {
                    "runsGiven" : Number(ballRuns),
                    "numberOfDeliveries": 1
                }
            }
        }
    }
    // finding economy for each bowler
    for(let bowlerName in bowlersData){
        bowlersEconomy[bowlerName] = (bowlersData[bowlerName]["runsGiven"] / bowlersData[bowlerName]["numberOfDeliveries"]) * 6;
    }
    //sorting top 10 bowlers 
    const result = Object.entries(bowlersEconomy).sort((a,b) => a[1]-b[1])
    return result.slice(0,10);
}
const economyData = JSON.stringify(TopTenEconomicalbowlers(updatedData1, updatedData2, 2015))

fs.writeFile('../public/output/topTenEconomyBowlers.json', economyData, (err) => {
    if (err) {
        console.log(err)
    }
    else{
    console.log('The file has been saved!') }
 }
 );