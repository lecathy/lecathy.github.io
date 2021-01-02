import './aboutMe.css';

export default function AboutMe() {
    return(
        <div className="about-me-container" id="aboutMe">
            <h1>About Me</h1>
            <p>
                Hiiiiiiiii there! Thank you so much for checking this out! I'm Cathy and I'm a third year biomedical engineering student at the University of Waterloo.
                I am passionate about developing and designing innovative software products for social good and am super eager for the future! I have a lot of experience with 
                web development and design and would love to apply these skills to any exciting project!
            </p>
            <p>
                In my spare time I enjoy doing a whole lot of artistic hobbies. In fact, all graphics found on my personal website were created by me from scratch
                using&nbsp;
                <u><a href="http://www.vectr.com" target="_blank" rel="noreferrer" style={{color: 'blue'}}>Vectr</a></u>!
                I have also been playing piano since I was 5 and casually picked up guitar, uke and saxophone over the years.
            </p>
            <p>
                At the end of 2020, I finished up an amazing co-op term with Cyclica where I was given loads of mentorship and opportunities!
                I'll be going back to school for a term and am&nbsp;<b style={{ fontWeight: 600 }}>currently seeking co-op opportunities for Summer 2021!</b>
            </p>
            <p></p>
            <i style={{textAlign: 'center'}}>
                Feel free to reach out to me for a chat!
            </i>
        </div>
    );
}