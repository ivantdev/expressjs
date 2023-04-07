const express = require("express");
const productsRouter = require("./products.router");
const categoriesRouter = require("./categories.router");
const usersRouter = require("./users.router");
const customerRouter = require("./customer.router");
const orderRouter = require("./order.router");
const authRouter = require("./auth.router");
const profileRouter = require("./profile.router");

const routesApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/categories", categoriesRouter);
  router.use("/users", usersRouter);
  router.use("/customers", customerRouter);
  router.use("/orders", orderRouter);
  router.use("/auth", authRouter);
  router.use("/profile", profileRouter);
};

module.exports = routesApi;
