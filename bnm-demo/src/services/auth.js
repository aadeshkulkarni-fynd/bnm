async function SignIn(payload) {
  try {
    const response = await fetch("https://2o8bcyoaua.execute-api.ap-south-1.amazonaws.com/dev/api/v0.1/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { SignIn };
