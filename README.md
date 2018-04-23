# Reproducing switchLocale

A recent issue on forum thread https://forum.adonisjs.com/t/internationalization-with-global-middleware/1091/2 indicates that `switchLocale` may not work as expected.

This repo tries to reproduce the same issue.

## First attempt
Seems to be working fine by creating a middleware, that uses the `queryString` to change the locale for a given HTTP request and fallsback to `en` when `?lang=` query string is missing.

## Test as

```bash
# english
curl http://localhost:3333

# french
curl http://localhost:3333?lang=fr
```
