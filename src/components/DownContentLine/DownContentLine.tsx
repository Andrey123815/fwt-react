import React, {Component} from 'react';
import './DownContentLine.css';
import SideComponent from "../SideComponent/SideComponent";
import CentralComponent from "../CentralComponent/CentralComponent";

export type contentType = "freeTeam" | "createTeam" |"cancellation" | "mySchedule";

interface State {
    contentType: contentType
}

class DownContentLine extends Component<{}, State> {
    public menuClick: (e: React.MouseEvent<HTMLElement>) => void;

    constructor(props: Readonly<any>) {
        super(props);

        this.state = {
           contentType: "mySchedule"
        };

        this.menuClick = (e) => {
            const id: contentType = e.currentTarget.id as contentType;
            this.setState({
                contentType: id
            })
        }
    }

    render() {
        return (
            <div className="down-content-line">
                <CentralComponent contentType={this.state.contentType} />
                <SideComponent menuItemClick={this.menuClick}/>
            </div>
        );
    }
}

export default DownContentLine;
