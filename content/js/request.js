function Request(control) {

	this.Control = control;
	
	this.Type = $(this.Control).data('page');
	
	this.Item = 0;
	
	this.Url = "";
	
	this.AjaxRequest = "";
	
	this.Excluir = function(element) {
	    
		$.ajax({
			type: 'POST',
			url: element.AjaxRequest ,
			data: '{Id:' + element.Item + ', tipo:"' + element.Type + '"}',
			contentType: "application/json; charset=utf-8",
			dataTpe: "Json"
		}).done(function () {
		    alert('opa');
		}).fail(function () {
		    alert('deu ruim');
		});
		
	};

	var request = this;

	$(this.Control).click(function() {
		// body...
		request.Excluir(request);
	});

}