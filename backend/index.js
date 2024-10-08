const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");  // Assuming these are Zod schemas
const { todo } = require("./db");  // Your Mongoose or database model

// Middleware to parse incoming JSON
app.use(express.json());

// Create a new todo
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  
  // Validate payload using createTodo schema
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  // Create the new todo in MongoDB
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created successfully",
  });
});

// Get all todos
app.get("/todos", async function (req, res) {
  try {
    // Fetch all todos from MongoDB
    const todos = await todo.find({});
    res.json({
      todos,
    });
  } catch (err) {
    res.status(500).json({ msg: "Error fetching todos", error: err.message });
  }
});

// Update todo as completed
app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  
  // Validate payload using updateTodo schema
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update({
    _id: req.body.id
  },{
    completed: true
  })
  res.json({
    msg: "todo marked as completed"
  })
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
