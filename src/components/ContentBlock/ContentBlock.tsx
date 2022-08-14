import React, {Component} from 'react';
import './ContentBlock.css';
import DownContentLine from "../DownContentLine/DownContentLine";
import UpInfoLine from "../UpInfoLine/UpInfoLine";

class ContentBlock extends Component<{}, {}> {
    render() {
        return (
            <div className="main-content-block">
                <UpInfoLine />
                <DownContentLine />
            </div>
        );
    }
}

export default ContentBlock;
