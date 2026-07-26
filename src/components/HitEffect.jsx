export default function HitEffect({x,y,type}){

return(

<div
className={
type==="hit"
?
"hit-effect"
:
"miss-effect"
}

style={{
left:x,
top:y
}}

>

{
type==="hit"
?
"+10"
:
"MISS"
}

</div>

)

}