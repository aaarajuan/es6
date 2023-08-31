function add(num1=0, num2=0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(1, 2);
// const sum = add(5);
// const sum = add();

function fullName(first, last = '') {
    const full = first + ' ' + last;
    console.log(full);
    return full;
}

function friends (numbs = []) {
    
}