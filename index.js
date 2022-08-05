let home = document.getElementById('home')
let guest = document.getElementById('guest')

let count1 = 0
let count2 = 0
function homeTeam1(){
    count1 = count1 + 1
    home.textContent = count1
}
function homeTeam2(){
    count1 = count1 + 2
    home.textContent = count1
}
function homeTeam3(){
    count1 = count1 + 3
    home.textContent = count1
}

function awayTeam1(){
    count2 = count2 + 1
    guest.textContent = count2
}
function awayTeam2(){
    count2 = count2 + 2
    guest.textContent = count2
}
function awayTeam3(){
    count2 = count2 + 3
    guest.textContent = count2
}


