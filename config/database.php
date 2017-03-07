<?php
class Database{
 
    // specify your own database credentials
    private $host = "172.16.2.221";
    private $db_name = "letusreact";
    private $username = "99user";
    private $password = "ViHycs4";
    public $conn;
 
    // get the database connection
    public function getConnection(){
 
        $this->conn = null;
 
        $this->conn = mysqli_connect($this->host, $this->username, $this->password);

        // Check connection
        if (!$this->conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
 
        return $this->conn;
    }
}
?>