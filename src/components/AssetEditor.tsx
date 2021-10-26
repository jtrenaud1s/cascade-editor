import React, { useContext, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { EditorContext } from "../contexts/EditorContext";
import { readAsset, saveAsset } from "../api/CascadeConnector";
import { AuthContext } from "../contexts/AuthContext";


import brace from "brace";
import AceEditor from "react-ace";

import "brace/mode/json";
import "brace/theme/pastel_on_dark";

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
            <option value="block">Block</option>
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
              readAsset(
                id,
                assetType,
                authContext.username,
                authContext.password
              ).then((contents) => {
                setEditorContents(contents);
              });
            }}
          >
            Load
          </Button>

          <Button
            className="mt-2"
            variant="success"
            onClick={(e) => {
              saveAsset(
                id,
                assetType,
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

        <AceEditor
          mode="json"
          theme="pastel_on_dark"
          onChange={(e: string) => {
            setEditorContents(JSON.parse(e));
          }}
          className="mt-2"
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="700px"
          value={JSON.stringify(editorContents, null, 2)}
        />
      </form>
    </div>
  );
};

export default AssetEditor;
