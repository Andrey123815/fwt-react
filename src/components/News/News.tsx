import React, {Component} from 'react';
import './News.css';
import NewsPost from "../NewsPost/NewsPost";
import newsData from '../../dataSource/news.json';

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
        this.setState({ news: newsData.news });
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
