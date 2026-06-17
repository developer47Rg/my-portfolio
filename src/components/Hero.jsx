import "./Hero.scss";
import { FaArrowTurnUp } from "react-icons/fa6";


function Hero () {
    return (
        <section className="hero top--space">
            {/* hero container */}
            <div className="container hero__container">
                
                {/* noise background gif */}
                <span className="hero__noise"></span>

                {/* content */}
                <div className="hero__content">
                    {/* hero image */}
                    <div className="hero__image">
                        <img src="/images/heroimage.webp" alt="heroimage" />
                    </div>
                    {/* hero intro text */}
                    <div className="hero__intro">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M 144 256 L 27.598 256 L 144 139.598 Z M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z M 0 204.402 L 0 112 L 92.402 112 Z" fill="currentColor"></path></svg>
                        <p>
                            I'm Rahul Gauniyal, a frontend developer exploring the intersection of web development, AI, and business innovation to create smarter digital solutions.
                        </p>
                        {/* hero social */}
                        <span className="hero__social">
                            <span className="github"><a href="https://github.com/developer47Rg">Github <FaArrowTurnUp /></a></span>
                            <span className="linkedln"><a href="https://www.linkedin.com/in/rahul-gauniyal-a564901aa/">Linkedln <FaArrowTurnUp /></a></span>
                            {/* <span className="title__text">Rahul Gauniyal</span> */}
                        </span>
                    </div>
                    {/* hero title */}
                    <div className="hero__title">
                        <h1 data-title="Rahul Gauniyal">
                            <span className="title__text">Rahul Gauniyal</span>
                        </h1>
                       {/* <span className="hero__number">[(+91) 8860-860-467]</span> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;