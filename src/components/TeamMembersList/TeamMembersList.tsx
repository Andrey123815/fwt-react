import React, {Component} from 'react';
import teamMembers from'../../dataSource/teamMembers.json';
import './TeamMembersList.css';

interface Props {
    teamName: string
}

class TeamMembersList extends Component<Props, {}> {
    render() {
        const membersList = teamMembers.teams
            .filter(team => team.teamName === this.props.teamName)[0]
            .members
            .map((member, index) => {
                return <tr>
                    <th>{index + 1}</th>
                    <th>{member.nickname}</th>
                    <th>Нападающий</th>
                    <th>
                        [
                        <span className="person-info__rank_veteran">{member.rank}</span>
                        ]
                    </th>
                </tr>
            });
        return (
            <div className="team">
                <div className="team__page-preview">
                    Команда &lt;<span className="page-preview__team-name">{this.props.teamName}</span>&gt;
                </div>
                <div className="team__members-preview">
                    Участники команды:
                </div>
                <table className="team__members-list">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Имя игрока</th>
                            <th>Роль</th>
                            <th>Звание</th>
                        </tr>
                    </thead>
                        {membersList}
                </table>
            </div>
        );
    }
}

export default TeamMembersList;
