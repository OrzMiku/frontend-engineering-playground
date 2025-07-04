import { defineConfig } from "eslint/config";
import baseConfig from "./base.js";
import vueConfig from "eslint-config-prettier/flat";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([vueConfig, baseConfig, eslintConfigPrettier]);
