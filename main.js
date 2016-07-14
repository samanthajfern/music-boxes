var cNote = document.getElementById("c_note");

$("#c").click(function(){
  cNote.currentTime = 0;
  cNote.play();
});

var dNote = document.getElementById("d_note");
$("#d").click(function(){
  dNote.currentTime = 0;
  dNote.play();
});

var eNote = document.getElementById("e_note");
$("#e").click(function(){
  eNote.currentTime = 0;
  eNote.play();
});

var fNote = document.getElementById("f_note");
$("#f").click(function(){
  fNote.currentTime = 0;
  fNote.play();
});

var gNote = document.getElementById("g_note");
$("#g").click(function(){
  gNote.currentTime = 0;
  gNote.play();
});

var aNote = document.getElementById("a_note");
$("#a").click(function(){
  aNote.currentTime = 0;
  aNote.play();
});

var bNote = document.getElementById("b_note");
$("#b").click(function(){
  bNote.currentTime = 0;
  bNote.play();
});

var tarNote = document.getElementById("tarj");
$("#tar").click(function(){
  tarNote.play();
});

/*****************************KEY FUNCTIONS*********************************************/

$(document).keydown(function(e){

  if (e.key == "q"){
    cNote.currentTime = 0;
    cNote.play();
  }

  if (e.key == "w"){
    dNote.currentTime = 0;
    dNote.play();
  }

  if (e.key == "e"){
    eNote.currentTime = 0;
    eNote.play();
  }
  if (e.key == "r"){
    fNote.currentTime = 0;
    fNote.play();
  }
  if (e.key == "t"){
    gNote.currentTime = 0;
    gNote.play();
  }
  if (e.key == "y"){
    aNote.currentTime = 0;
    aNote.play();
  }

  if (e.key == "u"){
    bNote.currentTime = 0;
    bNote.play();
  }

  if (e.key == "i"){
    tarNote.currentTime = 0;
    tarNote.play();
  }

});
