import React, {Component} from 'react';
import './MainContentBlock.css';
import MainFunctionalityBlock from "../MainFunctionalityBlock/MainFunctionalityBlock";
import UpLine from "../UpLine/UpLine";

class MainContentBlock extends Component<{}, {}> {
    render() {
        return (
            <div className="main-content-block">
                <UpLine />
                <MainFunctionalityBlock />
            </div>
        );
    }
}

export default MainContentBlock;
