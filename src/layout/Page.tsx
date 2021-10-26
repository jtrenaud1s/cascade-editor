import React from "react";
import { Alert, Container } from "react-bootstrap";
import AssetEditor from "../components/AssetEditor";
import NavBar from "./NavBar";

const Page = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Alert variant="warning">
          <p><strong>Note:</strong> This utility only works on assets that do <i>NOT</i> require a workflow to be selected. Remove the requirement from the file/folder if there is one before trying to save the file.</p>
        </Alert>
        <AssetEditor />
      </Container>
    </div>
  );
};

export default Page;
