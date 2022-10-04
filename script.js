
//#region 
var nombre="Marcos";
console.log(nombre);
let nombre2="No";
console.log(nombre2);
const nombre3="Llora";
console.log(nombre3);
//#endregion

//#region 
function suma(num1, num2){
    
    var suma=num1+num2;
     return (suma);
 }
 try{
     var num1=50;
     var num2=30;
     console.log(suma(num1, num2));
 } catch {
     const mensaje='No son numeros';
     console.log(mensaje);
 }
 function resta(num1,num2){
     var resta=num1-num2;
     return (resta);
 }
 try{
     var num1=50;
     var num2=30;
     console.log(resta(num1, num2));
 } catch {
     const mensaje='No son numeros';
     console.log(mensaje);
 }
 function multi(num1,num2){
     var multip=num1*num2;
     return (multip);
 }
 try{
     var num1=50;
     var num2=30;
     console.log(multi(num1, num2));
 } catch {
     const mensaje='No son numeros';
     console.log(mensaje);
 }
 function division(num1,num2){
     var divs=num1/num2;
     return (divs);
 }
 try{
     var num1=50;
     var num2=5;
     console.log(division(num1, num2));
 } catch {
     const mensaje='No son numeros';
     console.log(mensaje);
 }
 //#endregion