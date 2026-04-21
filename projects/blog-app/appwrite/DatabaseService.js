import { Client, Permission, Role, ID } from "appwrite";
import { config } from "../conf/conf";
import { tablesDB } from "./config";

class Service {
  async createPosts({ title, slug, content, featuredImage, status, imageId }) {
    const { databaseId, tableId } = config;
    try {
      const response = await tablesDB.createRow({
        databaseId: databaseId,
        tableId: tableId,
        rowId: ID.unique(),
        data: {
          title,
          slug,
          content,
          featuredImage,
          status,
          imageId,
        },
      });
      return {
        success: true,
        data: response,
      };
    } catch (err) {
      console.err("couldnt create new posts");
      return {
        success: false,
        error: err.message || "Couldnt create new post",
      };
    }
  }
  async updatePosts({
    title,
    slug,
    content,
    featuredImage,
    status,
    imageId,
    rowId,
  }) {
    const { databaseId, tableId } = config;
    try {
      const response = await tablesDB.updateRow({
        databaseId: databaseId,
        tableId: tableId,
        rowId: rowId,
        data: {
          title,
          slug,
          content,
          featuredImage,
          status,
          imageId,
        },
      });
      return {
        success: true,
        data: response,
      };
    } catch (err) {
      console.err("couldnt create new posts");
      return {
        success: false,
        error: err.message || "Couldnt create new post",
      };
    }
  }
  async deletePosts({ rowId }) {
    const { databaseId, tableId } = config;
    try {
      await tablesDB.deleteRow({
        databaseId,
        tableId,
        rowId,
      });
      return {
        success: true,
      };
    } catch (err) {
      console.error("error", err);
      return {
        success: false,
      };
    }
  }
  async getPost() {}
}
const service = new Service();
export default service;
