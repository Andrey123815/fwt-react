import React, {Component} from 'react';
import Menu from "../Menu/Menu";
import News from "../News/News";

class MenuAndNewsBlock extends Component<{}, {}> {
    render() {
        return (
            <div style={{maxWidth: "490px", maxHeight: "840px"}}>
                <Menu />
                <News />
            </div>
        );
    }
}

export default MenuAndNewsBlock;
