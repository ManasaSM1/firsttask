var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    
   
    //Get all the countries from Asia continent /region
        var a=data.filter((ele)=>ele.region=="Asia").map((ele)=>ele.name);
        console.log("Asian countries are: "+a);
    //Get all the countries with a population of less than 2 lakhs 
        var res=data.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
        console.log("Countries population with less than 200000 are: "+res);
    //Print the following details name, capital, flag using forEach function
         data.forEach((e)=>console.log(`${e.name} ${e.capital} ${e.flag}`));
     //Print the total population of countries 
        var b=data.reduce((sum,ele)=>
            {
        return sum+ele.population;
             },0);
          console.log("total population is "+b);
    //    Print the country which uses US Dollars as currency.
          var res=data.filter((ele)=>{
              for(i in ele.currencies)
              {
                  if(ele.currencies[i].code==='USD')
                  {
                      return true;
                  }
              }
          }).map((ele)=>ele.name);
        console.log(res);
   

}