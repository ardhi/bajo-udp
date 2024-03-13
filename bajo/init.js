async function connHandler ({ item, options }) {
  const { importPkg, error } = this.bajo.helper
  const { has } = await importPkg('lodash-es')
  if (!has(item, 'port')) throw error('Connection must have a port')
  item.host = item.host ?? '0.0.0.0'
  item.server = item.server ?? false
}

async function init () {
  const { buildCollections } = this.bajo.helper
  this.bajoUdp.connections = await buildCollections({ handler: connHandler, dupChecks: ['name', 'port'] })
}

export default init
