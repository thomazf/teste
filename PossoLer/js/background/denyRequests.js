chrome.webRequest.onBeforeRequest.addListener(function(details){
     incrementaConteudoAPI();
     return {cancel: true};
   },
   {urls:[
        "https://www.rbsonline.com.br/cdn/scripts/paywall.min.js",
        "https://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*",
        "https://api.clicrbs.com.br/paywall-api/*",
        "https://www.jornaldocomercio.com/src/inove/paywall.php",
        "https://cdn.tinypass.com/api/tinypass.min.js*", "https://super.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "https://quatrorodas.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "https://veja.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "https://guiadoestudante.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "https://blockv4.fivewall.com.br/paywall.js*"
   ]},
   ["blocking"]);


/* ========================== API INCREMENTO DE NOTICIAS E CONTEUDOS LIBERADOS ====================== */

function incrementaConteudoAPI()
{
    axios({
        method: 'post',
        url: 'https://possoler.tech/API/incrementViewsConteudos.php',
        timeout: 60000
    }).then((resposta)=>{
        console.log('Contabilizar noticia API = ' + resposta.data.status);
    }).catch((erro)=>{
        console.log('ERRO Contabilizar noticia API');
        console.log(erro);
    });
}