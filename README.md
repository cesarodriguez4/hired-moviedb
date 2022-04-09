# hired-moviedb
Lists recently released movies along with their release date.
<img width="1420" alt="CleanShot 2022-04-09 at 17 08 40@2x" src="https://user-images.githubusercontent.com/11139209/162591743-cda9ab43-4198-4f30-9b4b-295f7c54e6f1.png">

# What this project has:
- Show a ordered list of release movies with his Image, Title and release date.
- Responsive Design.
- Pagination for movie lists.
- Sort by release date feature.
- Select movie's language

# What this project contains
Two folders, `server` and `client`, each folder includes a README.md with installing instructions.

For backend I will be implementing Rails API-Only scaffolding:
```
rails new server --api
```
For front end I will be using Create React App:
```
npx create-react-app client
```

# Front-end

It's mandatory to define a `.env` file under `/client` with the next parameter:

```
REACT_APP_API_ENDPOINT=http://localhost:3001
```
You can run unit tests running:
```
npm run tests
```
I was using Tailwind Css for rapid design, for simplicity I was implementing React Hook state (Single Parent Component, rest are just presentational components).

Front-end expects the backend running at `localhost:3001`.

# Back-end
Rails app expects to have defined `MOVIE_DB_API_KEY` variable, so you can define it in your machine:
```
export MOVIE_DB_API_KEY=APIKeyExample
```

As software engineer, I follow the [Yagni Mantra](https://martinfowler.com/bliki/Yagni.html#:~:text=Yagni%20originally%20is%20an%20acronym,'t%20gonna%20need%20it%22.) about not to create unnecesary features that could result in delays. That's why for this particular project, I'm not implementing database operations, cache (Memcached, Redis) or background workers (Sidekiq, resque, etc) as not being requested or referenced in the Problem Statement. However I handle very well those topics for Rails apps so you can feel free to ask in our interview about them if any question arises.
