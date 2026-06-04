import "./style.css";
function Home(){

    return(

        <div className="page home">

            <div className="home-content">

                <div className="home-text">

                    <h1>Welcome To Our Website</h1>

                    <p>
                        Build modern and responsive web applications using React JS and Spring Boot.
                    </p>

                    <button>
                        Explore More
                    </button>

                </div>

                <div className="home-image">

                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        alt="website"
                    />

                </div>

            </div>

        </div>
    )
}

export default Home