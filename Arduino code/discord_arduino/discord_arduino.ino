#include <Sharer.h>

int discord_share;
int pin=9;

// Init Sharer and declare your function to share
void setup() {
  Sharer.init(115200); // Init Serial communication with 115200 bauds
  pinMode(pin, OUTPUT);

  // Share variables for read/write from desktop application
  Sharer_ShareVariable(int, discord_share);

}

// Run Sharer engine in the main Loop
void loop() {
  Sharer.run();



  
  if(discord_share==2)
     {
      digitalWrite(pin,HIGH);
      delay(500);
      digitalWrite(pin,LOW);
      delay(500);
     }
  if(discord_share==1)
    digitalWrite(pin,HIGH);
  if(discord_share==0)
    digitalWrite(pin,LOW);
}
