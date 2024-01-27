//"if it aint broke, don't fix it"
//time-permittig, similar functions to be merged as one (in the future) under common.js

function getPoint(opt,vp){
	  	

		var olevel = document.getElementById("olevel");
		var igcse = document.getElementById("igcse");
		var ielts = document.getElementById("ielts");

		var olevel1 = document.getElementById("olevel1");
		var igcse1 = document.getElementById("igcse1");


		var g11 = document.getElementById("g1-1");
  		var g12 = document.getElementById("g1-2");
  		var g13 = document.getElementById("g1-3");


	switch(opt){
		case 1:
			olevel.checked=true;
		if(vp!=0){
			document.getElementById("p1").value=vp;
		}
		else{
				document.getElementById("p1").value=0;
		}
	
		
		break;

		case 2:
		if(vp!=0){
			document.getElementById("p2").value=vp;
		}
		else{
				document.getElementById("p2").value=0;

		}
		// if(!igcse1.disabled){
		// 	igcse1.disabled=true;
		// }



	
		break;
		// case 3:
		// document.getElementById("p3").value=vp;
		// break;
		case 4:
		if(vp!=0){
			document.getElementById("p4").value=vp;
		}
		else{
				document.getElementById("p4").value=0;
		}
		break;
		case 5:
		if(vp!=0){
			document.getElementById("p5").value=vp;
		}
		else{
				document.getElementById("p5").value=0;
		}
		break;
		case 6:
		if(vp!=0){
			document.getElementById("p6").value=vp;
		}
		else{
				document.getElementById("p6").value=0;
		}
		break;
	
			case 7:
		if(vp!=0){
			document.getElementById("p4-1").value=vp;
		}
		else{
				document.getElementById("p4-1").value=0;
		}
		break;
	

		case 11:
		
		if(vp!=0){
			document.getElementById("p1").value=vp;
		}
		else{
				document.getElementById("p1").value=0;
		}
		
		
		break;
				case 12:

		if(vp!=0){
			document.getElementById("p1").value=vp;
		}
		else{
				document.getElementById("p1").value=0;
		}

			
		break;
	}


	var p1= document.getElementById("p1").value;
	var p2= document.getElementById("p2").value;
	// var p3= document.getElementById("p3").value;
	var core = p1!=0 && p2!=0;
		if(core==true){
			toggelDisable(2);
		}
	else{
			toggelDisable(1);
	}

	

	// alert(olevel1.checked);
	  	if(olevel1.checked)
		{
				 document.getElementById("g2-1").style.display="inline";
  				 document.getElementById("g2-2").style.display="none";
  				//  olevel1.disabled=false;
  				// igcse1.disabled=false;


		}  
		else{
	 			document.getElementById("g2-1").style.display="none";
  				 document.getElementById("g2-2").style.display="inline";
  				 // 	olevel1.disabled=false;
  					// igcse1.disabled=true;
		}

		if(olevel.checked){
			g11.style.display="inline";
			g12.style.display="none";
			g13.style.display="none";
  	
		}
		if(igcse.checked){
			g11.style.display="none";
			g12.style.display="inline";
			g13.style.display="none";
  	
		}
		if(ielts.checked){
			g11.style.display="none";
			g12.style.display="none";
			g13.style.display="inline";
  	
		}
		
		var maths = document.getElementById("maths");
		if(maths.options[maths.selectedIndex].value=="Additional Mathematics"){
			igcse1.disabled=true;
		}
		else{
			olevel1.disabled=false;
			igcse1.disabled=false;
		}




		document.getElementById("totalpoints").value="";

	// alert(g11.checked);
	// alert(g12.checked);
	// alert(g13.checked);
	
}	


function toggelDisable(param){
	var subjeks = document.getElementsByClassName("subjeks");
	var grad = document.getElementsByClassName("grad");
	

	var k;
	if(param==1){
	document.getElementById("olevel1").disabled=true;
	document.getElementById("igcse1").disabled=true;
	document.getElementById("g2-1").style.display="none";
	document.getElementById("g1-2").style.display="none";
	document.getElementById("g1-3").style.display="none";	
	for (k = 0; k < subjeks.length; k++) {
  	subjeks[k].disabled=true;
  	grad[k].disabled=true;
  }
}
  else if(param==2){
	for (k = 0; k < subjeks.length; k++) {
  	subjeks[k].disabled=false;
  	grad[k].disabled=false;
  }

  }

}

function disabledsub(sub){
		var r21 = document.getElementById("r21");
		var r22 = document.getElementById("r22");
		var olevel1 = document.getElementById("olevel1");
		var igcse1 = document.getElementById("igcse1");
		var g21 = document.getElementById("g2-1");
		var g22 = document.getElementById("g2-2");

		g21.options[0].selected = true;

	g22.options[0].selected = true;

	 if(sub=="Additional Mathematics"){
		r21.options[4].disabled = true;
		r22.options[4].disabled = true;
		olevel1.checked=true;
		g21.style.display="inline";
		g22.style.display="none";
		igcse1.disabled=true;

		document.getElementById("p2").value=0;

		if(r21.options[5].disabled==true || r22.options[5].disabled==true){
			r21.options[5].disabled = false;
			r22.options[5].disabled = false;
		}

	}
	else if(sub=="Mathematics"){
		// r21.options[5].disabled = true;
		// r22.options[5].disabled = true;
		olevel1.disabled=false;
		igcse1.disabled=false;
		g21.style.display="inline";
		g22.style.display="none";
						document.getElementById("p2").value=0;

			if(r21.options[4].disabled==true || r22.options[4].disabled==true){
			r21.options[4].disabled = false;
			r22.options[4].disabled = false;
		}

	}
	// alert(sub);
}

function disabledR2(opt, subs){
	// var maths =  document.getElementById("maths"); 
	var r1 =  document.getElementById("r1");
	var r11 =  document.getElementById("r1-1");

	var p4 = document.getElementById("p4");
	var p41 = document.getElementById("p4-1");

	var g4 = document.getElementById("g");
	var g41 = document.getElementById("g4-1");

	if(p4.value !=0 && p41.value!=0){
		p4.value=0;
		p41.value=0;
		g4.options[0].selected=true;
		g41.options[0].selected=true;
		var k;
	for (k = 0; k < r1a.length; k++) {
  		r1.options[k].disabled=false;
  		r11.options[k].disabled=false;
  	}
  	r1.options[0].selected=true;
  	r11.options[0].selected=true;

}
		// r1.options[0].disabled=false;
  // 		r11.options[0].disabled=false;
	// alert(r1.options[r1.selectedIndex].value);
	var r21 = document.getElementById("r21");
	var r1a = [];
	var r21a = [];
	var i;
	 for(i=0;i<r21.length;i++){
	r21a[i] = r21.options[i].value;
		
	}
	var j;
	 for(j=0;j<r1.length;j++){
	r1a[j] = r1.options[j].value;
		
	}


	var idx0 = r1a.indexOf(subs);
	var idx = r21a.indexOf(subs);
	// var maths1 = maths.options[maths.selectedIndex].value;


	var k;
	for (k = 0; k < r1a.length; k++) {
  		r1.options[k].disabled=false;
  		r11.options[k].disabled=false;
  		// r22.options[k].disabled=false;	
  	}
		// r21.options[r21a.indexOf(maths1)].disabled=true;
		// r22.options[r21a.indexOf(maths1)].disabled=true;
  	switch(opt){
	case 1:
		r11.options[idx0].disabled=true;	
		// r11.options[0].selected=true;	
		
		r21.options[idx].disabled = true;
		r22.options[idx].disabled = true;
		document.getElementById("g4").options[0].selected=true;
		document.getElementById("p4").value=0;
		break;

		case 2:
		r1.options[idx0].disabled=true;
		// r1.options[0].selected=true;	
		r21.options[idx].disabled = true;
		r22.options[idx].disabled = true;
		document.getElementById("g4-1").options[0].selected=true;
		document.getElementById("p4-1").value=0;
		break;
	}




	
  	}

function disabledR212(sub, val){
	// var maths = document.getElementById("maths");
	var r1 = document.getElementById("r1");
		var r11 = document.getElementById("r1-1");
	var r21 = document.getElementById("r21");
	var r22 =  document.getElementById("r22");

	var r21a = [];
	var i;
	 for(i=0;i<r21.length;i++){
	r21a[i] = r21.options[i].value;
		
	}
	var idx = r21a.indexOf(val);
	
	// var maths1 = maths.options[maths.selectedIndex].value;
	var r1sub = r1.options[r1.selectedIndex].value;
	var r11sub = r11.options[r11.selectedIndex].value;

	var idx1= r21a.indexOf(r1sub);
	var idx2= r21a.indexOf(r11sub);

	
	var k;
	for (k = 0; k < r21.length; k++) {
  		r21.options[k].disabled=false;
  		r22.options[k].disabled=false;	
  	}
	r21.options[r21a.indexOf(r1sub)].disabled=true;
	r22.options[r21a.indexOf(r1sub)].disabled=true;
	r21.options[r21a.indexOf(r11sub)].disabled=true;
	r22.options[r21a.indexOf(r11sub)].disabled=true;
	// r21.options[r21a.indexOf(maths1)].disabled=true;
	// r22.options[r21a.indexOf(maths1)].disabled=true;

  	switch(sub){
  		case 1:
  			var g5 = document.getElementById("g5");
  		g5.options[0].selected=true;

  	// 		if(val=="Combined Science"){
  	// 			g5.options[5].disabled=true;
			// 	g5.options[6].disabled=true;
			// }
			// else{

			// 		g5.options[5].disabled=false;
			// 	g5.options[6].disabled=false;
			// }
		r22.options[idx].disabled = true;
		// r22.options[idx1].disabled = true;
		// r22.options[idx2].disabled = true;
		document.getElementById("g5").options[0].selected=true;
		document.getElementById("p5").value=0;
		break;

	  	case 2:
	  	var g6 = document.getElementById("g6");
	  	g6.options[0].selected = true;
	  // 	if(val=="Combined Science"){

  	// 			g6.options[5].disabled=true;
			// 	g6.options[6].disabled=true;
			// }
			// else{
			// 		g6.options[5].disabled=false;
			// 	g6.options[6].disabled=false;
			// }
		r21.options[idx].disabled = true;
		// r21.options[idx1].disabled = true;
		// r21.options[idx2].disabled = true;
				document.getElementById("g6").options[0].selected=true;
		document.getElementById("p6").value=0;
		break;
			
  	}

	
	
  	}

  // 	function toggleGrade(ch, val){
  // 		var g11 = document.getElementById("g1-1");
  // 		var g12 = document.getElementById("g1-2");
  // 		var g13 = document.getElementById("g1-3");
			
  // 		var g21 = document.getElementById("g2-1");
  // 		var g22 = document.getElementById("g2-2");
  	
		// switch(ch){

		// 	case 1:
		// 	g21.style.display="inline";
		// 	g22.style.display="none";
		// 	g21.options[0].selected=true;

		// 	document.getElementById("p2").value=0;

		// 	break;

		// 	case 2:
		// 	g21.style.display="none";
		// 	g22.style.display="inline";
		// 				g22.options[0].selected=true;

		// 	document.getElementById("p2").value=0;

		// 	break;

		// 	case 3:
		// 	g11.style.display="inline";
		// 	g12.style.display="none";
		// 	g13.style.display="none";
		// 		g11.options[0].selected=true;
		// 	document.getElementById("p1").value=0;
		// 	break;

		// 	case 4:
		// 	g11.style.display="none";
		// 	g12.style.display="inline";
		// 	g13.style.display="none";
		// 		g12.options[0].selected=true;
		// 	document.getElementById("p1").value=0;
		// 	g12.options[5].disabled=true; //added jan 2020 as per changes
		// 	g12.options[6].disabled=true; //added jan 2020 as per changes
		// 	break;

		// 	case 5:
		// 	g11.style.display="none";
		// 	g12.style.display="none";
		// 	g13.style.display="inline";
		// 		g13.options[0].selected=true;
		// 	document.getElementById("p1").value=0;
		// 	break;



		// }
  // 	}