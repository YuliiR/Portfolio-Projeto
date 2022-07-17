const nome = document.getElementById("name")
const telefone = document.getElementById("phone")
const email = document.getElementById("email")
const formulario = document.getElementById("form")
const alertas = document.getElementById("warnings")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let enviar = false
    let confirmEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    alertas.innerHTML = ""
    if(nome.value.length <6){
        warnings += "O nome não é válido <br>"
        enviar = true
    }
    if(telefone.value.length <9){
        warnings += "O numero de telefone não é válido"
        enviar = true
    }
    if(!confirmEmail.test(email.value)){
        warnings += "O e-mail não é válido <br>"
        enviar = true
    }
    if(enviar){
        alertas.innerHTML = warnings
    }
})

// axios.get('https://pokeapi.co/api/v2/pokemon/ditto', {
//     responseType: 'json'
//   })
//     .then(function(res) {
//       if(res.status==200) {
//         console.log(res.data.abilities);
//         document.getElementById('respuesta').innerHTML = res.data.abilities[0].ability.name;
//       }
//       console.log(res);
//     })
//     .catch(function(err) {
//       alert('Error de conexión'+ err) ;
//     });