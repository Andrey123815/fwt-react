import React, {Component} from 'react';
import GreetLine from "../GreetLine/GreetLine";
import AddressLine from "../AddressLine/AddressLine";
import './UpLine.css';

class UpLine extends Component<{}, {}> {
    render() {
        return (
            <div className="up-line">
                <div className="up-line__info-lines">
                    <GreetLine />
                    <AddressLine />
                </div>
                <div className="up-line__avatar-block">
                    <img width="90px" height="90px" src="./profile_dark-theme.svg" alt="" />
                    <div className="avatar-block__person-info">
                        <div style={{textAlign: "center", marginBottom: "10px", marginTop: "20px", color: "red"}}>Fartaaar</div>
                        <div>Звание: <span className="rank_veteran">Ветеран</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpLine;
