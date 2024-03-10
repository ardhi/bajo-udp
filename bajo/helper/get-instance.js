async function getInstance (name) {
  const { importPkg } = this.bajo.helper
  const { find } = await importPkg('lodash-es')
  if (!this.bajoUdpServer.instances) return undefined
  return find(this.bajoUdpServer.instances, { name })
}

export default getInstance
