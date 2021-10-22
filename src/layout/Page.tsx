import React from "react";
import { Container } from "react-bootstrap";
import AssetEditor from "../components/AssetEditor";
import NavBar from "./NavBar";
import Demo from '../components/Demo'

const Page = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <AssetEditor />
        <Demo />
      </Container>
    </div>
  );
};

export default Page;
