## Parsing POST request body in _middleware

(See latest commit date for date reference).

None of these following examples work on Vercel, however they work locally when run via `next dev`.

### Vercel function logs

![image](https://user-images.githubusercontent.com/302730/168991284-0999fb27-3b42-4449-8824-373eca43ebab.png)

### JSON

Failing to parse JSON body

```ts
await req.json()
```

Produces the following:

```
curl -X POST -H 'Content-Type: application/json' -d '[9, 1, 1]' https://post-to-middleware.hongy.dev/api/json
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
