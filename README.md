## GraphQL API with CDK, AppSync, and Amazon Neptune

This project deploys a basic GraphQL API built with Neptune Graph database, AWS AppSync, and AWS Lambda.

## Getting started

First, clone the project:

```sh
git clone git@github.com:dabit3/cdk-appsync-neptune.git
```

Next, change into the directories and install the dependencies:

```sh
cdk cdk-appsync-neptune

npm install

# or

yarn
```

Next, also change into the `lambda-fns` directory to install the dependencies there:

```sh
cd lambda-fns

npm install

# or

yarn
```

To deploy the API and services, build the project and then run the `deploy` command:

```sh
npm run build && cdk deploy
```

## Testing it out

To test it out, open the [AWS AppSync Console](https://console.aws.amazon.com/appsync) and try running the following queries:

```graphql
query listPosts {
  listPosts {
    id
    title
    content
  }
}

mutation createPost {
  createPost(post: {
    content:"Hello world"
    title: "My first pos!!"
  }) {
    id
    title
    content
  }
}
```