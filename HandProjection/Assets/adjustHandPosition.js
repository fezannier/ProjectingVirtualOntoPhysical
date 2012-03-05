function Update () {
	if(Input.GetKey("q"))
		transform.position.x += 0.1;
	else if(Input.GetKey("w"))
		transform.position.x -= 0.1;
	else if(Input.GetKey("a"))
		transform.position.y += 0.1;
	else if(Input.GetKey("s"))
		transform.position.y -= 0.1;
	else if(Input.GetKey("z"))
		transform.position.z += 0.1;
	else if(Input.GetKey("x"))
		transform.position.z -= 0.1;
}