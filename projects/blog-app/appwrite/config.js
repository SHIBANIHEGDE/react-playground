import { Client, Account, Storage, TablesDB } from "appwrite";
import { config } from "../conf/conf";
const client = new Client()
  .setEndpoint(config.appwriteUrl) // Your API Endpoint
  .setProject(config.projectId);
const account = new Account(client);
const tablesDB = new TablesDB(client);
const storage = new Storage(client);
export { client, account, tablesDB, storage };
