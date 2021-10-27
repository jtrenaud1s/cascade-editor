import React from "react";
import { Alert, Container } from "react-bootstrap";
import AssetEditor from "../components/AssetEditor";
import NotificationContainer from "../components/NotificationContainer";
import NavBar from "./NavBar";

const Page = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Alert className="mt-2" variant="warning">
          <strong>Note:</strong><br />
          <span>This utility only works on assets that do <i>NOT</i> require a workflow to be selected. Remove the requirement from the file/folder if there is one before trying to save the file.</span>
        </Alert>
        <AssetEditor />
        <NotificationContainer />
      </Container>
    </div>
  );
};

export default Page;
