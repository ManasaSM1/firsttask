var req=new XMLHttpRequest();
req.open('GET',"https://restcountries.eu/rest/v2/all",true);
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
    var res=data.filter((e)=>e.region=="Asia").map((e)=>e.name);
    console.log(res)

    var res=data.filter((e)=>e.population<200000).map((e)=>e.name);
    console.log(res)

    var sum=data.reduce((a,e)=>{return a+e.population;},0);
    console.log(sum);
    data.forEach((e)=>console.log(e.name+" "+e.capital+" "+e.flag));
}