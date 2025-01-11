const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLable = document.getElementById('countLable');
let count = 0 


increaseBtn.onclick = function(){
    count+=1
    countLable.textContent = count
}

decreaseBtn.onclick = function(){
    count-=1
    countLable.textContent = count
}
resetBtn.onclick = function(){
    count= 0
    countLable.textContent = count
}