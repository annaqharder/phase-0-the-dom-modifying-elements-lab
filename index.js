// Write your code here!

main.remove(); 

const newHeader = document.createElement("h1"); 
// document.body.append(newHeader); 

// newHeader.append('victory'); // does NOT create the id="victory" //

// newHeader.id = 'victory'; // does create the id="victory" //

newHeader.setAttribute('id', 'victory'); // does create the id="victory" //

newHeader.textContent = "Anna is the champion"; 
