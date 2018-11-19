<h1 align="center">GraphQL overlay for Coorpacademy</h1>

<div align="center">

<a href="https://graphql.org/" rel="noopener" target="_blank">GraphQL</a> overlay for <a href="https://coorpacademy.com" rel="noopener" target="_blank">Coorpacademy</a>

</div>

## Installation

Install dependencies using <a href="https://github.com/yarnpkg/yarn" rel="noopener" target="_blank">Yarn</a>.

```sh
yarn
```

## Prerequisite

Sign up to your Mooc using <a href="https://subdomain.coorpacademy.com/sso/connect">Connect</a>.

Then, go to <a href="https://subdomain.coorpacademy.com/api/v1/users/me">User API</a> to get your access token.

## Usage

```sh
yarn start
```

And fetch your <a href="http://localhost:4000/graphql" rel="noopener" target="_blank">local API</a> with the following headers:

```sh
Authorization: Bearer <access_token>
```

## Let's play!

You can use <a href="https://github.com/graphql/graphiql" rel="noopener" target="_blank">GraphiQL</a> to build your own requests.

Run it locally:

```sh
NODE_ENV=debug yarn start
```

And start playing <a href="http://localhost:4000/graphql" rel="noopener" target="_blank">in the browser IDE</a>.

## Request example

```
{
  catalogue (limit: 5) {
    name
    modules {
      level
      chapters {
        name
        stars
        slides {
          tips
          lessons {
            type
            description
          }
          question {
            type
            header
            explanation
            choices {
              value
              label
            }
          }
        }
      }
    }
  }
}
```

## What is Coorpacademy?

##### Learning Experience Platform

Coorpacademy offers an innovating Digital Learning solution to companies, focused on learner’s engagement.

## Contributing

Feel free to contribute :) but don't forget to run:

```sh
yarn test
```
