import PropTypes from 'prop-types';
import "../myTab/myTab.css";
import React, { useState } from 'react';

export default function MyTab(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function renderFilters() {
        return (
            props.filters.map(filter => {
                return (
                    <span className="tab-filters">{filter}</span>
                );
            })
        );
    }

    function renderResumePoints() {
        return(
            <div>
                <b
                    className="tab"
                    style={{padding: '10%', color: '#748a83'}}
                > 
                    {'Here is what I did at ' + props.company + ':'}
                </b>
                <ul>
                    {
                        props.resumePoints.map(point => {
                            return (
                                <li style={{marginLeft: '10%', marginRight: '10%'}}>{point}</li>
                            );
                        })
                     }
                </ul>
            </div>
        )
    }

    function renderLinks() {
        return (
            (props.links.length !== 0) && <div>
            <span style={{marginLeft: '10%'}}> Links: </span>
            {props.links.map(link => {
                return(
                    <span>
                        <a href={link.link}  target="_blank" rel="noreferrer" className="tab-links">
                            {link.description}
                        </a> 
                    </span>
                );
            })}
            </div>
        );
    }

    return(
        <div className="tab-container">
            <div className="tab-header">
                <h4
                    className="tab-title"
                > 
                    {props.title + ' at ' + props.company}
                </h4>
                <span>
                    { renderFilters() }
                </span>
            </div>
            <div className="tab-content">
                <h5 className="tab-date"> {props.date} </h5>
                <div className="image-container">
                    <img src={props.image} alt="" className="tab-image"/>
                </div>
                <p className="tab">
                    {props.companyDescription}
                </p>
                {!isCollapsed && (<div>
                    {renderResumePoints()}
                    {renderLinks()}
                </div>)}
                <div>
                    {(isCollapsed)
                        ? (
                        <p
                            className="expand-collapse-label"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            EXPAND ▼
                        </p>
                        )
                        : (
                        <p
                            className="expand-collapse-label"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            COLLAPSE ▲
                        </p>)
                    }
                </div>
            </div>
           
        </div>
    );
}

MyTab.propTypes = {
    title: PropTypes.string,
    company: PropTypes.string,
    date: PropTypes.string,
    filters: PropTypes.array,
    image: PropTypes.shape(),
    companyDescription: PropTypes.string,
    resumePoints: PropTypes.array,
    links: PropTypes.array,
}

MyTab.defaultProps = {
    title: '',
    company: '',
    date: '',
    filters: [],
    image: '',
    companyDescription: '',
    resumePoints: [],
    links: [],
}