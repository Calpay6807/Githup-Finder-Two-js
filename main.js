import Githup from "./githup.js";
import UI from "./ui.js";

//githup ve ui claslarının bir örneğini oluşturma

const ui = new UI()

const githup = new Githup()


// console.log(githup)
// console.log(ui)


const searchUser = document.getElementById('search-user')
const searchBtn = document.getElementById('search-button')



searchBtn.addEventListener('click', getInput);

searchUser.addEventListener('keypress', (e) => {
    if(e.code === 'Enter') {
        getInput()
    }
});



function getInput() {
    const searchUser = document.getElementById('search-user');
    
   if(searchUser.value !== '') {

    githup.getUser(searchUser.value).then((data) =>  {
        if(data.profile.message === "Not Found"){
            ui.showAlert("aradiğiniz kullanici yok", "alert alert-danger")

        } else{
            ui.showAlert("kullanici başariyla  bulundu", "alert alert-success")

            ui.showProfile(data.profile)

            ui.showRepos(data.repos)
        }
    })

   } else{
    ui.showAlert("form alani boş olamaz", "alert alert-info")

    ui.clearProfile();

   }

   searchUser.value = '';
           
    

}

const tema = document.getElementById('tema')

tema.addEventListener('click', changeTema);

function changeTema() {
    const body = document.querySelector('body');
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-bg-dark')

    if(body.classList.contains('bg-dark')){
        tema.innerText = 'Açık mod'
    } else{
        tema.innerText = 'Koyu  mod'

    }
}




