public var RotDegree: float = 0;

function Update () {
	var RotGradiant : float = RotDegree * Mathf.PI / 180;
	var targetPos : Vector3 = new Vector3(Mathf.Sin(RotGradiant),0,Mathf.Cos(RotGradiant));
	transform.position = Vector3.Lerp(transform.position, targetPos, Time.time);
	//Debug.Log(transform.rotation.y); 
	//var rotCamera : Vector3 = new Vector3(0,Camera.main.transform.rotation.y + (RotGradiant+Mathf.PI),0);
	//Camera.main.transform.Rotate(Vector3.Lerp(Camera.main.transform.rotation,Vector3(0,RotGradiant,0), Time.time));
	transform.LookAt(Vector3.zero);
}