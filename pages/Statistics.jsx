import {useEffect,useState} from "react";
import {loadPlayer} from "../data/player";


export default function Statistics(){

const [player,setPlayer]=useState(null);



useEffect(()=>{

setPlayer(loadPlayer());

},[]);



if(!player)return null;



const accuracy =
player.totalShots
?
Math.round(
(player.hits/player.totalShots)*100
)
:
0;



const averageReaction =
player.reactionTimes.length
?
Math.round(
player.reactionTimes.reduce(
(a,b)=>a+b
,0)
/
player.reactionTimes.length
)
:
0;



return(

<div className="stats-page">


<h1>
📊 Statistics
</h1>



<div className="profile-card">


<h2>
{player.name}
</h2>


<p>
Level {player.level}
</p>


<p>
XP:
{player.xp}
</p>


</div>




<div className="stats-grid">


<div className="stat-box">

<h3>
🏆 Best Score
</h3>

<p>
{player.bestScore}
</p>

</div>



<div className="stat-box">

<h3>
🎯 Accuracy
</h3>

<p>
{accuracy}%
</p>

</div>




<div className="stat-box">

<h3>
⚡ Reaction
</h3>

<p>
{averageReaction}ms
</p>

</div>




<div className="stat-box">

<h3>
🎮 Games
</h3>

<p>
{player.games}
</p>

</div>



</div>


</div>

)

}