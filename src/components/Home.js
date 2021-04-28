import { Cell, Grid } from "react-mdl";
import "./Home.css";


export default function Home(){
  return <section id="home" > 
    <Grid className="home-grid">
      <Cell col={12} tablet={12} phone={12} className="home-cell" >
    <h3 className="name">MOUNIKA VOJJALA</h3>
    <ul className="icons"></ul>
    <a href="https://www.linkedin.com/in/mounika-vojjala-a157a98a/"  target="_blank" rel="noopener noreferrer"><i  class="fab fa-linkedin-in fa-4x" ></i></a>
    <a href="https://github.com/m-vojjala"  target="_blank" rel="noopener noreferrer"><i  class="fab fa-github fa-4x" ></i></a>
    </Cell>
    </Grid>
  </section>
}
