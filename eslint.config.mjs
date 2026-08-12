// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from 'eslint-config-prettier/flat'
import prettierPlugin from 'eslint-plugin-prettier';

const eslintConfig = defineConfig([...nextVitals, ...nextTs, {
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': 'error',
  },
}, // Override default ignores of eslint-config-next.
globalIgnores([
  // Default ignores of eslint-config-next:
  ".next/**",
  "out/**",
  "build/**",
  "next-env.d.ts",
]), {
  rules: {
    "@stylistic/space-before-function-paren": ["error", "never"]
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",
    // "react/prop-types": "off",
    // "react/react-in-jsx-scope": "off",
    // "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}, prettier, ...storybook.configs["flat/recommended"]]);

export default eslintConfig;
