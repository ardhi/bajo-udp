# bajo-udp

![GitHub package.json version](https://img.shields.io/github/package-json/v/ardhi/bajo-udp) ![NPM Version](https://img.shields.io/npm/v/bajo-udp)


UDP binding for [Bajo Framework](https://github.com/ardhi/bajo). Require [Bajo Emitter](https://github.com/ardhi/bajo-emitter) to work correctly.

## Installation

Goto your ```<bajo-app-dir>``` and type:

```bash
$ npm install bajo-udp
```

After that, you just need to open ```<bajo-data-dir>/config/bajo.json``` and insert ```bajo-udp``` inside your ```plugins```. Plugins order doesn't matter here, but you should put it behind ```bajo-emitter```:

```json
{
  ...
  "log": {
    "level": "trace"
  },
  "plugins": [..., "bajo-emitter", "bajo-udp", ...],
  ...
}
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

## License

[MIT](LICENSE)