import { Client, Account, ID } from "appwrite";
import { account } from "./config";
class AuthService {
  constructor() {}
  async createUser({ email, password }) {
    try {
      const user = await account.create({
        userId: ID.unique(),
        email: email,
        password: password,
      });
      return {
        success: true,
        data: user,
      };
    } catch (err) {
      console.log("count create new user");
      return {
        success: false,
        error: err.message || "Could not create new user",
      };
    }
  }
  async login({ email, password }) {
    try {
      const session = await account.createEmailPasswordSession({
        email: email,
        password: password,
      });
      return {
        success: true,
        data: session,
      };
    } catch (err) {
      console.log("Could not log in the user");
      return {
        success: false,
        error: err.message || "Could not log in the user",
      };
    }
  }
  async logout() {
    try {
      await account.deleteSessions();
    } catch (err) {
      console.error("Could not log out the user", err);
    }
  }
  async getCurrentUser() {
    try {
      const user = await account.get();
      return {
        success: true,
        data: user,
      };

      // Logged in
    } catch (err) {
      // Not logged in
      return {
        success: false,
        error: err.message || "User is not logged in",
      };
    }
  }
}
export default new AuthService();
