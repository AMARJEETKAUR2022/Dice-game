DiceGame = () => {
    sound=()=> {
        let snd = new Audio('sound.mp3')
        snd.play()
    

    let player1 = Math.floor(Math.random()*6)+1;
    let player1dice = `images/D-${player1}.jpg`;
    document.getElementById('check1').setAttribute('src',player1dice);

    let player2 = Math.floor(Math.random()*6)+1;
    let player2dice = `images/D-${player2}.jpg`;
    document.getElementById('check2').setAttribute('src',player2dice);


    if (player1>player2){
        document.querySelector('h1').innerHTML="🎊Player1 Wins the Game🎊";   
    }
    else if (player1<player2){
        document.querySelector('h1').innerHTML="🎊Player2 Wins the Game🎊";
    }
    else {
        document.querySelector('h1').innerHTML="🎈OOPS! It's a draw.🎈";
    }

}
}