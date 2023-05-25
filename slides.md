---
theme: bricks 
background: /img/intro-background.avif
class: text-center
highlighter: shiki
lineNumbers: false
info: |
drawings:
  persist: false
# transition: slide-left
# css: unocss
colorSchema: 'light'
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

(Image of both chips)

<!-- 
* Both are common names in embedded
* Arduino mostly used in hobbyist space
 -->

---

# What About Raspberry Pi?

(Image of a Raspberry Pi board)

<!-- 
* Linux and Windows not real time
* Timings critical to be deterministic
-->

---

# Peripherals

(Images of different peripherals)

<!--
* Microcontrollers not usually useful on their own
* Direct connections to other hardware make them useful
-->

---

# Beyond the Hobbyist

(Image of bread board and circuit board)

<!--
* Prototyped on breadboards, then usually integrated into PCBs
-->

---

# Mainstream Embedded Programming Languages

* C and C++ are the gold standard
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

# Blinking an LED

(Screenshot of code to blink the onboard LED)

---

# Blinking an LED

(gif showing the LED blinking)

---

# Inputs and Outputs

(Image of a meadow pinout diagram)

---

# Simple I/O Example

(Screenshot of code with input and LED)

---

# Simple I/O Example

(Gif of pressing a button to trigger LED)

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

![spi](/img/SPI_three_slaves.png)