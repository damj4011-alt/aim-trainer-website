import Card from "../components/Card";


export default function Home(){

return(

<main>

<section className="hero">

<h1>
Train Like A Pro
</h1>

<p>
Improve your reaction time, accuracy and tracking skills.
</p>


<button>
Start Training
</button>


</section>



<section className="stats">


<Card
icon="🎯"
title="Best Score"
value="0"
/>


<Card
icon="⚡"
title="Reaction Time"
value="0ms"
/>


<Card
icon="🔥"
title="Streak"
value="0 Days"
/>


<Card
icon="🏆"
title="Rank"
value="Bronze"
/>


</section>



</main>

)

}