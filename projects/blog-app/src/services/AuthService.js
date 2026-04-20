import { Client, Account, ID } from "appwrite";
import { config } from "../../conf/conf";
class AuthService {
  client;
  account;
  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteUrl) // Your API Endpoint
      .setProject(config.projectId);
    this.account = new Account(this.client);
  }
  async createUser({ email, password }) {
    try {
      const user = await this.account.create({
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
      const session = await this.account.createEmailPasswordSession({
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
  async getCurrentUser() {
    try {
      const user = await this.account.get();
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
