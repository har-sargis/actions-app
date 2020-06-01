module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        'babel'
    ],
    "rules": {  // eslint
        "camelcase": 0,
        "max-len": [2, 200, 4],
        "arrow-parens": [2, "as-needed"],
        "consistent-return": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "no-bitwise": 0,
        "no-plusplus": 0,
        "no-restricted-syntax": 0,
        "no-case-declarations": 0,
        "no-mixed-operators": 0,
        "no-use-before-define": 0,
        "no-prototype-builtins": 0,
        "no-restricted-properties": 0,
        "no-return-assign": 0,
        "no-nested-ternary": 0,
        // babel plugin
        "babel/no-unused-expressions": 2,
        // react plugin
        "react/button-has-type": 0,
        "react/prop-types": 0,
        "react/jsx-props-no-spreading": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
        "react/button-has-type": 0,
        "react/jsx-first-prop-new-line": [2, "multiline"],
        // jsx-a11y
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/label-has-associated-control": 0,
        // typescript-eslint
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/camelcase": 0,
        //eslint-import-plugin
        "import/order": [
          2,
          {
            "groups": ["builtin", "external", "internal"],
            "pathGroups": [
              {
                "pattern": "react",
                "group": "external",
                "position": "before"
              },
            ],
            "pathGroupsExcludedImportTypes": ["react"],
            "newlines-between": "always",
          }
        ],
    },
};
