
let students = [
  {
    name: 'Élida',
    nota1: 10,
    nota2: 7,
  },
  {
    name: 'Flávio',
    nota1: 5,
    nota2: 7, 
  },
  {
    name: 'Joaquim',
    nota1: 5,
    nota2: 5,
  }
]

let i = 0

function eachOneStudent(){

  for( let i = 0; i <= students.length; i++){

    let name = students[i].name
    let average = (students[i].nota1 + students[i].nota2) / 2

    if(average >= 7){
      alert(`Parabéns ${name} sua média é ${average} você passou`)
    } else {
      alert(`Estude mais ${name} sua média é ${average} você não passou`)
    }
   
}
}

eachOneStudent()
