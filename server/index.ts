import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static(path.join(process.cwd(), "dist/public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist/public/index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
