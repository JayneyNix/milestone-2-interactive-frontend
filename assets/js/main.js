var modal = document.getElementById("serviceModal");
var btn = document.getElementById("services");
var span = document.getElementsByClassName("close")[0];
var footer = document.getElementsByClassName("btnclose")[0];
var filterservices = document.getElementById("fullService");
var filterrestaurant = document.getElementById("restaurant");
var filteraccommodation = document.getElementById("stay");


btn.onclick = function() {
    modal.style.display = "block";
};
span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

footer.onclick = function() {
    modal.style.display = "none";
};


Array.prototype.slice.call( document.querySelectorAll('input[type="checkbox"][id="fullService"]') ).forEach(function(onclick){
                   onclick.addEventListener('click', function(e){
                        if( this.value ){
             clearmarkers();

                            simcoe.forEach( obj=>{
                                if( obj.fullService==this.value ) markers.push( addmarker.call( this, obj ) );
                            });
                        }
                    });
                });
            




