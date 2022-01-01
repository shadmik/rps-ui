let humanScore=0;
let computerScore=0;
let humanName= prompt("Enter Your Name:",'Honululu');
let computerNameScore=document.getElementById('computerNameScore');

let nameScore=document.getElementById('nameScore');
let compPhoto=document.getElementById('compPhoto');
nameScore.textContent=`${humanName} : ${humanScore}`;
let showMsg=document.getElementById('showMsg');
let compChoiceArray=['rock', 'paper', 'scissors'];
function compChoice(){
    return compChoiceArray[Math.floor(Math.random()* compChoiceArray.length)]
}
let compSelection;
let rock = document.getElementById('rock');
let paper= document.getElementById('paper');
let scissors= document.getElementById('scissors');
rock.addEventListener('click', ()=>{
    if(computerScore <5 && humanScore<5){
    compSelection= compChoice();
    compChoicePhoto();
    if(compSelection=='rock'){
        showMsg.textContent='It\'s a Draw!'
    }else if(compSelection=='paper'){
        showMsg.textContent='You Lose! Paper grabs rock!';
        computerScore++;
        computerNameScore.textContent=`Computer : ${computerScore}`;
    }else if(compSelection=='scissors'){
        showMsg.textContent='You win! Rock smashes scissors!';
        humanScore++;
        nameScore.textContent=`${humanName} : ${humanScore}`;

    }}else{
        showMsg.style.color='rgb(128, 255, 0)';
        if(computerScore==5){showMsg.textContent='Game Over! Computer is the winner!'}
        else{
            showMsg.textContent=`Game Over! ${humanName}, you're the winner!`
    }}
})
paper.addEventListener('click', ()=>{
    if(computerScore <5 && humanScore<5){
    compSelection= compChoice();
    compChoicePhoto();
    if(compSelection=='paper'){
        showMsg.textContent='It\'s a Draw!'
    }else if(compSelection=='scissors'){
        showMsg.textContent='You Lose! Scissors cut paper!';
        computerScore++;
        computerNameScore.textContent=`Computer : ${computerScore}`;
    }else if(compSelection=='rock'){
        showMsg.textContent='You win! Paper grabs rock!';
        humanScore++;
        nameScore.textContent=`${humanName} : ${humanScore}`;

    }}else{
        showMsg.style.color='rgb(128, 255, 0)';
        if(computerScore==5){showMsg.textContent='Game Over! Computer is the winner!'}else{
            showMsg.textContent=`Game Over! ${humanName}, you're the winner!`
        }
    }
})
scissors.addEventListener('click', ()=>{
    if(computerScore <5 && humanScore<5){
        compSelection= compChoice();
        compChoicePhoto();
    if(compSelection=='scissors'){
        showMsg.textContent='It\'s a Draw!'
    }else if(compSelection=='rock'){
        showMsg.textContent='You Lose! Rock smashes scissors!';
        computerScore++;
        computerNameScore.textContent=`Computer : ${computerScore}`;
    }else if(compSelection=='paper'){
        showMsg.textContent='You win! Scissors cut paper!';
        humanScore++;
        nameScore.textContent=`${humanName} : ${humanScore}`;

    }}else{
        showMsg.style.color='rgb(128, 255, 0)';
        if(computerScore==5){showMsg.textContent='Game Over! Computer is the winner!'}else{
            showMsg.textContent=`Game Over! ${humanName}, you're the winner!`
    }}
})
function compChoicePhoto(){
    if(compPhoto.childElementCount>=1){
        let img=document.getElementById('compLogo')
        compPhoto.removeChild(img);
    }
        if(compSelection=='rock'){
            let img=document.createElement('img');
        img.id='compLogo';
        img.src='./images/rock.jpg';
            compPhoto.appendChild(img)
        }else if(compSelection=='paper'){
            let img=document.createElement('img');
        img.id='compLogo';
        img.src='./images/paper.jpg';
            compPhoto.appendChild(img)
        }else if(compSelection=='scissors'){
            let img=document.createElement('img');
        img.id='compLogo';
        img.src='./images/scissors.jpg';
            compPhoto.appendChild(img)
        }
        
    
}