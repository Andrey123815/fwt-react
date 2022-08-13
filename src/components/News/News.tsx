import React, {Component} from 'react';
import './News.css';
import NewsPost from "../NewsPost/NewsPost";

export interface INews {
    dateTime: string,
    player: string,
    team: string,
    street: string,
    booking: boolean,
}

interface States {
    news: INews[]
}

class News extends Component<{}, States> {
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        // Запрос
        const newsData = [
            {
                dateTime: '11.07 12:00',
                player: 'MavelTrip',
                team: 'TropRetto',
                street: 'Крымская, 4',
                booking: true
            },
            {
                dateTime: '11.07 12:00',
                player: 'MavelTrip',
                team: 'TropRetto',
                street: 'Крымская, 4',
                booking: false,
            },
            {
                dateTime: '11.07 12:00',
                player: 'MavelTrip',
                team: 'TropRetto',
                street: 'Крымская, 4',
                booking: true
            },

            // '11.07 12:00 Игрок MavelTrip(TropRetto) забронировал площадку на улице Крымская!',
            // 'Игрок MavelTrip забронировал площадку на улице Крымская!',
            // 'Игрок MavelTrip забронировал площадку на улице Крымская!',
            // 'Игрок MavelTrip забронировал площадку на улице Крымская!'
        ]
        this.setState({ news: newsData });
    }

    render() {
        const newsToRender = this.state.news.map((newsItem) =>
            <NewsPost post={newsItem} />
        );
        return (
            <div className="news-container">
                <div className="news-container__header">
                    Новости
                </div>
                <div className="news-container__content">
                    {newsToRender}
                </div>
            </div>
        );
    }
}

export default News;
