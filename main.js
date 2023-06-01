WebCam.set({
    width:350,
    height:300,
    image_format:"png",
    png_qualty:90

});
cammera=document.getElementById(cammera);
Webcam.attach('#cammera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modleLoaded);
