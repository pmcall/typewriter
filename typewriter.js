const sentence = "Murder, she wrote...";

let timeCounter = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);  
  }, timeCounter) 
  timeCounter += 50
}

setTimeout(() => {
  process.stdout.write("\n");  
}, timeCounter + 50) 
