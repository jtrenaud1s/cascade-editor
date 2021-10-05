import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EditorContext } from "../contexts/EditorContext";
import { readPage, savePage } from "../api/CascadeConnector";
import { AuthContext } from "../contexts/AuthContext";

const Editor = () => {
  const { editorContents, setEditorContents, assetType, setAssetType } =
    useContext(EditorContext);
  const [id, setId] = useState("");

  const authContext = useContext(AuthContext);

  return (
    <div>
      <form>
        <Form.Control
          as="select"
          onChange={(e) => {
            setAssetType(e.target.value);
          }}
          value={assetType}
        >
          <option value="page">Page</option>
        </Form.Control>
        <Form.Control
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="Asset ID: ceddad4196c98f635de775fde2f66882"
        />
        <Button
          onClick={(e) => {
            readPage(id, authContext.username, authContext.password).then(
              (contents) => {
                setEditorContents(contents);
              }
            );
          }}
        >
          Load
        </Button>

        <Button
          onClick={(e) => {
            savePage(id, editorContents, authContext.username, authContext.password).then(
              (response) => {
                alert(JSON.stringify(response, null, 2));
              }
            );
          }}
        >
          Save
        </Button>

        <Form.Control
          as="textarea"
          rows={50}
          value={JSON.stringify(editorContents, null, 2)}
          onChange={(e) => {
            setEditorContents(JSON.parse(e.target.value));
          }}
        ></Form.Control>
      </form>
    </div>
  );
};

export default Editor;
