$(document).ready(function() {

		   		var flag= false;					  
			$("#contact_submit").click(function(event){
										  flag= false;	
											  if(flag==true)
										   {
											    event.preventDefault(); return;
										   }
										   
										   
										    $("#contact_submit").attr("value","Sending...");
										    $.post("contact.php",{email:$("#email").val(),name:$("#name").val(),message:$("#msg").val(),choice:"contact"},function(data){ 
																																								   
                                                if(data=="success")
												$("#contact_submit").attr("value","Sent !");

												else
												  $("#contact_submit").attr("value","Not Sent !"); 
																																								   });
										   
										  
											   event.preventDefault();
											
											});		
	$("#in_submit").click(function(event){
										   
										  $("#in_submit").attr("value","Sending...");
										  $.post("contact.php",{email:$("#inform_email").val(),choice:"inform"},function(data){ 
																														 
																				  if(data=="success")
																				  $("#in_submit").attr("value","Sent !");
																				  else
																				  $("#in_submit").attr("value","Not Sent !");
																														  
																														  });
										  
										  
										  
										    event.preventDefault();
										   });	
	

});

