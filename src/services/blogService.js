import http from "./httpService";

const url = process.env.REACT_APP_API_URL + "/blogs/";

export function getBlogs() {
    const blogs = http.get(url);
    return blogs;
}

export function getBlog(id) {
    const blog = http.get(url + id);
    return blog
}

export function getGenres(blogs) {
    const genresWithDup = blogs.map(blog => blog.genre);
    const genres = [...new Set(genresWithDup)];
    const genresObj = genres.map(genre => ({title: genre, count: genresWithDup.filter(g => g === genre).length}));
    return genresObj;
}

export function getTags(blogs) {
    let tagsWithDup = [];
    blogs.forEach(blog => tagsWithDup = tagsWithDup.concat(blog.tags));
    const tags = [...new Set(tagsWithDup)];
    const tagsObj = tags.map(tag => ({title: tag, count: tagsWithDup.filter(t => t === tag).length}));
    return tagsObj;
}

