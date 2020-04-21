import React from 'react';
import {Link} from "react-router-dom";
import {FaList, FaTags} from "react-icons/fa";


const BlogList = (props) => {
    const {blogs} = props;
    return (
        <div className="blog-list-group">
            {blogs.map(blog => (
                <div key={blog._id} className="list-group-item blog-list-item">
                    <Link to={`/blog/${blog._id}`}
                          style={{textDecoration: 'none', color: 'inherit'}}>
                        <div className="d-flex justify-content-between">
                            <h5 className="mb-1 font-weight-bold">{blog.title}</h5>
                            <small className="text-muted">{blog.date.slice(0, 10)}</small>
                        </div>
                        <p className="text-justify blog-list-item-content">{blog.content}</p>
                    </Link>
                    <div>
                        <div className="d-flex blog-list-item-label">
                            <FaList size={25} className="icons"/>
                            <p className="tags-title">分类:</p>
                            <button
                                type="button"
                                data-toggle="collapse"
                                data-target="#filterBar"
                                className="tag tag-genre "
                                aria-expanded="false"
                                aria-controls="filterBar"
                                onClick={() => props.onGenreChange(blog.genre)}
                            >{blog.genre}</button>
                        </div>
                        <div className="d-flex blog-list-item-label">
                            <FaTags size={25} className="icons"/>
                            <p className="tags-title">标签:</p>
                            {blog.tags.map(tag =>
                                (<button
                                    className={`tag tag-${tag}`}
                                    key={tag}
                                    onClick={() => props.onTagChange(tag)}
                                >{tag}</button>))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;