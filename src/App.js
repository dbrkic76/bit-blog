import { useEffect, useState } from "react";
import "./App.css";
import AllBlogsPage from "./pages/AllBlogsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleBlogPage from "./pages/SingleBlogPage";

export const URL = "https://6745ca58512ddbd807f9a880.mockapi.io/api/v1/blogs"; // adresa sa koje se kupe podaci

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const fetchAllBlogs = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return new Error("Something went wrong!");
      })
      .then((data) => setBlogs(data));
  };

  useEffect(() => {
    fetchAllBlogs();
  }, [refresh]);

  console.log(1);

  return (
    <div className="app">
      {!singleBlog ? (
        <>
          <Header />
          <AllBlogsPage
            blogs={blogs}
            setSingleBlog={setSingleBlog}
            setRefresh={setRefresh}
          />
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <SingleBlogPage singleBlog={singleBlog} />
          <Footer />
        </>
      )}
    </div>
  );
};
export default App;
