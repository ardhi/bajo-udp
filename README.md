# bajo-udp

Plugin name: **bajoUdp**, alias: **udp**

![GitHub package.json version](https://img.shields.io/github/package-json/v/ardhi/bajo-udp) ![NPM Version](https://img.shields.io/npm/v/bajo-udp)

> <br />**Attention**: I do NOT accept any pull request at the moment, thanks!<br /><br />

UDP binding for [Bajo](https://github.com/ardhi/bajo). If [Bajo Emitter](https://github.com/ardhi/bajo-emitter) is loaded, events & messages are also handled through Bajo Emitter processing system.

## Installation

Goto your ```<bajo-base-dir>``` and type:

```bash
$ npm install bajo-udp
```

Now open your ```<bajo-data-dir>/config/.plugins``` and put ```bajo-udp``` in it
. Order doesn't matter here, but you should put it below ```bajo-emitter```:

```
...
bajo-emitter
bajo-udp
...
```

## Configuration

Open/create ```<bajo-data-dir>/config/bajoUdp.json```:

| Key | Type | Required | Default | Description |
| --- | ---- | -------- | ------- | ----------- |
| ```connections``` | ```array``` | no | ```[]``` | Define one or more connections |
| &nbsp;&nbsp;```name``` | ```string``` | no | ```default``` | Connection name, must be unique among all your connections |
| &nbsp;&nbsp;```host``` | ```string``` | yes | ```0.0.0.0``` | IP or hostname, e.g: ```mqtt://localhost``` |
| &nbsp;&nbsp;```port``` | ```integer``` | yes || Port number to bind to |


Example:

```json
{
  "connections": [{
    "name": "local",
    "host": "0.0.0.0",
    "port": 10000
  }]
}
```

## Hook

- ```bajoUdp:onClose (conn)```
- ```bajoUdp:onError (conn, error)```
- ```bajoUdp:onListening (conn)```
- ```bajoUdp:onMessage (conn, message)```

## License

[MIT](LICENSE)