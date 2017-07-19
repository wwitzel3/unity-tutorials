#pragma strict

public var player: GameObject;
private var offset: Vector3;


function Start () {
	offset = transform.position - player.transform.position;
}

// Garuanteed to run after all items have been processed.
function LateUpdate () {
	transform.position = player.transform.position + offset;
}
