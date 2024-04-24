function rollTheDice(userName: string, maxOfTries: number) {
  const results = [];
  let MAX_DICE_NUMBER: number =   6;

  for (let index = 0; index < maxOfTries; index++) {
    const result = Math.ceil(Math.random() * MAX_DICE_NUMBER);

    if (result === MAX_DICE_NUMBER) {
      results.push(`${userName} is a WINNER`);
    } else {
      results.push(`${userName} is a LOSER`);
    }
    
    console.log(result)
  }

  return results;
}

console.log(rollTheDice('TypeScript', 2));
