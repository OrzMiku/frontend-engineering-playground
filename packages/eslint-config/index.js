import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig(
  eslintConfigPrettier,
  js.configs.recommended,
  tseslint.configs.recommended,
);
