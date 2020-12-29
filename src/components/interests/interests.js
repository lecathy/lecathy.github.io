import './interests.css';
import DeskIcon from '../../assets/desk.svg';
import myInterests from '../../assets/interests.svg';

export default function Interests() {
    return (
        <div>
            <div>
                <h1 style={{paddingLeft: '100px', marginBottom: 0}}> Interests </h1>
                <div className="dark-underline"/>
            </div>
            <span>
                <img src={DeskIcon} alt={'desk'} style={{width: '40%'}}/>
            </span>
            <span>
                <img src={myInterests} alt={'interests'} style={{width: '60%', float: 'right'}}/>
            </span>
        </div>
    );
}