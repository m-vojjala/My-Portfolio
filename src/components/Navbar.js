import { Link } from 'react-scroll';
import {Navigation,Header, Layout} from "react-mdl";
import Home from "./Home"
import "./Navbar.css";

export default function Navbar(){
  return <div className="demo-big-content">
      <Layout fixedHeader>
      <Header title="PORTFOLIO" scroll style={{fontFamily: "'Oxygen', sans-serif"}} >
          <Navigation >   
  <Link style={{fontSize:'16px',cursor: 'pointer'}}
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>HOME</Link>
<Link style={{fontSize:'16px',cursor: 'pointer'}}
    activeClass="active"
    to="projects"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>PROJECTS</Link>
<Link style={{fontSize:'16px',cursor: 'pointer'}}
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>CONTACT</Link>
          </Navigation>
      </Header>
      <Home />
      </Layout>
     </div>
}

