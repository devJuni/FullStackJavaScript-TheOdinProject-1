/*
//Every metodu, dizinin tüm elemanlarının karşılaştırma operatörü aracılığıyla kontrol edilmesine yarar.
//Sonuç mantıksaldır ( true, false ).

var array = [1, 2, 3, 4, 5]

var result = array.every(function (piece) {
  if (piece < 6) {
    return true
  }
})

console.log(result)
*/

/*
//Filter metodu, dizinin elemanlarını filtrelemeyi sağlar.
//Sonuç yeni bir dizi olarak dönecektir. Ana dizinin elemanlarını değiştirmez.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var result = array.filter(function (piece) {
  if (piece % 2 === 0) {
    return piece
  }
})

console.log(result)
*/

/*
//Find metodu, dizi içerisinde arama yapmayı sağlar.
var users = [
  {
    id: 1,
    name: 'alpcan'
  },
  {
    id: 2,
    name: 'hasan'
  },
  {
    id: 3,
    name: 'burak'
  }
]
var user = users.find(function (user) {
  if (user.name === 'hasan') {
    return user
  }
})

console.log(user)
*/

/*
//From metodu, belirli uzunlukta dizi oluşturmayı sağlar.Bundan dolayı 2 parametre alır .Biri uzunluğudur.
var array = Array.from({ length: 10 }, function (value, index) {
  return index * 2
})
console.log(array)
*/

/*
//Map metodu, çağırılan dizide elemanların üzerinde işlem yapar ve yeni bir dizi olarak döndürür.
var array = ['cagatay', 'cali', 'javascript', 'eğitimi']
var result = array.map(function (piece) {
  return piece.toUpperCase()
})

console.log(result);
console.log(array)
*/


/*
//Reduce metodu, dizi elemanları üzerinde işlem yapar ve sonucu tek bir değer şeklinde döndürür.
var total = [10, 5, 4, 6].reduce(function (sum, value) {
  return sum + value
}, 1)

console.log(total)
*/

/*
//Some metodu, dizideki elemanlardan en az birisinin koşula uyması durumunda mantıksal bir dönüt yapar.
var array = [1, 2, 3, 4, 5]
var result = array.some(function (piece) {
  if (piece > 4) {
    return true
  }
})

console.log(result)
*/

/* 
var array = [1, 2, 3, 4, 5, 6]
array.push(7) // Dizinin sonuna 7 elemanını ekler.
array.shift() // Dizinin ilk elemanını çıkartır.
array.unshift(0) // Diziye bir eleman ekler. (En başa)
// delete array[1] // Dizinin 1. anahtarlı elemanını çıkartır.
array.splice(2, 5) // Dizinin 2. elemanıyla 5. elemanı arasında kalan kısmını ayırır.
array.concat([8, 9, 10]) // Diziyi başka bir dizi ile birleştirir.
array.concat([11, 12, 13], [14, 15, 16]) // 3 diziyi birleştirir.
array.slice(0) // Dizinin verilen anahtarlı değerini diziden ayırır
 */

//Daha fazla açıklama için aşağıdaki linke daha açıklayıcıdır.
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/*
//let'in kapsamı
const b = {
  name: 'Cagatay',
  age: 21,
  university: 'Pamukkale University'
}

// Üniversiteyi değiştirelim.
b.university = 'San Jose State University'
b.hobbies = ['wind surfing', 'coding', 'bug bounty research']
b.brother = ['Aslı', 'Melih', 'İrem']


console.log(b);
 */
/* 
const array = [1, 2, 3, 4, 5] // Örneklem bir dizi oluşturalım.

function hello() {
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
  console.log(i, i + 1, i + 2) // Artan i değeri burada erişilebilir.
}
//hello();

function world() {
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
  console.log(i) // Artan i değeri burada let kullanımından dolayı erişilemez.
}
 */
//world();

/* 
//es6 kısaltmaları
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = array.filter(piece => piece % 2);

console.log(result) */

/* 
const array = [4, 1, 21, 56, 12, 64, 42, 23, 94, 10]
console.log(array.sort((piece, next) => piece < next));
 */

/* 
function hello(name, surname, ...a) { // Bu ... operatörünü dizilerde de kullanabilirsiniz.
  console.log(name, surname, a) // Cagatay Cali [ 'Pamukkale University', 21, [ 'wind surfing', 'coding' ] ]
  
  //  Burada diğer değişkenleri yakalamak için yine ES6 nın bir özelliğini kullanacağız.
  
  const [university, age, hobbies] = a
  console.log(university, age, hobbies) // Pamukkale University 21 [ 'wind surfing', 'coding' ]
}

hello('Cagatay', 'Cali', 'Pamukkale University', 21, ['wind surfing', 'coding'])
 */
/* 
const myCoolObject = { name: 'cagatay', description: 'Open-source contributor', age: 21, university: 'Pamukkale University' }
const { name, description, age, university } = myCoolObject
console.log(name, description, age, university) // cagatay Open-source contributor 21 Pamukkale University
 */
