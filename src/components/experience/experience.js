import React, { useState } from 'react';
import '../experience/experience.css';

import MyTab from '../myTab/myTab';
import CyclicaLogo from '../../assets/cyclica';
import PointClickCareLogo from '../../assets/pointclickcare.png';
import RBCLogo from '../../assets/rbc.png';
import Avatar from '../../assets/me.svg';

export default function Experience() {
    const [view, setView] = useState('list');
    const experiences = [
        {
            title: 'Software Developer at Cyclica',
            date: 'Sept - Dec 2020',
            filters: ['React', 'Django', 'Drug Development'],
            image: CyclicaLogo,
            companyDescription: 'Cyclica is a Toronto based biotechnology start up that leverages AI to accelerate the drug discovery process!\
                                As an intern on the Scientific platforms team I worked on Ligand Express, a cloud based platform in which users\
                                could upload molecules of interest to generate polypharmacology profiles.',
            resumePoints: '',
        },
        {
            title: 'Software Engineering at PointClickCare',
            date: 'Jan - May 2020',
            filters: ['Springboot', 'Selenium', 'Healthcare'],
            image: PointClickCareLogo,
            companyDescription: 'Cyclica is a drug development company',
        },
        {
            title: 'Fullstack Developer at RBC',
            date: 'May - Aug 2019',
            filters: ['Angular', 'Springboot', 'Android', 'iOS'],
            image: RBCLogo,
            companyDescription: 'Cyclica is a drug development company',
        },
    ]

    function renderList() {
        return(
            experiences.map(experience => {
                return(
                    <MyTab
                        title={experience.title}
                        date={experience.date}
                        filters={experience.filters}
                        image = {experience.image}
                        companyDescription = {experience.companyDescription}
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