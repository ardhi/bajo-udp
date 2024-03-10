import dgram from 'dgram'

async function start () {
  const { getConfig } = this.bajo.helper
  const { events } = this.bajoUdpServer.helper
  const { emit } = this.bajoEmitter.helper
  const config = getConfig('bajoUdpServer')
  const instances = []
  for (const c of config.connections ?? []) {
    const socket = dgram.createSocket('udp4')
    for (const evt of events) {
      socket.on(evt, async (...args) => {
        emit(`bajoUdpServer.${evt}`, c, ...args)
      })
    }
    socket.bind(c.port, c.address)
    instances.push({ name: c.name, socket })
  }
  this.bajoUdpServer.instances = instances
}

export default start
