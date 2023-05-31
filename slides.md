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

&nbsp;

![sensors](/sensors.jpg)

---

# Beyond the Hobbyist

&nbsp;

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
&nbsp;

<video src="/e01demo.mp4" type="video/mp4" autoplay loop></video>

::right::
![code](/e01code.png)

---

# Inputs and Outputs
&nbsp;

<!-- ![pinout](Meadow_F7v2_Micro_Pinout.svg) -->
<img src="/Meadow_F7v2_Micro_Pinout.svg" style="max-height:80%" />

---
layout: two-cols
---

# Simple I/O Example
&nbsp;

<video src="/e02demo.mp4" type="video/mp4" autoplay loop></video>

::right::
![code](/e02code.png)


---
layout: two-cols
---

# Simple I/O Example
&nbsp;

![code](/e02code.png)

::right::

# &nbsp;
&nbsp;

![code](/e02code-2.png)

---

# Analog Vs Digital Signals
&nbsp;

<img src="/What-are-Analog-and-Digital-Signals.webp" style="max-height:80%" />

---
layout: two-cols
---

# Analog Input Example
&nbsp;

<video src="/e03demo.mp4" type="video/mp4" autoplay loop></video>

::right::
![code](/e03code.png)


---

# Motor Example

(Code to control a motor based on an analog input)

---

# Seven Segment Displays

(Code to set 7 segment pins)

---
layout: two-cols
---

# Running Out of I/O Ports

* What if we want more seven segment displays?
* Peripherals to the rescue!

::right::
![instant pot](/InstantPot.jpg)

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
layout: two-cols
---

# Serial Peripheral Interface (SPI)

* MOSI/COPI - Controller Output, Peripheral Input
  * Data to be sent to peripheral
* MISO/CIPO - Controller Input, Peripheral Output
  * Data to be received from peripheral
* CS - Chip Select
  * Specifies which peripheral to talk to
* SCLK - Clock Signal
  * Synchronizes controller and peripeherals


::right:: 
![spi](/spi_single.png)
&nbsp;

![spi_signal](/spi_signal.png)

---

# Multiple SPI Devices

&nbsp;

![spi slaves](/spi_slaves.png)

---
layout: two-cols
---


# I<sup>2</sup>C

* SDA - Serial Data Line
* SCL - Serial Clock Line
* Many controllers and peripherals with 2 wires
* Each peripheral has a unique address
  * Controller must know the correct address
* No simultaneous read and write
* Slower than SPI


::right::
![i2c](/I2C-Block-Diagram.jpg)

![i2c frames](/i2c-frames.jpg)