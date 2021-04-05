import { Cell, Grid } from "react-mdl";
import "./Home.css";


export default function Home(){
  return <section id="home" > 
    <Grid className="home-grid">
      <Cell col={12} tablet={12} phone={12} className="home-cell" >
        <div className="image-cropper">
     <img src="https://media-exp1.licdn.com/dms/image/C5603AQF92xy7wLmfSg/profile-displayphoto-shrink_800_800/0/1611865256900?e=1617840000&v=beta&t=1CWDxj3RuZcyUIwPy9k2ebNsAkse_eD1L7liHtmuUyI" alt="avatar" />
     </div>
    <h3 className="name">MOUNIKA VOJJALA</h3>
    <ul className="icons"></ul>
    <a href="https://www.linkedin.com/in/mounika-vojjala-a157a98a/"  target="_blank" rel="noopener noreferrer"><i  class="fab fa-linkedin-in fa-4x" ></i></a>
    <a href="https://github.com/m-vojjala"  target="_blank" rel="noopener noreferrer"><i  class="fab fa-github fa-4x" ></i></a>
    </Cell>
    </Grid>
  </section>
}
