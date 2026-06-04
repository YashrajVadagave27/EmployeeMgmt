import "./style.css";
function Contact(){
 return(

        <div className="page contact">

            <h1>Contact Us</h1>

            <div className="contact-form">

                <input type="text" placeholder="Enter Name" />

                <input type="email" placeholder="Enter Email" />

                <textarea placeholder="Enter Message"></textarea>

                <button>
                    Send Message
                </button>

            </div>

        </div>
    )
}

export default Contact