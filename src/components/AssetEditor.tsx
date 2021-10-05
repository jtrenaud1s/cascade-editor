import React, { useContext, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { EditorContext } from "../contexts/EditorContext";
import { readPage, savePage } from "../api/CascadeConnector";
import { AuthContext } from "../contexts/AuthContext";

import Editor from "react-simple-code-editor";
import Prism from 'prismjs'
import 'prismjs/components/prism-json'
import "prismjs/themes/prism.css";

const AssetEditor = () => {
  const { editorContents, setEditorContents, assetType, setAssetType } =
    useContext(EditorContext);
  const [id, setId] = useState("");

  const authContext = useContext(AuthContext);

  return (
    <div className="mt-2">
      <form>
        <InputGroup>
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
        </InputGroup>

        <InputGroup>
          <Button
            className="mt-2"
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
            className="mt-2"
            variant="success"
            onClick={(e) => {
              savePage(
                id,
                editorContents,
                authContext.username,
                authContext.password
              ).then((response) => {
                alert(JSON.stringify(response, null, 2));
              });
            }}
          >
            Save
          </Button>
        </InputGroup>

        <Editor
      value={JSON.stringify(editorContents, null, 2)}
      onValueChange={(e) => {setEditorContents(JSON.parse(e));}}
      highlight={(code) => Prism.highlight(code, Prism.languages.json, 'json')}
      padding={10}
      minLength={30}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />

      </form>
    </div>
  );
};

export default AssetEditor;
