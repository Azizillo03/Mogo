$(function() {

    /* Filter
    =====================*/
    let next = $("[data-next]");
    
    next.on("click", function(event) {
        event.preventDefault();
        document.querySelector('.gb').style.display = "none";

        let nex = $(this).data('next');
        
            $("[data-cas]").each(function() {
                let workCas = $(this).data('cas');

                if(workCas == nex) {
                    $(this).addClass('dop');
                    $(this).removeClass('foto');
                } else {
                    $(this).removeClass('dop');
                    $(this).addClass('foto');
                }
            });
           
    });
        });
