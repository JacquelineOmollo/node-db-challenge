const express = require("express");

const Projects = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.find()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Project" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
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
          .json({ message: "Could not find tasks for given scheme" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get steps" });
    });
});

router.post("/", (req, res) => {
  const projects = req.body;

  Projects.addProject(projects)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.post("/:id", (req, res) => {
  const resource = req.body;

  Projects.addResources(resource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

router.post("/:id/tasks", (req, res) => {
  const task = req.body.id.req.body;

  Projects.insert(task)
    .then(yourTask => {
      console.log(yourTask);
      res.status(201).json(yourTask);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new tasks" });
    });
});

router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id)
    .then(project => {
      if (project > 0) {
        res.status(200).json({ message: "The project has been removed" });
      } else {
        res.status(404).json({ message: "The project could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error removing the project"
      });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const project = { ...req.body };
  Projects.update(id, project)
    .then(project => {
      projects.get(id);
      if (!id) {
        res.status(404).json({
          message: "The project with the id does not exist."
        });
      } else if (!req.body.name || !req.body.description) {
        res.status(400).json({
          message: "Please provide description and name for the project."
        });
      } else {
        res.status(200).json(project);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: "The project information could not be updated."
      });
    });
});

module.exports = router;
