var a = prompt ('podaj wartosc a'),
b = prompt ('podaj wartosc b'),
value = (a * a) - (2 * a * b) - (b * b);
alert ('wynik działania' + value);
console.log('wynik:' + value);
if (value <0) {
    console.log('wynik mniejszy od zera');
    alert ('wynik mniejszy od zera');
}
else {
    console.log('wynik większy od zera');
    alert ('wynik większy od zera');
}