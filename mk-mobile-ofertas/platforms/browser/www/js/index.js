
var app = {
    
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


function acc_lojas(){				
	$(document).ready(function() {		
		$('#btt_exb_loja').on("click",function(){
			//execut3.preventDefault();

	    var valores = $(this).attr('data-relmk');
        var caminho = "http://www.nirt.com.br/sis_mark/bretas_mobile/pag_saida.php";
		
		
		$.ajax({
			
    url: caminho,
    type: "POST",
    data: {acc:valores},
	cache: false,
    dataType: "html",
	
	success: function(resultado){
      
	  if(resultado){
	   $("#conteudo").html(resultado);
	   
	     }
		 
		 else{
			alert('Problemas no Ajax'); 
			 
			 }
    }
	
		});

	  });
   });
}


function acc_secao(){

$(document).ready(function() {		
		$('#conteudo').on("click","#btt_secao",function(){
			//execut2.preventDefault();

	   
		var valores1 = $(this).attr('name');
		var valores2 = $(this).attr('data-relmk');
        var valores3 = $(this).attr('data-rel2');
        var caminho2 = "http://www.nirt.com.br/sis_mark/bretas_mobile/pag_saida.php";
		
		
		$.ajax({
			
    url: caminho2,
    type: "POST",
    data: {cod_loja: valores2, btt_abre_secao:valores1, cod_secao: valores3},
	cache: false,
    dataType: "html",
	
	success: function(resultado2){
      
	  if(resultado2){
	   $("#conteudo2").html(resultado2);
	   
	     }
		 
		else {
			alert('erros');
				}
    }
		});
	  });
   });
}


function acc_ofertas(){

$(document).ready(function() {		
		$('#conteudo2').on("click","#btt_ofer",function(){
			//execut2.preventDefault();

	    var valores = $(this).attr('data-relmk');
		var valores1 = $(this).attr('data-rel1');		
        var valores2 = $(this).attr('data-rel2');
		var valores3 = $(this).attr('data-rel3');
		var valores4 = $(this).attr('name');
        var caminho2 = "http://www.nirt.com.br/sis_mark/bretas_mobile/pag_saida.php";
		
		
		$.ajax({
			
    url: caminho2,
    type: "POST",
    data: {cod_secao:valores, cod_loja:valores3, nome_loja:valores2, nome_secao:valores1, abre_ofer_secao:valores4},
	cache: false,
    dataType: "html",
	
	success: function(resultado3){
      
	  if(resultado3){
	   $("#conteudo3").html(resultado3);
	   
	     }
		 
		else {
			alert('erros');
				}
    }
		});
	  });
   });
}


function acc_ofertas_total(){

$(document).ready(function() {		
		$('#conteudo2').on("click","#btt_ofer_total",function(){
			//execut2.preventDefault();

	    var valores4 = $(this).attr('name');
		var valores3 = $(this).attr('data-rel3');	
		var caminho2 = "http://www.nirt.com.br/sis_mark/bretas_mobile/pag_saida.php";
		
		
		$.ajax({
			
    url: caminho2,
    type: "POST",
    data: {cod_loja:valores3, total_ofer_loja:valores4},
	cache: false,
    dataType: "html",
	
	success: function(resultado3){
      
	  if(resultado3){
	   $("#conteudo3").html(resultado3);
	   
	     }
		 
		else {
			alert('erros');
				}
    }
		});
	  });
   });
}



console.log(acc_lojas());
console.log(acc_secao());
console.log(acc_ofertas());
console.log(acc_ofertas_total());
