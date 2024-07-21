const onConnect = {
  handler: async function bajoUdpOnListening (conn) {
    const address = conn.instance.address()
    this.log.debug('Listening as \'%s\' on \'%s:%s\'', conn.name, address.address, address.port)
  },
  level: 1
}

export default onConnect
