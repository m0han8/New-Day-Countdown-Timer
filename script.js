function updateCountdown() {
    let cur = new Date();
    let hrs = cur.getHours();
    let min = cur.getMinutes();
    let sec = cur.getSeconds();

    let a1 = 24 - hrs;
    let a2 = 60 - min;
    let a3 = 60 - sec;

    let an1 = document.getElementById("hours");
    an1.innerText = a1;

    let an2 = document.getElementById("min");
    an2.innerText = a2;

    let an3 = document.getElementById("seconds");
    an3.innerText = a3;
}

setInterval(updateCountdown, 1000);
