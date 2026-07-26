import {gameModes} from "../data/gameModes";


export default function ModeSelector({
selected,
setSelected
}){


return(

<div className="mode-selector">


{
Object.keys(gameModes).map(mode=>(

<button

key={mode}

className={
selected===mode
?
"selected-mode"
:
""
}

onClick={()=>
setSelected(mode)
}

>

{gameModes[mode].name}

</button>

))

}


</div>

)

}