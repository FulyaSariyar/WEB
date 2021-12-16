//değişkenler

var degisken1 = 123;
console.log(degisken1);
degisken1 = "Zekeriyacan";
degisken1 = 3.14;
degisken1 = true;
degisken1[1, 2, 3, 14];
degisken1 = {
    ad: "Zekeriyacan",
    soyad: "Abdullah",
    yas: 4
};
degisken1.telefon = "00057007070";
console.log(degisken1);

if (degisken1.yas > 40) {
    console.log("yaşı 40 dan büyüktür ");
} else {
    console.log("Yaşı 40 dan küçüktür.")
}
var degisken2 = 5;
if (degisken2 === 5) {
    console.log("5e eşittir.")
} else {
    consolo.log("5 e eşit değil");
}
console.log(typeof(5));
console.log(typeof(5.5));
console.log(typeof("5.5"));
console.log(typeof(true));
console.log(typeof([1, 2, 34]));
console.log(typeof(degisken1));


/*
== != === !==
> < >=  <=  !  
&  |  && ||   
+   -   *   % */
var degisken3 = 5;
var sunucu = "5";

if (degisken3 === sunucu && typeof(degisken3) == typeof(sunucu)) {

}
var dizi1 = [1, 2, 4, 3.14, true, "Fulya", { ad: "Fulya", soyad: "Sarıyar Abdullah" }];
for (var i = 0; i < dizi1.length; i++) {
    console.log(dizi1[i]);
}

dizi1[10] = "Ömer";
document.getElementById("demo").innerHTML = "My First JavaScript";
