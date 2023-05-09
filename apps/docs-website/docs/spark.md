---
sidebar_position: 1
slug: spark
title: Spark
authors:
    - name: Jerry Jeong
      title: Jerry
tags: [Web Server, OpenCV, IoT, Python, C]
---

## Overview

Spark project was a coursework project that I participated during my study of UX design in a group of 5. It was about a social interaction enhancement device, designed to break the social barrier between strangers during a social event. It's intended to facilitates the natural discovery process between individuals and groups by establishing common topics via a shared questionnaire, LED lights and vibrating necklace. The group also produced a prototype that was demonstrated during faculty exhibit to fellow students and guests.

<iframe src="https://www.youtube.com/embed/QewGZPsnylU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## The Problem

Many people find social interaction with strangers challenging, although they know its importance. This results in significant difficulties in building connections with others in social events, where primary goal is to build connections with others. Consequently, they find it difficult to actively approach people, especially when they don't know much about their counterpart. However, research found that social interaction with strangers is often much better than what people expect.

## The Design

Conversation is the most common form of interaction between individuals during social events, hence the device was aimed to assist its users with initiating new conversations. Conversation is an exploratory process for each participating parties, allowing them to obtain more information, express themselves and build up the image of others. While what's considered as 'successful conversation' would differ between individuals, it is difficult to determine if the conversation will be successful when there is no information about the counterpart. Therefore, we desiged a device that gives its users additional context about others around them, allowing them to have more confidence with the conversation they are about to initiate hence feel less challenging when they do so.

Spark asks the users to answer a questionnaire upon entering a social networking venue. The responses entered by the user are then displayed on a LED hat, which is visible to other users. The user is also given a necklace that can vibrate, which has different vibration pattern depending on the questionnaire response of the person they are looking at. The necklace vibrates more frequently when they have similar responses, allowing the users to identify people who are similar witht them.

In addition, the hat on the user's head has LED lights, and the colour of each light represents a different kind of interest. However, the user does not know what kind of interest each colour represents. To discover the meaning of LEDs the user must have a conversation with others in the event, who would also be interested in discovering them. By allowing everyone to participate in a guessing game, Spark gives everyone a common conversation topic as well as motivating them to start conversations with others.

“Spark” asks the users to enter their basic information and topics of interests before entering the social networking venue. The user is then given a LED hat and necklace, which are connected to the central control system.The necklace notifies users about the similarity between them and others using vibration. When a user looks at another person, the necklace will vibrate differently depending on the number of interests they share with each other. This vibration was inspired by fastening heartbeat from excitement and is intended to give the user additional information about the person they are looking at.

The LED hat has number of different LEDs that represent questionnaire responses of the wearer. By having this information visible, the questionnaire becomes a great conversation prop for users to easily start conversation with strangers, knowing some common topics they can talk about. The sequence can be randomised to further enhance this feature, allowing users to play a guessing game by talking to each other about their answers.

## The Prototype

To demonstrate core concepts of the Spark device, a functional prototype was produced. The prototype consists of the necklace, the hat and main application to control both devices. The devices were constructed using off-the-shelf materials and were connected to each other via WIFI. It was built to imitate the use case during a social event with generic questionnaire. The user location and directions were calculated using fiducial markers and camera.

### Main system

The main system is what does most of the processing and communicate the processed data to LED hat and necklace. It was written using python and hosted on a laptop, utilising OpenCV to calculate who each user is facing. The main system could be broken down into UI, server, and position calculator.

#### UI

A questionnaire UI was built as part of the application, so the questionnaire response from users could be easily used. The UI was made using Python’s TKinter, which consisted of generic questions such as ‘pineapple on pizza?’. The responses were saved with ID that can be configured by this UI, which is then used to determine the colours on the hat and calculate vibration strength of the necklace when the user is facing others, or when others are facing this user.

#### Locator

Locator detects who each user is looking at using AruCo fiducial marker, webcam and OpenCV for python. Each marker’s 3D location and orientation are calculated from the marker, which are then mapped in 2D space to determine who each user is facing. The sampling frequency and mapping was tuned to stabilise the detection.

#### Server

The communication between the device and main system was handled by python web server and web sockets in a local network. The server responded to incoming HTTP requests by starting a handling thread with every request, then goes back to busy waiting state. The requests are handled by either sending the vibration frequency or LED sequence of a specific user, depending on the information included as part of the request.

### LED Hat

The main functionality of LED hat was to query the main system about colour sequence, then displaying those colours using Neopixel LED strip. Each hat had static ID used to retrieve corresponding user’s LED sequence from main system via WIFI. ‘ESP-32 thing plus’ development board was used as the central processor due to its wireless connectivity. Arduino core was used to simplify development process. Fiducial markers were also positioned on top of the hats, which were used to detect who each user is facing.

// photo of LED hat

### Necklace

Necklace of the prototype consists of vibration motor and microcontroller, and its only job is to vibrate the motor based on signal reponse from main system. For the prototype, vibration frequeny was altered based on shared interests while the vibration strength was kept as strong as possible. The necklace queries the main system about the vibration frequency update 4 times per seconds then updates the vibration frequency if there is a change.

## The Exhibit

Final version of the prototype was demonstrated during the Physical Computing Exhibit 2022. During the exhibit, the team positioned webcam on top of the venue and allowed guests to try Spark system with demo questionnaire.

The exhibit was successful, and we successfully presented our idea to the guests and confirmed the effectiveness of the device in social event context. As we were open to feedbacks, some guests suggested different use cases of the project that the team didn't consider, allowing us to discuss how the idea could be iterated.

## My Thoughts

It was an interesting project because it didn't stop at the design phase, but a physcial prototype had to be developed and demonstrated. Team organisation and workload division was the biggest challenge, because the team had both internal and external students. It was very challenging for external students to contribute to physical development of the prototype because they were in different country.

### Challenges

-   Workload division between internal and external team members, because we had to produce physical prototype.
-   Balance of implementation and design. The team failed to spend enough resource in the design.

### Could've done better

-   I could've paid more attention to design process, rather than digging into implementation.
-   I asked different team members to write code for different components, but they were not given enough information to make them actually work with each other.

### What I enjoyed

-   Hanging around the lab talking/helping other people, making friends.
-   Touching some hardware and implementing something reasonably challenging.

## Literatures

-   J. Schroeder, D. Lyons, and N. Epley, “Hello, Stranger? Pleasant Conversations Are Preceded by Concerns About Starting One,”(2021).
-   P. Mandeno and W. L. Baxter, “Six principles for the design of better networking events,” (2021).
-   J.Y Williams, Why You're Afraid Of Networking (And What To Do About It), Forbes, March 2020.
-   R. S. Albert and T. R. Brigante, “The Psychology of Friendship Relations: Social Factors,”(1962)
-   G. M. Sandstrom and E. J. Boothby, “Why do people avoid talking to strangers? A mini meta-analysis of predicted fears and actual experiences talking to a stranger,”(2021).
-   Epley, N., Kardas, M., Zhao, X., Atir, S., & Schroeder, J. “Undersociality: miscalibrated social cognition can inhibit social connection”(2022).
