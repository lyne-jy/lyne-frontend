import React, {Component} from 'react';
import {Form} from "reactstrap";
import InputBox from "./inputBox";
import {postBlog} from "../services/blogService";
import {toast} from "react-toastify";
import _ from "lodash"

class Post extends Component {
    state = {
        title: "",
        tags: [],
        genre: "",
        content: "",
        body: ""
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        const state = this.state;
        state[name] = value;
        this.setState({state})
    };

    handleSubmit = async () => {
        const blog = _.omit(this.state, ["state"]);
        blog.tags = blog.tags.split(",");
        try {
            await postBlog(blog);
            toast("发布成功。");
            this.props.history.push('/blog')
        }
        catch (e) {
            toast.error("发布时出现错误。")
        }
    };

    render() {
        const boxes = [
            {label: "标题", name: "title", type: "text"},
            {label: "分类", name: "genre", type: "text"},
            {label: "标签", name: "tags", type: "text"},
            {label: "摘要", name: "content", type: "text"},
            {label: "主体", name: "body", type: "textarea"}
        ];
        return (
            <div className="container" id="post-forms">
                <h1>写篇文章</h1>
                <Form className="comment-input">
                    {boxes.map(box =>
                        <InputBox name={box.name}
                                  label={box.label}
                                  type={box.type}
                                  value={this.state[box.name]}
                                  key={box.name}
                                  onChange={this.handleChange}
                        />)}
                    <button type="button"
                            className="tag button-detail"
                            onClick={this.handleSubmit}>提交
                    </button>
                </Form>
            </div>
        );
    }
}

export default Post;