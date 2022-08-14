import React, {Component} from 'react';
import Menu from "../Menu/Menu";
import News from "../News/News";
import './SideComponent.css';

interface Props {
    menuItemClick: (e: React.MouseEvent<HTMLElement>) => void
}

class SideComponent extends Component<Props, {}> {
    render() {
        return (
            <div className="side-component">
                <Menu menuItemClick={this.props.menuItemClick}/>
                <News />
            </div>
        );
    }
}

export default SideComponent;
