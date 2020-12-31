import React, { useState } from 'react';
import '../experience/experience.css';
import {workExperiences} from '../../workExperience';

import MyTab from '../myTab/myTab';
import Avatar from '../../assets/me.svg';

export default function Experience() {
    const [view, setView] = useState('list');

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
                Carousel view works!
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