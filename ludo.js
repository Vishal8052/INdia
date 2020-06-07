var glob;
var coinA=2;
var coinB=2;

var	count_A1=1;
var count_A2=1;
var count_B1=1;
var count_B2=1;

var copy;
var copy2;
var copy3;
var copy4;
var copy5;
var copy6;
var ran=0;
var count=1;
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      document.body.style.backgroundColor = "rgb(40,40,40)";
      console.log('Checked');
    } else {
     document.body.style.backgroundColor = "white";
      console.log('Not checked');
    }
  });
});
var image="dice.gif";
function close()
{
	document.getElementById("myAudio").pause();
	var slid=document.getElementById("dic");
	slid.src="a.png";
	
}
function show()
{ 
	ran=Math.floor(Math.random()*6)+1;
	var slid=document.getElementById("dic");
	slid.src=image;
	document.getElementById("myAudio").play();
    setTimeout(close,1500);//time of dice roll
document.getElementById("roll1").disabled = true;
    var delayInMilliseconds = 1500; //time of delay for number
setTimeout(function() {
  document.getElementById("roll1").disabled = false;
  /*if(ran==6)
		{
			document.getElementById("la").disabled = false;
			
		}*/
    switch(ran){
    	case 1:slid.src="a.jpg";
    	break;
    	case 2:slid.src="a2.jpg";
    	break;
    	case 3:slid.src="c.jpg";
    	break;
    	case 4:slid.src="d.jpg";
    	break;
    	case 5:slid.src="e.jpg";
    	break;
    	case 6:slid.src="m.jpg";
    	break;
    } 
    if(ran==2)
    {
    	slid.src="a2.jpg";
    } 

}, delayInMilliseconds);
    
}
function throw_B()
{

	if(count_B1>=28 && count_B2>=28){
		document.getElementById("show!").innerHTML="B WON";
		return;
	}
	//document.getElementById("roll1").disabled = false;
	show();
   //	document.getElementById("numm").innerHTML=ran;
	if(ran==6)
	{
      //
       if(coinB==2){
       coinB=coinB-1;
       document.getElementById("b1").style.opacity="0";
       document.getElementById("c15").style.backgroundColor="blue";	

      // onclick document.getElementById("c1").style.backgroundColor="yellow";
       }
       else if(coinB==1)
       {
       	document.getElementById("roll1").disabled = true;
       	  document.getElementById("lb").disabled = false;
       	  document.getElementById("prB1").disabled = false;
       	  //if(document.getElementById("prA").) is no
       	  //document.getElementById("a2").style.visibilty="hidden";
       	  //coinA=0;
       	  //if yes
       	  // count_A=count_A+6;
       }
       else
       {
       	document.getElementById("lb").disabled = true;
       	if(count_B1!=28){
       	document.getElementById("prB1").disabled = false;}
       	document.getElementById("prB2").disabled = false;
       }
       
       
	}
	else
	{
		document.getElementById("roll1").disabled = true;
		
         count=count+1;
         if(coinB==2)
         	 load();
         else if(coinB==1)
         {
         	if(count_B1==28){
         		count_B1=count_B2;}
         		copy=count_B1;
         	 count_B1=count_B1+ran;
         	//document.getElementById("c").style.backgroundColor="yellow"; //how to give value in the names of variables
         	setTimeout(function(){
         	switch(count_B1)
         	{
       
         		case 2:document.getElementById("c16").style.backgroundColor="blue";
         		break;
         		case 3:document.getElementById("c17").style.backgroundColor="blue";
         		break;
         		case 4:document.getElementById("c18").style.backgroundColor="blue";
         		break;
         		case 5:document.getElementById("c19").style.backgroundColor="blue";
         		break;
         		case 6:document.getElementById("c20").style.backgroundColor="blue";
         		break;
         		case 7:document.getElementById("c21").style.backgroundColor="blue";
         		break;
         		case 8:document.getElementById("c22").style.backgroundColor="blue";
         		break;
         		case 9:document.getElementById("c23").style.backgroundColor="blue";
         		break;
         		case 10:document.getElementById("c24").style.backgroundColor="blue";
         		break;
         		case 11:document.getElementById("c25").style.backgroundColor="blue";
         		break;
         		case 12:document.getElementById("c26").style.backgroundColor="blue";
         		break;
         		case 13:document.getElementById("c27").style.backgroundColor="blue";
         		break;
         		case 14:document.getElementById("c28").style.backgroundColor="blue";
         		break;
         		case 15:document.getElementById("c1").style.backgroundColor="blue";
         		break;
         		case 16:document.getElementById("c2").style.backgroundColor="blue";
         		break;
         		case 17:document.getElementById("c3").style.backgroundColor="blue";
         		break;
         		case 18:document.getElementById("c4").style.backgroundColor="blue";
         		break;
         		case 19:document.getElementById("c5").style.backgroundColor="blue";
         		break;
         		case 20:document.getElementById("c6").style.backgroundColor="blue";
         		break;
         		case 21:document.getElementById("c7").style.backgroundColor="blue";
         		break;
         		case 22:document.getElementById("c8").style.backgroundColor="blue";
         		break;
         		case 23:document.getElementById("c9").style.backgroundColor="blue";
         		break;
         		case 24:document.getElementById("c10").style.backgroundColor="blue";
         		break;
         		case 25:document.getElementById("c11").style.backgroundColor="blue";
         		break;
         		case 26:document.getElementById("c12").style.backgroundColor="blue";
         		break;
         		case 27:document.getElementById("c13").style.backgroundColor="blue";
         		break;
         		case 28:document.getElementById("c14").style.backgroundColor="blue";
         		break;
         	}
         	switch(copy)
         	{
         		case 1:document.getElementById("c15").style.backgroundColor="violet";
         		break;
         		case 2:document.getElementById("c16").style.backgroundColor="violet";
         		break;
         		case 3:document.getElementById("c17").style.backgroundColor="violet";
         		break;
         		case 4:document.getElementById("c18").style.backgroundColor="violet"
         		break;
         		case 5:document.getElementById("c19").style.backgroundColor="violet";
         		break;
         		case 6:document.getElementById("c20").style.backgroundColor="violet";
         		break;
         		case 7:document.getElementById("c21").style.backgroundColor="violet";
         		break;
         		case 8:document.getElementById("c22").style.backgroundColor="violet"
         		break;
         		case 9:document.getElementById("c23").style.backgroundColor="violet";
         		break;
         		case 10:document.getElementById("c24").style.backgroundColor="violet";
         		break;
         		case 11:document.getElementById("c25").style.backgroundColor="violet";
         		break;
         		case 12:document.getElementById("c26").style.backgroundColor="violet";
         		break;
         		case 13:document.getElementById("c27").style.backgroundColor="violet";
         		break;
         		case 14:document.getElementById("c28").style.backgroundColor="violet";
         		break;
         		case 15:document.getElementById("c1").style.backgroundColor="violet";
         		break;
         		case 16:document.getElementById("c2").style.backgroundColor="violet";
         		break;
         		case 17:document.getElementById("c3").style.backgroundColor="violet";
         		break;
         		case 18:document.getElementById("c4").style.backgroundColor="violet";
         		break;
         		case 19:document.getElementById("c5").style.backgroundColor="violet";
         		break;
         		case 20:document.getElementById("c6").style.backgroundColor="violet";
         		break;
         		case 21:document.getElementById("c7").style.backgroundColor="violet";
         		break;
         		case 22:document.getElementById("c8").style.backgroundColor="violet"
         		case 23:document.getElementById("c9").style.backgroundColor="violet";
         		break;
         		case 24:document.getElementById("c10").style.backgroundColor="violet";
         		break;
         		case 25:document.getElementById("c11").style.backgroundColor="violet"
         		break;
         		case 26:document.getElementById("c12").style.backgroundColor="violet";
         		break;
         		case 27:document.getElementById("c13").style.backgroundColor="violet";
         		break;
         	}
         	if(count_B1<=count_A1){
        if((count_B1+14==count_A1) && count_A1!=28)
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A1=1;
    		  document.getElementById("prA1").disabled = true;
    	}
       }
       if(count_B1<=count_A2)
       {
       	 if( count_B1+14==count_A2 && count_A2!=28)
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A2=1;
    		  document.getElementById("prA2").disabled = true;
    	}
       }
       else if(count_B1>count_A1)
       {
       	  if(count_B1-14==count_A1)
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A1=1;
    		  document.getElementById("prA1").disabled = true;
    	}
       }
       else if(count_B1>count_A2)
       {
       	 if( count_B1-14==count_A2 )
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A2=1;
    		  document.getElementById("prA2").disabled = true;
    	}
       }

         	},1500)
         	load();
         }
          else if(coinB==0)
         {
         	document.getElementById("roll1").disabled = true;
             	document.getElementById("prB1").disabled = false;
              	document.getElementById("prB2").disabled = false;
         }
		//throw_A();
		
	}

}
function throw_A()
{

	if(count_A1>=28 && count_A2>=28){
		document.getElementById("show!").innerHTML="A WON";
		return;
	}
	if(count%2==0)
	{
	    throw_B();
	    return ;
	}
	//document.getElementById("roll1").disabled = false;
	show();
	//document.getElementById("numm").innerHTML=ran;
	if(ran==6)
	{
      //
       if(coinA==2)
       {
       coinA=coinA-1;
       document.getElementById("a1").style.opacity="0";
       document.getElementById("c1").style.backgroundColor="yellow";
     
      // onclick document.getElementById("c1").style.backgroundColor="yellow";
       }
       else if(coinA==1)
       {

       	  document.getElementById("la").disabled = false;
       	  document.getElementById("prA1").disabled = false;
       	  //if(document.getElementById("prA").) is no
       	  //document.getElementById("a2").style.visibilty="hidden";
       	  //coinA=0;
       	  //if yes
       	  // count_A=count_A+6;
       }
       else if(coinA==0)
       {
       	document.getElementById("la").disabled = true;
       	document.getElementById("roll1").disabled = true;
       	if(count_A1!=28){
       	document.getElementById("prA1").disabled = false;}
       	document.getElementById("prA2").disabled = false;
       } 
	}
	else
	{
		document.getElementById("roll1").disabled = true;
         count=count+1;
         if(coinA==2)
         	 load();
         else if(coinA==1)
         {
         	if(count_A1==28)
       	  {
       	  	count_A1=count_A2;
       	  }
       	  copy2=count_A1;
         	 count_A1=count_A1+ran;

         	setTimeout(function(){
         		switch(count_A1)
         	{
         		case 2:document.getElementById("c2").style.backgroundColor="yellow";
         		break;
         		case 3:document.getElementById("c3").style.backgroundColor="yellow";
         		break;
         		case 4:document.getElementById("c4").style.backgroundColor="yellow";
         		break;
         		case 5:document.getElementById("c5").style.backgroundColor="yellow";
         		break;
         		case 6:document.getElementById("c6").style.backgroundColor="yellow";
         		break;
         		case 7:document.getElementById("c7").style.backgroundColor="yellow";
         		break;
         		case 8:document.getElementById("c8").style.backgroundColor="yellow";
         		break;
         		case 9:document.getElementById("c9").style.backgroundColor="yellow";
         		break;
         		case 10:document.getElementById("c10").style.backgroundColor="yellow";
         		break;
         		case 11:document.getElementById("c11").style.backgroundColor="yellow";
         		break;
         		case 12:document.getElementById("c12").style.backgroundColor="yellow";
         		break;
         		case 13:document.getElementById("c13").style.backgroundColor="yellow";
         		break;
         		case 14:document.getElementById("c14").style.backgroundColor="yellow";
         		break;
         		case 15:document.getElementById("c15").style.backgroundColor="yellow";
         		break;
         		case 16:document.getElementById("c16").style.backgroundColor="yellow";
         		break;
         		case 17:document.getElementById("c17").style.backgroundColor="yellow";
         		break;
         		case 18:document.getElementById("c18").style.backgroundColor="yellow";
         		break;
         		case 19:document.getElementById("c19").style.backgroundColor="yellow";
         		break;
         		case 20:document.getElementById("c20").style.backgroundColor="yellow";
         		break;
         		case 21:document.getElementById("c21").style.backgroundColor="yellow";
         		break;
         		case 22:document.getElementById("c22").style.backgroundColor="yellow";
         		break;
         		case 23:document.getElementById("c23").style.backgroundColor="yellow";
         		break;
         		case 24:document.getElementById("c24").style.backgroundColor="yellow";
         		break;
         		case 25:document.getElementById("c25").style.backgroundColor="yellow";
         		break;
         		case 26:document.getElementById("c26").style.backgroundColor="yellow";
         		break;
         		case 27:document.getElementById("c27").style.backgroundColor="yellow";
         		break;
         		case 28:document.getElementById("c28").style.backgroundColor="yellow";
         		
         		break;
         	}
         	switch(copy2)
         	{
         		case 1:document.getElementById("c1").style.backgroundColor="violet";
         		break;
         		case 2:document.getElementById("c2").style.backgroundColor="violet";
         		break;
         		case 3:document.getElementById("c3").style.backgroundColor="violet";
         		break;
         		case 4:document.getElementById("c4").style.backgroundColor="violet"
         		break;
         		case 5:document.getElementById("c5").style.backgroundColor="violet";
         		break;
         		case 6:document.getElementById("c6").style.backgroundColor="violet";
         		break;
         		case 7:document.getElementById("c7").style.backgroundColor="violet";
         		break;
         		case 8:document.getElementById("c8").style.backgroundColor="violet"
         		break;
         		case 9:document.getElementById("c9").style.backgroundColor="violet";
         		break;
         		case 10:document.getElementById("c10").style.backgroundColor="violet";
         		break;
         		case 11:document.getElementById("c11").style.backgroundColor="violet";
         		break;
         		case 12:document.getElementById("c12").style.backgroundColor="violet";
         		break;
         		case 13:document.getElementById("c13").style.backgroundColor="violet";
         		break;
         		case 14:document.getElementById("c14").style.backgroundColor="violet";
         		break;
         		case 15:document.getElementById("c15").style.backgroundColor="violet";
         		break;
         		case 16:document.getElementById("c16").style.backgroundColor="violet";
         		break;
         		case 17:document.getElementById("c17").style.backgroundColor="violet";
         		break;
         		case 18:document.getElementById("c18").style.backgroundColor="violet";
         		break;
         		case 19:document.getElementById("c19").style.backgroundColor="violet";
         		break;
         		case 20:document.getElementById("c20").style.backgroundColor="violet";
         		break;
         		case 21:document.getElementById("c21").style.backgroundColor="violet";
         		break;
         		case 22:document.getElementById("c22").style.backgroundColor="violet"
         		case 23:document.getElementById("c23").style.backgroundColor="violet";
         		break;
         		case 24:document.getElementById("c24").style.backgroundColor="violet";
         		break;
         		case 25:document.getElementById("c25").style.backgroundColor="violet"
         		break;
         		case 26:document.getElementById("c26").style.backgroundColor="violet";
         		break;
         		case 27:document.getElementById("c27").style.backgroundColor="violet";
         		break;
         	}
         	if(count_A1<=count_B1){
         	   	if(count_A1+14==count_B1 && count_B1!=28)
    	  {
    		 document.getElementById("b1").style.opacity="1";
    		 coinB=coinB+1;
    		 count_B1=1;
    		  document.getElementById("prB1").disabled = true;
    	  }
            }
           else if(count_A1>=count_B1)
            {
            if(count_A1-14==count_B1)
    	    {
    		 document.getElementById("b1").style.opacity="1";
    		 coinB=coinB+1;
    		 count_B1=1;
    		  document.getElementById("prB1").disabled = true;
    	    }
            }
            if(count_A1<=count_B2)
            {
            	if(count_A1+14==count_B2  && count_B2!=28)
            	{
            		document.getElementById("b1").style.opacity="1";
    		        coinB=coinB+1;
                    count_B2=1;
                     document.getElementById("prB2").disabled = true;
            	}
            }
            else if(count_A1>=count_B2)
            {
            	if(count_A1-14==count_B2 )
            	{
            		document.getElementById("b1").style.opacity="1";
    		        coinB=coinB+1;
    		        count_B2=1;
    		         document.getElementById("prB2").disabled = true;
            	}
            }
         },1500);
         	//document.getElementById("c").style.backgroundColor="yellow"; //how to give value in the names of variables
         	
         	load();
         }
         else if(coinA==0)
         {
         	 	document.getElementById("roll1").disabled = true;
             	document.getElementById("prA1").disabled = false;
              	document.getElementById("prA2").disabled = false;
         }
		//throw_A();
	}
	
}

function openA()
{
	document.getElementById("c1").style.backgroundColor="yellow";
		setTimeout(function(){
	 document.getElementById("a2").style.opacity="0";
	},1500);
     coinA=coinA-1;
     document.getElementById("la").disabled = true;
      document.getElementById("prA2").disabled = true;
       document.getElementById("prA1").disabled = true;
        load();
	}
function openB()
{
	document.getElementById("c15").style.backgroundColor="blue";
	 setTimeout(function(){
	 document.getElementById("b2").style.opacity="0";
	},1500);
	 coinB=coinB-1;
      document.getElementById("lb").disabled = true;
      document.getElementById("prB1").disabled = true;
      document.getElementById("prB2").disabled = true;
       load();
}
function moveA2()
{
	 	document.getElementById("roll1").disabled = true;
	 	copy3=count_A2;
    	count_A2=count_A2+ran;
    	 setTimeout(function(){
         		switch(count_A2)
         	{
         		case 1:document.getElementById("c1").style.backgroundColor="yellow";
         		break;
         		case 2:document.getElementById("c2").style.backgroundColor="yellow";
         		break;
         		case 3:document.getElementById("c3").style.backgroundColor="yellow";
         		break;
         		case 4:document.getElementById("c4").style.backgroundColor="yellow";
         		break;
         		case 5:document.getElementById("c5").style.backgroundColor="yellow";
         		break;
         		case 6:document.getElementById("c6").style.backgroundColor="yellow";
         		break;
         		case 7:document.getElementById("c7").style.backgroundColor="yellow";
         		break;
         		case 8:document.getElementById("c8").style.backgroundColor="yellow";
         		break;
         		case 9:document.getElementById("c9").style.backgroundColor="yellow";
         		break;
         		case 10:document.getElementById("c10").style.backgroundColor="yellow";
         		break;
         		case 11:document.getElementById("c11").style.backgroundColor="yellow";
         		break;
         		case 12:document.getElementById("c12").style.backgroundColor="yellow";
         		break;
         		case 13:document.getElementById("c13").style.backgroundColor="yellow";
         		break;
         		case 14:document.getElementById("c14").style.backgroundColor="yellow";
         		break;
         		case 15:document.getElementById("c15").style.backgroundColor="yellow";
         		break;
         		case 16:document.getElementById("c16").style.backgroundColor="yellow";
         		break;
         		case 17:document.getElementById("c17").style.backgroundColor="yellow";
         		break;
         		case 18:document.getElementById("c18").style.backgroundColor="yellow";
         		break;
         		case 19:document.getElementById("c19").style.backgroundColor="yellow";
         		break;
         		case 20:document.getElementById("c20").style.backgroundColor="yellow";
         		break;
         		case 21:document.getElementById("c21").style.backgroundColor="yellow";
         		break;
         		case 22:document.getElementById("c22").style.backgroundColor="yellow";
         		break;
         		case 23:document.getElementById("c23").style.backgroundColor="yellow";
         		break;
         		case 24:document.getElementById("c24").style.backgroundColor="yellow";
         		break;
         		case 25:document.getElementById("c25").style.backgroundColor="yellow";
         		break;
         		case 26:document.getElementById("c26").style.backgroundColor="yellow";
         		break;
         		case 27:document.getElementById("c27").style.backgroundColor="yellow";
         		break;
         		case 28:document.getElementById("c28").style.backgroundColor="yellow";
         		 document.getElementById("prA2").disabled = true;
         		break;
               
         	}
         	switch(copy3)
         	{
         		case 1:document.getElementById("c1").style.backgroundColor="violet";
         		break;
         		case 2:document.getElementById("c2").style.backgroundColor="violet";
         		break;
         		case 3:document.getElementById("c3").style.backgroundColor="violet";
         		break;
         		case 4:document.getElementById("c4").style.backgroundColor="violet"
         		break;
         		case 5:document.getElementById("c5").style.backgroundColor="violet";
         		break;
         		case 6:document.getElementById("c6").style.backgroundColor="violet";
         		break;
         		case 7:document.getElementById("c7").style.backgroundColor="violet";
         		break;
         		case 8:document.getElementById("c8").style.backgroundColor="violet"
         		break;
         		case 9:document.getElementById("c9").style.backgroundColor="violet";
         		break;
         		case 10:document.getElementById("c10").style.backgroundColor="violet";
         		break;
         		case 11:document.getElementById("c11").style.backgroundColor="violet";
         		break;
         		case 12:document.getElementById("c12").style.backgroundColor="violet";
         		break;
         		case 13:document.getElementById("c13").style.backgroundColor="violet";
         		break;
         		case 14:document.getElementById("c14").style.backgroundColor="violet";
         		break;
         		case 15:document.getElementById("c15").style.backgroundColor="violet";
         		break;
         		case 16:document.getElementById("c16").style.backgroundColor="violet";
         		break;
         		case 17:document.getElementById("c17").style.backgroundColor="violet";
         		break;
         		case 18:document.getElementById("c18").style.backgroundColor="violet";
         		break;
         		case 19:document.getElementById("c19").style.backgroundColor="violet";
         		break;
         		case 20:document.getElementById("c20").style.backgroundColor="violet";
         		break;
         		case 21:document.getElementById("c21").style.backgroundColor="violet";
         		break;
         		case 22:document.getElementById("c22").style.backgroundColor="violet"
         		case 23:document.getElementById("c23").style.backgroundColor="violet";
         		break;
         		case 24:document.getElementById("c24").style.backgroundColor="violet";
         		break;
         		case 25:document.getElementById("c25").style.backgroundColor="violet"
         		break;
         		case 26:document.getElementById("c26").style.backgroundColor="violet";
         		break;
         		case 27:document.getElementById("c27").style.backgroundColor="violet";
         		break;
         	}
           	if(count_A2<=count_B1){
         	   	if(count_A2+14==count_B1 && count_B1!=28)
    	  {
    		 document.getElementById("b1").style.opacity="1";
    		 coinB=coinB+1;
    		 count_B1=1;
    		  document.getElementById("prB1").disabled = true;
    	  }
            }
           else if(count_A2>=count_B1)
            {
            if(count_A2-14==count_B1 )
    	    {
    		 document.getElementById("b1").style.opacity="1";
    		 coinB=coinB+1;
    		 count_B1=1;
    		  document.getElementById("prB1").disabled = true;
    	    }
            }
            if(count_A2<=count_B2)
            {
            	if(count_A2+14==count_B2  && count_B2!=28)
            	{
            		document.getElementById("b1").style.opacity="1";
    		        coinB=coinB+1;
    		        count_B2=1;
    		         document.getElementById("prB2").disabled = true;
            	}
            }
            else if(count_A2>=count_B2)
            {
            	if(count_A2-14==count_B2  )
            	{
            		document.getElementById("b1").style.opacity="1";
    		        coinB=coinB+1;
    		        count_B2=1;
    		         document.getElementById("prB2").disabled = true;
            	}
            }
         },1500);
	 load();
  document.getElementById("prA2").disabled = true;
  document.getElementById("prA1").disabled = true;
   document.getElementById("prB1").disabled = true;
       document.getElementById("prB2").disabled = true;
       document.getElementById("la").disabled = true;
}
function moveA1()
{

 	document.getElementById("roll1").disabled = true;
 	copy4=count_A1;
    	count_A1=count_A1+ran;
    	 setTimeout(function(){
         		switch(count_A1)
         	{

         		case 2:document.getElementById("c2").style.backgroundColor="yellow";
         		break;
         		case 3:document.getElementById("c3").style.backgroundColor="yellow";
         		break;
         		case 4:document.getElementById("c4").style.backgroundColor="yellow";
         		break;
         		case 5:document.getElementById("c5").style.backgroundColor="yellow";
         		break;
         		case 6:document.getElementById("c6").style.backgroundColor="yellow";
         		break;
         		case 7:document.getElementById("c7").style.backgroundColor="yellow";
         		break;
         		case 8:document.getElementById("c8").style.backgroundColor="yellow";
         		break;
         		case 9:document.getElementById("c9").style.backgroundColor="yellow";
         		break;
         		case 10:document.getElementById("c10").style.backgroundColor="yellow";
         		break;
         		case 11:document.getElementById("c11").style.backgroundColor="yellow";
         		break;
         		case 12:document.getElementById("c12").style.backgroundColor="yellow";
         		break;
         		case 13:document.getElementById("c13").style.backgroundColor="yellow";
         		break;
         		case 14:document.getElementById("c14").style.backgroundColor="yellow";
         		break;
         		case 15:document.getElementById("c15").style.backgroundColor="yellow";
         		break;
         		case 16:document.getElementById("c16").style.backgroundColor="yellow";
         		break;
         		case 17:document.getElementById("c17").style.backgroundColor="yellow";
         		break;
         		case 18:document.getElementById("c18").style.backgroundColor="yellow";
         		break;
         		case 19:document.getElementById("c19").style.backgroundColor="yellow";
         		break;
         		case 20:document.getElementById("c20").style.backgroundColor="yellow";
         		break;
         		case 21:document.getElementById("c21").style.backgroundColor="yellow";
         		break;
         		case 22:document.getElementById("c22").style.backgroundColor="yellow";
         		break;
         		case 23:document.getElementById("c23").style.backgroundColor="yellow";
         		break;
         		case 24:document.getElementById("c24").style.backgroundColor="yellow";
         		break;
         		case 25:document.getElementById("c25").style.backgroundColor="yellow";
         		break;
         		case 26:document.getElementById("c26").style.backgroundColor="yellow";
         		break;
         		case 27:document.getElementById("c27").style.backgroundColor="yellow";
         		break;
         		case 28:document.getElementById("c28").style.backgroundColor="yellow";
         		 document.getElementById("prA1").disabled = true;
         		break;
                
         	}
         	switch(copy4)
         	{
         		case 1:document.getElementById("c1").style.backgroundColor="violet";
         		break;
         		case 2:document.getElementById("c2").style.backgroundColor="violet";
         		break;
         		case 3:document.getElementById("c3").style.backgroundColor="violet";
         		break;
         		case 4:document.getElementById("c4").style.backgroundColor="violet"
         		break;
         		case 5:document.getElementById("c5").style.backgroundColor="violet";
         		break;
         		case 6:document.getElementById("c6").style.backgroundColor="violet";
         		break;
         		case 7:document.getElementById("c7").style.backgroundColor="violet";
         		break;
         		case 8:document.getElementById("c8").style.backgroundColor="violet"
         		break;
         		case 9:document.getElementById("c9").style.backgroundColor="violet";
         		break;
         		case 10:document.getElementById("c10").style.backgroundColor="violet";
         		break;
         		case 11:document.getElementById("c11").style.backgroundColor="violet";
         		break;
         		case 12:document.getElementById("c12").style.backgroundColor="violet";
         		break;
         		case 13:document.getElementById("c13").style.backgroundColor="violet";
         		break;
         		case 14:document.getElementById("c14").style.backgroundColor="violet";
         		break;
         		case 15:document.getElementById("c15").style.backgroundColor="violet";
         		break;
         		case 16:document.getElementById("c16").style.backgroundColor="violet";
         		break;
         		case 17:document.getElementById("c17").style.backgroundColor="violet";
         		break;
         		case 18:document.getElementById("c18").style.backgroundColor="violet";
         		break;
         		case 19:document.getElementById("c19").style.backgroundColor="violet";
         		break;
         		case 20:document.getElementById("c20").style.backgroundColor="violet";
         		break;
         		case 21:document.getElementById("c21").style.backgroundColor="violet";
         		break;
         		case 22:document.getElementById("c22").style.backgroundColor="violet"
         		case 23:document.getElementById("c23").style.backgroundColor="violet";
         		break;
         		case 24:document.getElementById("c24").style.backgroundColor="violet";
         		break;
         		case 25:document.getElementById("c25").style.backgroundColor="violet"
         		break;
         		case 26:document.getElementById("c26").style.backgroundColor="violet";
         		break;
         		case 27:document.getElementById("c27").style.backgroundColor="violet";
         		break;
         	}
     	if(count_A1<=count_B1){
         	   	if(count_A1+14==count_B1 && count_B1!=28)
    	  {
    		 document.getElementById("b1").style.opacity="1";
    		 coinB=coinB+1;
    		 count_B1=1;
    		  document.getElementById("prB1").disabled = true;
    	  }
            }
           else if(count_A1>=count_B1)
            {
            if(count_A1-14==count_B1)
    	    {
    		 document.getElementById("b1").style.opacity="1";
    		 coinB=coinB+1;
    		 count_B1=1;
    		  document.getElementById("prB1").disabled = true;
    	    }
            }
            if(count_A1<=count_B2)
            {
            	if(count_A1+14==count_B2  && count_B2!=28)
            	{
            		document.getElementById("b1").style.opacity="1";
    		        coinB=coinB+1;
                    count_B2=1;
                     document.getElementById("prB2").disabled = true;
            	}
            }
            else if(count_A1>=count_B2)
            {
            	if(count_A1-14==count_B2 )
            	{
            		document.getElementById("b1").style.opacity="1";
    		        coinB=coinB+1;
    		        count_B2=1;
    		         document.getElementById("prB2").disabled = true;
            	}
            }
         },1500);
	 load();
       document.getElementById("prA1").disabled = true;
       document.getElementById("prA2").disabled = true;
        document.getElementById("prB1").disabled = true;
       document.getElementById("prB2").disabled = true;
       document.getElementById("la").disabled = true;
}
function moveB2()
{
	 	document.getElementById("roll1").disabled = true;
	 	copy5=count_B2;
    	count_B2=count_B2+ran;
    	 setTimeout(function(){
         		switch(count_B2)
         	{
         		
         		
         		case 2:document.getElementById("c16").style.backgroundColor="blue";
         		break;
         		case 3:document.getElementById("c17").style.backgroundColor="blue";
         		break;
         		case 4:document.getElementById("c18").style.backgroundColor="blue";
         		break;
         		case 5:document.getElementById("c19").style.backgroundColor="blue";
         		break;
         		case 6:document.getElementById("c20").style.backgroundColor="blue";
         		break;
         		case 7:document.getElementById("c21").style.backgroundColor="blue";
         		break;
         		case 8:document.getElementById("c22").style.backgroundColor="blue";
         		break;
         		case 9:document.getElementById("c23").style.backgroundColor="blue";
         		break;
         		case 10:document.getElementById("c24").style.backgroundColor="blue";
         		break;
         		case 11:document.getElementById("c25").style.backgroundColor="blue";
         		break;
         		case 12:document.getElementById("c26").style.backgroundColor="blue";
         		break;
         		case 13:document.getElementById("c27").style.backgroundColor="blue";
         		break;
         		case 14:document.getElementById("c28").style.backgroundColor="blue";
         		break;
         		case 15:document.getElementById("c1").style.backgroundColor="blue";
         		break;
         		case 16:document.getElementById("c2").style.backgroundColor="blue";
         		break;
         		case 17:document.getElementById("c3").style.backgroundColor="blue";
         		break;
         		case 18:document.getElementById("c4").style.backgroundColor="blue";
         		break;
         		case 19:document.getElementById("c5").style.backgroundColor="blue";
         		break;
         		case 20:document.getElementById("c6").style.backgroundColor="blue";
         		break;
         		case 21:document.getElementById("c7").style.backgroundColor="blue";
         		break;
         		case 22:document.getElementById("c8").style.backgroundColor="blue";
         		break;
         		case 23:document.getElementById("c9").style.backgroundColor="blue";
         		break;
         		case 24:document.getElementById("c10").style.backgroundColor="blue";
         		break;
         		case 25:document.getElementById("c11").style.backgroundColor="blue";
         		break;
         		case 26:document.getElementById("c12").style.backgroundColor="blue";
         		break;
         		case 27:document.getElementById("c13").style.backgroundColor="blue";
         		break;
         		case 28:document.getElementById("c14").style.backgroundColor="blue";
         		document.getElementById("prB2").disabled = true;
         		break;
             
         	}
         	switch(copy5)
         	{
         		case 1:document.getElementById("c15").style.backgroundColor="violet";
         		break;
         		case 2:document.getElementById("c16").style.backgroundColor="violet";
         		break;
         		case 3:document.getElementById("c17").style.backgroundColor="violet";
         		break;
         		case 4:document.getElementById("c18").style.backgroundColor="violet"
         		break;
         		case 5:document.getElementById("c19").style.backgroundColor="violet";
         		break;
         		case 6:document.getElementById("c20").style.backgroundColor="violet";
         		break;
         		case 7:document.getElementById("c21").style.backgroundColor="violet";
         		break;
         		case 8:document.getElementById("c22").style.backgroundColor="violet"
         		break;
         		case 9:document.getElementById("c23").style.backgroundColor="violet";
         		break;
         		case 10:document.getElementById("c24").style.backgroundColor="violet";
         		break;
         		case 11:document.getElementById("c25").style.backgroundColor="violet";
         		break;
         		case 12:document.getElementById("c26").style.backgroundColor="violet";
         		break;
         		case 13:document.getElementById("c27").style.backgroundColor="violet";
         		break;
         		case 14:document.getElementById("c28").style.backgroundColor="violet";
         		break;
         		case 15:document.getElementById("c1").style.backgroundColor="violet";
         		break;
         		case 16:document.getElementById("c2").style.backgroundColor="violet";
         		break;
         		case 17:document.getElementById("c3").style.backgroundColor="violet";
         		break;
         		case 18:document.getElementById("c4").style.backgroundColor="violet";
         		break;
         		case 19:document.getElementById("c5").style.backgroundColor="violet";
         		break;
         		case 20:document.getElementById("c6").style.backgroundColor="violet";
         		break;
         		case 21:document.getElementById("c7").style.backgroundColor="violet";
         		break;
         		case 22:document.getElementById("c8").style.backgroundColor="violet"
         		case 23:document.getElementById("c9").style.backgroundColor="violet";
         		break;
         		case 24:document.getElementById("c10").style.backgroundColor="violet";
         		break;
         		case 25:document.getElementById("c11").style.backgroundColor="violet"
         		break;
         		case 26:document.getElementById("c12").style.backgroundColor="violet";
         		break;
         		case 27:document.getElementById("c13").style.backgroundColor="violet";
         		break;
         	}
          	if(count_B2<=count_A1){
        if((count_B2+14==count_A1) && count_A1!=28)
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A1=1;
    		  document.getElementById("prA1").disabled = true;
    	}
       }
       if(count_B2<=count_A2)
       {
       	 if( count_B2+14==count_A2 && count_A2!=28)
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A2=1;
    		  document.getElementById("prA2").disabled = true;
    	}
       }
       else if(count_B2>count_A1)
       {
       	  if((count_B2-14==count_A1))
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A1=1;
    		  document.getElementById("prA1").disabled = true;
    	}
       }
       else if(count_B2>count_A2)
       {
       	 if( count_B2-14==count_A2 )
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A2=1;
    		  document.getElementById("prA2").disabled = true;
    	}
       }
         },1500);
	 load();
      document.getElementById("prB2").disabled = true;
       document.getElementById("prB1").disabled = true;
        document.getElementById("prA1").disabled = true;
        document.getElementById("prA2").disabled = true;
       document.getElementById("lb").disabled = true;
}
function moveB1()
{
	 	document.getElementById("roll1").disabled = true;
	 	copy6=count_B1;
   count_B1=count_B1+ran;
    	 setTimeout(function(){
         		switch(count_B1)
         	{
         		
         		case 2:document.getElementById("c16").style.backgroundColor="blue";
         		break;
         		case 3:document.getElementById("c17").style.backgroundColor="blue";
         		break;
         		case 4:document.getElementById("c18").style.backgroundColor="blue";
         		break;
         		case 5:document.getElementById("c19").style.backgroundColor="blue";
         		break;
         		case 6:document.getElementById("c20").style.backgroundColor="blue";
         		break;
         		case 7:document.getElementById("c21").style.backgroundColor="blue";
         		break;
         		case 8:document.getElementById("c22").style.backgroundColor="blue";
         		break;
         		case 9:document.getElementById("c23").style.backgroundColor="blue";
         		break;
         		case 10:document.getElementById("c24").style.backgroundColor="blue";
         		break;
         		case 11:document.getElementById("c25").style.backgroundColor="blue";
         		break;
         		case 12:document.getElementById("c26").style.backgroundColor="blue";
         		break;
         		case 13:document.getElementById("c27").style.backgroundColor="blue";
         		break;
         		case 14:document.getElementById("c28").style.backgroundColor="blue";
         		break;
         		case 15:document.getElementById("c1").style.backgroundColor="blue";
         		break;
         		case 16:document.getElementById("c2").style.backgroundColor="blue";
         		break;
         		case 17:document.getElementById("c3").style.backgroundColor="blue";
         		break;
         		case 18:document.getElementById("c4").style.backgroundColor="blue";
         		break;
         		case 19:document.getElementById("c5").style.backgroundColor="blue";
         		break;
         		case 20:document.getElementById("c6").style.backgroundColor="blue";
         		break;
         		case 21:document.getElementById("c7").style.backgroundColor="blue";
         		break;
         		case 22:document.getElementById("c8").style.backgroundColor="blue";
         		break;
         		case 23:document.getElementById("c9").style.backgroundColor="blue";
         		break;
         		case 24:document.getElementById("c10").style.backgroundColor="blue";
         		break;
         		case 25:document.getElementById("c11").style.backgroundColor="blue";
         		break;
         		case 26:document.getElementById("c12").style.backgroundColor="blue";
         		break;
         		case 27:document.getElementById("c13").style.backgroundColor="blue";
         		break;
         		case 28:
         		document.getElementById("c14").style.backgroundColor="blue";
         		document.getElementById("prB1").disabled = true;
                break;
                
         	}
         	switch(copy6)
         	{
         		case 1:document.getElementById("c15").style.backgroundColor="violet";
         		break;
         		case 2:document.getElementById("c16").style.backgroundColor="violet";
         		break;
         		case 3:document.getElementById("c17").style.backgroundColor="violet";
         		break;
         		case 4:document.getElementById("c18").style.backgroundColor="violet"
         		break;
         		case 5:document.getElementById("c19").style.backgroundColor="violet";
         		break;
         		case 6:document.getElementById("c20").style.backgroundColor="violet";
         		break;
         		case 7:document.getElementById("c21").style.backgroundColor="violet";
         		break;
         		case 8:document.getElementById("c22").style.backgroundColor="violet"
         		break;
         		case 9:document.getElementById("c23").style.backgroundColor="violet";
         		break;
         		case 10:document.getElementById("c24").style.backgroundColor="violet";
         		break;
         		case 11:document.getElementById("c25").style.backgroundColor="violet";
         		break;
         		case 12:document.getElementById("c26").style.backgroundColor="violet";
         		break;
         		case 13:document.getElementById("c27").style.backgroundColor="violet";
         		break;
         		case 14:document.getElementById("c28").style.backgroundColor="violet";
         		break;
         		case 15:document.getElementById("c1").style.backgroundColor="violet";
         		break;
         		case 16:document.getElementById("c2").style.backgroundColor="violet";
         		break;
         		case 17:document.getElementById("c3").style.backgroundColor="violet";
         		break;
         		case 18:document.getElementById("c4").style.backgroundColor="violet";
         		break;
         		case 19:document.getElementById("c5").style.backgroundColor="violet";
         		break;
         		case 20:document.getElementById("c6").style.backgroundColor="violet";
         		break;
         		case 21:document.getElementById("c7").style.backgroundColor="violet";
         		break;
         		case 22:document.getElementById("c8").style.backgroundColor="violet"
         		case 23:document.getElementById("c9").style.backgroundColor="violet";
         		break;
         		case 24:document.getElementById("c10").style.backgroundColor="violet";
         		break;
         		case 25:document.getElementById("c11").style.backgroundColor="violet"
         		break;
         		case 26:document.getElementById("c12").style.backgroundColor="violet";
         		break;
         		case 27:document.getElementById("c13").style.backgroundColor="violet";
         		break;
         	}
          		if(count_B1<=count_A1){
        if((count_B1+14==count_A1) && count_A1!=28)
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A1=1;
    		  document.getElementById("prA1").disabled = true;
    	}
       }
       if(count_B1<=count_A2)
       {
       	 if( count_B1+14==count_A2 && count_A2!=28)
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A2=1;
    		  document.getElementById("prA2").disabled = true;
    	}
       }
       else if(count_B1>count_A1)
       {
       	  if(count_B1-14==count_A1)
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A1=1;
    		  document.getElementById("prA1").disabled = true;
    	}
       }
       else if(count_B1>count_A2)
       {
       	 if( count_B1-14==count_A2 )
    	{
    		 document.getElementById("a1").style.opacity="1";
    		 coinA=coinA+1;
    		 count_A2=1;
    		  document.getElementById("prA2").disabled = true;
    	}
       }
         },1500);
	 load();
      document.getElementById("prB1").disabled = true;
       document.getElementById("prB2").disabled = true;
        document.getElementById("prA1").disabled = true;
        document.getElementById("prA2").disabled = true;
       document.getElementById("lb").disabled = true;
}
function load()
{
		if(count%2!=0 ){
			setTimeout(function(){
			document.getElementById("show!").innerHTML="TURN: A";
			//document.querySelector("table > td").style.backgroundColor="violet";
			
			document.getElementById("prB1").disabled = true;
          document.getElementById("prB2").disabled = true;
			document.getElementById("roll1").disabled = false;
	         },1500);
		
	}
	    else{
	    	setTimeout(function(){
	    		document.getElementById("show!").innerHTML="TURN: B";
	    		
	    		  document.getElementById("prA1").disabled = true;
        document.getElementById("prA2").disabled = true;
		document.getElementById("roll1").disabled = false;
	},1500);
		
        }
     
}