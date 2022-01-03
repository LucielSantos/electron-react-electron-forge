import { Router } from "express";

const router = Router();

router.use((req, res, next) => {
  console.log(`[${req.method}] - ${req.url}`);

  next();
});

router.get("/health-check", (req, res) => {
  res.status(200).send({ message: "ok" });
});

export { router };
