<?php
new mysqli('localhost', 'joaking', '#Jj%Fzd#g1tb', 'restaurant2020');
if (mysqli_connect_error()) {
    die('Connect Error(' . mysqli_connect_errno() . ')' . mysqli_connect_error());
}else{
    echo"hello";
}