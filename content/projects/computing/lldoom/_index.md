---
title: "loselose-doom"
layout: "project"
category: "computing"
abstract: "A fork of dsda-doom inspired by Lose/Lose and a recreation of DOOM/DOOM from Vargskelethor's HML stream."
datestr: "2024-05"
tags:
  - Software
showcase: "video"
---

### A brief introduction
Back in our sophomore year, me and my mates were presented with this program called _TkGate_ in our computer architecture class. TkGate is a digital circuits simulator that allows to place logic components and functional units in a canvas and observe how they react to certain inputs; more particularly, we used it to study and implement simple and segmented processors. It was pretty fun and didactic, but there was one small issue with this simulator, it was written ages ago in an ancient version of the TK toolkit.

It was old, buggy, intended for much smaller screens and quite often unstable and prone to crashes. It was handed to us in the form of a Xubuntu 19 virtual machine, as it did not play nice with more modern Linux distros. As an anecdote, I remember that to hook two lines together, you had to grab exactly the end of one of the lines, a damn near impossible task with cheap old mice and 1080p screens (This program was made when 4:3, low res screens were common). If you grabbed any part of the cable but the end, it would stretch it but not connect to wherever you wanted, leading to all sorts of weird behavior.

We used it for quite a while and it became a joke amongst my group of friends. At some point we had an exam, we passed and we were done with it. We no longer needed the VM, but it was a shame to simply delete it as we have had some memorable moments with it.

### Lose/Lose
Let me tell you about the game Lose/Lose. For the people that have never heard about it, Lose/Lose is a Space Invaders-like game with a simple premise: you lose in one sense or another no matter what you do. Not taking action implies getting killed by the aliens and therefore losing the game, but killing aliens results in another kind of punishment. Once the game is run, the player is put in a lose/lose situation.

The original game, as stated on it's [official website](http://loselose.net/), proposes a deep philosophical question about the moral consequences of an action and actual lose/lose situations, however we are going to focus more on the punishment itself; in particular the _"It deletes files as a punishment"_ part that Lose/Lose does.
			
### Boredom has consequences
Back to university. We were pretty much done with the important classes and exams and summer was near. I do not remember all the details, but it was a boring day and we were in some non important lecture, not paying attention and discussing weird Linux facts. At some point Hannah Montana Linux came up and I showed my friends [Joel's stream](https://www.youtube.com/watch?v=nnzCvfwXRpk) about it. We took a peek at the highlights and had a good laugh, but they were specially interested by the end of the stream, where a Doom  mod called Lose/Lose Doom destroys the virtual machine. It all clicked together.

I have been a Doom fan for a very long time and my friends often regard me as so. When we saw the clip, we knew that we had to finish the year with a VM demolition, with Lose/Lose Doom.

There was only one problem, Lose/Lose Doom was nowhere to be found and that Hannah Montana VM was not available either, as it was made for Joel specifically and contained some ROMs and other pieces of software that were not meant for open distribution. The joke was too good to be leave behind, so I sat down and did it myself.

### Implementation
I decided to fork DSDA-Doom because it is a modern yet simple enough source port to actually modify. GZDoom is too complex and older source ports are too clunky.

The implementation is rather simple: When killing an enemy, P_KillMobj() from "p_inter.c" is called to handle that an enemy has been killed. An additional function called "remove_random()" contained inside of "loselose-doom.c" is called. It picks a random file from the directory structure and deletes it, storing the path in it's argument and printing it the message console: 

```
static void P_KillMobj(mobj_t *source, mobj_t *target)
{
  	...
	// aimmxi 05/2024: A random file gets deleted
  	char path[200];
  	remove_random(path);
  	dsda_AddPlayerMessage(path,global_player);
	...
}
```
			

The remove_random() function is slightly more complicated. In a nutshell, a random starting directory from a predefined list ("/", "/usr/bin"...) and a maximum depth get picked. Starting from that directory, all of it's children are checked and another random directory gets picked and entered. This process is repeated until the maximum depth has been exceeded or there are no more directories to enter. Then, a random file from that directory is picked and deleted.

The algorithm relies a lot on IO and is pretty slow if P_KillMobj gets called a lot, but it was meant as a joke more than anything else and I invested very little time into researching efficient and proper ways to do it. There is also a slight bias towards files located closer to the starting directories because of how the algorithm traverses through the filesystem, but for the use case of destroying a machine, this is actually quite beneficial as executables and other important files tend to be closer to root. It also relies on the Unix file hierarchy, so this is in no way compatible with Windows.

I tested it on a sacrificial VM and it worked flawlessly. It was time to crush some actual VMs.
			
### Results
The weekend arrived and everything was set, we had finished all our exams and we were mostly free at this point. Part of our group of friends were non-local and were only with us during the academic year, so we organized barbecues before the holidays to have some fun time before they left.

We played a quick non-formal football match, had heaps of fun and laughs, had dinner, and it was time for the carnage. We launched Doom 2 on the tuned DSDA fork and after 3 minutes of monster slaughter and some familiar filenames popping up on the screen it was all over.

We called it a success and we gave the TkGate VM good riddance.


### Links
If you want to nuke some VMs in a weird way that very few people would find amusing, you can check out the link below and play loselose-doom yourself in a responsible way. It is released under the same GPLv2 license as DSDA, so feel free to fork it.


{{< links/github "https://github.com/aimmxi/loselose-doom" >}}