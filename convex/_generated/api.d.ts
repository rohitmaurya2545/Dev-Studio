import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as codeExecutions from "../codeExecutions.js";
import type * as http from "../http.js";
import type * as lemonSqueezy from "../lemonSqueezy.js";
import type * as snippets from "../snippets.js";
import type * as users from "../users.js";


declare const fullApi: ApiFromModules<{
  codeExecutions: typeof codeExecutions;
  http: typeof http;
  lemonSqueezy: typeof lemonSqueezy;
  snippets: typeof snippets;
  users: typeof users;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
