# hired-moviedb
Lists recently released movies along with their release date.

# Important notes
The next document presents an overview of what this project does and crutial decisions both on 
backend or front end.

# What this project contains
Two folders, `server` and `client`, each folder includes a README.md with installing instructions.

This document is intended to explain what libraries (or gems) were selected and why. Also contains general thoughts
about developing in general.

For backend I will be implementing Rails API-Only scaffolding:
```
rails new server --api
```
For front end we will be using Create React App:
```
npx create-react-app client
```

# Front end

For rapid design development I will be using a css framework, Taildwind is a popular election and a good
postcss framework.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```



