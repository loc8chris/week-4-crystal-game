let targetScore = Math.floor(Math.random()*30+20)
let wins = 0
let losses = 0
let gemValues = [0,0,0,0]
let runningScore = 0
let previousScore = 0
let previousTarget = 0

function startGame(){

    //set the inital values for the game
    //
    //the values for wins and losses are only set once
    runningScore = 0;
    targetScore = Math.floor(Math.random()*30+20)

    //Set the hidden gem values for each gem
    //to a random value between 1 and 20
    //the random value is between 0-19 
    //and then we add 1 to that random value
    gemValues[0] = Math.floor(Math.random()*20+1)
    gemValues[1] = Math.floor(Math.random()*20+1)
    gemValues[2] = Math.floor(Math.random()*20+1)
    gemValues[3] = Math.floor(Math.random()*20+1)

    displayScoreBoard()
}

function handleClick(x){

    console.log("click handled for " + x)

    runningScore += gemValues[x]
    previousScore = runningScore
    previousTarget = targetScore

    if(targetScore === runningScore){
        console.log("game won")
        wins += 1
        startGame()
    }
    else if(targetScore < runningScore){
        console.log("game lost")
         losses += 1
        startGame()
    }

    displayScoreBoard()
}

function displayScoreBoard(){
    //set wins using jQuery
    //https://stackoverflow.com/questions/1309452/how-to-replace-innerhtml-of-a-div-using-jquery
    $('#wins').html(wins.toString())
    $('#losses').html(losses.toString())
    $('#target-score').html(targetScore.toString())
    $('#score').html(runningScore.toString())
    $('#previous-score').html(previousScore.toString())
    $('#previous-target').html(previousTarget.toString())
}

//Use document ready to wait on the document to load
//if you we do not wait for the document to load before
//binding to html elements we can get nasty null surprises
$(document).ready( function(){

    console.log("document loaded")

    //Bind click events to images
    //based on the image ids
    //the image names start at 1 but
    //the array of values start at 0
    $("#img1").click(function(){
        handleClick(0)}
    )
    $("#img2").click(function(){
        handleClick(1)}
    )
    $("#img3").click(function(){
        handleClick(2)}
    )
    $("#img4").click(function(){
        handleClick(3)}
    )


    //change cursor to hover on each image
    $('#img1').hover(function() {
        $(this).css('cursor','pointer');
    });
    $('#img2').hover(function() {
        $(this).css('cursor','pointer');
    });
    $('#img3').hover(function() {
        $(this).css('cursor','pointer');
    });
    $('#img4').hover(function() {
        $(this).css('cursor','pointer');
    });

    startGame()
})
