

const run = document.getElementById("run");

const quote = document.getElementById("quote");
 

run.addEventListener("click", ()=>{

  async function getQuote(){

    let url = await fetch ('https://animechan.vercel.app/api/random');
    let datas = await url.json();
   
    quote.innerHTML = 
    `
    <li>
      <h3>${datas.anime}</h3>
       <h4>${datas.character} :</h4>
        <p>${datas.quote}</p>
    </li>
    `
  }
  const sound = () => {
    const audio = new Audio();
    audio.src="./japan.mp3";
    audio.play();
}
  getQuote();
  sound();
})