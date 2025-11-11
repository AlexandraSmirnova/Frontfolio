import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import _import from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
        '@stylistic': stylistic,
        react,
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        globals: {
            ...globals.commonjs,
            ...globals.node,
            ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            project: "tsconfig.json",

            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        "import/resolver": {
            node: {
                extensions: [".ts", ".tsx", ".js", ".jsx"],
            },
        },

        react: {
            version: "detect",
        },
    },

    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",

        "@typescript-eslint/array-type": ["error", {
            default: "array-simple",
        }],

        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/class-literal-property-style": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "error",
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
        "comma-spacing": "off",
        "consistent-return": "error",
        curly: "error",

        "default-case": ["error", {
            commentPattern: "^no default$",
        }],

        "default-case-last": "error",
        "default-param-last": "off",
        "dot-location": ["error", "property"],
        "dot-notation": "off",

        eqeqeq: ["error", "always", {
            null: "ignore",
        }],

        "grouped-accessor-pairs": ["error", "getBeforeSet"],
        "guard-for-in": "error",
        "max-classes-per-file": ["error", 1],
        "no-alert": "error",
        "no-caller": "error",
        "no-constructor-return": "error",
        "no-div-regex": "error",
        "no-else-return": "error",

        "no-empty-function": ["error", {
            allow: ["arrowFunctions", "functions", "methods"],
        }],

        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-prototype-builtins": "off",

        "no-restricted-properties": ["error", {
            object: "arguments",
            property: "callee",
            message: "arguments.callee is deprecated",
        }, {
            property: "__defineGetter__",
            message: "Please use Object.defineProperty instead.",
        }, {
            property: "__defineSetter__",
            message: "Please use Object.defineProperty instead.",
        }, {
            object: "Math",
            property: "pow",
            message: "Use the exponentiation operator (**) instead.",
        }],

        "no-return-assign": ["error", "always"],
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-undef": "off",
        "no-unmodified-loop-condition": "error",

        "no-unused-expressions": ["error", {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: false,
        }],

        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-return": "error",
        "no-void": "error",

        "prefer-promise-reject-errors": ["error", {
            allowEmptyReject: true,
        }],

        "prefer-regex-literals": "error",

        "quote-props": ["error", "consistent-as-needed", {
            keywords: true,
        }],

        quotes: ["error", "single", {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],
        "indent": ["error", 4],
        "wrap-iife": ["error", "inside"],
        yoda: "error",
        "import/dynamic-import-chunkname": "error",
        "import/export": "error",
        "import/named": "error",
        "import/no-absolute-path": "error",
        "import/no-dynamic-require": "error",
        "import/exports-last": "error",

        "import/no-extraneous-dependencies": ["error", {
            devDependencies: ["**/__tests__/**", "**/webpack.*.js", "**/gulpfile.js"],
            optionalDependencies: false,
        }],

        "import/extensions": ["error", "always", {
            js: "never",
            ts: "never",
            tsx: "never",
        }],

        "import/first": ["error", "absolute-first"],
        "import/newline-after-import": "error",
        "import/no-amd": "error",
        "import/no-duplicates": "error",
        "import/no-mutable-exports": "error",
        "import/no-named-as-default-member": "error",
        "import/no-named-as-default": "error",
        "import/no-named-default": "error",
        "import/no-self-import": "error",

        "import/no-unresolved": ["error", {
            commonjs: true,
            caseSensitive: true,
        }],

        "import/no-useless-path-segments": "error",
        "import/no-webpack-loader-syntax": "error",

        "import/order": ["error", {
            groups: [["builtin", "external"], ["internal", "parent", "sibling", "index"]],
            "newlines-between": "always",
        }],

        "react/display-name": "off",
        "react/jsx-closing-bracket-location": ["error", "line-aligned"],
        "react/prop-types": "off",
        '@stylistic/semi': 'error',
        '@stylistic/jsx-indent': 'error',
    },
}]);
