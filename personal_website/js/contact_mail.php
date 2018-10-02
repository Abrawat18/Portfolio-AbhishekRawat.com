<?php
$name = $_POST['name'];
 
$email = $_POST['mail'];
$msg = $_POST['textArea'];
 $subject="Website enquiry";
$to = "abhirawat.18@gmail.com";
 

//data
$msg = "NAME: "  .$_POST['name']."\n Email: "  .$_POST['mail']." \n   Message: "  .$_POST['textArea']."\n";
mail($to, $subject, $msg, "from: $email");

echo "<script language='javascript'> {
  alert('Thank you.. I will contact you soon...');	
   
} </script>
 <meta http-equiv='REFRESH' content='0;url=../pages/home.html'> 
 
 '";
?>