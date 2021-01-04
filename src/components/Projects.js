import { Card, CardTitle, CardText } from 'react-mdl';
import "./Projects.css";

export default function Projects() {
    return <section className="project" id="projects" >
        <h3 className="project-head"> PROJECTS </h3>
        <section className="card" >
            <div className="project-first" >
                <a href="https://github.com/m-vojjala/tweeter" style={{ textDecoration: 'none' }}>
                    <Card shadow={0} style={{ width: '350px', height: '350px', margin: 'auto', borderRadius: '10px' }} >
                        <CardTitle expand style={{ color: '#00008B', background: 'url(images/thumb_tweeternew.png) no-repeat', borderBottom: ' #325C74 solid thin' }}> </CardTitle>
                        <CardText style={{ color: '#325C74', background: '#F3F2F2' }}>
                            <strong >Tweeter</strong> is a simple, single-page Twitter clone that uses HTML, CSS, JS, jQuery, AJAX on the client-side, and Node, Express and MongoDB on the server-side. <strong>(November 21, 2020)</strong>
                        </CardText>
                    </Card ></a >
                <a href="https://github.com/m-vojjala/tinyapp" style={{ textDecoration: 'none' }}>
                    <Card shadow={0} style={{ width: '350px', height: '350px', margin: 'auto', borderRadius: '10px', marginTop: '40px' }}>
                        <CardTitle expand style={{ color: '#00008B', background: 'url(images/thumb_tinyappurl.png) no-repeat', borderBottom: ' #325C74 solid thin' }}></CardTitle>
                        <CardText style={{ color: '#325C74', background: '#F3F2F2' }}>
                            <strong > TinyApp </strong> is a full stack web app built with Node and Express that allows users to shorten long URLs. <strong > (November 12, 2020) </strong>
                        </CardText >
                    </Card></a>
            </div>
            <div className="project-second" >
                <a href="https://github.com/jjung219/MoveIt-app" style={{ textDecoration: 'none' }}>
                    <Card shadow={0} style={{ width: '350px', height: '350px', margin: 'auto', borderRadius: '10px' }}>
                        <CardTitle expand style={{ color: '#E0FFFF', background: 'url(images/thumb_moveit.png) right 30% bottom 30% no-repeat', borderBottom: ' #325C74 solid thin' }}> </CardTitle>
                        <CardText style={{ color: '#325C74', background: '#F3F2F2' }}>
                            <strong > MoveIt </strong> is a full stack web app built with Bootstrap, SASS, Node Js, Express, Postgresql that let users to buy or sell  furniture items.
            <strong>(December 04, 2020)</strong>
                        </CardText >
                    </Card></a >
                <a href="https://github.com/m-vojjala/scheduler" style={{ textDecoration: 'none' }}>
                    <Card shadow={0} style={{ width: '350px', height: '350px', margin: 'auto', borderRadius: '10px', marginTop: '40px' }}>
                        <CardTitle expand style={{ color: '#E0FFFF', background: 'url(images/thumb_scheduler1.png) no-repeat', borderBottom: ' #325C74 solid thin', textAlign: 'center' }}>
                        </CardTitle>
                        <CardText style={{ color: '#325C74', background: '#F3F2F2',fontSize:'5px'}}>
                            <strong > Scheduler </strong> is a app that allow users to book, cancel the interview appointments.It is built with React, SASS, WebPack, Babel, Axios on client-side. Node.js, Express, Postgres on server-side. Storybook, Testing Library, WebPack Dev Server, Jest, and Cypress for testing.
                    <strong>(December 16, 2020)</strong>
                        </CardText>
                    </Card > </a >
            </div >
        </section >
    </section>
}