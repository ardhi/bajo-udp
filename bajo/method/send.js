async function send ({ msg, to } = {}) {
  const { error } = this.app.bajo
  const { find } = this.app.bajo.lib._
  const { addressSplit } = this.app.bajoEmitter
  const { connection, plugin } = addressSplit(to)
  if (plugin !== 'bajoUdp') return
  const c = find(this.connections, { name: connection })
  if (!c) throw error('No such connection \'%s\'', connection)
  c.instance.send(msg, c.port, c.host)
}

export default send
