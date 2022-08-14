import React, {Component} from 'react';
import './GreetLine.css';
import {IUserContext, UserContext} from "../../configurations/UserConfigurations";

class GreetLine extends Component<{}, {}> {
    context!: Readonly<IUserContext>;

    render() {
        const {nickname} = this.context.user;
        return (
            <div className="greet-line">
                Welcome to the Football World Team, {nickname}!
            </div>
        );
    }
}

GreetLine.contextType = UserContext;

export default GreetLine;
