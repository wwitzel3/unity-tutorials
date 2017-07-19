﻿#pragma strict

public var speed: float;
public var countText: UI.Text;
public var winText: UI.Text;

private var rb: Rigidbody;
private var count: int;


function Update () {

}

function Start () {
	rb = GetComponent.<Rigidbody>();
	count = 0;
	SetCountText();
	winText.text = "";
}

function FixedUpdate() {
	var moveHorizontal : float = Input.GetAxis("Horizontal");
	var moveVertical : float = Input.GetAxis("Vertical");

	var movement : Vector3 = Vector3(moveHorizontal, 0.0, moveVertical);
	rb.AddForce(movement * speed);
}

function OnTriggerEnter (other : Collider) {
    if (other.gameObject.CompareTag("Pick Up")) {
        other.gameObject.SetActive(false);
        count += 1;
        SetCountText();
    }
}

function SetCountText() {
    countText.text = "Count: " + count.ToString () + "/12";
    if (count >= 12) {
        winText.text = "You collected all the items in: " + Time.time.ToString () + " seconds.";
    }
}