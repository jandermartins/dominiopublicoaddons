const { addonBuilder, serveHTTP } = require("stremio-addon-sdk")
var request = require('request');
var cheerio = require('cheerio');

request('http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do', function(err, res, body){
	if(err) console.log('Erro: ' + err);

	var $ = cheerio.load(body);

	$('.lister-list tr').each(function(){
		var titulo = $(this).find('.odd a').text().trim();
		var autor = $(this).find('.odd td').text().trim();

		console.log('Titulo ' + titulo);
	});
});

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


