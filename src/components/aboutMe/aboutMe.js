import './aboutMe.css';

export default function AboutMe() {
    return(
        <div className="about-me-container" id="aboutMe">
            <h1>About Me</h1>
            <p>
                Helloooooo! Thank you so much for checking this out! I'm Cathy and I'm a 4a biomedical engineering student at the University of Waterloo.
                I am passionate about developing and designing innovative software products for social good! I have a lot of experience with 
                web development and design and would love to apply these skills to any exciting project!
            </p>
            <p>
                In my spare time I enjoy doing a whole lot of artistic hobbies. In fact, all graphics found on my personal website were created by me from scratch
                using&nbsp;
                <u><a href="http://www.vectr.com" target="_blank" rel="noreferrer" style={{color: 'blue'}}>Vectr</a></u>!
                I have also been playing piano since I was 5 and casually picked up guitar, uke and saxophone over the years.
                I also enjoy baking, cooking, Pokemon, Animal Crossing and online shopping.
            </p>
            <p>
                At the end of 2021, I finished up my 3b term. I've done 4 amazing coops so far (more details below :)) where I was given loads of mentorship and opportunities!
                I'll be joining Meta as a SWE intern in January 2022 and am&nbsp;<b style={{ fontWeight: 600 }}>currently seeking co-op opportunities for Summer 2022!</b>
            </p>
            <p></p>
            <i style={{textAlign: 'center'}}>
                Feel free to reach out to me! Cheers :)
            </i>
        </div>
    );
}