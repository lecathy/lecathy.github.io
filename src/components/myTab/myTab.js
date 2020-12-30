import PropTypes from 'prop-types';
import "../myTab/myTab.css";

export default function MyTab(props) {
    return(
        <div className="tab-container">
            <h4 className="tab-title"> {props.title} </h4>
            <h5 className="tab-date"> {props.date} </h5>
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