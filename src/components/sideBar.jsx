import React from 'react';

const SideBar = (props) => {
    const {tags, genres, search} = props;
    return (
        <div>
            <div className="list-group-item">
                <div className="d-flex flex-column">
                    <h5 className="mb-2 font-weight-bold">分类:</h5>
                    <button key={"all"}
                            className={`tag tag-genre sidebar-genre ${search.genre? "": "sidebar-genre-selected"}`}
                            onClick={() => props.onGenreChange("")}
                    >全部</button>
                    {genres.map(genre =>
                        <button key={genre.title}
                                className={`tag tag-genre sidebar-genre ${search.genre === genre.title? "sidebar-genre-selected": ""}`}
                                onClick={() => props.onGenreChange(genre.title)}
                        >{genre.title}</button>)}
                </div>
                <div className="flex-column mt-3">
                    <h5 className="mb-2 font-weight-bold">标签:</h5>
                    {tags.map(tag =>
                        <button key={tag.title}
                                className={`tag tag-${tag.title} sidebar-tag`}
                                onClick={() => props.onTagChange(tag.title)}
                        >{tag.title}</button>)}
                </div>
            </div>
        </div>
    );
};

export default SideBar;