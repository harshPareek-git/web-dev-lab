let a = prompt("Enter value of a");
a = Number.parseInt(a);
alert("You entered a of type" + typeof a);
let write = confirm("Do you want to print it to the document");
if (write) {
  document.write(a);
} else {
  console.log("Give permission to write");
}
