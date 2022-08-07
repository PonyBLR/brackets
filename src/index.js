module.exports = function check(str, bracketsConfig) {
  // your solution
  let stackBracket = []

  const openSymbol = ['(', '[', '{', '1', '3', '5'];
  const closeSymbol = {
    ')': '(',
    ']': '[',
    '}': '{',
    '2': '1',
    '4': '3',
    '6': '5',
    '7': '7',
    '8': '8',
    '|': '|',
  };
  const openPlusSymbols = ['7', '8', '|'];

  for (let i = 0; i < str.length; i++) {

    // console.log(str[1]);
    
    let currentSymbol = str[i];
    let lastSymbol = stackBracket[stackBracket.length - 1];

    if (openSymbol.includes(currentSymbol) || (openPlusSymbols.includes(currentSymbol) && currentSymbol !== lastSymbol)) {
      
      // if (closeSymbol[currentSymbol] !== stackBracket.pop()) return false;

      stackBracket.push(currentSymbol)
    } else {
      if (stackBracket.length == 0) {
        return false
      }
          
      // stackBracket.push(currentSymbol)

      if (closeSymbol[currentSymbol] === lastSymbol) {
        stackBracket.pop();
      } else {
        return false
      }
    }

    // function matchSymbols (symbol) {
    //   return closeSymbol[currentSymbol] == lastSymbol
    // }

  }

  // console.log(bracketsConfig)
  return stackBracket.length == 0;
  
}
