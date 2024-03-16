# React Dashboard 
view demo [Link demo ](https://react-dashbord-basem.netlify.app/)
## React Dashbord show stochastic chart (bar , pie and bar chart) based on the data come from backend in special format 
### i handel the backend data by node js and express it is just end point return the data you can find the repo here [dashboard backennd repo](https://github.com/basemsala7/dashboard-backend)

in this app i used : 
1. react with typescript
2. rechart
3. react query to cach the data

the app consest of dashboard , user , prodacts 

dashboard -> show the stochastic and charts 
users -> show the info about users and you can view details in the action columns
products -> show the info about products and you can delete the product by clicking on delete icon in the action columns
and you can logout 

the setting is just UI and the notification and search icon










# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
