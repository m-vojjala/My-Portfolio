import { Cell, Grid } from "react-mdl";
import "./Home.css";


export default function Home(){
  return <section id="home"> 
    <Grid className="home-grid">
      <Cell className="home-cell" col={12}>
        <div className="image-cropper">
     <img src="https://cdn.dribbble.com/users/1070859/screenshots/5869416/gal-_dribbble__still_2x.gif?compress=1&resize=400x300" alt="avatar" />
     </div>
    <h3 className="name">MOUNIKA VOJJALA</h3>
    <ul className="icons"></ul>
    <a href="https://www.linkedin.com/in/mounika-vojjala-a157a98a/"><i  class="fab fa-linkedin-in fa-4x" ></i></a>
    <a href="https://github.com"><i  class="fab fa-github fa-4x" ></i></a>
    </Cell>
    </Grid>
  </section>
}
