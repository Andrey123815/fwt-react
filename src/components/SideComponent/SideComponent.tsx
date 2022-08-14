import React, {Component} from 'react';
import Menu from "../Menu/Menu";
import News from "../News/News";
import './SideComponent.css';

class SideComponent extends Component<{}, {}> {
    render() {
        return (
            <div className="side-component">
                <Menu />
                <News />
            </div>
        );
    }
}

export default SideComponent;
