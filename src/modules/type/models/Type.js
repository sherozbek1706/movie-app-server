import mongoose from "mongoose";

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const TypeSchema = new mongoose.Schema(
  {
    name: type,
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

const Type = mongoose.model("movie_type", TypeSchema);

export default Type;
