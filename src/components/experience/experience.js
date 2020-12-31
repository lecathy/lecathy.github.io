import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../experience/experience.css';
import {workExperiences} from '../../workExperience';
import MyTab from '../myTab/myTab';
import Avatar from '../../assets/me.svg';

export default function Experience() {
    const [view, setView] = useState('list');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    function renderList() {
        return(
            workExperiences.map(experience => {
                return(
                    <MyTab
                        title={experience.title}
                        company={experience.company}
                        date={experience.date}
                        filters={experience.filters}
                        image = {experience.image}
                        companyDescription = {experience.companyDescription}
                        resumePoints = {experience.resumePoints}
                        links = {experience.links}
                    />
                );
            })
        );
    }

    function renderCarousel() {
        return (
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect} className="my-carousel">
                    <Carousel.Item className="my-carousel-card">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Item>
                    <Carousel.Item className="my-carousel-card">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }

    return (
        <div className="experience-container">
            <p>
                <img src={Avatar} alt={'my avatar'} className="avatar"/>
            </p>
            <h1 className="experience-header">Work Experience</h1>
            <div className="light-underline"/>
            <span>
                <button
                    className="toggle-button left-button"
                    onClick={() => setView('list')}
                    style={{ backgroundColor: (view === 'list') ?'#E2978E':'#666666'}}
                >
                        List
                </button>
                <button
                    className="toggle-button right-button"
                    onClick={() => setView('carousel')}
                    style={{ backgroundColor: (view === 'carousel') ?'#E2978E':'#666666'}}
                >
                    Carousel
                </button>
            </span>
            <div className="experience-content">
                {(view === 'list') ? renderList() : renderCarousel()}
            </div>
        </div>
    );
}