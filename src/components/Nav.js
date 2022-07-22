import React from "react";

const Nav = (props) => {
  const navClick = (e) => {
    e.preventDefault();
    props.onChangeMode(Number(e.target.id)); //e.target = event를 유발시키는 tag를 향함
  };

  //console.log(props.topics[0].title);
  const list = props.topics.map((unit, idx) => {
    return (
      <li key={props.topics[idx].id}>
        <a
          id={props.topics[idx].id}
          href={"/read/" + props.topics[idx].id}
          onClick={navClick}
        >
          {props.topics[idx].title}
        </a>
      </li>
    );
  });

  return (
    <div>
      <nav>
        <ol>{list}</ol>
      </nav>
    </div>
  );
};

export default Nav;
