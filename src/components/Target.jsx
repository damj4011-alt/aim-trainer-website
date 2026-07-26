export default function Target({
x,
y,
size,
onHit,
moving
}){


return(

<div

className={
moving
?
"target moving"
:
"target"
}


style={{

left:x,
top:y,
width:size,
height:size

}}


onClick={onHit}

/>

)

}