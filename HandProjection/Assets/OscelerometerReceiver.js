public var min : float = 0;
public var max : float = 1024;
public var smoothing : float=1;
public var targetPosition : float;
public var zoom : float = 1;
public var offset : float = 0;
function Start () {

}

function Update () {
	var RotGradiant : float = - targetPosition * Mathf.PI / 180;
	var targetPos : Vector3 = new Vector3(Mathf.Sin(RotGradiant+offset)*zoom,0,Mathf.Cos(RotGradiant+offset)*zoom);
	Debug.Log("Rotation is " + targetPosition);
	transform.position = Vector3.Lerp(transform.position, targetPos, Time.time);
	transform.LookAt(Vector3.zero);
	if(Input.GetKey("up"))
		zoom = zoom + 0.01;
	else if(Input.GetKey("down"))
		zoom = zoom - 0.01;
	if(Input.GetKey("left"))
		offset = offset + 0.01;
	else if(Input.GetKey("right"))
		offset = offset - 0.01;
	}

function OSCMessageReceived(message : OSC.NET.OSCMessage){
	Debug.Log("I got a message! " + message.Address);
	
	if(message.Address == "/read/rotation"){
		if(message.Values.Count == 1){
			//Debug.Log("Rotation is " + message.Values[0]);
			targetPosition = Map(float.Parse(message.Values[0]), min, max, 0, 360, false);
		}
		else{
			Debug.LogError("/read/accelerometer has the wrong number of args");
		}
	}
					
}



function Map(value : float, inputMin : int, inputMax : int, outputMin : int, outputMax : int , clamp : boolean) : float 
{
	if (Mathf.Abs(inputMin - inputMax) < Mathf.Epsilon){
		//Debug.Log("Map: avoiding possible divide by zero, check inputMin and inputMax");
		return outputMin;
	} else {
		var outVal = (value/1023 * 360);	
		if( clamp ){
			if(outputMax < outputMin){
				if( outVal < outputMax )outVal = outputMax;
				else if( outVal > outputMin )outVal = outputMin;
			}else{
				if( outVal > outputMax )outVal = outputMax;
				else if( outVal < outputMin )outVal = outputMin;
			}
		}
		return outVal;
	}
}
	