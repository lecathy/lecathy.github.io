export default function NavBar() {
    return(
        <div className="header-container">
        <div className="menu-options">
            <span
                className="options"
                onClick={() => document.getElementById('aboutMe').scrollIntoView({ behavior: 'smooth' })}
            >
                ABOUT ME
            </span>
            <span
                className="options"
                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
            >
                EXPERIENCE
            </span>
            <span
                className="options"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
                CONTACT
            </span>
        </div>
    </div>
    );
}