import React from "react";

const Article = (props) => {
  return (
    <div>
      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
    </div>
  );
};

export default Article;
