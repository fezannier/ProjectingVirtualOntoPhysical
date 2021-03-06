import processing.serial.*;
import oscP5.*;
import netP5.*;

OscP5 oscP5;
Serial myPort;
NetAddress myRemoteLocation;

int value;
String inputString;
 
void setup() 
{
  //size(200, 200);
  String portName = Serial.list()[0];
  myPort = new Serial(this, portName, 9600);
  oscP5 = new OscP5(this, 12000);
  myRemoteLocation = new NetAddress("127.0.0.1", 12000);
  myPort.bufferUntil('\n');
}

void draw() {
  OscMessage myMessage = new OscMessage("/read/rotation");
   println("value = " + value);
   if(inputString!=null)
   {
     myMessage.add(inputString);
     oscP5.send(myMessage, myRemoteLocation);
   }
}

void serialEvent(Serial thePort) {
  if (thePort.available() > 0) {
    inputString = thePort.readStringUntil('\n');
    if (inputString != null) {
      inputString = inputString.replace("\n", " ");
      println("string = " + inputString);
      value = int(inputString);
   }
  }
}
