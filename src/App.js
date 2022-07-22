import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import FlightApp from "./components/FlightApp";
import Test from "./components/Test";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import { useState } from "react";

//상용자 정의 태그 = component

function App() {
  // const _mode = useState("WELCOME"); //useState는 배열을 리턴
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "js", body: "js is..." },
  ];

  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello,web"></Article>;
  } else if (mode === "READ") {
    let title = null;
    let body = null; //이거 인식이 안됌 이유가 뭐농?

    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body; //이거 인식이 안됌 이유가 뭐농?
      }
    }

    // const 내용 = topics.map((unit, i) => {
    //   if (topics[i] === id) {
    //     return (title = topics[i].title), (body = topics[i].body);
    //   }
    // });

    content = <Article title={title} body="Hello,read"></Article>;
  }

  const handleChangeMode = () => {
    setMode("WELCOME");
  };

  const hadleNav = (id) => {
    setMode("READ");
    setId(id);
  };

  return (
    <div>
      <Header title="WEB" onChangeMode={handleChangeMode}></Header>
      <Nav topics={topics} onChangeMode={hadleNav}></Nav>
      {content}
    </div>
  );
}

export default App;
