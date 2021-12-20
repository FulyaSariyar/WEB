//fonksiyon

function ilkFunction1(sayi1,sayi2){
    var toplam=sayi1+sayi2;
    return toplam;
}

var toplam = ilkFuncktion1(4,2);
console.log(toplam);

var ilkFuncktion2= function (sayi1,sayi2){
    return sayi1+sayi2;
}
var ad="Ömer" // bunu almaz this sayesinde.
toplam=ilkFuncktion2(4,5);
console.log(toplam);

var kisi={
    ad:"Fulya",
    soyad:"Sarıyar Abdullah",
    selamla:function(){
        return "Merhaba "+ this.ad+" "+ this.soyad;
    },
    toplam: ilkFunction1
};
function topla(){
    var toplam =0;
    for(var i =0; i<arguments.length; i++){
        toplam+= arguments[i];
    }
    return toplam;
}
console.log(toplam(1,2,3,4,5));




