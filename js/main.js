let padvice=document.getElementById('advice'); //p tag selection
let advice_me=document.getElementById('advice_me'); //Advice Me!! Button selection
let search = document.querySelector(".search-btn"); //Search Button selection
let radvice; 
let advicedata;
let url="https://api.adviceslip.com/advice"; //API url

// Function for setting random advice
const getadvice=()=>{
    padvice.innerText=radvice.slip.advice
}

// Function for getting random advice
const advice=async ()=>
{
    try{

        let slip=await fetch(url);
        radvice=await slip.json();
        getadvice();    
    }
    catch(error){}
};
advice_me.addEventListener('click',advice);
advice();

// Function for setting values on searching advice
const sadvice=()=>{
    let h=document.querySelector("#main-heading");
    if (radvice.message){
        padvice.innerText=radvice.message.text;
    h.innerHTML="Searched Advice";
    }
    else{

        const id=Math.floor(Math.random()*(radvice.slips.length-1));
        padvice.innerText=radvice.slips[id].advice;
        h.innerHTML="Searched Advice";
    }
}
search.addEventListener('click',()=>
{
let val=document.querySelector('.searchbar').value;
if (val==""){
alert('Please Enter a Keyword');
}
else{
    // Function for calling API to get advice
    const searched_advice=async()=>{
        try{
            

            let slips=await fetch(surl);
            radvice=await slips.json();
            sadvice();
            
        }
        catch(error){}
    }
    // URL for searching advice
    let surl="https://api.adviceslip.com/advice/search/"+val;
    searched_advice();
}
})