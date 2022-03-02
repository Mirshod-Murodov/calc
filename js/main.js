function calc(num) {
   document.getElementById('in').value = document.getElementById('in').value + num
}

function clean() {
   document.getElementById('in').value = " "
}


function equal() {
   let total = document.getElementById('in').value
   document.getElementById('in').value = eval(total)
}

function back() {
   let total = document.getElementById('in').value
   document.getElementById('in').value = total.slice(0, -1)
}