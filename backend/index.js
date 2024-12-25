import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Test API" });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listning on port: http://localhost:${PORT}`);
});
