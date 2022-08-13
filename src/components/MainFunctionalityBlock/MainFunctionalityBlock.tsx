import React, {Component} from 'react';
import MapAndScheduleBlock from "../MapAndScheduleBlock/MapAndScheduleBlock";
import './MainFunctionalityBlock.css';
import MenuAndNewsBlock from "../MenuAndNewsBlock/MenuAndNewsBlock";

class MainFunctionalityBlock extends Component<{}, {}> {
    render() {
        return (
            <div className="functionality-block">
                <MapAndScheduleBlock />
                <MenuAndNewsBlock />
            </div>
        );
    }
}

export default MainFunctionalityBlock;
