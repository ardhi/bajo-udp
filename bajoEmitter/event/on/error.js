const onError = {
  handler: function bajoUdpOnError (conn, error) {
    const { log } = this.bajo.helper
    log.debug('\'%s\' error: %s', conn.name, error.message)
  },
  level: 1
}

export default onError
