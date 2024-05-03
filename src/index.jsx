import { createUserApi } from "./api/apiConfig";

export const CreateUser = async ({ name, email, password }) => {
  const response = await fetch(createUserApi, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  try {
    if (response.ok) {
      const result = await response.json();
      console.log("result", result);

      return result;
    }
  } catch (error) {
    return rejectWithValue(error);
  }
};
