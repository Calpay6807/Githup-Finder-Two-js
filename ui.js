class UI {
    constructor(){
     this.profile =  document.getElementById('profile')
    
    }

    //profil arayüzü ekrana basma
    showProfile(user){
        const created_at = new Date(user.created_at).toLocaleDateString()
        
        this.profile.innerHTML=`

        <div class="container border my-4 p-4">

                <div class="row ">
                <div class="col-md-3">
                    <img class="img-fluid" src="${user.avatar_url}" width="200px" alt="">
                    <a href="/${user.html_url}" target="_blank" class="btn btn-primary my-4 w-100">Profili Göster</a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary fs-6">açık repolar: ${user.public_repos}</span>
                    <span class="badge bg-success fs-6">açık gistler: ${user.public_gists} </span>
                    <span class="badge bg-warning fs-6">takipçiler: ${user.followers}</span>
                    <span class="badge bg-danger fs-6 mt-1">takipedilenler: ${user.following}</span>

                    <ul class="list-group my-5">
                        <li class="list-group-item">Hakkında: ${user.bio}</li>
                        <li class="list-group-item">Şirket: ${user.company}</li>
                        <li class="list-group-item">Wep Site: ${user.blog}</li>
                        <li class="list-group-item">Konum: ${user.location}</li>
                        <li class="list-group-item ">Hesap Oluşturma Tarihi: ${created_at}</li>


                    </ul>

                </div>

             </div>
        </div>


        <div class="container p-3" id="repos">
        
        </div>

        `;
    }

    showRepos(repos){

        let outPut = `<h3 class="fs-1">En Son Repolar</h3>`;
        repos.forEach((repo) =>{
            outPut += `
            <div class="border p-3 mb-4">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                   <span class="badge bg-primary">yildiz: ${repo.stargazers_count}</span>
                   <span class="badge bg-danger">izleyenler:${repo.watchers_count}</span>
                   <span class="badge bg-success">forklar: ${repo.forks_count}</span>
                </div>
            </div>
           </div>
            `
        });
        
        const reposs = document.getElementById("repos").innerHTML = outPut;
        

    }

    showAlert(message, classname){
        const div = document.createElement("div")
        div.className = classname;
        div.innerHTML = message;
        const outlet = document.getElementById('alert')

        outlet.appendChild(div)

        setTimeout(() => {
          this.clearAlert()
        },1000)
    
    }
    clearAlert(){
        const currentAlert = document.querySelector('.alert')

        if(currentAlert){
            currentAlert.remove()
        }
    }

   clearProfile(){
    this.profile.innerHTML = '';
   }
}






    export default UI