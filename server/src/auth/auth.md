# Auth Module

## How to Run Dev

1. Require ".env" contains the following:

```env
JWT_SECRET=[Secret]
```

## How to Authenticate

1. Send a POST request to "/auth/login" with the following body:

```json
{
    "username": [Username],
    "password": [Password]
}
```

2. The server will respond with a JWT token.

3. Use the JWT token as a Bearer token in the Authorization header for all requests that require authentication.

> Note: The JWT token will expire in 1 hour.