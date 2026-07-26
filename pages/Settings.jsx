import {
useState,
useEffect
}
from "react";

import {
loadSettings,
saveSettings
}
from "../data/settings";


export default function Settings(){


const [settings,setSettings]=useState(null);



useEffect(()=>{

setSettings(loadSettings());

},[]);



if(!settings)return null;



function update(key,value){

const updated={

...settings,

[key]:value

};


setSettings(updated);

saveSettings(updated);

}



return(

<div className="settings-page">


<h1>
⚙ Settings
</h1>



<div className="settings-card">


<h2>
Profile
</h2>


<label>
Username
</label>


<input

value={settings.username}

onChange={
e=>
update(
"username",
e.target.value
)
}

/>



<h2>
Crosshair
</h2>


<select

value={settings.crosshair}

onChange={
e=>
update(
"crosshair",
e.target.value
)
}

>

<option value="cross">
Classic
</option>

<option value="dot">
Dot
</option>

<option value="circle">
Circle
</option>


</select>



<h2>
Target Color
</h2>


<input

type="color"

value={settings.targetColor}

onChange={
e=>
update(
"targetColor",
e.target.value
)
}

/>



<h2>
Difficulty
</h2>


<select

value={settings.difficulty}

onChange={
e=>
update(
"difficulty",
e.target.value
)
}

>

<option>
Easy
</option>

<option>
Normal
</option>

<option>
Hard
</option>

<option>
Insane
</option>

</select>



<h2>
Sound
</h2>


<button

onClick={
()=>update(
"sound",
!settings.sound
)
}

>

{
settings.sound
?
"🔊 Enabled"
:
"🔇 Disabled"
}

</button>



</div>


</div>

)

}