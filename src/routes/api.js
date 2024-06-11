import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import roleController from "../controller/roleController";
import jobController from "../controller/jobController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */

const testMiddleware = (req, res, next) => {
  console.log("calling a middleware");
  if (true) {
    return res.send("reject middleware");
  }
  next();
};

const initApiRoutes = (app) => {
  // path, handle
  // rest API
  // GET - R, POST - C, PUT - U, DELETE - D

  router.all(/^\/(?!job).*/, checkUserJWT, checkUserPermission);

  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);
  router.post("/logout", apiController.handleLogout);

  router.get("/account", userController.getUserAccount);

  // user routes
  router.get("/user/read", userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);

  // roles routes
  router.get("/role/read", roleController.readFunc);
  router.post("/role/create", roleController.createFunc);
  router.put("/role/update", roleController.updateFunc);
  router.delete("/role/delete", roleController.deleteFunc);
  router.get("/role/by-group/:groupId", roleController.getRoleByGroup);
  router.post("/role/assign-to-group", roleController.assignRoleToGroup);

  // group routes
  router.get("/group/read", groupController.readFunc);

  //job routers
  router.get("/job/read", jobController.readFunc);
  router.post("/job/create", jobController.createFunc);
  router.put("/job/update", jobController.updateFunc);
  router.delete("/job/delete", jobController.deleteFunc);

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
