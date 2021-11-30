const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const path = require("path");

const connectDB = require("./database/db");

const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const favoritesRoutes = require("./routes/favorites");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const emailRoutes = require("./routes/email");

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/cart", cartRoutes);
app.use("/api/favorite", favoritesRoutes);
app.use("/api/admin", adminRoutes); // /api/admin/allowOrder/order123
app.use("/api/user", userRoutes);
app.use("/api/email", emailRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
