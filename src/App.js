import React from "react";
import fetchData from "./fetchData";
import Main from "./Main";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  const data = fetchData();

  return (
    <>
      <GlobalStyle />
      {data?.places ? <Main places={data.places} /> : <>{/* LOADER HERE */}</>}
    </>
  );
}

export default App;
