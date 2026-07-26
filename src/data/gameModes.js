export const gameModes = {

gridshot:{
    name:"Gridshot",
    description:"Hit as many targets as possible.",
    targetCount:1,
    size:65,
    speed:0,
    scoreMultiplier:1
},


sixshot:{
    name:"Sixshot",
    description:"Six targets appear at once.",
    targetCount:6,
    size:45,
    speed:0,
    scoreMultiplier:2
},


reflex:{
    name:"Reflex",
    description:"Targets disappear quickly.",
    targetCount:1,
    size:35,
    speed:0,
    lifetime:700,
    scoreMultiplier:3
},


tracking:{
    name:"Tracking",
    description:"Follow moving targets.",
    targetCount:1,
    size:55,
    speed:4,
    scoreMultiplier:2
}

};