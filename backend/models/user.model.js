import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
   },
   fullName: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
      minlength: 6,  // Corrected `minLength` to `minlength`
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   followers: [
      {
         type: mongoose.Schema.Types.ObjectId,  // Corrected `objectID` to `ObjectId`
         ref: "User",  // Ensure this refers to the correct model name
         default: [],
      }
   ],
   following:[
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         default : [],
      },
   ],
   profileImg: {
      type: String,
      default: "",
   },
   coverImg: {
      type :String,
      default:"",
   }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);  // Corrected model name to "User"

export default User;
