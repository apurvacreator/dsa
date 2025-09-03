function encode(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${arr[i].length}#${arr[i]}`;
  }
  return arr.join('');
}

const input = ['neet', 'code', 'love', 'you'];
console.log('input =>', input);
const encoded = encode(input);
console.log('encoded =>', encoded);

function decode(encoded) {
  let decoded = [];
  //   let j = 0;
  //   for (let i = 0; i < encoded.length; i++) {
  //     let count = +encoded[i];
  //     i = i + 2;
  //     decoded[j] = encoded.substring(i, i + count);
  //     i = i + count - 1;
  //     j++;
  //   }
  //   return decoded;

  let i = 0;

  while (i < encoded.length) {
    let j = i;
    while (encoded[j] !== '#') {
      j++;
    }
    let length = +encoded.substring(i, j);
    i = j + 1;
    j = i + length;
    decoded.push(encoded.substring(i, j));
    i = j;
  }
  return decoded;
}

const decoded = decode(encoded);
console.log('decoded =>', decoded);
