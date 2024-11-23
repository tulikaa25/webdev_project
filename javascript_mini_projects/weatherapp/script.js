const apiKey="cc1046e2dde9fda152426d06506cb1a8";

const apiUrl= `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;
const searchbutton=document.getElementById("searchbtn");
async function checkWeather(city)
{
    try{
        searchbutton.textContent="Searching";
        searchbutton.disabled=true;
        const response =await fetch(`${apiUrl}&q=${city}`);
        const data= await response.json();
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= data.main.temp+ "°C";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.getElementsByClassName("weather")[0].style.display = "block";
    }
    catch(err)
    {
        
        document.getElementsByClassName("error")[0].classList.remove("error");
        document.getElementsByClassName("weather")[0].style.display="none";
    
    }
    finally{
        searchbutton.textContent="Search";
        searchbutton.disabled=false;
        
    }
   
}
      
  searchbutton.addEventListener('click',function()
{
    document.getElementsByClassName("error")[0].classList.add("error");
    document.getElementsByClassName("weather")[0].style.display="block";
    const city=document.querySelector(".search input").value;        //extracting the city info
    checkWeather(city);
    
})


