module.exports = (mongoose) => {
  let schema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      original_language: {
        type: String,
        required: true,
      },
      production_companies: {
        type: String,
        required: true,
      },
      overview: {
        type: String,
        required: true,
      },
      release_date: {
        type: Date,
        required: true,
      },
      runtime: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  const Movie = mongoose.model("movie", schema);
  return Movie;
};
