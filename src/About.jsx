import "./style.css";
function About(){

    return(

        <div className="page about">

            <h1>About Us</h1>

            <p>
                We create attractive and user friendly websites using modern technologies.
            </p>

            <div className="about-cards">

                <div className="card">
                    <h2>Frontend</h2>
                    <p>React JS Development</p>
                </div>

                <div className="card">
                    <h2>Backend</h2>
                    <p>Spring Boot APIs</p>
                </div>

                <div className="card">
                    <h2>Database</h2>
                    <p>MySQL Database</p>
                </div>

            </div>

        </div>
    )
}

export default About
