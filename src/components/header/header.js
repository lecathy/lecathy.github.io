import './header.css';
import { GithubOutlined, MailOutlined, LinkedinOutlined, FileOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import TypeIt from "typeit-react";
import LightBulb from '../../assets/intro-me.jpg';

export default function Header() {
    const lines = ["Biomedical Eng @ uWaterloo",
                    "Full Stack Dev @ RBC",
                    "SWE @ PointClickCare",
                    "Software Dev @ Cyclica",
                    "Online Shopping Enthusiast"
                ];
    return(
        <div>
            <span className="name">
                Cathy Le
            </span>
            <div className="name-underline" />
            <span>
                <span> <a href="https://drive.google.com/file/d/1l8pYFDaJLWp29TMFxE50_PKYbVcsTWVy/view?usp=sharing"> <FileOutlined className="links"/> </a></span>
                <span> <a href="https://www.linkedin.com/in/le-cathy/" target="_blank" rel="noreferrer"> <LinkedinOutlined className="links"/> </a></span>
                <span> <a href="https://www.github.com/lecathy" target="_blank" rel="noreferrer"> <GithubOutlined className="links"/> </a> </span>
                <span> <a href="mailto:c29le@uwaterloo.ca" rel="noreferrer"> <MailOutlined className="links"/> </a> </span>
            </span>
            <Row>
                <Col span={2}>
                    <span>
                        <img src={LightBulb} alt={'Lightbulb'} className="image-template" />
                    </span>
                </Col>
                <Col span={2} className="intro-container">
                    <span className="border-text">  Thanks for stopping by! </span>
                    <p></p>
                    <p className="greeting name">Hi I'm Cathy</p>
                    <p className="type-it">
                        <TypeIt 
                            options={{
                                strings: lines,
                                speed: 75,
                                nextStringDelay: 1500,
                                loopDelay: 50,
                                loop: true,
                                waitUntilVisible: true,
                                breakLines: false,
                            }}
                        />
                    </p>
                    <div className="pink-underline"/>
                </Col>
            </Row>
        </div>
    );
}