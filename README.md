# shoppers-paradise-client
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login para 1 usuario</title>
</head>

<body>
<SCRIPT  language=JavaScript> 
function go(){

if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
        document.form.submit(); 
    } 
    else{ 
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
} 
</SCRIPT> 
<FORM name=form action="SHOPPER_PARADISE.HTML">

<P>Usuario:    <INPUT type=text name=login> 
<P>Contraseña: <INPUT type=password name=password> 
<INPUT onclick=go() type=button value=Acceder>

</FORM> 
</body>
</html>
