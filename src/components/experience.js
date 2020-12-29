import React, { useState } from 'react';
import Avatar from '../assets/me.svg';
import '../components/experience.css';

export default function Experience() {
    const [view, setView] = useState('list');

    function renderList() {
        return(
            <div>
                List view works!
            </div>
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
            <div>
                <img src={Avatar} alt={'my avatar'} className="avatar"/>
            </div>
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
        </div>
    );
}