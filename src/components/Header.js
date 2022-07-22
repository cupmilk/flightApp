import React from "react";

const Header = (props) => {
  //  console.log("props", props, props.tiltle);
  const click = (event) => {
    event.preventDefault();
    props.onChangeMode();
  };

  return (
    <div>
      <header>
        <h1>
          <a href="/" onClick={click}>
            {props.title}
          </a>
        </h1>
      </header>
    </div>
  );
};

export default Header;
