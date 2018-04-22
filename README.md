# knex-pg-docker-boilerplate

# graphql
install the dependencies for
 `apollo-server-express` - to handle the /graph(i)ql routes
 `body-parser` - middleware to get the body in the request object
 `graphql` - graphQL.js, used for building type schema and execution. 
 `graphql-tools` - exports makeExecutableSchema, to stitch the schema and resolvers.

## 1. Queries

Things to pay attention to:
1. You need the resolvers to follow the schema definition.
2. Understand how the fields are resolved. Fields are resolved either as scalers or functions.
3. In the example illustrated, resolvers are reused, so that a complex query like below can be achieved.

```
query{
  users{
    username,
    uid
    posts{
      id
      author{
        username
      }
      comments{
        id
        user{
          name
        }
      }
    }
  }
}
```
## Result:

```
{
  "data": {
    "users": [
      {
        "username": "venu",
        "uid": "1",
        "posts": [
          {
            "id": "1",
            "author": {
              "username": "venu"
            },
            "comments": [
              {
                "id": "1",
                "user": {
                  "name": "venu"
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
```