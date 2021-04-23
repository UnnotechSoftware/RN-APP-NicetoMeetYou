export default function generateISBN(){
  var serial = '978';
  var sum = 0;

  for (var i = 4; i < 14; i ++){
    if (i < 13){
      let n = Math.floor(Math.random() * 10);
      serial = `${serial}${n}`;      
    } else {
      for (var j = 0; j < 12; j ++){
        if (j % 2 === 0){
          sum += parseInt(serial[j]) * 1;
        } else {
          sum += parseInt(serial[j]) * 3;
        }
      }
      let last = 10 - (sum % 10);
      serial = `${serial}${last}`;
    }
  }

  return serial;
}