let database = firebase.database();

let _userValue = document.getElementById("_userValue");
let _sendButton = document.getElementById("_sendButton");

get();

$(function(){
    $('#_form').submit(()=>{
        let name = $('#ipt1').val();
        let value = $('#ipt2').val();
        set({
            "name": name,
            "value": value
        })
        $('.wrapper').slideUp(200);
        $('.finish').removeClass('hide');
        $('.finish').slideUp(500);
        $('.finish').delay(750).slideDown(500).css({animation: 'ani 1s infinite alternate ease'});
        return false;
    })
});

function get(){
    database.ref('/').on('value',(snapshot)=>{
        console.log("get data!");
        let data = snapshot.val();
        if(data.hasOwnProperty("name") && data.hasOwnProperty("value")){
            console.log("set data to html!");
            document.getElementById("json-data").innerHTML = `{"name":"${data.name}}","value":"${data.value}"}`;
            return;
        }
        console.log("no MATCHING data!");
    });
}

function set(content) {
    console.log("set data!");
    database.ref('/').set(content);
}
