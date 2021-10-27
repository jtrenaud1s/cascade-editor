import { useContext, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { EditorContext } from "../contexts/EditorContext";
import { readAsset, saveAsset } from "../api/CascadeConnector";
import { AuthContext } from "../contexts/AuthContext";

import AceEditor from "react-ace";

import "brace/mode/json";
import "brace/theme/pastel_on_dark";
import { NotificationContext } from "../contexts/NotificationContext";

const AssetEditor = () => {
  const [id, setId] = useState("");

  const { editorContents, setEditorContents, assetType, setAssetType } =
    useContext(EditorContext);
  const authContext = useContext(AuthContext);
  const notificationContext = useContext(NotificationContext);

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
            placeholder="Asset ID (e.g. : ceddad4196c98f635de775fde2f66882)"
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
                if (contents.success) {
                  setEditorContents(JSON.stringify(contents, null, 2));
                  notificationContext.addNotification("Success", "Asset Loaded Successfully");
                } else {
                  console.log(contents.message);
                  notificationContext.addNotification("Error", contents.message);
                }
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
                JSON.parse(editorContents),
                authContext.username,
                authContext.password
              ).then((response) => {
                if (response.success)
                  notificationContext.addNotification("Success", "Saved File Successfully!");
                else notificationContext.addNotification("Error", response.message);
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
            setEditorContents(e);
          }}
          className="mt-2"
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="700px"
          value={editorContents}
        />
      </form>
    </div>
  );
};

export default AssetEditor;
