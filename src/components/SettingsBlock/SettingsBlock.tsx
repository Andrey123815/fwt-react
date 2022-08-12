import React, {Component} from 'react';
import PropTypes from 'prop-types';

interface Props {
    changeTheme(): void
}

interface States {
    name: string
}

class SettingsBlock extends Component<Props, States> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img
            </div>
        );
    }
}

export default SettingsBlock;

