async function connHandler ({ item, options }) {
  const { importPkg, error } = this.bajo.helper
  const { has } = await importPkg('lodash-es')
  if (!has(item, 'port')) throw error('Connection must have a port')
  item.address = item.address ?? '0.0.0.0'
}

async function init () {
  const { buildCollections } = this.bajo.helper
  await buildCollections({ handler: connHandler, dupChecks: ['name', 'port'] })
}

export default init
