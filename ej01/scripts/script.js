function changePayment(index)
{
	switch (index)
	{
		case "cc":
			console.log("cc");
			document.getElementById("form_cc").style.display = "block";
			document.getElementById("form_tr").style.display = "none";
			document.getElementById("form_pp").style.display = "none";
			break;
		case "tr":
			console.log("tr");
			document.getElementById("form_cc").style.display = "none";
			document.getElementById("form_tr").style.display = "block";
			document.getElementById("form_pp").style.display = "none";
			break;
		case "pp":
			console.log("pp");
			document.getElementById("form_cc").style.display = "none";
			document.getElementById("form_tr").style.display = "none";
			document.getElementById("form_pp").style.display = "block";
	}
}

function checkEmail()
{
	var data = getCookie(document.getElementById("emailModal").value);
	if (data != "")
	{
		hideModalFull(data);
	}
	else
	{
		hideModalEmpty();
	}
}

function hideModalFull(data)
{
	parsedData = JSON.parse(data);
	document.getElementById("username"		).value = parsedData.Jusername;
	document.getElementById("password"		).value = parsedData.Jpassword;
	document.getElementById("fullname"		).value = parsedData.Jfullname;
	document.getElementById("birthdate"		).value = parsedData.Jbirthdate;
	document.getElementById("email"			).value = parsedData.Jemail;
	document.getElementById("address"		).value = parsedData.Jaddress;
	document.getElementById("paymenttype"	).value = parsedData.Jpaymentype;
	document.getElementById("ccnumber"		).value = parsedData.Jccnumber;
	document.getElementById("ccdate1"		).value = parsedData.Jccdate1;
	document.getElementById("ccdate2"		).value = parsedData.Jccdate2;
	document.getElementById("cccvc"			).value = parsedData.Jcccvc;

	document.getElementById("myModal").style.display = "none";
}

function hideModalEmpty()
{
	document.getElementById("email").value = document.getElementById("emailModal").value;
	document.getElementById("password").value = document.getElementById("passwordModal").value;

	document.getElementById("myModal").style.display = "none";
}

function submitForm()
{
	if (!document.getElementById("username").checkValidity()){invalid("Nombre de usuario");return;}
	if (!document.getElementById("password").checkValidity()){invalid("Contraseña");return;}
	if (!document.getElementById("fullname").checkValidity()){invalid("Nombre completo");return;}
	if (!document.getElementById("birthdate").checkValidity()){invalid("Fecha de nacimiento");return;}
	if (!document.getElementById("email").checkValidity()){invalid("E-mail");return;}
	if (!document.getElementById("address").checkValidity()){invalid("Dirección");return;}
	if (!document.getElementById("ccnumber").checkValidity()){invalid("Número de tarjeta");return;}
	if (!document.getElementById("ccdate1").checkValidity()){invalid("Mes de expiración");return;}
	if (!document.getElementById("ccdate2").checkValidity()){invalid("Año de expiración");return;}
	if (!document.getElementById("cccvc").checkValidity()){invalid("CVC");return;}

	var data = new Object();
	data.Jusername	= document.getElementById("username"	).value;
	data.Jpassword	= document.getElementById("password"	).value;
	data.Jfullname	= document.getElementById("fullname"	).value;
	data.Jbirthdate	= document.getElementById("birthdate"	).value;
	data.Jemail		= document.getElementById("email"		).value;
	data.Jaddress	= document.getElementById("address"		).value;
	data.Jpaymentype= document.getElementById("paymenttype"	).value;
	data.Jccnumber	= document.getElementById("ccnumber"	).value;
	data.Jccdate1	= document.getElementById("ccdate1"		).value;
	data.Jccdate2	= document.getElementById("ccdate2"		).value;
	data.Jcccvc		= document.getElementById("cccvc"		).value;

	var parsedData = JSON.stringify(data);
	setCookie(data.Jemail, parsedData, 4);
}

function invalid(str)
{
	alert("ERROR\n\nCampo inválido: "+str);
}

function clearForm()
{
	checkEmail();
}

function setCookie(cname, cvalue, exdays)
{
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	return true;
}

function getCookie(cname)
{
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}