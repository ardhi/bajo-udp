async function send ({ msg, to } = {}) {
  const { error } = this.bajo.helper
  const { find } = this.bajo.helper._
  const { addressSplit } = this.bajoEmitter.helper
  const { connection, transport } = addressSplit(to)
  if (transport !== 'bajoUdp') return
  const c = find(this.bajoUdp.connections, { name: connection })
  if (!c) throw error('No such connection \'%s\'', connection)
  c.instance.send(msg, c.port, c.host)
}

export default send
