const SingleBlogPage = ({ singleBlog }) => {
  return (
    <div className="single-page">
      <h2>{singleBlog.title}</h2>
      <img src={singleBlog.image} alt={singleBlog.image} />
      <p>{singleBlog.description}</p>
      <span>{singleBlog.author}</span>
    </div>
  );
};

export default SingleBlogPage;
