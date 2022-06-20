// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/Schoolprpject_db/UserModel";
import CourseModel from "../models/Schoolprpject_db/CourseModel";
import ExamModel from "../models/Schoolprpject_db/ExamModel";
import LoginModel from "../models/Schoolprpject_db/LoginModel";
import StudentNameModel from "../models/Schoolprpject_db/StudentNameModel";
import SubjectModel from "../models/Schoolprpject_db/SubjectModel";

// End Import Models

// Import Models Factom Blockchain
import IdentityModel from "../models/Schoolprpject_db/IdentityModel";
import ChainModel from "../models/Schoolprpject_db/ChainModel";
import EntryModel from "../models/Schoolprpject_db/EntryModel";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.schoolprpject_db_dbUrl);

    // Start Init Models

		UserModel.init();
		CourseModel.init();
		ExamModel.init();
		LoginModel.init();
		StudentNameModel.init();
		SubjectModel.init();
 // End Init Models
    
    // Init Models Factom Blockchain
    IdentityModel.init();
    ChainModel.init();
    EntryModel.init();
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_schoolprpject_db = await mongoose.connect(
        "mongodb://" + properties.schoolprpject_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_schoolprpject_db;
  }
}

export default new Database();
