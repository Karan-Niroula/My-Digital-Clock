console.log("my code is running")

const hourH1 = document.querySelector("#hour h1");
const minH1 = document.querySelector("#min h1");
const secH1 = document.querySelector("#sec h1");




function formatTime(time){
    return time.toString().padStart(2,"0")  //2 ta digit vayena vane "0" aagadi aayera basxa
}

function clock(){
    const date = new Date()

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    hourH1.innerHTML = formatTime(h)
    minH1.textContent = formatTime(m)
    secH1.textContent = formatTime(s)
}

setInterval(clock, 1000)

