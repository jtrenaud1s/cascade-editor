import React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import EditorProvider from "./contexts/EditorContext";
import Page from "./layout/Page";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <EditorProvider>
          <Page />
        </EditorProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
