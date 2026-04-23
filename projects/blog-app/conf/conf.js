const getEnvVar = (key) => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return String(value);
};

export const config = {
  appwriteUrl: getEnvVar("VITE_APPWRITE_ENDPOINT"),
  projectId: getEnvVar("VITE_APPWRITE_PROJECT_ID"),
  databaseId: getEnvVar("VITE_APPWRITE_DATABASE_ID"),
  collectionId: getEnvVar("VITE_APPWRITE_COLLECTION_ID"),
  bucketId: getEnvVar("VITE_APPWRITE_BUCKET_ID"),
};
