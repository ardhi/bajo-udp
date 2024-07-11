import dgram from 'dgram'

async function handler ({ item, options }) {
  const { error } = this.app.bajo
  const { has } = this.app.bajo.lib._
  if (!has(item, 'port')) throw error('Connection must have a port')
  item.host = item.host ?? '0.0.0.0'
  item.server = item.server ?? false
}

async function start () {
  const { emit } = this.app.bajoEmitter
  const { buildCollections } = this.app.bajo

  this.connections = await buildCollections({ ns: this.name, handler, dupChecks: ['name', 'port'] })

  for (const c of this.connections ?? []) {
    const socket = dgram.createSocket({ type: 'udp4', reuseAddr: c.reuseAddr ?? false })
    for (const evt of this.events) {
      socket.on(evt, async (...args) => {
        emit(`bajoUdp.${evt}`, c, ...args)
      })
    }
    if (c.server) socket.bind(c.port, c.host)
    c.instance = socket
  }
}

export default start
