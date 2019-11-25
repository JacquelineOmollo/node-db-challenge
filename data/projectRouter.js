const express = require("express");
const Projects = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.find()
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get project" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get project" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  Projects.getTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: "Could not find steps for given scheme" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get steps" });
    });
});

router.post("/", (req, res) => {
  const projects = req.body;

  Projects.add(projects)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

module.exports = router;
