import React, {Component} from 'react';
import PropTypes from 'prop-types';

interface Props {
    name: string
}

interface States {
    name: string
}

class MainContentBlock extends Component<Props, States> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default MainContentBlock;
