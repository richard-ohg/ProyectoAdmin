var total=3;
var correctas=0;
var promedio=0;
var entrar=new Array;
var examen=[];


function examenAleatorio(){
  total=15;
  var cont=0;
  var indice=0;
  var inc=0;
  
  while(cont<total){
    
    inc=Math.floor(Math.random()*3);

    if (!preguntas[indice].ocupado){
      
      preguntas[indice][inc].ocupado=true;
      examen[cont]=preguntas[indice][inc];
      
      cont++;
      indice++;
      }
      
    
    }
    
  
  }



function valua(indice,resp){


  
  if (examen[indice].correcta== resp){ 
    if(!entrar[indice]){
    entrar[indice]=1; 
    correctas++;
    }
    
    document.getElementById('resp' + (indice)).innerHTML = '<span class="bien">Respuestas correctas&nbsp;'+correctas+' </span>';  
    
    }else{
        if(!entrar[indice]){
      entrar[indice]=1; 
      
      }
      
  document.getElementById('resp' + (indice)).innerHTML = '<span class="mal">Respuesta incorrecta&nbsp; </span>';  
      
      }
  
  }
  
  
function notaFinal() {
promedio=correctas/total; 
promedio*=10; 
document.getElementById('puntuacionfinal').innerHTML = '<span class="notas">Aciertos: &nbsp;'+promedio+'</span>'; 

if (promedio>= 9) {document.getElementById('notafinal').innerHTML = '<span class="notas">Calificaci&oacute;n:&nbsp;Perfecto</span>';}
   else if (promedio >= 8) {document.getElementById('notafinal').innerHTML = '<span class="notas">Calificaci&oacute;n:&nbsp;Excelente</span>';}
   else if (promedio > 7) {document.getElementById('notafinal').innerHTML = '<span class="notas">Calificaci&oacute;n:&nbsp;Bien</span>';}
   else if (promedio > 6) {document.getElementById('notafinal').innerHTML = '<span class="notas">Calificaci&oacute;n:&nbsp;Regular</span>';}
   else if (promedio > 5) {document.getElementById('notafinal').innerHTML = '<span class="notas">Calificaci&oacute;n:&nbsp;Mal</span>';}
   else if (promedio > 4) {document.getElementById('notafinal').innerHTML = '<span class="notas">Calificaci&oacute;n:&nbsp;Puedes mejorar</span>';}
   else {document.getElementById('notafinal').innerHTML = '<span class="notas">Nivel de Aprendizaje: Trata de hacerlo mejor</span>';}
}