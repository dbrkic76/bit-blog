import { URL } from "../App";

const Blog = ({ blog, setSingleBlog, setRefresh }) => {
  const { author, description, image, title, id } = blog;

  const shortenDescription = (description, end) => {
    let modifiedString = "";

    modifiedString = description.substring(0, end);
    return modifiedString;
  };

  const deleteBlogById = (id) => {
    fetch(URL + `/${id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return new Error("Something went wrong!");
      })
      .then((data) => {
        setRefresh((prevValue) => !prevValue);
      });
  };

  return (
    <div className="blog">
      <article onClick={() => setSingleBlog(blog)}>
        <h2>{title}</h2>
        <p>{shortenDescription(description, 10)}</p>
        <p>{author}</p>
        <img src={image} alt={title} />
      </article>
      <button onClick={() => deleteBlogById(id)}>DELETE</button>
    </div>
  );
};

export default Blog;
