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
                        <p>I'm Rahul Gauniyal, a frontend developer passionate about creating modern, user-focused digital experiences. With over four years of experience in web development, SEO, digital marketing, and project coordination, I combine creativity and technology to build high-performance solutions that deliver real business value.</p>
                        <p>My expertise includes React.js, JavaScript, WordPress, HTML, CSS, Sass, Tailwind CSS, and SEO. I enjoy transforming ideas into scalable, visually appealing, and user-friendly web applications while continuously exploring AI-powered tools and emerging technologies to stay ahead in the evolving digital landscape.</p>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About;