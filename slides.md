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
css: unocss
colorSchema: 'dark'
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
layout: two-cols
---

# Motor Example
&nbsp;

<video src="/e04demo.mp4" type="video/mp4" autoplay loop></video>

::right::
<br />
<img src="/e04code.png" />

---
layout: two-cols
---

# Seven Segment Displays
&nbsp;

<img src="/e05code-1.png" style="max-height:200px" />
<video src="/e05demo.mp4" type="video/mp4" autoplay loop></video>

::right::
<img src="/e05code-2.png" style="max-height:500px" />

---
layout: two-cols
---

# Running Out of I/O Ports

* What if we want more seven segment displays?
* Peripherals to the rescue!

::right::
![instant pot](/InstantPot.jpg)

---
layout: two-cols
---

# How To Communicate With A Peripheral

* Send one bit at a time
* How do we communicate two bits with the same value?

::right::
![communication](/communication-1.png)

---
layout: two-cols
---

# How To Communicate With A Peripheral

* Latch pin signals to peripheral it can read
* Peripheral can only trust the value when latch is active
* How do we know when the peripheral has read the bit?
* How do we read a value?

::right::
![communication](/communication-2.png)

---
layout: two-cols
---

# How To Communicate With A Peripheral

* Slow and complicated
* Input and output latches not necessarily syncrhonized
* No clear signal on either end to start
* Not scalable to more peripherals

::right::
![communication](/communication-3.png)

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
* Each peripheral has a unique address!
  * Controller must know the correct address
* No simultaneous read and write
* Slower than SPI


::right::
![i2c](/I2C-Block-Diagram.jpg)

![i2c frames](/i2c-frames.jpg)

---
layout: two-cols
---

# CAN Communication Bus

* Controller Area Network
* Wiring setup used in cars
* Any number of controllers

::right::
<img src="/can-bus.png" />

<br />
<img src="/can-bus-frames.png" />

---

# Expanding I/O Example

---

# 14 Segment Display

--- 

# Weather Display

---
layout: two-cols
---

# Glade 
&nbsp;

&#128505; Game Loop <br />
&#128505; Renderer <br />
&#9746; Scene Graph <br />
&#9744; Camera <br />
&#9746; Animation <br />
&#9746; Physics <br />
&#9746; Input Manager <br />
&#9744; Audio Engine <br />

<br />
&#128505; Exists today <br />
&#9746; Partially implemented

::right::
![glade logo](/glade-logo.png)

<img src="/glade-demo-1.png" style="max-height:200px" />

--- 

# Use Cases
&nbsp;

<img src="/glade-use-cases.png" style="max-height:400px" />

---

# Space Invaders Demo
&nbsp;

<video src="/Glade Invade Scoreboard (2x speed).mp4" autoplay loop style="max-height:400px"></video>

---
layout: two-cols
---

# API-First Design
&nbsp;

<img src="/composition.png" />

::right::
<img src="/scene-composition.png" />

---

# Performance In The Beginning

--- 
layout: two-cols
---

# Profiling
&nbsp;

<img src="/profiling-example.png" style="max-height:400px" />

::right::
# &nbsp;
&nbsp;

<img src="/profiling-results.png" />

---

# Initial Profiling Results

* Frame Update - 1.4ms
* Draw Sprites - 232ms
* Scale - 104ms
* Push To Display - 154ms
* **Total Time** - 493ms

---

# Unexpected Casts

---

# Extra Logic In Getters

---

# Cache Friendlyness

---

# Generation 0 Garbage Collection

---

# More Efficient Sprite Drawing

---

# What Now?

---

# Layers

---

# SPI Efficiency

---

# MCP Pin State Performance

---

# Performance Today

---

# Performance Today

---

# Next Steps

---

# What About A GPU?



