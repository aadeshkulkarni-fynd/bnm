import { config } from './Endpoints';
const { BACKEND_URL } = config;
async function ListOfAssets() {
  try {
    const auth_token = localStorage.getItem("auth");
    const response = await fetch(`${BACKEND_URL}/assets/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Authorization: auth_token,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function showVisualisation(type, assetId) {
  try {
    const auth_token = localStorage.getItem("auth");
    const response = await fetch(`${BACKEND_URL}/assets/${type}/${assetId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Authorization: auth_token,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { ListOfAssets, showVisualisation };
