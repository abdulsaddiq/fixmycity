import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 10000;

const publicPath = path.join(process.cwd(), "dist/public");

// Serve static files
app.use(express.static(publicPath));

// Fallback for SPA routing
app.use((req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
