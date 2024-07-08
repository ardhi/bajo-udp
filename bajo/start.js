import dgram from 'dgram'

async function handler ({ item, options }) {
  const { error } = this.app.bajo.helper
  const { has } = this.app.bajo.helper._
  if (!has(item, 'port')) throw error('Connection must have a port')
  item.host = item.host ?? '0.0.0.0'
  item.server = item.server ?? false
}

async function start () {
  const { events } = this.helper
  const { emit } = this.app.bajoEmitter.helper
  const { buildCollections } = this.app.bajo.helper

  this.connections = await buildCollections({ ns: this.name, handler, dupChecks: ['name', 'port'] })

  for (const c of this.connections ?? []) {
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
