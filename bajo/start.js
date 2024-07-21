import dgram from 'dgram'

async function start () {
  const { runHook } = this.app.bajo
  const { camelCase } = this.app.bajo.lib._

  for (const c of this.connections ?? []) {
    const socket = dgram.createSocket({ type: 'udp4', reuseAddr: c.reuseAddr ?? false })
    for (const evt of this.events) {
      socket.on(evt, async (...args) => {
        if (this.app.bajoEmitter) this.app.bajoEmitter.emit(`${this.name}.${evt}`, c, ...args)
        await runHook(`${this.name}:${camelCase('on ' + evt)}`, c, ...args)
      })
    }
    if (c.server) socket.bind(c.port, c.host)
    c.instance = socket
  }
}

export default start
