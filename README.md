# starter-webpack-react-es6-sass
Front-end starter kit with tools for development:

- webpack as module bundler
- react library with es6 being enabled and transpiled using babel v7
- redux for managing application state
- sass as css preprocessor
- css modules
- style components

## Usage

1. First clone the project:
```
git clone https://github.com/garousianstudio/starter-webpack-react-es6-sass.git
cd starter-webpack-react-es6-sass
```
2. Install dependencies:
```
npm install
```
3. Generate an `.env` file in project root. Copy/past content of `.env-sample`.
- `PATH_ROOT`: Set it if deploying project on a path other than root. E.g if deploying on `x.com/path/to/foler` then `PATH_ROOT` must be `/path/to/folder`. Default is `/`
- `PORT`: Development port.
- `PORT_BROWSER_SYNC`: Set this if developing on multi devices. It enables browser sync. More information about browser sync: [https://www.browsersync.io/](https://www.browsersync.io/)
4. For development run development task:
```
npm run dev
```
By default some sample code is available in starter kit to demonstrate how things work. You need to remove them manually before starting your own project.

## Tasks
```
npm dev => start webpack dev server for development
npm run clean => clean previously generated 'dist' folder
npm run build => use it for production
npm run build:analyze => build project with bundle analyzer
```


## License
MIT, see [LICENSE.md](https://github.com/garousianstudio/starter-webpack-react-es6-sass/blob/master/LICENSE) for details.