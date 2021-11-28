# GraphQL starter template with Typescript, Vue 3 and Vite

This is a generic starter to interact with graphql endpoints.

## Installation

- `pnpm install`

## Graphql setup
- In your `.env` file you should add your endpoint in the env variable `VITE_GRAPHQL_ENDPOINT`
- In the `src/graphql` folder write your queries/mutations/subscriptions in graphql files
- Run `generate:graphql` to generate your typescript interfaces, schema.json file and the urql composable functions to interact with your graphql endpoint
- If your graphql schema contains custom types the codegen will usually generate the typescript interfaces with an any scalar, it is possible to improve it declaring your custom types in the `codegen.yml`


## Unit tests
- This starter uses jest + esbuild-jest to run your unit tests: it is way faster than ts-jest but it will not do typechecks, it is reccomended then to do it in your editor
- If you want to test the urql interactions with jest formidable has a [chapter about testing](https://formidable.com/open-source/urql/docs/advanced/testing/)

## E2E tests
- Cypress has an entire chapter of their documentation dedicated to [testing with grapql](https://docs.cypress.io/guides/testing-strategies/working-with-graphql)
