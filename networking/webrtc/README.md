# WebRTC

WebRTC is a protocol to add real-time capabilities to web apps. Is the technology behind chats, video & audio conferencing applications and screen sharing.

Basically it works like this:

1. A first peer creates an "offer" to a second peer asking to connect to it.
2. This will create a STP object (Session Description Protocol) which contains information describing the peer-to-peer connection like video-audio codecs, timing and so on.
3. This data will be read by a "Signaling Server" which answers the call ,which is achieved by creating an STP answer and writing it to the server.
4. &#x20;The SS is usually a third-party service.&#x20;
5. But here we come to the tricky part: most servers use NAT and Firewalls to block their access, plus IP addresses changes constantly thanks to the Network's Translate.&#x20;
6. Locally we have the ICE (Interactive Connectivity Establishment) which helps clients to coordinate the discovery of the public facing IP addresses, which creates a IP list of ICE candidates. In the background, WebRTC will make this by making a series of requests to a STUN Server.&#x20;
7. There many stun-free-servers and you don't need to set up anything about this, because for that reason WebRTC was created. And that's it!

