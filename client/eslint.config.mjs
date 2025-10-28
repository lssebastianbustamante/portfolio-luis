import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import formatjs from "eslint-plugin-formatjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      formatjs,
    },
    rules: {
      // Reglas útiles para i18n sin bloquear el build
      "formatjs/no-invalid-icu": "error",
      "formatjs/enforce-default-message": "warn",
      // Permitimos ids opcionalmente para no romper casos con fallback manual
      "formatjs/no-id": "off",
    },
  },
];

export default eslintConfig;
