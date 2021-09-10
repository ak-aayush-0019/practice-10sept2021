const result=document.getElementById('result');
const form=document.querySelector('form');
const input=document.querySelector('input'); 
let body= document.querySelector('body');
first();
function first()
{
    input.value="Chandigarh";
   
    body.style.backgroundImage="https://images.unsplash.com/photo-1606318175549-0aea385d8080?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
    getData("chandigarh");


}



function getData(city)
{
    
        while(result.firstChild)
        {
            result.removeChild(result.firstChild);
        }
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1eea0678271ac9d2a0f6a03de934a4b8`)
.then((r)=>{
    return r.json();
})
.then((res)=>{
    let url="";
  
    let h3=document.createElement('h3');
    h3.innerHTML=`<h3>${res.name}</h3>`;
    result.append(h3);
   
    let h5=document.createElement('h3');
    h5.innerHTML= `<h5>${new Date().toDateString()}</h5>`;
     result.append(h5);


    const h2=document.createElement('h2');
    let f=res.main.temp;
    f=parseInt(res.main.temp-273)
    h2.innerHTML=`<h2>${f}°C</h2>`;
    result.append(h2);

    

    const p=document.createElement('p');
    const txt1=parseInt(res.main.temp_min-273)
    const txt2=parseInt(res.main.temp_max-273);
    p.innerHTML=`<p>${txt1}°C(min)/${txt2}°C(max)</p>`;
    result.append(p);

    const span=document.createElement('span');
    span.innerHTML=`<span>${res.wind.speed}&nbsp;Kms</span>`;
    result.append(span);

    const h4=document.createElement('h4');
    
    
    
    let weatherr="";
    weatherr+=`${res.weather[0].description}`;
    weatherr+" ";

    h4.innerHTML=`<h4>${weatherr}</h4>`;
    
    if(weatherr.toLowerCase().indexOf('cloud')!==-1){
        // body.style.backgroundImage="none";
// url=;
body.style.backgroundImage="https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80";    
}
    else if(weatherr.toLowerCase().indexOf('clear')!==-1){
        
      body.style.backgroundImage="https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80";
    }
    else if(weatherr.toLowerCase().indexOf('rain')!==-1)
{
url="https://images.unsplash.com/photo-1520609798519-2e1e8c18df3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
}
else if(weatherr.toLowerCase().indexOf('sun')!==-1)
{
url="https://images.unsplash.com/photo-1581224463294-908316338239?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
}
else{
    url="https://images.unsplash.com/photo-1524705260699-6d0896af1010?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80";
}
body.style.backgroundImage=`${url}`;
 
    result.append(h4);
  
})
.catch((err)=>{
    console.log(err.message);
});

}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const city=form.elements[0].value;
url="";
    getData(city);
    body.style.backgroundImage=`${url}`;
    form.elements[0].value="";

})


