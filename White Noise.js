function addAudio(){
            //create new HTML Audio element//
            let audioElm = document.createElement("audio");
            audioElm.setAttribute("id","myAudio");
            //must be identical as other file
            audioElm.setAttribute("src","us-lab-background.mp3");
            //adds control dashboard to show audio works
            audioElm.setAttribute("controls", "controls");

            //adding audio element to Div
            document.getElementById("divAudio").appendChild(audioElm);

            //hides addAudio
            document.getElementById("btnAddAudio").hidden = true;

            //Shows other buttons
        document.getElementById("btnPlayAudio").hidden = false;
        document.getElementById("btnPauseAudio").hidden = false;

        }

     //Function to play audio
        function playAudio(){
            let audio = document.getElementById("myAudio");
            audio.play();
        }
        
    //Function to stop audio
        function pauseAudio(){
            let audio = document.getElementById("myAudio");
            audio.pause();
        }