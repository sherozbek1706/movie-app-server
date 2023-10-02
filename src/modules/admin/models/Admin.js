import mongoose from "mongoose";

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const AdminSchemas = new mongoose.Schema(
  {
    first_name: type,
    last_name: type,
    password: type,
    username: {
      type: mongoose.SchemaTypes.String,
      unique: true,
      required: true,
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Admin = mongoose.model("admin", AdminSchemas);

export default Admin;
