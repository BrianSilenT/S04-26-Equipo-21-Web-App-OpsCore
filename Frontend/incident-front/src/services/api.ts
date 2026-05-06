import axios from "axios";
import { env } from "../app/config/env";

export const api = axios.create({
  baseURL: env.apiUrl,
});