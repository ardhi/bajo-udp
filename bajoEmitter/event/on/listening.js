const onConnect = {
  handler: async function bajoUdpOnListening (conn) {
    const { log } = this.bajo.helper
    const address = conn.instance.address()
    log.debug('Listening as \'%s\' on \'%s:%s\'', conn.name, address.address, address.port)
  },
  level: 1
}

export default onConnect
