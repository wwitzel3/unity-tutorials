#pragma strict


function Update () {
    var rotation : Vector3 = Vector3(15, 30, 45);
	transform.Rotate(rotation * Time.deltaTime);
}