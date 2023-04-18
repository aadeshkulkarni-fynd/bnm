import { config } from './Endpoints';
const { BACKEND_URL } = config;
async function SignIn(payload) {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/login`, {
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
