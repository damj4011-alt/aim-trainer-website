import Target from "./Target";


export default function TargetManager({
targets,
onHit
}){


return(

<>

{
targets.map(target=>(

<Target

key={target.id}

x={target.x}

y={target.y}

size={target.size}

moving={target.moving}

onHit={()=>onHit(target.id)}

/>

))

}

</>

)

}