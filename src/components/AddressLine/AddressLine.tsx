import React, {Component} from 'react';
import './AddressLine.css';
import {IUserContext, UserContext} from "../../configurations/UserConfigurations";

class AddressLine extends Component<{}, {}> {
    context!: Readonly<IUserContext>;
    static contextType = UserContext;

    render() {
        const user = this.context.user;
        let addressLineContent = user.address.street === ''
            ? user.address.city
            : `Ваш адрес: г.${user.address.city}, ул.${user.address.street}, ${user.address.house}`
        return (
            <div className="address-line">
                {addressLineContent}
            </div>
        );
    }
}

export default AddressLine;

