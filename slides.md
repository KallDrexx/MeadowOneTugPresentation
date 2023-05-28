---
theme: seriph 
background: /intro-background.avif
class: text-center
highlighter: shiki
lineNumbers: false
info: |
drawings:
  persist: false
# transition: slide-left
# css: unocss
# colorSchema: 'light'
title: .Net For Embedded Development
---

# .Net For Embedded Development

---

# Who Am I?

## Matthew Shapiro

* Senior Software Engineer at Microsoft
* Works on high scale, real-time media systems.
* Built open-source media libraries and servers.
* Passionate about dev workflows and tooling.

---

# What Is Embedded Development?

* Discipline of software development focused on low level hardware
* Direct integration with hardware
* Usually lower specs than you are used to
* Single function systems

---

# Arduino and ESP32

* Arduiono originally created for teaching in 2005
* Low cost and simple tooling stack
* Mostly used in hobbyist space
* Arduinos usually 16Mhz, 2KB RAM
* ESP32 arrived in 2016
* ARM CPU 160Mhz+, 320KB+ RAM
* Wifi/Bluetooth
* Can be integrated easily in custom PCBs

---

# What About Raspberry Pi?

* 1Ghz+ CPU / 512MB - 4GB RAM
* Runs Linux
* Not easily integrated into custom hardware
* Normal operating systems are not real time

---

# Peripherals

![sensors](/sensors.jpg)

---

# Beyond the Hobbyist

![breadboard](/8bit-computer.jpg)

<!--
* Prototyped on breadboards, then usually integrated into PCBs
-->

---

# Mainstream Embedded Programming Languages

* C / C++ are the gold standard
* Python used with some chips

---

# The Meadow Microcontroller

* Supports C#
* 216Mhz, 32MB of RAM
* On board wifi and bluetooth
* Visual Studio integration
* Composable abstractions to make Embedded easy
* Over 700 drivers for popular peripherals
* Mostly open source
  * https://github.com/WildernessLabs/

---
layout: two-cols
---

# Blinking an LED

::right::
<img src="/e01code.png" class="m-49 h-49" />

---

# Blinking an LED

<video src="/e01demo.mp4" type="video/mp4" autoplay loop></video>

---
layout: two-cols
---

# Inputs and Outputs

::right::
<img src="Meadow_F7v2_Micro_Pinout.svg" class="m-49 h-49"/>

---
layout: two-cols
---

# Simple I/O Example

::right::
![code](/e02code.png)


---

# Simple I/O Example

<video src="/e02demo.mp4" type="video/mp4" autoplay loop></video>

---
layout: two-cols
---

# Simple I/O Example

::right::
![code](/e02code-2.png)

---

# Analog Example

(Code to read analog input, trigger LEDs)

---

# Analog Example

(Gif of toggling pentameter)

---

# Motor Example

(Code to control a motor based on an analog input)

---

# Motor Example

(Gif of pentameter controlling motor)

---

# Seven Segment Displays

(Code to set 7 segment pins)

---

# Seven Segment Displays

(Image of 7 segment lit up)

---

# Running Out of I/O Ports

What if we want more seven segment displays

(picture of instant pot)

Peripherals to the rescue!

---

# How To Communicate With A Peripheral

(Image of 1 wire from mcu box to meadow)

<!-- How does the other side know when to read the value? -->

---

# How To Communicate With A Peripheral

(Image above with latch pin added)

<!-- How do we know when the other side has read? -->

---

# How To Communicate With A Peripheral

(Image with complicated back and forth with acknowledgements)

<!-- This is slow and complicated for each bit -->

---

# Serial Peripheral Interface

![spi](/SPI_three_slaves.png)