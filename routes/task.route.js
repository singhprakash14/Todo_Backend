const express = require('express');
const router = express.Router();
const Task = require('../models/task.model');




// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a task

router.post('/', async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = await Task.create({ title, description });
    res.json(task)
    res.status(200).json({ message: "Task Added successfully" });
  } catch (error) {
    res.status(400).json({ error: "Invalid data" })
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    await Task.findByIdAndDelete(taskId);
 res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Search tasks

// router.get('/search', async (req, res) => {
//   const { q: query } = req.query;

//   try {
//     const tasks = await Task.find({
//       $or: [
//         { title: { $regex: query, $options: 'i' } }
//       ],
//     });
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


router.get("/todos-search/:searchText", async (req, res) => {
  try {
    const { searchText } = req.params;

    const todos = await Task.find({ title: { $regex: '.*' + searchText + '.*' }
    });

    console.log(todos);

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: " try after few second" });
  }
});

// router.get("/todos-search/:searchText", async (req, res) => {
//   try {
//     const { searchText } = req.params;

//     const todos = await Todo.find({
//       title: { $regex: new RegExp(searchText, "i") }
//     });

//     console.log(todos);

//     res.status(200).json(todos);
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong, try again later" });
//   }
// });


// router.get("/search/:q", async (req, res) => {
//     const data = req.params.q;
  
//     try {
//       const user = await Task.find(  { title: { $regex: data || "", $options: 'i' } },);
  
//       res.status(200).json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


module.exports = router;
