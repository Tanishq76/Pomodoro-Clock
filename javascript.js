$("document").ready(function(){
  // variable for value of session time
  var time =parseInt($("#timer").html());
  // variable for value of break time
  var brk =parseInt($("#timerBreak").html());
  // audio file
 var buzzer = document.getElementById("audio");
// hidden reset button
$("#reset").hide();
// onClick event for minus button session time
    $("#minus5").on("click",function(){
      if (time > 5){
   time -=5;
  $("#timer").html(time);
}else {
    $("#timer").html(time);
}
  });
// onClick event for plus button session time
  $("#plus5").on("click",function(){
  time +=5;
  $("#timer").html(time);
} );
//onclick event for minus button break time
$("#minus5Break").on("click",function(){
  if (brk > 5){
brk -=5;
$("#timerBreak").html(brk);

}else {
$("#timerBreak").html(brk);

}
});
// on click event for plus button break time
$("#plus5Break").on("click",function(){

  brk +=5;
  $("#timerBreak").html(brk);
} );

 //on Click event for start button

$("#start").click(function activate(){
  //sets interval for count down
  var count= setInterval(counter, 1000);
  // minutes converted into seconds
time*=60;
// function to be executed on clicking start button
  function counter(){
    if(time>0){
      $("#display").show();
      $("#display").html("Session Time");
        $("#start,#minus5,#plus5,#minus5Break,#plus5Break,#break,#timerBreak,#length").hide();
      time-=1;
      // to show time in minutes:seconds format if else is used
  if (time%60>=10) {
              $("#timer").html(Math.floor(time/60)+":"+time%60);
      } else {
        $("#timer").html(Math.floor(time/60)+":0"+time%60);
      }
// time = 0 stop function, clear counter and play audio.
      if (time===0) {
        buzzer.play();
        clearInterval(count);
        $("#timer").hide();
        $("#timerBreak").show();
        $("#display").html("Break Time");
        // set interval for break time
  var breakCount = setInterval(counterBreak,1000);
  // function for break time
  function counterBreak(){
    if(brk>0){
          brk-=1;
          $("#timerBreak").html(brk);
          // break time =0 clear interval, show reset button and play the audio
          if (brk===0){
            buzzer.play();
            clearInterval(breakCount);
                $("#reset").show();
          }
        }
  }
  }
}
}

});
// resets the clock.
$("#reset").click(function reset(){
  $("#timer,#minus5,#minus5Break,#plus5,#plus5Break,#length,#break,#start").show();
  $("#reset,#display").hide();
var timer=0;
var timerBreak=0;
$("#timer").html(timer);
$("#timerBreak").html(timerBreak);
});
});
