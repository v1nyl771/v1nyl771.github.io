 function copyEmail() {
	 
            // hold the email
            const tempInput = document.createElement("input");
            tempInput.value = "v1nylrecords@protonmail.com";
            document.body.appendChild(tempInput);

            // select the thing n copy
            tempInput.select();
            document.execCommand("copy");

            // remove things that pop up on the bottom
            document.body.removeChild(tempInput);

            // say its copied
            document.getElementById("copySuccess").innerHTML = "Copied!";
        }