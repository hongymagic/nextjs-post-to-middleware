## Parsing POST request body in _middleware

*None of these work at the moment* (See latest commit date for date reference).

### JSON

Failing to parse JSON body

```ts
await req.json()
```

Produces the following:

```
curl -X POST -H 'Content-Type: application/json' -d '[9, 1, 1]' http://localhost:3000/api/json
A server error has occurred

EDGE_FUNCTION_INVOCATION_FAILED
```

### FormData

Failing to parse FormData

```ts
await req.formData()
```

```
curl -X POST -F 'username=hongymagic' https://post-to-middleware.hongy.dev/api/form
A server error has occurred

EDGE_FUNCTION_INVOCATION_FAILED
```
