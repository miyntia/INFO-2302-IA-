function submitForm() {
    // Get form data
    var name = document.getElementById('name').value;
    var amountdecut = document.getElementById('amountdeduct').value;
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;

    // Set the message in the custom dialog
    document.getElementById('success').innerHTML = 'Thank you, ' + name + '! Amount of RM ' + amountdecut + ' will be deducted from ' + start + ' to ' + end + '. Invoice/bill will be sent after each deduction.';
    on();
}
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}