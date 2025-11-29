        let rank1 = "Private";
        let rank2 = "Private First Class";
        let rank3 = "Lance Corporal";
        let rank4 = "Corporal";
        let rank5 = "Sergeant";
//stores Rank list
        let arrRank = ["Private", "Private First Class", "Lance Corporal", "Corporalk", "Sergeant"]
//Add rank
        function addRank(){
            let newRank = document.getElementById("txtNewRank").value;

            arrRank.push(newRank)

            //Updates the showing list
            showRank();
        }

//will loop and show in ul
//li is List Item
        function showRank(){
            let ulRanks = document.getElementById("ulRanks");
            //remove already existing Ranks
            ulRanks.innerHTML = "";

            arrRank.forEach(function(rank, index){
                let li = document.createElement("li");
                li.textContent = rank;

                //adding a handler
                li.onclick = function(){
                    if(confirm('Remove ' + rank + '?')){
                        arrRank.splice(index,1);
                        showRank();
                    }
                };
//adds new to original list
                ulRanks.appendChild(li);
            });
        }
//Initial loading of list
        showRank();
