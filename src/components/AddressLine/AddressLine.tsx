import React, {Component} from 'react';
import './AddressLine.css';

class AddressLine extends Component<{}, {}> {
    private readonly address: string;

    constructor(props: Readonly<any>) {
        super(props);
        this.address = '';
    }

    render() {
        return (
            <div className="address-line">
                Ваш адрес: {this.address}
            </div>
        );
    }
}

export default AddressLine;

