const db = require("../models");
const Movie = db.movies;

// Create and Save a new Movie
exports.create = (req, res) => {
  Movie.create(req.body)
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) =>
      res
        .status(400)
        .json({ message: err.message || "Unable to add this movie" })
    );
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Movie.find(condition)
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    });
};

// Find a one Movie with an id
exports.findOne = (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      if (!movie)
        res.status(404).send({ message: "Not found Movie with id " + id });
      else res.json(movie);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Movie with id=" + id,
      });
    });
};

// Update a Movie by the id in the request
exports.update = (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then((movie) => {
      res.json({ message: "Movie was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Movie with id=" + id,
      });
    });
};

// Delete a Movie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Movie.findByIdAndRemove(id, { useFindAndModify: false })
    .then((movie) => {
      res.json({
        message: "Movie was deleted successfully!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Movie with id=" + id,
      });
    });
};
