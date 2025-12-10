  //Loading the data
        function loadData(){

            //array of problematic projects
            let arrProblems = [
                //row 1 is a nested array
                ["Crowdstrike", 2024, "$5.4B"],
                ["Facebook", 2020, "$90M"],
                ["Citibank", 2020, "$900M"],
                ["Mars Climate Orbiter", 1999, "$327M"]
            ];

            //nested for loops for data
            for (let i=0; i<arrProblems.length; i++){
                //creates a row for data storage
                let tr = document.createElement("tr");

                //loop through each of the nested array
                for(let j=0; j < arrProblems[i].length; j++){
                    let td=document.createElement("td");

                    //data into td
                    td.textContent = arrProblems[i][j];

                    //append data
                    tr.appendChild(td);
                }
                //add new row to existing table
                document.getElementById("tblData").appendChild(tr);

            }
        }
        loadData();