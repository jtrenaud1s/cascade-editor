import React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import EditorProvider from "./contexts/EditorContext";
import ErrorProvider from "./contexts/ErrorContext";
import Page from "./layout/Page";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <ErrorProvider>
          <EditorProvider>
            <Page />
          </EditorProvider>
        </ErrorProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
