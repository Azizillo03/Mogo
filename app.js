
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 8,
    dots: true,
    infinite: false,
    speed: 300,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    autoHeight: true,
  });

$(function() {
        let foto = $("[data-foto]"); 
        foto.on("click", function(event) {
            event.preventDefault();
            let fot = $(this).data('foto');
            $("[data-all]").each(function() {
              let all = $(this).data('all');
              if(fot == all){
                $(this).addClass('flex');
                $(this).removeClass('none');
              }else{
                $(this).addClass('none');
                $(this).removeClass('flex');
              }
            });
            
        }); 

        let plus = $("[data-plus]");

        plus.on("click", function(event) {
            event.preventDefault();

            let plusik = $(this).data('plus');
            $("[data-li]").each(function() {
              let li = $(this).data('li');
              if (li == plusik){
                $(this).addClass('flex');
                $(this).removeClass('none');
              }else{
                
              }
            });

            $("[data-chislo]").each(function() {
                let chislo = $(this).data('chislo');
                if (chislo == plusik){
                  let tex = $(this).text();
                  tex++;
                  $(this).text(tex);
                }
            });

            $("[data-zifra]").each(function() {
                let zifr = $(this).data('zifra');
                if (zifr == plusik){

                  var odin = $(this).text();
                  odin++;
                  $(this).text(odin);

                  $("[data-vibrat]").each(function() {
                    let vib = $(this).data('vibrat');
                  if(odin == "0" && plusik == vib){
                    $(this).addClass('vibor_a');
                      $(this).removeClass('none');
                  } else {
                
            
                   };});
                { 
                }
                let textplus =  $(this).text();
                  $("[data-zena]").each(function() {
                        let zena = $(this).data('zena');
                        if(zena == plusik){
                          let textzena =  $(this).text();
                          console.log(textzena*textplus)
                          $("[data-sum]").each(function() {
                            let sum = $(this).data('sum');
                            if (sum == plusik){
                             $(this).text(textplus*textzena);
                            }
                          });
                      }
                      });
              };
            });  
         
            });

          let minus = $("[data-minus]");
          minus.on("click", function(event) {
            event.preventDefault();

            let minusik = $(this).data('minus');       

            $("[data-chislo]").each(function() {
                let chislo = $(this).data('chislo');
                if (chislo == minusik){
                  let tex = $(this).text();
                  tex--;
                  $(this).text(tex);
                  console.log(tex)
                }
            });

            $("[data-zifra]").each(function() {
                let zifr = $(this).data('zifra');
                if (zifr == minusik){
                  var odin = $(this).text();
                  odin--;
                  $(this).text(odin);
                  $("[data-vibrat]").each(function() {
                    let vib = $(this).data('vibrat');
                  if(odin == "0" && minusik == vib){
                    $(this).addClass('vibor_a');
                      $(this).removeClass('none');
                      $("[data-schet]").each(function() {
                        let schet = $(this).data('schet');
                        if (schet == minusik){ $(this).addClass('none');
                      $(this).removeClass('flex');}
                       
                      });
                      $("[data-korsina]").each(function() {
                        let kor = $(this).text();
                        kor--;
                        $(this).text(kor);  
                      });
                  } else {

                   };});
              };
            }); 
            $("[data-zifra]").each(function() {
                    let zifro = $(this).data('zifra');
                    if(zifro == minusik){
                    let textminus =  $(this).text();
                      $("[data-zena]").each(function() {
                        let zena = $(this).data('zena');
                        if(zena == minusik){
                          let textzena =  $(this).text();
                          console.log(textzena*textminus)
                          $("[data-sum]").each(function() {
                            let sum = $(this).data('sum');
                            if (sum == minusik){
                             $(this).text(textminus*textzena);
                            }
                          });
                      }
                      });
                    
                    if(textminus == "0"){
                      $("[data-li]").each(function() {
                        let li = $(this).data('li');
                        if(li == minusik){
                        $(this).addClass('none');
                        $(this).removeClass('flex');}
                      });
                    }
                  }
                  }); 
         
            });

              let tovar = $("[data-vibrat]");

        tovar.on("click", function(event) {
            event.preventDefault();


            let tov = $(this).data('vibrat');
            $("[data-name]").each(function() {
              let name = $(this).data('name');
              if(name == tov){
                let nam = $(this).text();
                console.log(nam)
                $("[data-im]").each(function() {
                    let im = $(this).data('im');
                    if(im == name){
                      $(this).text(nam);
                    }
                });
              }
            });

            $(this).removeClass('vibor_a');
                $(this).addClass('none');

            $("[data-li]").each(function() {
              let li = $(this).data('li');
              if (li == tov){
                $(this).addClass('flex');
                $(this).removeClass('none');
              }else{
                
              }
            });

                $("[data-chislo]").each(function() {
                let chislo = $(this).data('chislo');
                if (chislo == tov){
                  let tex = $(this).text();
                  tex++;
                  $(this).text(tex);
                }
            });

            $("[data-zifra]").each(function() {
                let zifr = $(this).data('zifra');
                if (zifr == tov){
                  var odin = $(this).text();
                  odin++;
                  $(this).text(odin);

                  $("[data-schet]").each(function() {
                    let schet = $(this).data('schet');
                  if(odin > "0" && schet == tov){
                    $(this).addClass('flex');
                      $(this).removeClass('none');
                  } else if(odin == "0"){
                    $(this).removeClass('flex');
                    $(this).addClass('none');
                   };});

                   let texttov =  $(this).text();
                  $("[data-zena]").each(function() {
                        let zena = $(this).data('zena');
                        if(zena == tov){
                          let textzena =  $(this).text();
                          $("[data-itog]").each(function() {
                            let ito =  $(this).text();
                            console.log(typeof(ito))
                            $(this).text(ito+textzena);
                          });
                          console.log(textzena*texttov)
                          $("[data-sum]").each(function() {
                            let sum = $(this).data('sum');
                            if (sum == tov){
                             $(this).text(texttov*textzena);
                            }
                          });
                      }
                      });
              
              }else{
                
                }
            });
            $("[data-korsina]").each(function() {
                  let kor = $(this).text();
                  kor++;
                  $(this).text(kor);  
            });
           
            });
          
 });  

 document.querySelector('.oformit_a').addEventListener('click',function(){
    document.querySelector('.korzina').style.display = "none";;
});
 document.querySelector('.nazad').addEventListener('click',function(){
    document.querySelector('.korzina').style.display = "none";
});
 document.querySelector('.nav').addEventListener('click',function(){
    document.querySelector('.korzina').style.display = "flex";
});
var hiddenElement = document.getElementById("form");
var btn = document.querySelector(".oformit_a");

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn.addEventListener("click", handleButtonClick);