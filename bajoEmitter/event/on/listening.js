const onConnect = {
  handler: async function bajoUdpOnListening (conn) {
    const { log } = this.bajo.helper
    const { getInstance } = this.bajoUdp.helper
    const instance = await getInstance(conn.name)
    const address = instance.socket.address()
    log.debug('Listening as \'%s\' on \'%s:%s\'', conn.name, address.address, address.port)
  },
  level: 1
}

export default onConnect
