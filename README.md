

# Running the sample
```
npm run
```

## Performing a request
```
curl -XPOST -H "Content-Type: application/json" -d "`cat content.json`" http://localhost:3000/authorize
```

## Benchmarking
```
ab -k -n 100 -c 10 -p content.json -T application/json http://localhost:3000/authorize
```

## Flamegraphs
Based on [this gist](https://gist.github.com/dschenkelman/f6c323e904623ea9b8ea6b8f75e243ee) run the following to start the server processs:
```bash
./measure-perf
```

After that, terminate it and run:
```bash
./curate-perf
```

A file named node-flame.svg will be available in the directoty. Open it with a web browser.