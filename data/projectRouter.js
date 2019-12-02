const express = require("express");

const Projects = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.find("projects")
    .then(project => {
      projects = project.map(project => {
        return {
          ...project,
          completed: !!project.completed
        };
      });
      res.json(project);
    })
    .catch(err => {
      console.log(err);
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

  Projects.addProject(projects)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.post("/", (req, res) => {
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

// router.post("/:id/tasks", (req, res) => {
//   const task = req.body.id.req.body;

//   Projects.insert(task)
//     .then(yourTask => {
//       console.log(yourTask);
//       res.status(201).json(yourTask);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ message: "Failed to create new tasks" });
//     });
// });

module.exports = router;
