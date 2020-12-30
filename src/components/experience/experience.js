import React, { useState } from 'react';
import Avatar from '../../assets/me.svg';
import '../experience/experience.css';
import {Tabs} from 'antd';
import MyTab from '../myTab/myTab';

export default function Experience() {
    const [view, setView] = useState('list');
    const experiences = [
        {
            title: 'Software Developer at Cyclica',
            date: 'Sept - Dec 2020',
            filters: ['React', 'Django', 'Drug Development'],
        },
        {
            title: 'Software Engineering at PointClickCare',
            date: 'Jan - May 2020',
            filters: ['Springboot', 'Selenium', 'Healthcare'],
        }
    ]

    function renderList() {
        return(
            experiences.map(experience => {
                return(
                    <MyTab title={experience.title} date={experience.date} filters={experience.filters} />
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