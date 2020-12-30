import PropTypes from 'prop-types';
import "../myTab/myTab.css";

export default function MyTab(props) {

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
            </div>
        </div>
    );
}

MyTab.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    filters: PropTypes.array,
}

MyTab.defaultProps = {
    title: '',
    date: '',
    filters: [],
}