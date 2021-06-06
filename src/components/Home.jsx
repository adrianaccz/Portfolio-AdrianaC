import React from 'react';
import '../css/portfolio.css';

function Home() {
    return (
        <div className="home">
            <div className="home_banner">
                <h1>Adriana <strong>Cordero</strong></h1>
            </div>

            <div className="home_subBaner">
                <p>Desarrolladora web | FullStack </p>
            </div>

            <div className="home_content" id="proyectos">
                <div className="home_content_title">
                    <h2>Proyectos</h2> 
                </div>
                <div className="home_content_clusters">
                    <Clusters numProyect="Lista de tareas" nameProyect="Realizado en React.js" links="https://github.com/adrianaccz/Task-List"/>
                    <Clusters numProyect="Mini juego" nameProyect="Realizado en JavaScript" links="https://github.com/adrianaccz/Mini-game-JavaScript"/>
                    <Clusters numProyect="App de notas" nameProyect="Realizado en Node.js" links="https://github.com/adrianaccz/Notes-app-nodejs" />
                    <Clusters numProyect="CRUD" nameProyect="Realizado con Node y MongoDB" links="https://github.com/adrianaccz/node-crud-mongodb" />
                    <Clusters numProyect="CRUD" nameProyect="Realizado con Node y Sequelize" links="https://github.com/adrianaccz/nodejs-crud-sequelize" />
                    <Clusters numProyect="App estacionamiento" nameProyect="Realizado en Python con Flask" links="https://github.com/adrianaccz/parkingapp" />
                </div>
            </div>
        </div>
    )
}


function Clusters(props) {
    const {numProyect, nameProyect, links} = props
    return (
        <div>
            <a href={links}>
                <h3>Proyecto {numProyect}</h3>
                <h4>{nameProyect}</h4>
            </a>
        </div>
    )
}

export default Home



