const onMessage = {
  handler: async function bajoUdpOnMessage (...args) {
    // for broadcast only
    const { broadcast } = this.app.bajoEmitter
    const [conn, msg] = args
    if (!conn.broadcast) return
    broadcast({ from: `${conn.name}@bajoUdp`, msg })
  },
  level: 1000
}

export default onMessage
