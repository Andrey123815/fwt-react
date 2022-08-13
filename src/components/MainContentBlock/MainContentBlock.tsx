import React, {Component} from 'react';
import './MainContentBlock.css';
import GreetLine from "../GreetLine/GreetLine";
import AddressLine from "../AddressLine/AddressLine";
import MainFunctionalityBlock from "../MainFunctionalityBlock/MainFunctionalityBlock";

class MainContentBlock extends Component<{}, {}> {
    render() {
        return (
            <div className="main-content-block">
                <GreetLine />
                <AddressLine />
                <MainFunctionalityBlock />
            </div>
        );
    }
}

export default MainContentBlock;
