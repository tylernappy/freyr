#define D2
#define D3

// 10 seconds
unsigned long t_end;
unsigned long watering_duration = 10000; 

int waterPlant(String command);

void setup() {
    pinMode(D2, OUTPUT);
    pinMode(D3, OUTPUT);

    Particle.function("function", waterPlant);
}

void loop() {
    delay(1);
}

int waterPlant(String command) {
    digitalWrite(D2, HIGH);
    digitalWrite(D3, HIGH);

    t_end = millis() + watering_duration;
    while (millis() < t_end) {
        delay(1);
    }

    digitalWrite(D2, LOW);
    digitalWrite(D3, LOW);
    
    return 1;
}