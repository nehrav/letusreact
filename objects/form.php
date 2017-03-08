<?php
class Form{
 
    private $conn;
 
    public function __construct($db){
        $this->conn = $db;
    }
 
    public function create($params){
        try{

            $name = $params['name'];
            $formjson = !empty($params['formjson'])?json_encode($params['formjson']):NULL;
            $created=date('Y-m-d H:i:s');
 
            // insert query
            $query = "INSERT INTO letusreact.FORMS(NAME,FORMJSON,CREATED) values ('$name','$formjson','$created')";
            
            $result = mysqli_query($this->conn, $query);

            if (!$result) {
               return false;
            }
            else 
                return true;
 
        }

        catch(PDOException $exception){
            die('ERROR: ' . $exception->getMessage());
        }
    }
}