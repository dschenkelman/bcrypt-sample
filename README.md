

# Ejecutar el ejemplo
```
npm run
```

## Realizar un pedido HTTP
```
curl -XPOST -H "Content-Type: application/json" -d "`cat content.json`" http://localhost:3000/authorize
```

## Medición de performance
```
ab -k -n 100 -c 10 -p content.json -T application/json http://localhost:3000/authorize
```

## Flamegraphs
Los contenidos del programa a ejecutar están basados en los obtenidos de [este gist](https://gist.github.com/dschenkelman/f6c323e904623ea9b8ea6b8f75e243ee). 

Ejecutar el siguiente programa para iniciar el proceso del servidor.
```bash
./measure-perf
```

Realizar los pedidos HTTP y después finalizar la ejecución. Posteriormente, ejecutar lo siguiente:
```bash
./curate-perf
```

Un archivo llamado `node-flame.svg` va a estar disponible en el directorio. Abrirlo con cualquier navegador de Internet.

Se puede ver un ejemplo [aca](./node-flame-sample.svg)