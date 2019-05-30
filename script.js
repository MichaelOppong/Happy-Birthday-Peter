$("body").keydown(function(event){
    if(event.which===37){
        $("img").attr("src","https://i.ibb.co/MkKghFC/Staff-Headshots-084.jpg");
    }else if(event.which===39){
        $("img").attr("src","https://i.ibb.co/vB7F5nM/IMG-0027.jpg");
    }else if(event.which===38){
        $("img").attr("src","https://i.ibb.co/s3NT8q4/IMG-7533.jpg");
    }else if (event.which===40){
        $("img").attr("src","https://i.ibb.co/KLJvGTD/IMG-3819.jpg");

    }else{
        $("img").attr("src","https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/08/Birthday-messages-for-sisterFT.jpg");
    }
});
