export function orderByProps (obj, arr) {
    const objClone = {...obj};
    const objFilter = [];
    for (const el in arr) {
        if (objClone[arr[el]]) {
            const item = new Object();
            item.key = arr[el];
            item.value = objClone[arr[el]];
            objFilter.push(item);
            delete objClone[arr[el]];
        }
    }
    const sortRemainder  = [];
    for (const el in objClone) {
        const item = new Object();
        item.key = el;
        item.value = objClone[el];
        sortRemainder.push(item);
    }
    sortRemainder.sort((a, b) => {
        const keyA = a.key;
        const keyB = b.key;
        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
        return 0;
      });
    const result = objFilter.concat(sortRemainder);
    return result;
}