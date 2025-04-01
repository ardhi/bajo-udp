async function handler ({ item, options }) {
  const { has } = this.lib._
  if (!has(item, 'port')) throw this.error('connMustHave%s', 'port')
  item.host = item.host ?? '0.0.0.0'
  item.server = item.server ?? false
}

async function init () {
  const { buildCollections } = this.app.bajo
  this.connections = await buildCollections({ ns: this.name, handler, dupChecks: ['name', 'port'], container: 'connections' })
}

export default init
