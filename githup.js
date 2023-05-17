class Githup{
    constructor(){
        this.client_secret = "a5d777104acdeeea4ce748040926d3888a761a03"
        this.client_id = "Iv1.7feb7b16dc02e9aa"
        this.repos_count = 10;
        this.repos_sort = 'asc';


    }

  async  getUser(user){
    
    //gelen userla beraber istek atma
    const profileResponse = await fetch 
   (` https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
   );

   //kullancilarin repolarını çekme
  const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)


   //gelen cevabı jsona çevirme
   const profile = await profileResponse.json()
   const repos = await repoResponse.json()
    console.log(repos)
   //işlenmiş veriyi fonksiyonun çağırıldığı yere gönderme
    return {
      profile,
      repos,
    };

    }
}

export default Githup