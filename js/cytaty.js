var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if(xhr.status === 200) {
            cytatObject = JSON.parse(xhr.responseText);
            let x = Math.floor((Math.random() * cytatObject.cytaty.length));
            console.log(x);
            $("#autor").html(cytatObject.cytaty[x].author);
            $("#cytat").html(cytatObject.cytaty[x].cytat);
            $("#zdjecie").attr("src", cytatObject.cytaty[x].image);
            $("#guzik").click(function() {
                let x = Math.floor((Math.random() * cytatObject.cytaty.length));
                console.log(x);
                $("#autor").html(cytatObject.cytaty[x].author);
                $("#cytat").html(cytatObject.cytaty[x].cytat);
                $("#zdjecie").attr("src", cytatObject.cytaty[x].image);
            });
        }
    };
xhr.open('GET', 'js/cytaty.json', true);   
xhr.send(null);       