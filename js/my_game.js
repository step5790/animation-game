let score = 0;
let life = 3;
let gameDuration = 60;
let deciSeconds;

let gameIsPaused = false;
let gameHasEnded = false;

let soundMute = false;

let backSound = document.querySelector("#back_sound");
let sceneSound = document.querySelector("#scene_sound");
let gunShot = document.querySelector("#gun_sound");
let fireZombie = document.querySelector("#fire_zombie");
let gameOverSound = document.querySelector("#game_over_sound");
let heartSound = document.querySelector("#heart_beat");
let fireWorker = document.querySelector("#fire_worker");
let levelCompleteSound = document.querySelector("#clear_sound");
let doorSound = document.querySelector("#door_sound");

//**************title start******************

document.querySelector(".title_start").addEventListener("click", countDown);

function countDown() {
  doorSound.play();

  document.querySelector(".title_start").classList.add("grow");
  setTimeout(countScenario, 3000);

  document
    .querySelector(".title_start")
    .removeEventListener("click", countDown);
}

function countScenario() {
  sceneSound.play();
  sceneSound.loop = true;

  document.querySelector(".title_screen").style.visibility = "hidden";
  document.querySelector(".scenario").style.visibility = "visible";
  document
    .querySelector(".scenario_button")
    .addEventListener("click", gameStart);
}

//setTimeout(countDown, 6000);

//**********start_query***********
//window.addEventListener("load", gameStart);

function gameStart() {
  document.querySelector(".scenario").style.visibility = "hidden";

  timeleft = gameDuration;

  backSound.play();
  backSound.loop = true;

  sceneSound.pause();

  deciSeconds = gameDuration * 10;

  startTimer();

  document.querySelector(".points").textContent = score + "pts";
  document.querySelector(".timer").textContent = timeleft;

  document.querySelector("#zombie-container").classList.add("position1");
  document.querySelector("#zombie-container").classList.add("moving1");
  document.querySelector("#zombie-container2").classList.add("position2");
  document.querySelector("#zombie-container2").classList.add("moving2");
  document.querySelector("#zombie-container3").classList.add("position3");
  document.querySelector("#zombie-container3").classList.add("moving3");
  document.querySelector("#worker-container").classList.add("position4");
  document.querySelector("#worker-container").classList.add("moving4");
  document.querySelector("#worker-container2").classList.add("position5");
  document.querySelector("#worker-container2").classList.add("moving5");
  document.querySelector("#worker-container3").classList.add("position6");
  document.querySelector("#worker-container3").classList.add("moving6");

  document.querySelector("#zombie").classList.add("dead_zombie");
  document.querySelector("#zombie").classList.add("zombie_alive");
  document.querySelector("#zombie2").classList.add("dead_zombie");
  document.querySelector("#zombie2").classList.add("zombie_alive");
  document.querySelector("#zombie3").classList.add("dead_zombie");
  document.querySelector("#zombie3").classList.add("zombie_alive");
  document.querySelector("#worker").classList.add("ghost");
  document.querySelector("#worker").classList.add("worker_alive");
  document.querySelector("#worker2").classList.add("ghost");
  document.querySelector("#worker2").classList.add("worker_alive");
  document.querySelector("#worker3").classList.add("ghost");
  document.querySelector("#worker3").classList.add("worker_alive");

  document.querySelector(".pause").addEventListener("click", pauseGame);
}

//**********trigger gunshots*************
document.querySelector(".game").addEventListener("click", gunShots);

function gunShots() {
  gunShot.currentTime = 0;
  gunShot.play();
  //    document.querySelector("#gun_fire").style.visibility = "visible";
  //    document.querySelector("#gun_fire").offsetHeight;
  //    document.querySelector("#gun_fire").style.visibility = "hidden";
}

//*******************pause***************

function pauseGame() {
  if (gameIsPaused == false) {
    document.querySelector(".pause_menu").style.visibility = "visible";

    backSound.pause();
    gunShot.pause();
    fireZombie.pause();
    fireWorker.pause();
    heartSound.pause();

    document.querySelector(".pause").style.backgroundImage =
      "url('http://meetstephen.dk/KEA/theme_1_bw/basic_animation/module_01/project/product/svg/play.svg')";

    document.querySelector("#zombie-container").classList.add("stop");
    document.querySelector("#zombie-container2").classList.add("stop");
    document.querySelector("#zombie-container3").classList.add("stop");
    document.querySelector("#worker-container").classList.add("stop");
    document.querySelector("#worker-container2").classList.add("stop");
    document.querySelector("#worker-container3").classList.add("stop");

    document.querySelector("#zombie").classList.add("stop");
    document.querySelector("#zombie2").classList.add("stop");
    document.querySelector("#zombie3").classList.add("stop");
    document.querySelector("#worker").classList.add("stop");
    document.querySelector("#worker2").classList.add("stop");
    document.querySelector("#worker3").classList.add("stop");

    document.querySelector("#zombie-container").offsetHeight;

    gameIsPaused = true;
  } else {
    document.querySelector(".pause_menu").style.visibility = "hidden";

    backSound.play();

    document.querySelector(".pause").style.backgroundImage =
      "url('http://meetstephen.dk/KEA/theme_1_bw/basic_animation/module_01/project/product/svg/pause.svg')";

    document.querySelector("#zombie-container").classList.remove("stop");
    document.querySelector("#zombie-container2").classList.remove("stop");
    document.querySelector("#zombie-container3").classList.remove("stop");
    document.querySelector("#worker-container").classList.remove("stop");
    document.querySelector("#worker-container2").classList.remove("stop");
    document.querySelector("#worker-container3").classList.remove("stop");

    document.querySelector("#zombie").classList.remove("stop");
    document.querySelector("#zombie2").classList.remove("stop");
    document.querySelector("#zombie3").classList.remove("stop");
    document.querySelector("#worker").classList.remove("stop");
    document.querySelector("#worker2").classList.remove("stop");
    document.querySelector("#worker3").classList.remove("stop");

    gameIsPaused = false;

    startTimer();
  }
}

//***************restart game****************
function restartGame() {
  backSound.muted = false;
  gunShot.muted = false;
  fireZombie.muted = false;
  fireWorker.muted = false;

  backSound.currentTime = 0;
  backSound.play();
  backSound.loop = true;

  gameOverSound.pause();
  levelCompleteSound.pause();

  if (soundMute == true) {
    soundsOn();
  }

  document.querySelector(".life_happy_player").style.visibility = "visible";
  document.querySelector(".life_sad_player").style.visibility = "hidden";

  //    document.querySelector(".title_screen").style.visibility = "hidden";
  document.querySelector(".game_over").style.visibility = "hidden";
  document.querySelector(".level_clear").style.visibility = "hidden";
  document.querySelector(".life_liquid").style.visibility = "visible";
  document.querySelector(".life_liquid_two").style.visibility = "visible";

  document.querySelector(".game").classList.remove("shake");

  life = 3;
  score = 0;

  document.querySelector("#zombie-container").classList.remove("stop");
  document.querySelector("#zombie-container2").classList.remove("stop");
  document.querySelector("#zombie-container3").classList.remove("stop");
  document.querySelector("#worker-container").classList.remove("stop");
  document.querySelector("#worker-container2").classList.remove("stop");
  document.querySelector("#worker-container3").classList.remove("stop");

  document.querySelector("#zombie").classList.remove("stop");
  document.querySelector("#zombie2").classList.remove("stop");
  document.querySelector("#zombie3").classList.remove("stop");
  document.querySelector("#worker").classList.remove("stop");
  document.querySelector("#worker2").classList.remove("stop");
  document.querySelector("#worker3").classList.remove("stop");

  //    **************add pointer events in restart****************
  document.querySelector("#zombie-container").style.pointerEvents = "auto";
  document.querySelector("#zombie-container2").style.pointerEvents = "auto";
  document.querySelector("#zombie-container3").style.pointerEvents = "auto";

  document.querySelector("#worker-container").style.pointerEvents = "auto";
  document.querySelector("#worker-container2").style.pointerEvents = "auto";
  document.querySelector("#worker-container3").style.pointerEvents = "auto";

  gameHasEnded = false;
  gameStart();
}

//***********timer**************
function startTimer() {
  console.log("function startTimer()");

  if (gameIsPaused == false) {
    if (timeleft == 0) {
      levelComplete();
    } else {
      setTimeout(showTime, 100);
    }
  }
}

function showTime() {
  console.log("function showTime()");

  if (timeleft > 0) {
    deciSeconds--;
    timeleft = Math.ceil(deciSeconds / 10);
    console.log("Time left: " + timeleft);
    startTimer();
    document.querySelector(".timer").textContent = timeleft;
  } else {
    levelComplete();
  }
}

//***************sounds on****************
document.querySelector(".sound_on").addEventListener("click", soundsOn);

function soundsOn() {
  soundMute = true;

  document.querySelector(".sound_on").style.visibility = "hidden";
  document.querySelector(".sound_off").style.visibility = "visible";
  backSound.muted = true;
  gunShot.muted = true;
  fireZombie.muted = true;
  fireWorker.muted = true;
  heartSound.muted = true;
  levelCompleteSound.muted = true;
}

//***************sounds off****************
document.querySelector(".sound_off").addEventListener("click", soundsOff);

function soundsOff() {
  soundMute = false;

  document.querySelector(".sound_on").style.visibility = "visible";
  document.querySelector(".sound_off").style.visibility = "hidden";
  backSound.muted = false;
  gunShot.muted = false;
  fireZombie.muted = false;
  fireWorker.muted = false;
  heartSound.muted = false;
  levelCompleteSound.muted = false;
}

//***************level complete****************
function levelComplete() {
  if (gameHasEnded == false) {
    levelCompleteSound.currentTime = 0;
    levelCompleteSound.play();

    backSound.muted = true;
    gunShot.muted = true;
    fireZombie.muted = true;
    fireWorker.muted = true;

    document.querySelector("#zombie-container").classList.value = "";
    document.querySelector("#zombie-container2").classList.value = "";
    document.querySelector("#zombie-container3").classList.value = "";
    document.querySelector("#worker-container").classList.value = "";
    document.querySelector("#worker-container2").classList.value = "";
    document.querySelector("#worker-container3").classList.value = "";

    document.querySelector("#zombie").classList.value = "";
    document.querySelector("#zombie2").classList.value = "";
    document.querySelector("#zombie3").classList.value = "";
    document.querySelector("#worker").classList.value = "";
    document.querySelector("#worker2").classList.value = "";
    document.querySelector("#worker3").classList.value = "";

    document.querySelector("#zombie").offsetHeight;

    //    *******hide first********
    document.querySelector(".level_clear").style.visibility = "visible";

    document
      .querySelector(".play_again")
      .addEventListener("click", restartGame);
    gameHasEnded = true;
  }
}

//************game over****************
function gameOver() {
  if (gameHasEnded == false) {
    backSound.pause();
    gameOverSound.currentTime = 0;
    gameOverSound.play();
    gameOverSound.loop = true;

    document.querySelector("#zombie-container").className = "";
    document.querySelector("#zombie-container2").className = "";
    document.querySelector("#zombie-container3").className = "";
    document.querySelector("#worker-container").className = "";
    document.querySelector("#worker-container2").className = "";
    document.querySelector("#worker-container3").className = "";

    document.querySelector("#zombie").classList.value = "";
    document.querySelector("#zombie2").classList.value = "";
    document.querySelector("#zombie3").classList.value = "";
    document.querySelector("#worker").classList.value = "";
    document.querySelector("#worker2").classList.value = "";
    document.querySelector("#worker3").classList.value = "";

    document.querySelector("#zombie").offsetHeight;

    //    *******hide first********
    document.querySelector(".game_over").style.visibility = "visible";

    document
      .querySelector(".restart_button")
      .addEventListener("click", restartGame);

    document.querySelector(".your_score").textContent = " " + score;
    document.querySelector(".score_blink").classList.add("blinking");

    gameHasEnded = true;
  }
}

//*************zombie minus life***************
document
  .querySelector("#zombie-container")
  .addEventListener("animationiteration", minusLife);
document
  .querySelector("#zombie-container2")
  .addEventListener("animationiteration", minusLife);
document
  .querySelector("#zombie-container3")
  .addEventListener("animationiteration", minusLife);

function minusLife() {
  life--;

  document.querySelector(".game").classList.remove("shake");
  document.querySelector(".game").offsetHeight;

  if (life == 2) {
    document.querySelector(".life_liquid").style.visibility = "hidden";
    document.querySelector(".game").classList.add("shake");

    heartSound.currentTime = 0;
    heartSound.play();
  }

  if (life == 1) {
    document.querySelector(".life_liquid_two").style.visibility = "hidden";
    document.querySelector(".game").classList.add("shake");

    heartSound.currentTime = 0;
    heartSound.play();
    document.querySelector(".life_happy_player").style.visibility = "hidden";
  }

  if (life == 0) {
    gameOver();
  }
}

//***********zombie***********
document
  .querySelector("#zombie-container")
  .addEventListener("click", stopZombie);

function stopZombie() {
  console.log("function stopZombie()");

  document.querySelector("#character").style.backgroundImage =
    "url('http://meetstephen.dk/KEA/theme_1_bw/basic_animation/module_01/project/product/svg/character.svg')";

  //    **unclick***
  document.querySelector("#zombie-container").style.pointerEvents = "none";

  fireZombie.currentTime = 0;
  fireZombie.play();

  //    **points zombie***
  let zombpts = 50;
  score = score + zombpts;

  document.querySelector(".points").textContent = score + "pts";

  document.querySelector("#zombie").classList.remove("zombie_alive");
  //    **using 'this'***
  document.querySelector("#zombie").classList.add("zoom_in");
  this.classList.add("stop");

  document
    .querySelector("#zombie")
    .addEventListener("animationend", restartZombie);
}

function restartZombie() {
  //    **unclick***
  document.querySelector("#zombie-container").style.pointerEvents = "auto";

  document.querySelector("#zombie").classList.add("zombie_alive");

  document.querySelector("#zombie-container").classList.remove("moving1");
  document.querySelector("#zombie").classList.remove("zoom_in");

  document.querySelector("#zombie-container").offsetHeight;

  document.querySelector("#zombie-container").classList.remove("stop");
  document.querySelector("#zombie-container").classList.add("moving1");

  document.querySelector("#zombie-container").classList.add("position1");
}

document
  .querySelector("#zombie-container2")
  .addEventListener("click", stopZombie2);

//***************zombie2****************
function stopZombie2() {
  console.log("function stopZombie2()");

  document.querySelector("#character").style.backgroundImage =
    "url('http://meetstephen.dk/KEA/theme_1_bw/basic_animation/module_01/project/product/svg/character.svg')";

  //    **unclick***
  document.querySelector("#zombie-container2").style.pointerEvents = "none";

  fireZombie.currentTime = 0;
  fireZombie.play();

  //    **points zombie***
  let zombpts = 50;
  score = score + zombpts;

  document.querySelector(".points").textContent = score + "pts";

  document.querySelector("#zombie2").classList.remove("zombie_alive");
  //    **using 'this'***
  document.querySelector("#zombie2").classList.add("zoom_in");
  this.classList.add("stop");

  document
    .querySelector("#zombie2")
    .addEventListener("animationend", restartZombie2);
}

function restartZombie2() {
  //    **unclick***
  document.querySelector("#zombie-container2").style.pointerEvents = "auto";

  document.querySelector("#zombie2").classList.add("zombie_alive");

  document.querySelector("#zombie-container2").classList.remove("moving2");
  document.querySelector("#zombie2").classList.remove("zoom_in");

  document.querySelector("#zombie-container2").offsetHeight;

  document.querySelector("#zombie-container2").classList.remove("stop");
  document.querySelector("#zombie-container2").classList.add("moving2");

  document.querySelector("#zombie-container2").classList.add("position2");
}

//*************zombie3*************
document
  .querySelector("#zombie-container3")
  .addEventListener("click", stopZombie3);

function stopZombie3() {
  console.log("function stopZombie3()");

  document.querySelector("#character").style.backgroundImage =
    "url('http://meetstephen.dk/KEA/theme_1_bw/basic_animation/module_01/project/product/svg/character.svg')";

  //    **unclick***
  document.querySelector("#zombie-container3").style.pointerEvents = "none";

  fireZombie.currentTime = 0;
  fireZombie.play();

  //    **points zombie***
  let zombpts = 50;
  score = score + zombpts;

  document.querySelector(".points").textContent = score + "pts";

  document.querySelector("#zombie3").classList.remove("zombie_alive");
  //    **using 'this'***
  document.querySelector("#zombie3").classList.add("zoom_in");
  this.classList.add("stop");

  document
    .querySelector("#zombie3")
    .addEventListener("animationend", restartZombie3);
}

function restartZombie3() {
  //    **unclick***
  document.querySelector("#zombie-container3").style.pointerEvents = "auto";

  document.querySelector("#zombie3").classList.add("zombie_alive");

  document.querySelector("#zombie-container3").classList.remove("moving3");
  document.querySelector("#zombie3").classList.remove("zoom_in");

  document.querySelector("#zombie-container3").offsetHeight;

  document.querySelector("#zombie-container3").classList.remove("stop");
  document.querySelector("#zombie-container3").classList.add("moving3");

  document.querySelector("#zombie-container3").classList.add("position3");
}

//*********worker***********
document
  .querySelector("#worker-container")
  .addEventListener("click", stopWorker);

function stopWorker() {
  console.log("function stopWorker()");

  document.querySelector("#character").style.backgroundImage =
    "url('http://meetstephen.dk/KEA/theme_1_bw/basic_animation/module_01/project/product/svg/character_sad.svg')";

  fireWorker.currentTime = 0;
  fireWorker.play();

  //    **unclick***
  document.querySelector("#worker-container").style.pointerEvents = "none";

  //    **points zombie***
  let workpts = 10;
  score = score - workpts;

  if (score < 0) {
    score = 0;
  }

  document.querySelector(".points").textContent = score + "pts";

  document.querySelector("#worker").classList.remove("worker_alive");

  document.querySelector("#worker").classList.add("zoom_in");
  document.querySelector("#worker-container").classList.add("stop");

  document
    .querySelector("#worker")
    .addEventListener("animationend", restartWorker);
}

function restartWorker() {
  //    **unclick***
  document.querySelector("#worker-container").style.pointerEvents = "auto";

  document.querySelector("#worker").classList.add("worker_alive");

  document.querySelector("#worker-container").classList.remove("moving4");
  document.querySelector("#worker").classList.remove("zoom_in");

  document.querySelector("#worker-container").offsetHeight;

  document.querySelector("#worker-container").classList.remove("stop");
  document.querySelector("#worker-container").classList.add("moving4");

  document.querySelector("#worker-container").classList.add("position4");
}

//******************worker2***************
document
  .querySelector("#worker-container2")
  .addEventListener("click", stopWorker2);

function stopWorker2() {
  console.log("function stopWorker2()");

  document.querySelector("#character").style.backgroundImage =
    "url('http://meetstephen.dk/KEA/theme_1_bw/basic_animation/module_01/project/product/svg/character_sad.svg')";

  fireWorker.currentTime = 0;
  fireWorker.play();

  //    **unclick***
  document.querySelector("#worker-container2").style.pointerEvents = "none";

  //    **points zombie***
  let workpts = 10;
  score = score - workpts;

  if (score < 0) {
    score = 0;
  }

  document.querySelector(".points").textContent = score + "pts";

  document.querySelector("#worker2").classList.remove("worker_alive");

  document.querySelector("#worker2").classList.add("zoom_in");
  document.querySelector("#worker-container2").classList.add("stop");

  document
    .querySelector("#worker2")
    .addEventListener("animationend", restartWorker2);
}

function restartWorker2() {
  //    **unclick***
  document.querySelector("#worker-container2").style.pointerEvents = "auto";

  document.querySelector("#worker2").classList.add("worker_alive");

  document.querySelector("#worker-container2").classList.remove("moving5");
  document.querySelector("#worker2").classList.remove("zoom_in");

  document.querySelector("#worker-container2").offsetHeight;

  document.querySelector("#worker-container2").classList.remove("stop");
  document.querySelector("#worker-container2").classList.add("moving5");

  document.querySelector("#worker-container2").classList.add("position5");
}

//******************worker3***************
document
  .querySelector("#worker-container3")
  .addEventListener("click", stopWorker3);

function stopWorker3() {
  console.log("function stopWorker3()");

  document.querySelector("#character").style.backgroundImage =
    "url('http://meetstephen.dk/KEA/theme_1_bw/basic_animation/module_01/project/product/svg/character_sad.svg')";

  fireWorker.currentTime = 0;
  fireWorker.play();

  //    **unclick***
  document.querySelector("#worker-container3").style.pointerEvents = "none";

  //    **points zombie***
  let workpts = 10;
  score = score - workpts;

  if (score < 0) {
    score = 0;
  }

  document.querySelector(".points").textContent = score + "pts";

  document.querySelector("#worker3").classList.remove("worker_alive");

  document.querySelector("#worker3").classList.add("zoom_in");
  document.querySelector("#worker-container3").classList.add("stop");

  document
    .querySelector("#worker3")
    .addEventListener("animationend", restartWorker3);
}

function restartWorker3() {
  //    **unclick***
  document.querySelector("#worker-container3").style.pointerEvents = "auto";

  document.querySelector("#worker3").classList.add("worker_alive");

  document.querySelector("#worker-container3").classList.remove("moving6");
  document.querySelector("#worker3").classList.remove("zoom_in");

  document.querySelector("#worker-container3").offsetHeight;

  document.querySelector("#worker-container3").classList.remove("stop");
  document.querySelector("#worker-container3").classList.add("moving6");

  document.querySelector("#worker-container3").classList.add("position6");
}

//**************if statement************
