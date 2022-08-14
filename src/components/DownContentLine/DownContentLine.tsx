import React, {Component} from 'react';
import './DownContentLine.css';
import SideComponent from "../SideComponent/SideComponent";
import CentralComponent from "../CentralComponent/CentralComponent";

class DownContentLine extends Component<{}, {}> {
    render() {
        return (
            <div className="functionality-block">
                <CentralComponent />
                <SideComponent />
            </div>
        );
    }
}

export default DownContentLine;
