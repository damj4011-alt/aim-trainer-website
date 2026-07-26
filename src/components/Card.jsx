export default function Card({title,value,icon}){


return(

<div className="card">

<div className="card-icon">
{icon}
</div>


<div>

<p>{title}</p>

<h2>
{value}
</h2>

</div>


</div>

)

}