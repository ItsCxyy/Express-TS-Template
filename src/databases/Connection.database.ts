import mongoose, { ConnectOptions } from "mongoose";

import { config } from "../config";

export const initDatabaseSetup = async (): Promise<void> => {
  const connectOptions: ConnectOptions = {
    bufferCommands: false,
    user: config.db_user,
    pass: config.db_password,
    dbName: config.db_database,
    autoIndex: true,
    maxPoolSize: 5,
    minPoolSize: 2,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
  };

  try {
    console.log("💻 Mongo Database » Connecting mongo database...");
    await mongoose.connect(`mongodb+srv://${config.db_host}`, connectOptions);
    console.log(`💻 Mongo Database » Connected to '${mongoose.connection.name}' mongo database successfully!`);
  } catch (error: any) {
    console.error(error);
    process.exit(1);
  }
};