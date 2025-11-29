//This sets name for the palindrome and what will appear on screen
function testPalin(){
            let userInput = document.getElementById("txtInput").value.trim();

            if(isPalindrome(userInput)){
                document.getElementById("divResult").textContent = "All good!"

            }
            else{
                document.getElementById("divResult").textContent = "Nope."
            }
        }
        
//This function removes spaces to allow a proper palindrome check
        function isPalindrome(wordToTest){
            let cleanedWord = wordToTest.replace(/\s/g, "")
           //Makes all letters lower case 
            cleanedWord = cleanedWord.toLowerCase()
            

            let arrCleaned = cleanedWord.split("");
//reverses word for palindrome
            arrCleaned = arrCleaned.reverse();

            let reversedWord = arrCleaned.join("");
           
//Checks if words match
            return cleanedWord == reversedWord;
        

        }