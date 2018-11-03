var fname;
		var email;
		var password;
		var cpassword;
		var phone;

		// Loading object on page load
		function myObjectLoad()
		{
			 fname = document.forms["vform"]["fname"];
			 email = document.forms["vform"]["email"];
			 password = document.forms["vform"]["password"];
			 cpassword = document.forms["vform"]["cpassword"];
			 phone = document.forms["vform"]["phone"];	

			 fname.addEventListener("blur",fnameVerify,true); 
			 email.addEventListener("blur",emailVerify,true);
			 password.addEventListener("blur",passwordVerify,true);
			 cpassword.addEventListener("blur",cpasswordVerify,true);
		}

		

		// Validating function
		function Function()
		{
			
			var fname_error = document.getElementById("fname_error");
			if(fname.value == "")
			{
				fname_error.textContent = "Firstname is required";
				fname.focus();
				return false;
			}

			if(!isNaN(fname.value))
			{
				fname_error.textContent = "Only characters are allowed";
				fname.focus();
				return false;
			}

			if(email.value == "")
			{
				email_error.textContent = "Email is required";
				email.focus();
				return false;
			}

			if(email.value.indexOf('@')<=0)
			{
				email_error.textContent = "@ Invalid position";
				return false;
			}

			if((email.value.charAt(email.value.length-4)!='.') && (email.value.charAt(email.value.length-3)!='.'))
			{
				email_error.textContent = ". Invalid position";
				return false;
			}

			if(password.value == "")
			{
				password_error.textContent = "Password is required";
				password.focus();
				return false;
			}

			if((password.value.length <=5) || (password.value.length >20))
			{
				password_error.textContent = "Lenght must be between 5 to 20";
				return false;
			}

			if(cpassword.value == "")
			{
				cpassword_error.textContent = "Confimr password is required";
				cpassword.focus();
				return false;
			}

			if(password.value!=cpassword.value)
			{
				cpassword_error.textContent = "Passwords are not matching";
				return false;
			}


			if(phone.value == "")
			{
				phone_error.textContent = "Phone is required";
				phone.focus();
				return false;
			}

			if(isNaN(phone.value))
			{
				phone_error.textContent = "Only digits are allowed";
				return false;
			}

			if(phone.value.length!=10)
			{
				phone_error.textContent = "Number must be 10 digits only";
				return false;
			}
		}

		// Setting all event listeners

		function fnameVerify()
		{	
			
			if(fname.value!= "")
			{
				var fname_error = document.getElementById("fname_error");
				fname_error.textContent ="";
			}

		}

		function emailVerify()
		{	
			
			if(email.value!= "")
			{
				var email_error = document.getElementById("email_error");
				email_error.textContent ="";
			}

		}

		function passwordVerify()
		{	
			
			if(password.value!= "")
			{
				var password_error = document.getElementById("password_error");
				password_error.textContent ="";
			}

		}

		function cpasswordVerify()
		{	
			
			if(cpassword.value!= "")
			{
				var cpassword_error = document.getElementById("cpassword_error");
				cpassword_error.textContent ="";
			}

		}
		
