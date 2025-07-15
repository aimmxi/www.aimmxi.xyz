---
title: "HVS/1"
layout: "project"
category: "misc"
abstract: "A retro TV themed, functional case for a Raspberry Pi Pico."
datestr: "2024-02"
tags:
  - Electronics
  - Modelling
showcase: "image"
---

### Introduction
There is something about vintage tech that fascinates people, including myself. It was an era where technology meant magic and was thought to have no bounds. In the 80s, getting some electronic gadget meant being able to listen to music wherever you wanted, watching shows and movies whenever you wanted, doing things in a more productive way...

It was a different era and it is quite hard to put the finger exactly on what is so captivating about it. However, one of the most appealing characteristics of old tech is for sure it's aesthetic. Despite everything being minimalistic, square, beige or otherwise boring, it stands out and has character without being flashy.

{{< 2-centered-img-caption 
	"amiga.jpg" "<a href='https://www.theoldcomputer.com/roms/index.php?folder=Commodore/Amiga/ROMs/Kickstart'>Commodore Amiga</a>"
	"ferguson.jpg" "<a href='https://www.reddit.com/r/crtgaming/comments/10tprn6/1980s_smart_tv/'>Ferguson TX Movie Star</a>" >}}

A particularly quirky design is that of Cathode Ray Tube displays, also known as CRTs. These types of displays were pretty much the rule and state of the art up until the year 2000 and, for many, are an icon of the retro theme.

I have always wanted to own a CRT TV but never had the space to keep it, so why not make a smaller one?

### Brainstorming
I did not plan to make a CRT design from scratch, I wanted something that already looked good and just needed to be modeled and adapted. There are plenty of different CRT models and designs, but I ended up choosing the Hitachi CT series, more precisely the CT 1342 or 1302. They all looked particularly cool and woodgrain is something that I wanted to achieve on the replica as well.

{{< centered-img-caption 
	"ct1302.jpg" "<a href='https://www.intervideo.co/hitachi-ct1302-13-crt-television/'>Hitachi CT 1302</a>" >}}

Aside from making it small, I wanted to make it more than a regular CRT TV set with just analog inputs. I thought about fitting a small computer inside that could play back video on the go or run some lightweight graphical applications (Mainly xscreensaver), so I chose the Raspberry Pi Zero 2W, which is a really simple SBC that can run Raspberry Pi OS and is meant for embedded devices and IoT applications.

### Bill of Materials

<table class="center f16">
	<tr class="f20 row-b">
		<th class="bom-header">Item</th>
		<th class="bom-header">Qty.</th>
		<th class="bom-header">Price/Unit (EUR)</th>
		<th class="bom-header">Total</th>
	</tr>
	<tr class="row-a">
		<td class="bom-item"><a href="https://aliexpress.com/item/1005007982832720.html">Raspberry Pi Zero 2W + GPIO pin headers</a></td>
		<td class="bom-qty">1</td>
		<td class="bom-ppu">26,28</td>
		<td class="bom-total">26,28</td>
	</tr>
	<tr class="row-b">
		<td class="bom-item"><a href="https://aliexpress.com/item/1005005864182829.html">3.5 Touch sensitive LCD display</a></td>
		<td class="bom-qty">1</td>
		<td class="bom-ppu">9,24</td>
		<td class="bom-total">9,24</td>
	</tr>
	<tr class="row-a">
		<td class="bom-item"><a href="https://aliexpress.com/item/1005005647760458.html">T6845-C (1 Unit, USB-C)</a></td>
		<td class="bom-qty">1</td>
		<td class="bom-ppu">1,21</td>
		<td class="bom-total">1,21</td>
	</tr>
	<tr class="row-a">
		<td class="bom-item"><a href="https://aliexpress.com/item/1005006881432519.html">Toggle switch (10 Units, ON ON)</a></td>
		<td class="bom-qty">1</td>
		<td class="bom-ppu">2,67</td>
		<td class="bom-total">2,67</td>
	</tr>
	<tr class="row-a">
		<td class="bom-item"><a href="https://www.aliexpress.com/item/1005006925463408.html">M3 Bolt and nut set (480 Units)</a></td>
		<td class="bom-qty">1</td>
		<td class="bom-ppu">6,92</td>
		<td class="bom-total">6,92</td>
	</tr>
	<tr class="row-b">
		<td class="bom-item"><a href="https://aliexpress.com/item/1005004336218242.html">24/26 AWG solid core wire (5m)</a></td>
		<td class="bom-qty">4</td>
		<td class="bom-ppu">2,11</td>
		<td class="bom-total">8,44</td>
	</tr>
	<tr class="row-a">
		<td class="bom-item"><a href="https://aliexpress.com/item/1005008149761394.html">18650 3.7V 3500mAh battery (2 Units)</a></td>
		<td class="bom-qty">1</td>
		<td class="bom-ppu">10,38</td>
		<td class="bom-total">10,38</td>
	</tr>
	<tr class="row-a">
		<td></td>
		<td></td>
		<td class="bom-ppu">Total:</td>
		<td class="bom-total">65,14</td>
	</tr>
</table>


### Implementation
#### Modelling
First, I got the headers soldered to the Raspberry Pi and fitted the 3.5 inch screen to take some measurements. The size of the model would be dictated mainly by the dimensions of the display; the rest of the electronics are not as bulky and can be fitted inside more easily.

Once the measures were taken, I set out to model a replica on Blender. The final result is composed of 3 parts, a front face, a back plate and a bottom that would have to be glued and that would serve as extra support.

{{< centered-img "render.jpg">}}

All the parts were glued and dremeled as needed. Everything was put together once to test how the final model would look and once all adjustments had been made, I moved on to the next part.

{{< centered-img "fit.jpg">}}


#### Painting
To make it look more like the real thing, some color was needed. I used acrylic to paint the outer surface of the TV, trying to mimic woodgrain and plastic colors as well as possible. To avoid accidentally mixing colors i used masking tape to cover parts that I did not want painted.

{{< centered-img "masking.jpg">}}

The acrylic paint was applied directly to the plastic surface of the model, which turns out to be quite bad in terms of adherence. Since then, I have painted some other prints with acrylic and using some primer for plastics promotes better adherence and, overall, yields a better finish than painting raw plastic.

#### Electronics
I set up the Raspberry Pi with Raspberry Pi OS and configured the kernel to use the 3.5" GPIO screen as a main display. Some SPI overclocking can be made in order to get some better performance out of the screen in terms of colors, refresh rate and resolution. I gave it a quick tweak without reaching the point where the colors start getting distorted.

Once the Raspberry Pi and screen were working, I moved on to the power supply section and charging circuits. The Raspberry Pi takes 5V from an micro USB port to power both itself and the screen. I took advantage of the T6845-C to provide both 5V to the Raspberry and charge a 18650 3.7V battery that would power the TV when no charger was available. I also used a barrel jack to serve as a 5V in to charge the display. In retrospect I should have used the micro USB input provided with the T6845-C, but the barrel jack is what I went with. I made an micro USB cable to connect the T6845-C board to the Raspberry Pi.

{{< centered-img "wiring.jpg">}}

With everything hooked together, I added a power switch and a potentiometer for future use (Perhaps for a potential speaker). After verifying everything worked fine and that the battery was charging, I fitted everything inside of the case and screwed it all together.

### Results
Here is the final result with xscreensaver running:

{{< 2-centered-img-caption 
	"final1.jpg" ""
	"final2.jpg" "" >}}

<div class="flex flex-hcenter">
	<video src="demo.webm" controls></video>
</div>

### Links and files
{{< links/model "Case Model:" "HVS-1" "https://www.thingiverse.com/thing:7015122" >}}




