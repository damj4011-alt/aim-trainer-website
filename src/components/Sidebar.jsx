import { Link } from "react-router-dom";

export default function Sidebar(){

return(
<aside className="sidebar">

<div className="brand">
🎯 ProAim
</div>

<nav>

<Link to="/">
🏠 Dashboard
</Link>

<Link to="/play">
🎮 Play
</Link>

<Link to="/statistics">
📊 Statistics
</Link>

<Link to="/settings">
⚙ Settings
</Link>

</nav>

<div className="version">
ProAim v1.0
</div>

</aside>
)

}