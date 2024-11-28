import { useState } from "react";
import { URL } from "../App";
export const CreateBlogModal = ({ toggleModalOpen }) => {
  const [payload, setPayload] = useState({
    title: "",
    description: "",
    author: "",
    imageURL: "",
  });
  const handleSubmit = () => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        title: payload.title,
        description: payload.description,
        author: payload.author,
        image: payload.imageURL,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={toggleModalOpen}>
          x
        </button>
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => {
              setPayload({
                ...payload,
                title: e.target.value,
              });
            }}
          />

          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={5}
            onChange={(e) => {
              setPayload({
                ...payload,
                description: e.target.value,
              });
            }}
          ></textarea>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            onChange={(e) => {
              setPayload({
                ...payload,
                author: e.target.value,
              });
            }}
          />

          <label htmlFor="img">Image URL</label>
          <input
            type="text"
            id="img"
            onChange={(e) => {
              setPayload({
                ...payload,
                imageURL: e.target.value,
              });
            }}
          />

          <button
            type="button"
            onClick={() => {
              handleSubmit();
            }}
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};
