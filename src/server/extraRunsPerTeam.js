//question 3

const fs = require('fs');
const data1 = fs.readFileSync('../data/deliveriesOutput.json', {encoding:'utf8', flag:'r'});
const updatedData1 = JSON.parse(data1);
const data2 = fs.readFileSync('../data/output.json', {encoding:'utf8', flag:'r'});
const updatedData2 = JSON.parse(data2);

const ExtraRunsByTeam =(matches,year)=>{{
        const matchID = (matches.filter((match)=>match.season==year)).map((matchData)=>matchData.id)

        const bowlerData = updatedData1.reduce(extraRun, {})

        function extraRun(extraRunTeam, deliveries){
           if(matchID.includes(deliveries['match_id'])){
              if(extraRunTeam.hasOwnProperty(deliveries['bowling_team'])){
                 extraRunTeam[deliveries['bowling_team']] += Number(deliveries['extra_runs'])
               }
           else{
            extraRunTeam[deliveries['bowling_team']] = Number(deliveries['extra_runs'])
           }
         }
       return extraRunTeam;
    }    
   return bowlerData;
  }
}

const extraRunsData = JSON.stringify(ExtraRunsByTeam(updatedData2, 2016));

fs.writeFile('../public/output/extraRunsPerTeam.json', extraRunsData , (err) => {
  if (err) {
      console.log(err)
  }
  else{
  console.log('The file has been saved!') }
}
);




