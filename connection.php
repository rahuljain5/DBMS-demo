<?php
//TO ESTABLISH A CONNECTION
$connect = mysqli_connect('HOSTNAME_HERE', 'USERNAME_HERE', 'PASSWORD_HERE', 'DATABASENAME_HERE');
//ERROR IN ESTABLISHING A CONNECTION
if (mysqli_connect_errno($connect)) {
    echo 'failed to connect';
}
?>