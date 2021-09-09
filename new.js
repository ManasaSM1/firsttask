var req=new XMLHttpRequest();
req.open('GET',"https:restcountries.eu/rest/v2/all",true);
req.send();
req.onload=function()
{
    var data=JSON.parse(req.response);
    console.log(data);
    for(var i in data)
    {
        console.log(data[i].flag)
        //console.log(data[i].name+" "+data[i].region+" "+data[i].subregion+" "+data[i].population);
    }
    data.forEach((e) => 
        console.log(e.currencies=="USD")
    );
}