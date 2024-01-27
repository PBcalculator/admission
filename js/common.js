function totalUp(choice){

var x = document.getElementsByClassName("gp");
var status = document.getElementById("status");
var totalpoints = document.getElementById("totalpoints");
var i,j;
var sum=0;
var fiveo=true;
var ocounter=0;
	switch(choice){

		case 1:


	for (i = 0; i < x.length; i++) {
	    sum+=parseInt(x[i].value);
	    if(x[i].value=="0"){
	    	fiveo=false;
	    }
	}

		break;

		case 2:

	for (j = 0; j < x.length; j++) {
	    sum+=parseInt(x[j].value);
	    if(x[j].value=="0"){
	    	ocounter++;
	    }
	}

		if(ocounter>1){	
			fiveo=false;	

		}
		break;
		

	}

	if(fiveo==false){

		totalpoints.value=sum;
		status.innerHTML = "Must have at least 5 credit O level";
		status.style.color= "#FF0000";
		totalpoints.style.color="#FF0000";

	}
	else{
			totalpoints.value=sum;

			if(sum>=5 && sum <=26){
			totalpoints.style.color="#086bcf";
			totalpoints.style.fontWeight="bolder";
			status.innerHTML = "";
			}
			else{
				status.innerHTML = "Points must be between 5 to 26 inclusive.";
				status.style.color= "#FF0000";
				totalpoints.style.color="#FF0000";

			}
		
	}
}

function resetform(choice){
document.getElementById("status").innerHTML ="";
document.getElementById("gpcal1").reset();
	switch(choice){
			case 1:
			
				
				var r21 = document.getElementById("r21");
				var r22 = document.getElementById("r22");
				var k;
				for (k = 0; k < r21.length; k++) {
	  				r21.options[k].disabled=false;
	  				r22.options[k].disabled=false;	
	  			}

				break;

			case 2:
					var r1 = document.getElementById("r1");
					var r11 = document.getElementById("r1-1");					
					var r21 = document.getElementById("r21");
					var r22 = document.getElementById("r22");
					var k,n;
					for (k = 0; k < r21.length; k++) {
  						r21.options[k].disabled=false;
  						r22.options[k].disabled=false;	
  					}
  					for (n = 0; n < r1.length; n++) {
  						r1.options[n].disabled=false;
  						r11.options[n].disabled=false;	
  					}
	
	}
	
	toggelDisable(1);

}

  	function toggleGrade(ch, val){
  		var g11 = document.getElementById("g1-1");
  		var g12 = document.getElementById("g1-2");
  		var g13 = document.getElementById("g1-3");
			
  		var g21 = document.getElementById("g2-1");
  		var g22 = document.getElementById("g2-2");
  	
		switch(ch){

			case 1:
			g21.style.display="inline";
			g22.style.display="none";
			g21.options[0].selected=true;
	document.getElementById("alert").style.display="none";
			document.getElementById("p2").value=0;

			break;

			case 2:
			g21.style.display="none";
			g22.style.display="inline";
						g22.options[0].selected=true;
	document.getElementById("alert").style.display="none";
			document.getElementById("p2").value=0;

			break;

			case 3:
			g11.style.display="inline";
			g12.style.display="none";
			g13.style.display="none";
						g11.options[0].selected=true;
	document.getElementById("alert").style.display="none";
			document.getElementById("p1").value=0;
			break;

			case 4:
			g11.style.display="none";
			g12.style.display="inline";
			g13.style.display="none";
						g12.options[0].selected=true;

			document.getElementById("p1").value=0;
			g12.options[5].disabled=true; //added jan 2020 as per changes
			g12.options[6].disabled=true; //added jan 2020 as per changes
	document.getElementById("alert").style.display="inline";			
	break;

			case 5:
			g11.style.display="none";
			g12.style.display="none";
			g13.style.display="inline";
						g13.options[0].selected=true;
	document.getElementById("alert").style.display="none";
			document.getElementById("p1").value=0;
			break;



		}
  	}

