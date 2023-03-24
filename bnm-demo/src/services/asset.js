async function ListOfAssets() {
  try {
    const auth_token = localStorage.getItem("auth");
    console.log("Auth token: ", auth_token);
    const response = await fetch("https://2o8bcyoaua.execute-api.ap-south-1.amazonaws.com/dev/api/v0.1/assets/", {
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
    console.log("Auth token: ", auth_token);
    const response = await fetch(`https://2o8bcyoaua.execute-api.ap-south-1.amazonaws.com/dev/api/v0.1/assets/${type}/${assetId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Authorization: auth_token,
      },
    });
    console.log("Response: ", response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { ListOfAssets, showVisualisation };
