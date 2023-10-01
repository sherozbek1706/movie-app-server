import mongoose from "mongoose";

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const MoviesSchema = new mongoose.Schema(
  {
    title: type,
    country: type,
    content: type,
    lang: type,
    image: type,
    year: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    rate: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    views: {
      type: mongoose.SchemaTypes.Number,
      required: true,
      default: 0,
    },
    category_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "category",
      required: true,
    },
    type_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "movie_type",
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

const Movies = mongoose.model("movies", MoviesSchema);

export default Movies;
