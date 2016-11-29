

# Running the example
```
npm run
```

## Performing an HTTP request
```
curl -XPOST -H "Content-Type: application/json" -d "`cat content.json`" http://localhost:3000/authorize
```

## Flamegraphs
Open a terminal an run:
```
npm run benchmark
```

> In Linux, you need `perf` installed. It is available in the [linux-tools](http://apt.ubuntu.com/p/linux-tools) package.

In another terminal, execute the following snippet to send multiple HTTP requests to the app:
```
ab -k -n 100 -c 10 -p content.json -T application/json http://localhost:3000/authorize
```

When `ab` finishes, go back to the intial terminal and finish execution (`CONTROL + C`).

A folder named "profile-{number}" will be created. It will contain a file named `flamegraph.html`. Open it with any web browser.