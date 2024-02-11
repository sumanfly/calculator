let final = document.getElementById("final");

function suman(value) {
  final.value += value;
}

function clearInput() {
    final.value = "";
}

function shekhar() {
  try {
    final.value = eval(final.value);
    final.style.color ="green"
  } catch (error) {
    final.value ='error'
    final.style.color='red'
  }
}
