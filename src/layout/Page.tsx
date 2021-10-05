import React from "react";
import { Container } from "react-bootstrap";
import Editor from "../components/Editor";
import NavBar from "./NavBar";

const Page = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Editor />
      </Container>
    </div>
  );
};

export default Page;
