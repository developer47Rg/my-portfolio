import "./About.scss"

function About (){
    return(

        // About section
        <section id="about" className="about top--space">

            {/* About container */}
            <div className="container about__container">

                {/* About video */}
                <span className="about__video">
                    <video autoPlay muted loop playsInline>
                        <source src="./images/aboutvideo.mp4" type="video/mp4" />
                    </video>
                </span>
               
               {/* About Content */}
                <div className="about__content">
                    <h2 className="about__title">About <i className="bold__text">Me</i></h2>
                    <span className="about__text">
                        <p>I'm Rahul Gauniyal, a Website Developer and SEO Specialist passionate about building modern, user focused digital experiences. With over 4 years of experience in website development, SEO, and digital marketing, I combine technical expertise and creative problem solving to create high performing websites that drive traffic, engagement, and business growth.</p>
                        <p>My expertise includes WordPress, React.js, JavaScript, HTML, CSS, Sass, Tailwind CSS, and modern SEO practices, including Technical SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization). I enjoy transforming ideas into fast, scalable, and visually appealing websites while leveraging AI powered tools.</p>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About;