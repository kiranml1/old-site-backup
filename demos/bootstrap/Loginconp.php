<?php
require_once('Loginmoda.php');
class Loginconp extends Loginmoda
{
	protected $result;
	function __construct()
	{
		parent::__construct();
		
	}
	function control_view($user,$pass)
	{
		$this->result = $this->db->query(parent::select_user($user,$pass));
		if(!$this->result)
		{
			die("Error running the Query .[".$this->db->error."]");
		}
	}
}