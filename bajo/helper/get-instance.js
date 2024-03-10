async function getInstance (name) {
  const { importPkg } = this.bajo.helper
  const { find } = await importPkg('lodash-es')
  if (!this.bajoUdp.instances) return undefined
  return find(this.bajoUdp.instances, { name })
}

export default getInstance
