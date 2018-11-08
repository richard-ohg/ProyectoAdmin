
function valuap(respuest){ //recibe un entero que indica la respuesta seleccionada
  if(parseInt(respuest)==this.correcta){
        var reto;
        alert("Es correcta");
        reto=true;
        return reto
        }else{
            alert("Es false");
            return reto
            }
}

function pregunta(pregun,respuesta1,respuesta2,respuesta3,respuesta4,correcta){
        this.pregun=pregun;
        
        this.respuestas=[];
        
        this.respuestas[0]=respuesta1;
        this.respuestas[1]=respuesta2;
        this.respuestas[2]=respuesta3;
        this.respuestas[3]=respuesta4;
        
        this.correcta=parseInt(correcta);
        this.ocupado=false;
        this.valuap=valuap;
        
        

}
var retorno=[];
var preguntas=[];

/* En esta parte incluiran sus preguntas debes ser mas de 10 para que se pueda ajecutar 
el script 
*/
//pregunta(Pregunta,incisoA,incisoB,incisoC,incisoD,Respuesta)

preguntas[0]=new Array();
preguntas[0][0]=new pregunta("PDH: Jerarquía digital plesiócrona. Utilizada tradicionalmente para:","Telefonía","Internet","Videollamadas","Streaming",0);
preguntas[0][1]=new pregunta("PDH: Jerarquía digital plesiócrona. Usa la técnica de multiplexación por tiempo:","Verdadero","Falso","Tal vez","Probablemente no",0);
preguntas[0][2]=new pregunta("PDH: Jerarquía digital plesiócrona. Una limitación de PDH es:","Complicado extraer una señal de mayor capacidad","Diferentes formatos de señales y decodificaciones", "Gestión y mantenimiento manual","Sobreestandarizacion",2);

preguntas[1]=new Array();
preguntas[1][0]=new pregunta("SDH: Jerarquía digital síncrona. Esta es una característica de SDH:","Difícil de extender a mayores velocidades", "La sincronización aumenta la necesidad de buffering", "Las velocidades se encuentran sincronizadas en toda la red", "No presenta compatibilidad entre fabricantes",2);
preguntas[1][1]=new pregunta("SDH: Jerarquía digital síncrona. En SDH la señal mínima es la de:","155.50 Mbps", "155.52 Mbps", "155.62 Mbps", "155.00 Mbps",1);
preguntas[1][2]=new pregunta("SDH: Jerarquía digital síncrona. SDH  se  diseñó  para  transportar señales de 1.5, 2, 6, 34, 45 y 140 Mbps:","Verdadero","No lo sé","Quizás","Falso",0);

preguntas[2]=new Array();
preguntas[2][0]=new pregunta("DWDM: multiplexado denso por división en longitudes de onda. DWDM realiza:","Transmisiones de larga distancia","Transmisiones de mediana distancia", "Transmisiones de mediana-larga distancia", "Transmisiones de corta distancia",0);
preguntas[2][1]=new pregunta("DWDM: multiplexado denso por división en longitudes de onda. En DWDM se puede utilizar:", "Señal lumínica", "Señal lumínica recortada", "Señal lumínica amplificada", "Señal lumínica semiamplificada",2);
preguntas[2][2]=new pregunta("DWDM: multiplexado denso por división en longitudes de onda. DWDM se utiliza en medios de transmisión:","Aéreos","Eléctricos","Alámbricos","Electromagnéticos",3);

preguntas[3]=new Array();
preguntas[3][0]=new pregunta("SS7: Sistema de Señalización. SS7 no tiene:","Alta escalabilidad","Alta flexibilidad", "Alta capacidad", "Alta velocidad",0);
preguntas[3][1]=new pregunta("SS7: Sistema de Señalización. Un componente básico de SS7 es:", "Punto de demultiplexación", "Punto de deseñalización", "Punto de señalización", "Punto de multiplexación",2);
preguntas[3][2]=new pregunta("SS7: Sistema de Señalización. Indique si la siguiente aseveración sobre SS7 es verdadera o falsa: Una central digital que use SS7 se conoce como SP y dentro del sistema SS7 se le asigna un número de identificación no único conocido como Código del Punto de Señalización  SPC(Signalling Point Code). Esta numeración se basa en el estándar ITU o en el ANSI (en USA):","Verdadero","Falso","N/A","N/A",1);

preguntas[4]=new Array();
preguntas[4][0]=new pregunta("VoIP: Voz IP. VoIP es:","Independiente del hardware utilizado","Dependiente del hardware utilizado","Independiente del software utilizado","Dependiente del software utilizado",0);
preguntas[4][1]=new pregunta("VoIP: Voz IP. VoIP acepta:","Cifrado","Encriptación","Empaquetado","Compresión",1);
preguntas[4][2]=new pregunta("VoIP: Voz IP. El principal inconveniente de VoIP es:","Integridad","Escalabilidad","Disponibilidad","Seguridad",3);

preguntas[5]=new Array();
preguntas[5][0]=new pregunta("ISDN: Red digital de servicios integrados. Tipos de canales de los que dispone ISDN para el envío de datos de voz y control:","B, H y D","B, C, D","B, D y H","A, B, C",2);
preguntas[5][1]=new pregunta("ISDN: Red digital de servicios integrados. ISDN transporta tráfico de red como:","Voz","Datos","Video","Todas las anteriores",3);
preguntas[5][2]=new pregunta("ISDN: Red digital de servicios integrados. Una característica actual de ISDN es:","Llamadas en espera","No informa la tarificación","Identificador de llamadas no habilitado","Posibilidad de recibir llamadas mientras se está en la red",0);

preguntas[6]=new Array();
preguntas[6][0]=new pregunta("DSL: Línea de abandono digital. DSL utiliza __________ para alcanzar altas velocidades de transmisión:","Multiplexación","Demultiplexado","Modulación","Sincronización",2);
preguntas[6][1]=new pregunta("DSL: Línea de abandono digital. DSL se caracteriza por tener principalmente:","Flexibilidad","Escalabilidad","Autenticidad","Integridad",0);
preguntas[6][2]=new pregunta("DSL: Línea de abandono digital. Las redes existentes fueron creadas para transmitir:","Datos","Video","Imágenes","Voz",3);

preguntas[7]=new Array();
preguntas[7][0]=new pregunta("IEEE 802.11: Institute of Electrical and electronics Engineers. IEEE 802.11 define el uso de las siguientes capas del modelo OSI:","Física y enlace","Aplicación y presentación","Física y red","Enlace y transporte",0);
preguntas[7][1]=new pregunta("IEEE 802.11: Institute of Electrical and electronics Engineers. IEEE 802.11 especifica las normas de funcionamiento de una red:","LAN","WMAN","WLAN","MAN",2);
preguntas[7][2]=new pregunta("IEEE 802.11: Institute of Electrical and electronics Engineers. Diga si es verdadera o falsa la siguiente afirmación sobre IEEE 802.11: Las especificaciones de este estándar proporcionan la base para los productos con redes inalámbricas que hacen uso de la marca Wi-Fi:","Verdadero","Falso","N/A","N/A",0);

preguntas[8]=new Array();
preguntas[8][0]=new pregunta("IEEE 802.16. La familia de estándares 802.16 se denomina oficialmente como:","WirelessMAN","WirelessLAN","WirelessSAN","WirelessWAN",0);
preguntas[8][1]=new pregunta("IEEE 802.16. ¿Como se ha comercializado?","WiMAX","WiNAX","WiLAX","WiBAS",0);
preguntas[8][2]=new pregunta("IEEE 802.16. De la tecnología PHY la versión 802.16e usa:","OFDME","OFDMA","DMA","OFMA",1);

preguntas[9]=new Array();
preguntas[9][0]=new pregunta("TDMA. Es una técnica que permite la transmisión de:","Señales digitales","Señales análogas","Señales móviles","Señales divididas",0);
preguntas[9][1]=new pregunta("TDMA. Es el tipo de multiplexación más utilizado en la actualidad:","MPN","TDN","MDP","TDM",3);
preguntas[9][2]=new pregunta("TDMA. TDMA es una técnica de multiplexación que distribuye las unidades de información en ______ alternas de tiempo:","Slots","Paquetes","Tramas","Canales",0);

preguntas[10]=new Array();
preguntas[10][0]=new pregunta("CDMA. Es una característica de un sistema SS:","El espectro rebota entre las señales cercanas","La expansión del espectro se lleva a cabo por una señal llamada señal código, independiente de los datos","Su espectro no tiene expansión","La expansión de su espectro es muy corta",1);
preguntas[10][1]=new pregunta("CDMA. Es una técnica de SS:","Salto de frecuencia","Secuencia indirecta","Secuencia lineal","Frecuencia lineal",0);
preguntas[10][2]=new pregunta("CDMA. Se ensancha el espectro de la portadora modulada por los datos al cambiar de frecuencia de portadora de forma pseudoaleatoria:","SS de salto en frecuencia","SS de Secuencia indirecta","SS de secuencia directa","SS de Frecuencia lineal",0);

preguntas[11]=new Array();
preguntas[11][0]=new pregunta("GSM. GSM es un sistema de comunicación de:","1a Generación","2a Generación","3er Generación","4ta Generación",1);
preguntas[11][1]=new pregunta("GSM. La estación Móvil consta de dos elementos básicos:","Movil y SIM","Móvil y Señal","Antena y Señal","Antena y Móvil",0);
preguntas[11][2]=new pregunta("GSM. Es el componente central del NSS y se encarga de realizar las labores de conmutación dentro de la red, así como de proporcionar conexión con otras redes:","MSC","MCS","MNC","MRC",0);

preguntas[12]=new Array();
preguntas[12][0]=new pregunta("GPRS. GPRS es una tecnología de:","Primera generación","Segunda generación","Tercera generación","Cuarta generación",2);
preguntas[12][1]=new pregunta("GPRS. Es uno de los principales elementos que se introducen para el GPRS:","Red Troncal GSM","Hardware PCS","Actualización de software a nivel de BTS","Comunicación intervenida",2);
preguntas[12][2]=new pregunta("GPRS. Característica de GPRS:","Servicio de mensajes SMS","Velocidad de hasta 300 kbps","Pago por tiempo de conexión","Conexión temporal",3);

preguntas[13]=new Array();
preguntas[13][0]=new pregunta("Internet2. El Proyecto Internet2 fue establecido en:","1996","1995","1998","1986",0);
preguntas[13][1]=new pregunta("Internet2. Las velocidades mínimas para universidades y socios son:","800 Mbit/s","400 Mbit/s","300 Mbit/s","600 Mbit/s",3);
preguntas[13][2]=new pregunta("Internet2. Las velocidades mínimas para un usuario particular son:","30  Mbit/s","100  Mbit/s","200  Mbit/s","50  Mbit/s",3);

preguntas[14]=new Array();
preguntas[14][0]=new pregunta("Videoconferencia. Su software es considerado:","Groupware","Socialware","Publicware","Hideware",0);
preguntas[14][1]=new pregunta("Videoconferencia. El hardware y/o software que realiza la compresión de audio/video se llama:","Compresor","Codec","Compac","Codif",1);
preguntas[14][2]=new pregunta("Videoconferencia. NO es un tipo de videoconferencia:","Multipunto","Uno a uno","Uno a muchos","Unipunto",);