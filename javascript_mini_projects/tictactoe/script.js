let boxes=document.querySelectorAll(".box");  
let resetbtn=document.getElementById("resetbtn");
let turno =true;            //initially set to true
let newgame=document.getElementById('newbtn');
let winmsg=document.getElementById('winmsg');
let winbox=document.getElementById('winbox');
let count=0;

let winningPatterns=[[0,1,2],
                     [0,3,6],
                     [0,4,8],
                     [1,4,7],
                     [2,5,8],
                     [2,4,6],
                     [3,4,5],
                    [6,7,8]]; 

  function resetgame()
  {
    turno=true;
    enableBoxes();
    winbox.classList.add('hide');
    count=0;
    isWinner=false;
  }
  function enableBoxes()
  {
      boxes.forEach((box)=>
    {
        box.disabled=false;
        box.textContent="";     
    })
  }
  function disableBoxes()
  {
    boxes.forEach((box)=>
        {
              box.disabled=true;
        }
        )
  }
  function checkwinner(boxes)
  {
    
      //go to the winning pattern index and check the value
      winningPatterns.forEach((winningpattern)=>
        {
                //extracted 1 pattern
                //[0,1,2]
                //boxes nodelist
               let val1= boxes[winningpattern[0]].textContent;
               let val2= boxes[winningpattern[1]].textContent;
               let val3= boxes[winningpattern[2]].textContent;
               //if any of it is empty it cant be possible
               if(val1!=="" && val2!=="" && val3!=="")
               {
                   if(val1===val2 && val2===val3)       //exact same
                   {
                     //add html for winner 
                    winmsg.textContent=`Congratulations,winner is ${val1}`;
                     winbox.classList.remove("hide");
                     disableBoxes();
                      return true;
                   }
              }
        })
  };
  

    boxes.forEach(box=>{
    box.addEventListener("click",function()
{
    count++;    //will increase the count on clicking
    if(turno)
    {
        box.textContent="O";
        turno=false;
    }
    else 
    {
        box.textContent="X";
        turno=true;
    }
    box.disabled=true;      //after marking a box symbol should not change
    let isWinner=checkwinner(boxes);          //scope of iswinner inside function only so no need to update for new game 
    if(!isWinner  && count===9)               //if iswinner=true from previous game and now game is draw so it should be undefined but never meets condition
    {
        winmsg.textContent = `Game is a draw`;
        winbox.classList.remove("hide");
        disableBoxes();
    }}
  )
} )
  
  
  newgame.addEventListener('click',resetgame);
  resetbtn.addEventListener("click",resetgame);
