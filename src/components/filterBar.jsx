import React from 'react';


const FilterBar = (props) => {
    const {search} = props;
    const {tags, genre} = search;
    const items = tags.map(tag => ({key: "tag", value: tag}));
    genre && items.unshift({key: "genre", value: genre});

    return (
        <div className={items.length === 0 ? "list-group-item filter-bar-closed" : "list-group-item filter-bar-opened"}>
            <div className="d-flex">
                <h5>筛选条件:</h5>
                {items.map(item => (
                    <button className={`tag tag-${item.key} tag-${item.value} tag-filter`}
                            key={item.value}
                            onClick={() => props.onTagDelete(item)}
                    >
                        {`${item.key}: ${item.value}`}
                    </button>))}
            </div>
        </div>
    );
};

export default FilterBar;