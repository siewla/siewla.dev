import { FlatCompat } from "@eslint/eslintrc";

import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});
const eslintConfig = [
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.config({
    extends: ["next"],
    rules: {
      "jsx-quotes": ["error", "prefer-double"],
    },
  }),
];
export default eslintConfig;
