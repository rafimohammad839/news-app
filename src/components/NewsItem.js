import React, { Component } from 'react'

class NewsItem extends Component {

    myStyle = {
        display: "flex",
        justifyContent: "flex-end",
        position: "absolute",
        right: '0'
    }
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" /*style={{width: "18rem"}} */>
                <div style={this.myStyle}>
                <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                    <img src={!imageUrl ? 'https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg' : imageUrl} className='card-img-top' alt='...' />
                    <div className="card-body">
                        <h5 className="card-title">{title}... </h5>
                        <p className="card-text">{description}...</p>
                        <a rel='noreferrer' target='_blank' href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem