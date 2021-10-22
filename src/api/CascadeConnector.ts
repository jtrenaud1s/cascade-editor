import { MajorAsset } from "../types";

const API_HOST = "cms.semo.edu:8443";
const API_PATH = "api/v1";

const generateEndpointUrl = (
  action: string,
  type: string,
  id: string,
  username: string,
  password: string
) => {
  return `https://${API_HOST}/${API_PATH}/${action}/${type}/${id}/?u=${username}&p=${password}`;
};

export const readAsset = async (
  id: string,
  type: string,
  username: string,
  password: string
) => {
  const endpoint = generateEndpointUrl("read", type, id, username, password);
  const response = await fetch(endpoint);
  return response.json();
};

export const saveAsset = async (
  id: string,
  type: string,
  contents: MajorAsset,
  username: string,
  password: string
) => {
  const endpoint = generateEndpointUrl("edit", type, id, username, password);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contents),
  };

  const response = await fetch(endpoint, requestOptions);

  return response.json();
};
