const onClose = {
  handler: function bajoUdpOnClose (conn) {
    this.log.debug('Connection \'%s\' is closed', conn.name)
  },
  level: 1000
}

export default onClose
