$(document).ready(function() {
  $("#war").click(function() {
    let rChoice = $("#input").val();
    let uChoice = rChoice.toLowerCase();


    let comp = Math.random();

    let cheese = ["rock","paper","scissors"];

    let cheez = Math.floor(comp*cheese.length);

    let enemy = cheese[cheez];
    $("#stupid").append(`<li>${uChoice}</li>`);
    $("#bloodshed").append(`<li>${enemy}</li>`);

  $("input").val("");

    if (uChoice === enemy){
      alert("TIE");
    }
  else if (uChoice === "scissors" && enemy === "rock"){
    alert("you lost :(");
  }
    else if (uChoice === "scissors" && enemy === "paper"){
      alert("you won :)");
    }
      else if (uChoice === "paper" && enemy === "scissors"){
    alert("you lost :(");
  }
    else if (uChoice === "paper" && enemy === "rock"){
      alert("you won :)");
    }
      else if (uChoice === "rock" && enemy === "paper"){
    alert("you lost :(");
  }
    else if (uChoice === "rock" && enemy === "scissors"){
      alert("you won :)");
    }
    else{
      alert("please put an actual choice next time :|")
    }
  });



});