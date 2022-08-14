import React, {Component} from 'react';
import GreetLine from "../GreetLine/GreetLine";
import AddressLine from "../AddressLine/AddressLine";
import './UpLine.css';
import {IUserContext, UserContext} from "../../configurations/UserConfigurations";

class UpLine extends Component<{}, {}> {
    context!: Readonly<IUserContext>;

    render() {
        const user = this.context.user;
        return (
            <div className="up-line">
                <div className="up-line__info-lines">
                    <GreetLine />
                    <AddressLine />
                </div>
                <div className="up-line__avatar-block">
                    <img width="90px" height="90px" src="./profile_dark-theme.svg" alt="" />
                    <div className="avatar-block__person-info">
                        <div className="person-info__nickname">{user.nickname}</div>
                        <div>Звание: <span className="person-info__rank_veteran">{user.rank}</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

UpLine.contextType = UserContext;

export default UpLine;
