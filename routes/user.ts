import { Router } from "https://deno.land/x/oak/mod.ts";

import { API_URL } from "../config/consts.ts";

const router = new Router();

router.get(`${API_URL}/user`, ({ response }) => {
  response.body = "Hello User World!";
});

export default router;
