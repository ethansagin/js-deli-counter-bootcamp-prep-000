var test = [1, 2, 3]

function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine) {
  if(currentLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${currentLine[0]}.`;
    }
    return currentLine.shift();
}

function currentLine(current) {
  for(let i = 0; i < current.length; i++) {
    return `${i++}. ${current[i]}, `;
  }
}

console.log(currentLine(test))