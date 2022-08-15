import React, {Component} from 'react';
import './DownContentLine.css';
import SideComponent from "../SideComponent/SideComponent";
import CentralComponent from "../CentralComponent/CentralComponent";

export type contentType =
    "freeTeam" | "createTeam" |"cancellation" | "mySchedule" | "teamMembers";

export interface IHighOrderManage {
    contentType: contentType,
    selectedTeam: string | undefined
}

export type TAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => void;

class DownContentLine extends Component<{}, IHighOrderManage> {
    public menuClick: (e: React.MouseEvent<HTMLElement>) => void;
    public teamMembersClick: TAnchorClick;

    constructor(props: Readonly<any>) {
        super(props);

        this.state = {
            contentType: "mySchedule",
            selectedTeam: undefined
        };

        this.menuClick = (e) => {
            const id: contentType = e.currentTarget.id as contentType;
            this.setState( {
                contentType: id,
                selectedTeam: undefined
            });
        }
        this.teamMembersClick = (e) => {
            e.preventDefault();
            const teamClickedOn: string = e.currentTarget.id;
            this.setState({
                selectedTeam: teamClickedOn,
                contentType: "teamMembers"
            });
        }
    }

    render() {
        return (
            <div className="down-content-line">
                <CentralComponent contentType={this.state.contentType}
                                  selectedTeam={this.state.selectedTeam}
                                  onTeamMembersClick={this.teamMembersClick}
                />
                <SideComponent menuItemClick={this.menuClick}/>
            </div>
        );
    }
}

export default DownContentLine;
