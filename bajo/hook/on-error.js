const onError = {
  handler: function bajoUdpOnError (conn, error) {
    this.log.error('Connection \'%s\' error: %s', conn.name, error.message)
  },
  level: 1
}

export default onError
