import React from 'react'

// export class NewsItem extends Component {
const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-4'>
            <div className="card" >
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className=' badge rounded-pill bg-primary' style={{ left: '90%', zIndex: '1' }}>{source}</span>
                </div>
                <img src={!imageUrl ? "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2020/05/google_play_movies_android_tv.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}<span className='badge rounded-pill bg-secondary'>New</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>


            </div>
        </div >
    )
}

export default NewsItem