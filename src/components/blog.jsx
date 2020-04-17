import React, {Component} from 'react';
import BlogList from "./blogList";
import {getBlogs, getGenres, getTags} from "../services/blogService"
import Pagination from "./pagination";
import {paginate} from "./paginate";
import SideBar from "./sideBar";
import FilterBar from "./filterBar";
import Spinner from './spinner'


class Blog extends Component {
    state = {
        blogs: [],
        genres: [],
        tags: [],
        currentPage: 1,
        itemsPerPage: 4,
        search: {
            genre: "",
            tags: []
        }
    };

    async componentDidMount() {
        this.getData();
        this.getSearch();
    }

    getData = async () => {
        const {data: blogs} = await getBlogs();
        const genres = getGenres(blogs);
        const tags = getTags(blogs);
        this.setState({blogs, genres, tags});
    };

    getSearch = () => {
        const state = this.state;
        const search = this.props.location.state;
        if (search) {
            const key = Object.keys(search)[0];
            state.search[key] = search[key];
            this.setState({state})
        }
    };

    getFilteredBlogs = () => {
        const {blogs, search} = this.state;
        return blogs.filter(b =>
            (search.tags.length === 0 ? true : search.tags.every(tag => b.tags.includes(tag)))
            && (search.genre ? b.genre === search.genre : true))
    };

    handlePageChange = (page) => {
        this.setState({currentPage: page});
        window.scrollTo(0, 0);
    };

    handleGenreChange = (genre) => {
        const search = this.state.search;
        search.genre = genre;
        this.handlePageChange(1);
        this.setState({search});
    }
    ;

    handleTagChange = (tag) => {
        const search = this.state.search;
        if (search.tags.includes(tag)) return;
        search.tags.push(tag);
        this.handlePageChange(1);
        this.setState({search});
    };

    handleTagDelete = (item) => {
        const search = this.state.search;
        if (item.key === "tag") {
            const index = search.tags.indexOf(item.value);
            search.tags.splice(index, 1)
        } else {
            search.genre = ""
        }
        this.setState({search})
    };

    render() {
        const {currentPage, itemsPerPage, search, tags, genres, blogs} = this.state;
        const filteredBlogs = this.getFilteredBlogs();
        const blogsToRender = paginate(filteredBlogs, currentPage, itemsPerPage);
        if (blogs.length === 0) return <div><Spinner/></div>;
        return (
            <div className="container">
                <div id="blog-main" className="row">
                    <div className="col list-group">
                        <FilterBar search={search}
                                   onTagDelete={this.handleTagDelete}
                        />
                        <BlogList
                            blogs={blogsToRender}
                            onGenreChange={this.handleGenreChange}
                            onTagChange={this.handleTagChange}
                        />
                        <Pagination itemsCount={filteredBlogs.length}
                                    itemsPerPage={itemsPerPage}
                                    currentPage={currentPage}
                                    onPageChange={this.handlePageChange}
                        />
                    </div>
                    <div className="col-sm-3">
                        <SideBar tags={tags}
                                 genres={genres}
                                 search={search}
                                 onGenreChange={this.handleGenreChange}
                                 onTagChange={this.handleTagChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;