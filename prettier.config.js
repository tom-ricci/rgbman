export default {
  singleQuote: false,
  semi: true,
  trailingComma: "es5",
  bracketSpacing: true,
  arrowParens: "always",
  overrides: [
    {
      files: ["**/*.json", "**/*.jsonc", "**/*.json5"],
      options: {
        trailingComma: "none",
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};
