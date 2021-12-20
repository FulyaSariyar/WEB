function konumBul(){
    if (navigator.geolocation){
        console.log('Geolation destekliyor')
        navigator.geolocation.getCurrentPosition(function(data){
            console.log(data);
            var directionsService = new google.maps.DirectionsService();
            var directionsRenderer = new google.maps.DirectionsRenderer();
            const evKonum={
                lat:40.9583073,
                lng:29.102783
            }
            const konum={
                lat:data.coords.latitude,
                lng:data.coords.longitude
            };
            const haritaDiv=document.getElementById('map');
            const googleMap=new google.maps.Map(haritaDiv,{
                center:konum,
                zoom:15,
               // mapTypeId: 'satellite'
            });
            // const marker=new google.maps.Marker({
            //     position:konum,
            //     map:googleMap,
            //     title:'Şu an buradasınız'
            // });
            directionsRenderer.setMap(googleMap);
            directionsService
            .roure({
                origin:konum,
                destination:evKonum,
                travelMode:google.maps.travelMode.DRIVING,
            })
            .then((Response)=>{
                directionsRenderer.setDirections(Response);
            })
            .catch((e)=>
            window.alert("Directions request due to" +status));
        },
        function(error){
            alert(error.message);
        }
        );
    }
    else{
        alert('Geolocation desteklemiyor')
    }
}
konumBul();