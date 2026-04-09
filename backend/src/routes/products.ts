import { Router } from "express";
import { getProducts } from "../actions/products";

const router = Router();

router.get("/", getProducts);

export default router;
