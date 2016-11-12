

# Ejecutar el ejemplo
```
npm run
```

## Realizar un pedido HTTP
```
curl -XPOST -H "Content-Type: application/json" -d "`cat content.json`" http://localhost:3000/authorize
```

## Flamegraphs
Abrir una terminal y ejecutar:
```
npm run benchmark
```

> En Linux se necesita tener instalada la herramienta `perf` que esta en el paquete [linux-tools](http://apt.ubuntu.com/p/linux-tools).

En otra terminal, ejecutar el siguiente programa para enviar multiples pedidos HTTP a la aplicación:
```
ab -k -n 100 -c 10 -p content.json -T application/json http://localhost:3000/authorize
```

Cuando el programa `ab` finalice, volver a la terminal inicial y finalizar la ejecución del servidor. Para eso, apretar: `CONTROL + C`.

Se va a crear una carpeta con nombre "profile-{numero}". Adentro de ella habrá un archivo llamado `flamegraph.html`. Abrirlo con cualquier navegador de Internet.