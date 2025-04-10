import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreate,
  syncUserDelete,
  syncUserUpdate,
} from "../../../config/inngest.js";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreate, syncUserDelete, syncUserUpdate],
});
