function while_(numero)
{
    var numero=1;
    while(numero<=10)
    {
        console.log(numero);
        numero++;
    }
}

for (var i=1; i<=10; i++){
        console.log(i)
    }
}


Crear un
algoritmo que
genere los
siguientes
números binarios

2 = 10

16 = 10000

23 = 10111


function binario(numero){
    var nuevonumero;
    nuevonumero = numero/2;
    var modulo = nuevonumero % 2;
    while (modulo == 0)
        {
            numero = nuevonumero/2;
            modulo = nuevonumero % 2;
        }
}