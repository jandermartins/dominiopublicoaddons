const { addonBuilder } = require("stremio-addon-sdk")

// Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/manifest.md
const manifest = {
	"id": "community.Dominio",
	"version": "0.0.1",
	"catalogs": [],
	"resources": [],
	"types": [],
	"name": "Dominio Público",
	"description": "Obras de dominio publico brasileira presentes no site www.dominiopublico.gov.br"
}
const builder = new addonBuilder(manifest)

module.exports = builder.getInterface()