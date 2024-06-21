const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const paymentSchema = mongoose.Schema({
  sessionID: { type: String, required: true },
  createdDate: { type: Date, required: true },
});

const studentSchema = mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    // required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  OTP: {
    type: Number,
  },
  UserType: {
    type: String,
    default: "student",
  },
  Children_Name: {
    type: String,
    require: true,
  },
  PaymentsID: [paymentSchema], // Use the new paymentSchema here
  buyPlan: {
    type: Boolean,
    default: false,
  },
  isFreePlan: {
    type: Boolean,
    default: false,
  },
  Active_Plan:{
    type:String,
  },
  FromGoogle:{
    type:Boolean,
    default:false
  }
  // WeeklyPerformanceId:{type:String},
});

studentSchema.pre("save", async function (next) {
  try {
    // Check if the password has changed
    if (!this.isModified("Password")) {
      return next(); // Skip hashing if the password hasn't changed
    }
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUND, 10));
    const hashedPassword = await bcrypt.hash(this.Password, salt);
    this.Password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

studentSchema.statics.comparePassword = async function (
  enteredPassword,
  storedPassword
) {
  try {
    return await bcrypt.compare(enteredPassword, storedPassword);
  } catch (error) {
    throw error;
  }
};

studentSchema.methods.jwttoken = async function () {
  try {
    const data = {
      UserType: "student",
    };
    const token = jwt.sign(
      { id: this._id, ...data },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
