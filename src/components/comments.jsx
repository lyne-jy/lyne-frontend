import React, {Component} from 'react';
import {Collapse, Form, FormGroup, Input, Label} from 'reactstrap'

class Comments extends Component {
    state = {
        commentInput: false,
        comment: {
            username: "",
            content: "",
            date: new Date(+ new Date() + 8 * 3600 * 1000).toJSON()
        }
    };

    handleCommentInputStatus = () => {
        const commentInput = !this.state.commentInput;
        this.setState({commentInput})
    };

    handleUsernameChange = (event) => {
        const {comment} = this.state;
        comment.username = event.target.value;
        this.setState({comment})
    };

    handleContentChange = (event) => {
        const {comment} = this.state;
        comment.content = event.target.value;
        this.setState({comment})
    };

    render() {
        const {comments} = this.props;
        return (
            <div className="card comments-area">
                <div className="card-body">
                    <div className="comment-title d-flex justify-content-between">
                        <h5 className="card-title">评论({comments.length})</h5>
                        <button className="tag button-detail"
                                onClick={this.handleCommentInputStatus}>写个评论
                        </button>
                    </div>
                    <Collapse isOpen={this.state.commentInput}>
                        <Form className="comment-input">
                            <FormGroup>
                                <Label>Username</Label>
                                <Input type="text"
                                       name="username"
                                       id="username"
                                       placeholder="输入一个昵称。"
                                       onChange={this.handleUsernameChange}
                                       value={this.state.comment.username}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Comment</Label>
                                <Input type="textarea"
                                       name="comment"
                                       id="comment"
                                       placeholder="说两句吧。"
                                       onChange={this.handleContentChange}
                                       value={this.state.comment.content}
                                />
                            </FormGroup>
                            <button type="button"
                                    className="tag button-detail"
                                    onClick={() => {
                                        this.props.onCommentSubmit(this.state.comment);
                                        this.handleCommentInputStatus()
                                    }}>评论
                            </button>
                        </Form>
                    </Collapse>
                    <div>
                        {comments.map(comment =>
                            <div className="comment" key={comment.date + comment.username}>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">{`#${comments.indexOf(comment) + 1} ${comment.username}:`}</h6>
                                    <small>{`${comment.date.slice(0, 10)} ${comment.date.slice(11, 19)}`}</small>
                                </div>
                                <p>{comment.content}</p>
                            </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;