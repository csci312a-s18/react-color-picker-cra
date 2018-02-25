# React Color Picker

A version of the React Color Picker that was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Some built-in functionality of that skeleton was removed, specifically the [offline caching](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app).

This version demonstrates JSX, use of prop-types, testing with Jest/Enzyme, integrated ESLint, Continuous Integration via Travis-CI and deployment to Heroku.

## Setup

Run `npm install` to install the dependencies.

## Development

### Testing

The tests use both Jest and Enzyme has described in the [CRA
documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests).

Enzyme was installed with:

```
npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
```

### Linting with ESLint

The lint configuration built into CRA was extended with the AirBnB
configuration based on this [blog post](https://groundberry.github.io/development/2017/06/11/create-react-app-linting-all-the-things.html). Using ESLint outside of `react-scripts` may not be supported, but appears to
work.

The configuration was installed with:

```
npx install-peerdeps --dev eslint-config-airbnb
```

And the client `.eslintrc.json` file configured to use the AirBnB rules, and globally configured to allow JSX in .js files.

```
{
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}
```

The `.eslintignore` file is configured to exclude the CRA build directory.

Other rules are disabled in specific files.

The linter is run automatically by the CRA development server, or can be run manually with `npx eslint .` (or via `npm run lint`). Include the `--fix` option to `eslint` to automatically fix many formatting errors.

## Deploying to Heroku

The color picker can be deployed to [Heroku](https://heroku.com) using the recommended BuildPack and process described [here](https://github.com/mars/create-react-app-buildpack). Assuming you have already committed any changes, create and push the application to Heroku with:

```
heroku create --buildpack https://github.com/mars/create-react-app-buildpack.git
git push heroku master
```

To view the deployed application run `heroku open`.
