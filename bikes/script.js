var div1=document.createElement("div")
div1.className="container"
var div2=document.createElement("div")
div2.className="row"
var div=document.createElement("div")
div.className="heading"
var h=document.createElement("h4")
h.innerHTML="Most popular anime's in the world"
div.append(h)
document.body.append(div)

async function api()
{
    var res=await fetch("https://api.jikan.moe/v4/anime")
    var f=await res.json()
    var arr=f.data  
  for(var i=0;i<arr.length;i++)
   {
    var title=arr[i].title
    var images=arr[i].images.jpg.large_image_url
    var about=arr[i].synopsis
    var year=arr[i].rating
    var url=arr[i].url
    
    var div3=document.createElement("div")
    div3.className="col-md-4"
    div3.innerHTML+=`<div class="card mb-1"style="width:300px;box-shadow:20px;margin-right:10px;margin-bottom:10px;">
    <img src=${images} class="card-img-top" alt="...">
    <div class="card-body">
      <h6>${title}<h6>
      <p class="card-text"><small><i>${about}<br></i></small></p><br>
      <p>Rating:<space>${year}</p><br>
      <a href=${url} target="_blank">For more click this</a>
    </div>
  </div>`
  div2.append(div3)
  div1.append(div2)
  document.body.append(div1)
   }  
}
var a=api()

