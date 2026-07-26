const defaultSettings = {

username:"Player",

crosshair:"cross",

targetColor:"#ff3030",

difficulty:"Normal",

sound:true,

theme:"Dark"

};


export function loadSettings(){

const saved =
localStorage.getItem("proaim_settings");


if(saved){

return JSON.parse(saved);

}


localStorage.setItem(
"proaim_settings",
JSON.stringify(defaultSettings)
);


return defaultSettings;

}



export function saveSettings(settings){

localStorage.setItem(
"proaim_settings",
JSON.stringify(settings)
);

}