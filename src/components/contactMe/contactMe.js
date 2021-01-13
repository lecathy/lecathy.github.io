import "../contactMe/contactMe.css";
import Contact from '../../assets/contact.svg';
import { GithubOutlined, MailOutlined, LinkedinOutlined, FileOutlined } from '@ant-design/icons';

export default function ContactMe() {
    return(
        <div className="contact-container" id="contact">
            <h1 className="contact-header">Let's get in touch!</h1>
            <img src={Contact} alt={'Contact me'} className="contact-image"/>
            <span style={{display:'table', margin:'0 auto'}}>
                <span> <a href="https://drive.google.com/file/d/1l8pYFDaJLWp29TMFxE50_PKYbVcsTWVy/view?usp=sharing"> <FileOutlined className="contact-icons"/> </a></span>
                <span> <a href="https://www.linkedin.com/in/le-cathy/" target="_blank" rel="noreferrer"> <LinkedinOutlined className="contact-icons"/> </a></span>
                <span> <a href="https://www.github.com/lecathy" target="_blank" rel="noreferrer"> <GithubOutlined className="contact-icons"/> </a> </span>
                <span> <a href="mailto:c29le@uwaterloo.ca" rel="noreferrer"> <MailOutlined className="contact-icons"/> </a> </span>
            </span>
        </div>
    );
}