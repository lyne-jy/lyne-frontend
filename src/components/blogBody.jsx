import React from 'react';
import ReactMarkdown from "react-markdown";
import {Link} from "react-router-dom";

const BlogBody = (props) => {
    const {title, date, genre, tags, body, lastBlog, nextBlog} = props.blog;
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <div className="d-flex justify-content-start">
                    <div className="d-flex detail-labels">
                        <i className="fa fa-clock-o icons"/>
                        <p>Date:</p>
                        <p className="ml-1">{date.slice(0, 10)}</p>
                    </div>
                    <div className="d-flex detail-labels">
                        <i className="fa fa-list icons"/>
                        <p>Genre:</p>
                        <button className="tag tag-genre"
                                onClick={() => props.history.push({
                                    pathname: '/blog',
                                    state: {genre: genre}
                                })}
                        >{genre}</button>
                    </div>
                    <div className="d-flex detail-labels">
                        <i className="fa fa-tags icons"/>
                        <p>Tags:</p>
                        {tags.map(tag =>
                            <button className={`tag tag-${tag}`}
                                    key={tag}
                                    onClick={() =>
                                    props.history.push({
                                        pathname: '/blog',
                                        state: {tags: [tag]}
                                    })}
                            >{tag}</button>)}
                    </div>
                </div>
                <ReactMarkdown source={body} className="detail-body"/>
                <div className="d-flex justify-content-between">
                    {lastBlog ? <Link className="tag tag-blog-change"
                                      to={`/blog/${lastBlog._id}`}>{`上一篇: ${lastBlog.title}`}</Link> : <p/>}
                    {nextBlog ? <Link className="tag tag-blog-change"
                                      to={`/blog/${nextBlog._id}`}>{`下一篇: ${nextBlog.title}`}</Link> : <p/>}
                </div>
            </div>
        </div>
    );
};

export default BlogBody;