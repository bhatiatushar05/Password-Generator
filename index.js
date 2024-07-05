/*let passEl1 = document.getElementById("pass-1")
let passEl2 = document.getElementById("pass-2")
let variable = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function genPass(){
    let passwordLength = 15
    let randomPass = ""
    let randomPass2 = ""
    for(let i=0; i<passwordLength; i++){
        randomPass += variable[Math.floor(Math.random()*variable.length)]
        randomPass2 += variable[Math.floor(Math.random()*variable.length)]
    
    } 
    passEl1.textContent = randomPass  
    passEl2.textContent = randomPass
} */
    let passEl1 = document.getElementById("pass-1");
    let passEl2 = document.getElementById("pass-2");
    let variable = {
        alphabets: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "~`!@#$%^&*()_-+={[}]|:;<,>.?/"
    };
    
    function genPass() {
        let passwordLength = document.getElementById("password-length").value;
        let includeAlphabets = document.getElementById("include-alphabets").checked;
        let includeSymbols = document.getElementById("include-symbols").checked;
    
        let characters = "";
        if (includeAlphabets) characters += variable.alphabets;
        if (includeSymbols) characters += variable.symbols;
        characters += variable.numbers;
    
        let randomPass = generatePassword(characters, passwordLength);
        let randomPass2 = generatePassword(characters, passwordLength);
    
        passEl1.textContent = randomPass;
        passEl2.textContent = randomPass2;
    }
    
    function generatePassword(characters, length) {
        let password = "";
        for (let i = 0; i < length; i++) {
            password += characters[Math.floor(Math.random() * characters.length)];
        }
        return password;
    }
    
    function copyToClipboard(elementId) {
        let text = document.getElementById(elementId).textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert("Password copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy password: ", err);
        });
    }
    
