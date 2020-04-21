import React from 'react';
import ReactMarkdown from "react-markdown";
import {Link} from "react-router-dom";
import {FaTags, FaList, FaRegClock} from 'react-icons/fa'

const BlogBody = (props) => {
    const {title, date, genre, tags, body, lastBlog, nextBlog} = props.blog;
    return (
        <div className="card" id="blog-body">
            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <div className="detail-label-bar">
                    <div className="d-flex detail-labels">
                        <FaRegClock size={25} className="icons"/>
                        <p>时间:</p>
                        <p className="ml-1">{date.slice(0, 10)}</p>
                    </div>
                    <div className="d-flex detail-labels">
                        <FaList size={25} className="icons"/>
                        <p>分类:</p>
                        <button className="tag tag-genre"
                                onClick={() => props.history.push({
                                    pathname: '/blog',
                                    state: {genre: genre}
                                })}
                        >{genre}</button>
                    </div>
                    <div className="d-flex detail-labels">
                        <FaTags size={25} className="icons"/>
                        <p>标签:</p>
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