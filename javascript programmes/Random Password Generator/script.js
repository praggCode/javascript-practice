function genaratePassword(lenght,includeLowercase,includeUppercase,includeNumbers,includeSymbol){
    
    const lowercaseChacracters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChacracters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChacracters = "0123456789";
    const symbolChacracters = "!@#$%^&*()_+";

    let allowedChacracters = "";
    let password = "";
    allowedChacracters += (includeLowercase) ? lowercaseChacracters : "";
    allowedChacracters += (includeUppercase) ? uppercaseChacracters : "";
    allowedChacracters += (includeNumbers) ? numbersChacracters : "";
    allowedChacracters += (includeSymbol) ? symbolChacracters : "";

    if(allowedChacracters.length === 0){
        return "Please select at least one";
    } 
    if (allowedChacracters.length === 0){
        return "Atleast one set of characters must be selected";
    } 

    for (let i = 0; i < lenght; i++){
        const randomIndex =Math.floor(Math.random() * allowedChacracters.length);
        password += allowedChacracters[randomIndex];
    }

    return password;
}

const passwordLenght = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbol = true;


const password = genaratePassword(passwordLenght,
                                  includeLowercase,     
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbol);

console.log(`Your password is: ${password}`);

function displayPage(){
    document.getElementById("myH1").textContent = `Your password is: ${password}`;
}
console.log(displayPage());
