import PropTypes from 'prop-types';
import "../myTab/myTab.css";
import React, { useState } from 'react';

export default function MyTab(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function renderFilters(){
        return (
            props.filters.map(filter => {
                return (
                    <span className="tab-filters">{filter}</span>
                );
            })
        );
    }

    return(
        <div className="tab-container">
            <div className="tab-header">
                <h4
                    className="tab-title"
                > 
                    {props.title}
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
                <div>
                    {(isCollapsed)
                        ? (
                        <p
                            className="expand-collapse-label"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            EXPAND
                        </p>
                        )
                        : (
                        <p
                            className="expand-collapse-label"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            COLLAPSE
                        </p>)
                    }
                </div>
            </div>
           
        </div>
    );
}

MyTab.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    filters: PropTypes.array,
    image: PropTypes.shape(),
    companyDescription: PropTypes.string,
    resumePoints: PropTypes.array,
}

MyTab.defaultProps = {
    title: '',
    date: '',
    filters: [],
    image: '',
    companyDescription: '',
    resumePoints: [],
}