$(document).ready(function(){ //allowing html to load first before running javascript
    $('#name_getter').click(function(){//function is run when the button name_getter is clicked
        $.get("https://api.github.com/users/dlukel92", displayName)//using ajax to pull data from url, then running function
        //to display specific data from that page
        function displayName(data){//this functiont defines the data from the url with the key of login as name_getter
            let name = data.login;
            $('#name').html(name);
            console.log(data)
        }
    })
})