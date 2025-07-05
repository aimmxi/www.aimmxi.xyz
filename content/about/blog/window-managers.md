---
title: "Why window managers are not always the way"
date: 2024-09-30
layout: "blog-post"
tag: "Article"
---

### What about Window Managers?
Some people spend lots of time using computers, whether it is for education, development or business purposes; whatever the case may be, if you spend a lot of time in front of a monitor, chances are that you are interested in doing more work in less time. We are talking about efficiency, of course.

Modern computers have greatly sped up several processes that old ones were pedantic at, but there is still room for improvement. For instance, creating a folder structure or managing and renaming files according to a scheme is rather quick compared to how it used to be back in 1990. Although such tasks often take negligible amounts of time, if you do it very often it adds up and starts being considerable.

There are many optimizations you can take as a user, with various degrees of expertise required. At the end of the day we want to spend less time doing "paperwork" and automatable tasks that are not related with the actual work. Here is where a Window Manager comes in.

For clarification, this article mainly discusses Window Managers and the ecosystem of software that is frequently used with them, but most of what is said can also be applied to minimalist software.

### What even is a Window Manager?
If you come from a Microsoft or Apple ecosystem you will most likely not be familiar with what a Window Manager is and what purpose it serves, but if you have ever done some research into  into customization, time optimization or computers in general you might know that GNU/Linux is an alternative operating system to Windows or macOS that is used commonly in servers, academia and by some power users.
					
GNU/Linux is an open source operating system with a set of utilities the community is free to modify. It is very customizable because lots of developers around the globe have made lots of software for it. Unlike Windows or macOS, you are not limited by the default desktop environment or graphical shell, you can pick the one you like the most, as there are several choices according to your liking (As a matter of fact, there is no such thing as default desktop environment for all GNU/Linux distributions).

We can classify such "graphical shells" in two large categories, Desktop Environments or Window Managers (DE and WM respectively from now on): 

A DE is a complete graphical shell that first and foremost prioritizes being intuitive and usable from the beginning, with little knowledge about it. For instance, the Windows graphical shell would be a DE in the GNU/Linux world. It is meant to be used by a wide range of users with different skill levels and it must be usable first and foremost, even if speed is compromised as a result.

A WM per se is a barebones piece of software that handles windows. To make a complete and usable graphical shell, the user is required to put together a few more programs that handle other tasks like input, keybinds, application launching, notifications and so on. A WM based desktop prioritizes customizability and, as a side effect, productivity if the user customizes it to it's liking.

I have used both DEs and WMs in the past and after a period of using a custom environment composed of BSPWM, Polybar, Rofi, SXHKD, Picom, vifm and other minimalist software, I have given up on the idea of using a WM because the shortcomings outweigh the supposed features.

### The things Window Managers are good at
A WM based desktop is inherently much more customizable than a DE because of it's design (Or rather, lack of design). At it's core, it is just a bunch of small programs, the main one being the WM itself. The good thing about this is that the user is free to pick from a varied list of components and, also, said components are very customizable by themselves.

As an example, for the WM itself, you can pick i3, BSPWM, DWM, Hyprland and many others. For a status bar (the equivalent of a taskbar) you can pick Lemonbar, Polybar, Candybar, yada yada yada. Once you have picked your components, you can highly customize them, often by editing some configuration file. If you dedicate some time, you can end with a desktop experience made to your liking, with features that benefit your workflow such as custom keybinds or better automatic window placement with tiling.

This design fits the UNIX philosophy of "do one thing and do it well" and by combining many programs that do their own thing well you can achieve massive improvements in speed and effectiveness, or at least in paper.

As a bit of a tangent, there is also a slew of minimalist software that follows this philosophy and sort of further improves the experience and automation capabilities. [Suckless'](https://suckless.org/)> software is probably the most famous amongst Linux enthusiasts. As a side effect of such minimalism, WMs are outstanding at performance on old or underpowered hardware.

{{< 2-centered-img-caption 
    "./bspwm-rice.jpg" "BSPWM rice from <a href='https://www.reddit.com/r/unixporn/comments/orhmk7/bspwm_misty_mountains_feat_onedark/'>u/R1ce_Man on Reddit</a>" 
    "./kde-rice.jpg" "My current KDE Plasma 6 rice.">}}

### The things Window Managers are not good at
As previously mentioned, a WM is just a component; in order to get a fully functional desktop interface, the user will need to research, configure and troubleshoot a few more programs. Said programs need to cooperate. For instance, a hotkey daemon needs to call the specific commands that another program offers. This sacrifices portability as changing a piece often requires modifying several other components.

Even though there are configuration packs and scripts made by other users (dotfiles), chances are that you will need to spend some time fine tuning the environment for your specific use case and workflow. This is time consuming, as it still requires learning about a certain software's quirks and usage.

If your workflow is not clearly defined, say, you need to use different software from time to time or you need to add some new component, it will take time to set the changes up. This is really impractical specially if you have very little time to dedicate to customization and need to make a change as soon as possible.

All of the previous can be summed up by saying that you sacrifice practicality and portability for customization. With WMs you  basically become the maintainer of the environment. Also, the fact that WMs are so barebones means that some quality of life features will be missing and it will be up to you to add them. Sometimes, the time required to set up some feature can outweigh the time saved by using it.

### The reason I have dropped Window Managers
Back in the COVID pandemic I had heaps of spare time and wanted to learn more about the Linux desktop and how it worked. WMs seemed like a great idea because of how customizable and time-saving people made them look. After trying and using BSPWM with the aforementioned software over a year, it became clearly apparent that basic tasks that were out of the ordinary required changes that took time (Setting up bluetooth for the first time, connecting to public WiFi, using a new piece of software that does not play well with the window manager...).

I started university and faced a lack of free time mixed with the necessity to use new software. The supposed time saving WMs offered was negated by all the time I had to spend adapting my configuration, as nothing worked as expected because it was minimal and designed for a particular use case.

Since then, I returned to KDE Plasma and have been using it happily for a couple of years as the date of writing this article. Sure, Plasma is bloated, but it is also feature packed, practical, very customizable and it looks sick with minimal time investments. I am able to change things on the fly without headaches, everything works out of the box and, besides, with modern computers performance impact is not a big deal. My old Thinkpad X230 with a 3rd gen i5 could handle it without hiccups and, unless you constantly face high RAM usage, the slightly higher base RAM consumption is not a big deal.

In conclusion, Window Managers are a good choice if (1.) you want to learn about the inner workings of a graphical shell or (2.) have lots free time and a well defined workflow with little changes over time and the will to get acquainted with various bespoke configuration files. Otherwise, Window Managers are a meme as the supposed time saving they offer when you use them is outweighed by making them actually work or adapting them to changes.
