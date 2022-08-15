import React, {Component} from 'react';
import './CentralComponent.css';
import Map from "../Map/Map";
import Schedule from "../Schedule/Schedule";
import {IHighOrderManage, TAnchorClick} from "../DownContentLine/DownContentLine";
import TeamMembersList from "../TeamMembersList/TeamMembersList";

interface Props extends IHighOrderManage{
    onTeamMembersClick: TAnchorClick
}

class CentralComponent extends Component<Props, {}> {
    render() {
        const {contentType} = this.props;
        switch (contentType){
            case "freeTeam":
                return (
                    <div className="central-component">
                        <Schedule onlyFreeTeams={true} onTeamMembersClick={this.props.onTeamMembersClick}/>
                    </div>
                );
            case "createTeam":
                return (
                    <div className="central-component">
                        <Map />
                        <Schedule />
                    </div>
                );
            case "cancellation":
                return (
                    <div className="central-component">
                        <Map />
                        <Schedule />
                    </div>
                );
            case "teamMembers":
                if (!this.props.selectedTeam) {
                    break;
                }
                return (
                    <div className="central-component">
                        <TeamMembersList teamName={this.props.selectedTeam as string} />
                    </div>
                );
        }

        return (
            <div className="central-component">
                <Map />
                <Schedule onTeamMembersClick={this.props.onTeamMembersClick}/>
            </div>
        );
    }
}

export default CentralComponent;
