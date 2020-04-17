import React from 'react';
import {Link} from "react-router-dom";


const BlogList = (props) => {
    const {blogs} = props;
    return (
        <div className="blog-list-group">
            {blogs.map(blog => (
                <div key={blog._id} className="list-group-item blog-list-item">
                    <Link to={`/blog/${blog._id}`}
                          style={{textDecoration: 'none', color: 'inherit'}}>
                        <div className="d-flex">
                            <h5 className="mb-1">{blog.title}</h5>
                        </div>
                        <p className="text-justify blog-list-item-content">{blog.content}</p>
                    </Link>
                    <div className="row">
                        <div className="col-3 d-flex blog-list-labels">
                            <i className="fa fa-clock-o icons"/>
                            <p className="tags-title">时间:{blog.date.slice(0, 10)}</p>
                        </div>
                        <div className="col-3 d-flex blog-list-labels">
                            <i className="fa fa-list icons"/>
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
                        <div className="col d-flex blog-list-labels">
                            <i className="fa fa-tags icons"/>
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