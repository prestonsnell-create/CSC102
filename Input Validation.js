        function validateForm(){
            //Sets the variables for the code
                let FirstName = document.getElementById("txtFirstName").value.trim();

                let LastName = document.getElementById("txtLastName").value.trim();

                let ZipCode = document.getElementById("txtZipCode").value.trim();

//Allows to be viewed in console
                console.log("FirstName=" + FirstName);
                console.log("LastName=" + LastName);
                console.log("ZipCode=" + ZipCode);
//combined variable
                FullName = FirstName + " " + LastName;
//viewed in console
                console.log("FullName=" + FullName);
//If else character length function
                if (FullName.length > 20 || FullName.length ==1){
                    //Shows on screen
                    message = "Invalid name, please try again.";

                    console.log("Invalid name")
                }

                else if (ZipCode.length != 5){
                     message = "Invalid Zip, please try again.";

                    console.log("Invalid Zip")
                }
//This occures when the code fully works
                else{
                    message = "Welcome," +FirstName + ". The secret phrase is Marine Corps.";
                }

                document.getElementById("divMessage").textContent = message
            }