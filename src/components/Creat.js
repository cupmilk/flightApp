import React from "react";
//어떤 정보를 서버에 전송할때 쓰는 html

const Creat = (props) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    props.onCreate(title, body);
  };

  return (
    <article>
      <h2>Creat</h2>
      <form onSubmit={handleOnSubmit}>
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body" />
        </p>
        <p>
          <input type="submit" value="Creat" />
        </p>
      </form>
    </article>
  );
};

export default Creat;
