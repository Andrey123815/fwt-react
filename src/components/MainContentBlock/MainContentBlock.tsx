import React, {Component} from 'react';

interface Props {
    name?: string
}

interface States {
    name?: string
}

class MainContentBlock extends Component<Props, States> {
    render() {
        return (
            <div style={{width: "100px", height: "100px"}}>
                wefwfwefw
            </div>
        );
    }
}

export default MainContentBlock;
