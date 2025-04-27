import { Router } from "express";
import { userService } from "../../service/user/index.service.js";

const route = Router();
route.post("/test", userService)
export default route