var num=[];
var pila=[];
$(document).ready(function(){	
	$("#nTabla").change(function(){
		num.length=0;
		p=0;
		tam=$("#nTabla").val();
		var tabla="";
		var count=1;
		for(var r=0;r<tam;r++)
		{ tabla +="<tr id="+r+">";
			for (var c=0;c<tam;c++)
			{
				tabla+="<td id="+r+""+c+"> <input class='ine'/></td>";
				num.push(count);
				count++;
			}
			tabla +="</tr>";
		}
		
		$("#content").html("<table id='puzzle'>"+tabla+"</table><div style='text-align:center'><input id='inicio' value='Iniciar' type='button'  class='btn'/></div>");
		
		$(".ine").click(function(){
		validaLLenado($(this));
		
	});
		
});
});
function validaLLenado(obj){
	if(obj.val()==""){
		obj.val(""+num[p]);
		if(num[p]==num.length){
			obj.addClass("zero");
			obj.val("0");
		}
	p++;
	}
	else
	{
	 alert("no puedes hacer esto");
	}
	
}
function nodo(padre){
	this.id=pila.length;
	this.padre=padre;
}

function inicio(){
	

}
function localizaCero(){
	
	$(".ine ")
}

function isMovable(Dir)
{ 
	var r =cadena.substr(0,1);
	var c =cadena.substr(1,2);
	cosC=c/tam;
	cosR=c/tam;


    switch(dir){

        case "D":
          if(cosC==0)

        break


    }

}