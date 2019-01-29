var test = [1, 2, 3]

function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine) {
  if(currentLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var name = currentLine[0];
    currentLine.shift();
    return `Currently serving ${name}.`
    }
}

function currentLine(current) {
  if 
console.log(currentLine(test))