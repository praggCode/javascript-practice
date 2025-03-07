const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random * (maxNum - minNum + 1)+ minNum);

let  attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    
    if (isNaN(guess)){
        window.alert("Please enter a valid number");
    }else if (guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }else {
        attempts++;
        if (guess < answer){
            window.alert(`Too Low!! Try again`);
        }else if (guess > answer){
            window.alert(`Too High!! Try again`);
        }else{
            window.alert(`Congratulations!! You got it in ${attempts} attempts`);
            running = false;    
        }
    }
}
