import dgram from 'dgram'

async function start () {
  const { events } = this.bajoUdp.helper
  const { emit } = this.bajoEmitter.helper
  for (const c of this.bajoUdp.connections ?? []) {
    const socket = dgram.createSocket({ type: 'udp4', reuseAddr: c.reuseAddr ?? false })
    for (const evt of events) {
      socket.on(evt, async (...args) => {
        emit(`bajoUdp.${evt}`, c, ...args)
      })
    }
    if (c.server) socket.bind(c.port, c.host)
    c.instance = socket
  }
}

export default start
