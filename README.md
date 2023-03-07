Raycasting

1) Generate rays from a source from 0° to 360°  and generate a boundary.

2) In case a ray intersects a boundary, only render that ray till the point of intersection using [line-line intersection formula](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection), else till infinity.

![1](https://user-images.githubusercontent.com/53178739/223378758-7a58476e-b330-44e4-9a97-1ea368d9b0a7.jpg)

3) Make the source move with your cursor using an event listener.

https://user-images.githubusercontent.com/53178739/223379910-69e162c3-d5b6-4a83-a955-9e2cd9c0cc23.mp4



