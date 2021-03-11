import React from "react";

const Post = (props) => {
  console.log(props.post);
  const { author, title, description, url, urlToImage } = props.post;
  return (
    <>
      <div className="col-md-6 mt-3">
        <div class="card" style={{ width: "100%" }}>
          <img
            class="card-img-top"
            src={urlToImage}
            alt=""
            style={{ width: "100%", height: "400px" }}
          />
          <div class="card-body">
            <a href={url}>
              <h5 class="card-title">{title}</h5>
            </a>
            <p class="card-text">{description}</p>
            <p className="badge badge-info">
              <small>by:</small> {author}
            </p>
            <br />
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary"
            >
              View News
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
