export function playSound(type){


const sounds={

hit:"/assets/hit.wav",

miss:"/assets/miss.wav",

level:"/assets/level.wav"

};


if(sounds[type]){

const audio =
new Audio(sounds[type]);

audio.volume=.5;

audio.play();

}


}