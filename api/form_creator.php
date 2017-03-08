<?php
header('Access-Control-Allow-Origin: *');

if($_POST){
 
    include_once '../config/core.php';
    include_once '../config/database.php';
    include_once '../objects/form.php';
 
    // class instance
    $database = new Database();
    $db = $database->getConnection();
    $form = new Form($db);
 
    $formParams = ['name'=>$_POST['name'], 'formjson'=>$_POST['formjson']];
   
    echo json_encode($form->create($formParams));
}
?>
