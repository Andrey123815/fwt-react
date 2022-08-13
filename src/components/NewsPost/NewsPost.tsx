import React, {Component} from 'react';
import {INews} from "../News/News";
import './NewsPost.css';

interface Props {
    post: INews
}

class NewsPost extends Component<Props, {}> {
    // constructor(props: Readonly<Props>) {
    //     super(props);
    // }

    render() {
        const {booking, player, dateTime, team, street} = this.props.post;
        let messagePart = booking ? 'забронировал площадку' : 'отменил бронирование площадки';
        return (
            <p>
                <span className="news-post__date-time">{dateTime}</span> Игрок <a href="" className="news-post__player">{player}</a> &lt;<a href="" className="news-post__team">{team}</a>&gt; {messagePart} на улице {street}
            </p>
        );
    }
}

export default NewsPost;
