import React from "react";
import { Container } from "react-bootstrap";
import AssetEditor from "../components/AssetEditor";
import NavBar from "./NavBar";

const Page = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <AssetEditor />
      </Container>
    </div>
  );
};

export default Page;
