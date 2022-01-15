// LocalStorage

// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить данные с ключом key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
// length – количество элементов в хранилище.

// const a = [1, 3, 5, 6, 7, 8];
// localStorage.setItem('key', JSON.stringify(a));  // => преобразуем в строку json
// let b = localStorage.getItem('key');        // => получили обычную строку json
// let c = JSON.parse(b)                            // => преобразовали строку json обратно в массив
//
// console.log(b);
// console.log(c);

//// отличие от Cookie => { cookie улетают на сервер - плохо // памяти больше у lc = 5mb  }