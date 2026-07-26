const defaultPlayer = {

name:"Player",

level:1,

xp:0,

games:0,

bestScore:0,

totalShots:0,

hits:0,

reactionTimes:[]

};


export function loadPlayer(){

const saved =
localStorage.getItem("proaim_player");


if(saved){

return JSON.parse(saved);

}


localStorage.setItem(
"proaim_player",
JSON.stringify(defaultPlayer)
);


return defaultPlayer;

}



export function savePlayer(player){

localStorage.setItem(
"proaim_player",
JSON.stringify(player)
);

}