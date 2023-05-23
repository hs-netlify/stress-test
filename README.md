# Netlify function timeouts example

This project is for the purpose of the issue with Netlify functions timeouts. When one function results in a timeout,
all other functions will also timeout which can break the whole application.

## Testing locally

This project comes with a few Node script to reproduce the issue locally.

Run the following command in a new terminal window to start pinging the endpoint every 1/2 second:

```bash
node ./scripts/ping.mjs
```

In another terminal window, run the following command to start with overloading the Netlify function. It will do so by
calling the `/timeout` endpoint 500 times parallel:

```bash
node ./scripts/overload.mjs
```

See that eventually the window where the `ping`-script is being run, a lot of 503 errors will be shown. This shouldn't
happen IMO as these functions are not related to each other.
