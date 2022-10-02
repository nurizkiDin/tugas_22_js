function ulang(){
    var kal1 = 'Saya ingin belajar bersama';
    var array1 = kal1.split(' ');

    array1.forEach(function(isi, index){
        console.log("Item : "+isi+" index ke "+index)
    })
}

ulang()
