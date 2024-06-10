import React from 'react'

const Newslist = (props) => {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
    <div className='my-3'>
        <div className="card">
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
          }}>
          <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
            <img src={imageUrl===null?"https://static.independent.co.uk/2023/06/19/12/newFile-1.jpg?quality=75&width=1200&auto=webp":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btm-sm btn-dark">Go somewhere</a>
            </div>
        </div>
    </div>
    )
}

export default Newslist
