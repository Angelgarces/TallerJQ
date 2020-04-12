$(document).ready(function(){
    var usuario = "";
    var actual = 1;
    var puntos = 0;
    $("#contenido>section").hide();
    $("#login").show();

    $("#usuario").attr("value","");
    $("#usuario").focus();

    $("#btn-ingresar").click(function(){
        if($("#usuario").val()==""){
            alert("Debes ingresar un nombre");
            $("#usuario").css("#background-color", "blue");
            $("#usuario").focus();
            return false;
        }
        usuario = $("#usuario").val();
        $("#login").hide();
        $("#test").show();
        $("#nombre").html(usuario); 
    });
    $("#usuario").click(function(){
        $("#usuario").css("#background-color", "blue");
    });
    $("[id^='p-']").hide();
    $("#p-1").show();
    
    $("[id^='b-']").click(function(){        
        $("[id^='p-']").hide();
        var id = $(this).attr("id");
        var arreglo = id.split("-");
        var actual = arreglo[1];
        $("#p-"+actual).show(); 
    });
    $("[id^='btn-calificar-']").click(function(){
        var id = $(this).attr("id");
        var arreglo = id.split("-");
        var pregunta = arreglo[2];
        if(pregunta==1){
            var num= 1;
            num ++;
            $("#info-numero").html(num + 'de 10'); 
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='a'){                
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.5;
            }   
            else{                          
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }

        if(pregunta==2){
            var num= 2;
            num ++;
            $("#info-numero").html(num + 'de 10'); 
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='b'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.5;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }

        if(pregunta==3){
            var num= 3;
            num ++;
            $("#info-numero").html(num + 'de 10'); 
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='d'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.5;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }
        if(pregunta==4){
            var num= 4;
            num ++;
            $("#info-numero").html(num + 'de 10'); 
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='d'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.5;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }
        if(pregunta==5){
            var num= 5;
            num ++;
            $("#info-numero").html(num + 'de 10'); 
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='a'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.5;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }
        if(pregunta==6){
            var num= 6;
            num ++;
            $("#info-numero").html(num + 'de 10'); 
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='b'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.5;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }
        if(pregunta==7){
            var num= 7;
            num ++;
            $("#info-numero").html(num + 'de 10'); 
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='a'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.5;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }
        if(pregunta==8){
            var num= 8;
            num ++;
            $("#info-numero").html(num + 'de 10'); 
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='c'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.5;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }
        if(pregunta==9){
            var num= 9;
            num ++;
            $("#info-numero").html(num + 'de 10'); 
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='c'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.5;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }
        if(pregunta==10){
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='b'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.5;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }

        $("#p-"+pregunta).hide();
        var siguiente = pregunta;
        siguiente++;        
        $("#p-"+siguiente).show();
        $("#puntos").html(puntos);
        if(puntos<3){
            $('#puntos').txt('no aprueva el cuestionario');
        }else{
            $('#puntos').txt('aprueva el cuestionario');
        }
    });
   
})