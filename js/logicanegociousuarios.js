function obtenerListaUsuarios(){
    var listausuarios=JSON.parse(localStorage.getItem('listaUsuarios'));
    if (listausuarios==null){
        listausuarios=[
            ['1','pabs','Monestel','israelfer@gmail.com','soyyo','1987-10-12','1'],
            ['2','orsh','beishu','pablo.monestl@gmail.com','ipablo9','1987-10-12','2'],
        ]

    }
    return listausuarios;
}
function validarcredenciales(pCorreo,PContrasenna){
    var listaUsuarios=obtenerListaUsuarios();
    var bAcceso=false;
    for(var i=0;i<listaUsuarios.length;i++){
        if(pCorreo==listaUsuarios[i][3]&& PContrasenna==listaUsuarios[i][4]){
            bAcceso=true;
            sessionStorage.setItem('usuarioActivo',listaUsuarios[i][1]+''+listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioactivo',listaUsuarios[i][6]);
        }
    }
    return bAcceso
}