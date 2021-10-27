//**********start_query***********

document.querySelector(".zombie-container").classList.add("position1");
document.querySelector(".zombie-container").classList.add("moving1");
document.querySelector(".worker-container").classList.add("position2");
document.querySelector(".worker-container").classList.add("moving2");
document.querySelector("#zombie").classList.add("dead_zombie");
document.querySelector("#zombie").classList.add("zombie1");


document.querySelector("#worker").classList.add("ghost");
document.querySelector("#worker").classList.add("worker1");



//***********function_query_zombie***********

document.querySelector(".zombie-container").addEventListener("click", stopZombie);

function stopZombie() {
    console.log("function stopZombie()");

    document.querySelector("#zombie").classList.remove("zombie1");

    document.querySelector("#zombie").classList.add("zoom_in");
    document.querySelector(".zombie-container").classList.add("stop");

    document.querySelector("#zombie").addEventListener("animationend", restartZombie);
}

function restartZombie() {

    document.querySelector("#zombie").classList.add("zombie1");


    document.querySelector(".zombie-container").classList.remove("moving1");
    document.querySelector("#zombie").classList.remove("zoom_in");

    document.querySelector(".zombie-container").offsetHeight;

    document.querySelector(".zombie-container").classList.remove("stop");
    document.querySelector(".zombie-container").classList.add("moving1");

    document.querySelector(".zombie-container").classList.add("position1");
}

//*********function_query_worker***********

document.querySelector(".worker-container").addEventListener("click", stopWorker);


function stopWorker() {
    console.log("function stopWorker()");

    document.querySelector("#worker").classList.remove("worker1");

    document.querySelector("#worker").classList.add("zoom_in");
    document.querySelector(".worker-container").classList.add("stop");

    document.querySelector("#worker").addEventListener("animationend", restartWorker);
}

function restartWorker() {

    document.querySelector("#worker").classList.add("worker1");


    document.querySelector(".worker-container").classList.remove("moving2");
    document.querySelector("#worker").classList.remove("zoom_in");

    document.querySelector(".worker-container").offsetHeight;

    document.querySelector(".worker-container").classList.remove("stop");
    document.querySelector(".worker-container").classList.add("moving2");

    document.querySelector(".worker-container").classList.add("position2");
}
