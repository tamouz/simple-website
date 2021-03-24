function getDevelopers(){
    //get the div with the id "teamDiv" 
    var teamDiv = document.getElementById('teamDiv');
    //fetch data from api with url https://miniapi-tamouz.herokuapp.com/
    fetch('https://miniapi-tamouz.herokuapp.com/').then(response => response.json()).then(json=>{
        for (let i = 0; i < json.length; i++) {
            const element = json[i];
            teamDiv.appendChild(createEmployeeDiv(json[i]))
            
        }
    })
}

function createEmployeeDiv(info){
     var FristDiv = document.createElement('div');
     FristDiv.className="col-lg-6 mt-4";
    //  var SecondDiv = document.createElement('div');
    //  SecondDiv.className = "member";
    //  SecondDiv.setAttribute('data-aos','zoom-in');
    //  SecondDiv.setAttribute('data-aos-delay','400');
    //  var ImgDiv = document.createElement('div');
    //  ImgDiv.className = "pic"
    //  var Img = document.createElement('img')
    //  Img.src = info.Pic;
    //  Img.className =  "img-fluid"
    //  ImgDiv.appendChild(Img);
    //  SecondDiv.appendChild(ImgDiv);
     FristDiv.innerHTML = '<div class="member" data-aos="zoom-in" data-aos-delay="400">'+
     '<div class="pic"><img src="'+info.Pic +'"class="img-fluid img-circle" alt=""/></div>'+
     '<div class="member-info"><h4>'+info.Name+'</h4><span>'+info.Job+'</span><div class="social">'+
         '<a href=""><i class="ri-twitter-fill"></i></a><a href=""><i class="ri-facebook-fill"></i></a><a href=""><i class="ri-instagram-fill"></i></a><a href=""> <i class="ri-linkedin-box-fill"></i> </a></div></div></div>';
    return FristDiv;        
}
getDevelopers();

/*<div class="col-lg-6 mt-4">
                <div class="member" data-aos="zoom-in" data-aos-delay="400">
                  <div class="pic"><img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                    <div class="social">
                      <a href=""><i class="ri-twitter-fill"></i></a>
                      <a href=""><i class="ri-facebook-fill"></i></a>
                      <a href=""><i class="ri-instagram-fill"></i></a>
                      <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                    </div>
                  </div>
                </div>
              </div>
              */