import React, {Component} from 'react';
import './GreetLine.css';

class GreetLine extends Component<{}, {}> {
    private readonly user: string;

    constructor(props: Readonly<any>) {
        super(props);
        this.user = "Player";
    }

    // componentDidMount() {
    //     const userData: string | null = localStorage.getItem('isAuth');
    //     let user: object;
    //     if (typeof userData !== 'object') {
    //         user = JSON.parse(userData);
    //     }
    // }

    render() {
        return (
            <div className="greet-line">
                Welcome to the FOOTBALL WORLD TEAM, {this.user}!
            </div>
        );
    }
}

export default GreetLine;
