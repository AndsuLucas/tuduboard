import React, { useState } from "react";
import MenuComponent from "./menu/MenuComponent";
import BoardComponent from "./board/BoardComponent";

function App(): JSX.Element {

  return (
      <>
        <header>
          <MenuComponent/>
        </header>
        <main>
          <BoardComponent/>          
        </main>
      </>
  );
}

export default App;
