import Avatar from '../assets/me.svg';
import '../components/experience.css';

export default function Experience() {
    return (
        <div className="experience-container">
            <div>
                <img src={Avatar} alt={'my avatar'} className="avatar"/>
            </div>
            <h1 className="experience-header">Work Experience</h1>
            <div className="light-underline"/>
        </div>
    );
}