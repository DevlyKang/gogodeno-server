import { Router } from "https://deno.land/x/oak/mod.ts";
import { API_URL } from "../config/consts.ts";

const router = new Router();

router.get(`/${API_URL}/deno`, ({ response }) => {
  response.body = "Hello Deno World!";
});

router.get(`/${API_URL}/test`, ({ response }) => {
  response.body = "Hello Test World!";
});

export default router;
