import HitEffect from "../components/HitEffect";

import {
playSound
}
from "../data/sounds";

import {
loadPlayer,
savePlayer,
addXP
}
from "../data/player";

import {useState,useEffect} from "react";
import Target from "../components/Target";
import {modes} from "../data/modes";


export default function Play(){


const [mode,setMode]=useState("gridshot");

const settings=modes[mode];


const [playing,setPlaying]=useState(false);

const [score,setScore]=useState(0);

const [combo,setCombo]=useState(1);

const [time,setTime]=useState(30);

const [target,setTarget]=useState(null);



function spawn(){


setTarget({

x:Math.random()*800,

y:Math.random()*450,

size:settings.targetSize

});


}



function hit(){

let player = loadPlayer();


player.hits++;

player.totalShots++;

player.xp += 5;


if(score > player.bestScore){

player.bestScore = score;

}


savePlayer(player);


setScore(
score + (10 * combo)
);


setCombo(combo+1);


spawn();


}



function start(){

let player = loadPlayer();

player.games++;

savePlayer(player);

setScore(0);

setCombo(1);

setTime(30);

setPlaying(true);

spawn();

}



useEffect(()=>{


if(!playing)return;


const timer=setInterval(()=>{


setTime(t=>{


if(t<=1){

setPlaying(false);

return 0;

}


return t-1;


});


},1000);



return()=>clearInterval(timer);


},[playing]);




return(

<div>


<h1>
Aim Training
</h1>


<div className="modes">


<button onClick={()=>setMode("gridshot")}>
Gridshot
</button>


<button onClick={()=>setMode("reflex")}>
Reflex
</button>


<button onClick={()=>setMode("tracking")}>
Tracking
</button>


</div>



<div className="game-info">


<h2>
Score: {score}
</h2>


<h2>
Combo: x{combo}
</h2>


<h2>
Time: {time}
</h2>


</div>



{

!playing &&

<button onClick={start}>
Start {settings.name}
</button>

}



<div className="aim-area">


{

playing && target &&

<Target

x={target.x}

y={target.y}

size={target.size}

moving={settings.moving}

onHit={hit}

/>

}


</div>



</div>

)

}