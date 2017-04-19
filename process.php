<?php
include('connection.php');//INCLUDING THE CONNECTION FILE
$qu=$_POST['NAME_OF_THE_VALUE'];//VALUE OBTAINED FROM THE FORM
$res=mysqli_query($connect,$qu);//USED TO PROCESS THE QUERY
if($res)//CHECK IF QUERY WAS SUCCESSFULLY EXECUTED
while($row = mysqli_fetch_array($res,MYSQLI_ASSOC)) {
echo print_r($row);// PRINTS ALL THE ROWS RETURNED BY THE QUERY
echo "<br/>";
}
else echo 'failed';//IN CASE OF FAILURE
?>
