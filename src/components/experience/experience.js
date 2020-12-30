import React, { useState } from 'react';
import Avatar from '../../assets/me.svg';
import '../experience/experience.css';
import {Tabs} from 'antd';
import MyTab from '../myTab/myTab';

export default function Experience() {
    const [view, setView] = useState('list');
    const { TabPane } = Tabs;

    function renderList() {
        return(
            <div>
                <Tabs tabPosition={'left'}>
                    <TabPane
                        key={'1'}
                        tab={<MyTab title="a title" date="a date" />}
                    />
                </Tabs>
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
            <div className="experience-content">
                {(view === 'list') ? renderList() : renderCarousel()}
            </div>
        </div>
    );
}