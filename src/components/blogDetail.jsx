import React, {Component} from 'react';
import {getBlog} from "../services/blogService";
import Comments from "./comments";
import BlogBody from "./blogBody";
import Spinner from "./spinner";
import {postComment} from "../services/commentService";
import {toast} from "react-toastify"

class BlogDetail extends Component {
    state = {
        blog: null
    };

    async componentDidMount() {
        await this.populateBlog();
    }

    async componentDidUpdate(prevProps) {
        await this.repopulateBlog(prevProps);
    }

    populateBlog = async () => {
        try {
            const {data: blog} = await getBlog(this.props.match.params.id);
            if (blog) {
                this.setState({blog});
            }
        } catch (e) {
            return this.props.history.replace("/not-found");
        }
    };

    repopulateBlog = async (prevProps) => {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.setState({blog: null});
            try {
                const {data: blog} = await getBlog(this.props.match.params.id);
                this.setState({blog});
            } catch (e) {
                return this.props.history.replace("/not-found");
            }
        }
    };

    handleCommentSubmit = async (comment) => {
        const originalBlog = {...this.state.blog};
        const {blog} = this.state;
        try {
            comment.date = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toJSON();
            await postComment(blog._id, comment);
            blog.comments.push({...comment});
            this.setState({blog});
            toast("评论已发布。")
        } catch (e) {
            toast.error('发布评论时出现错误。');
            this.setState({blog: originalBlog})
        }
    };

    render() {
        const {blog} = this.state;
        if (!blog) return <Spinner/>;
        return (
            <div className="container">
                <div className="blog-detail-main">
                    <BlogBody blog={blog}
                              history={this.props.history}
                    />
                    <Comments comments={blog.comments}
                              onCommentSubmit={this.handleCommentSubmit}
                    />
                </div>
            </div>)
    }
}

export default BlogDetail;
