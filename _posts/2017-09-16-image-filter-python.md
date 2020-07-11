---
layout: post
title: "How to build amazing image filters with Python— Median filter 📷 , Sobel filter ⚫️ ⚪️"
published: true
description: Let's implement some interesting filters to the images with Python
tags: [python]
---

Nowadays, I’m starting in a new programming language : Python 🐍 . And I am pleased to share some of my knowledge about this new topic , which is image processing.
![digital image processing](https://cdn-images-1.medium.com/max/2000/1*6N1clEI8EInQ5I8MWaOUSQ.png)

## What is digital image processing

It is a set of techniques whose objective is to obtain a result with a specific application from a source image, improving certain characteristics that allow you to extract information from the image.
OK , After a short introduction about the meaning of image processing, Let’s continue with the filters that I will show you in this post.

## Median filter

![Median filter](https://cdn-images-1.medium.com/max/800/1*VyzJxDrLrC-OqkV5LHhjQQ.gif)
Taken from [Artemlezin Blog](http://artemhlezin.com/2016/09/04/median.html)
This filter is used to eliminate the ‘noise’ of the images, mainly is salt-n-pepper noise.
There is not much theory beyond the one in the picture. This is how the filter works : gets all the values inside a mask, sorts them and then assigns the mean value to the coordinate.
This is how it looks an image with salt and pepper noise :
![image python](https://cdn-images-1.medium.com/max/800/1*UmRXiE--hLWK1g0MYeLBXQ.png)
In Python 🐍 the filter works like this, enter to check the result:

```python
from PIL import Image
path = "noise.png" # Your image path
img = Image.open(path)
members = [(0,0)] * 9
newimg = Image.new("RGB",(width,height),"white")
for i in range(1,width-1):
    for j in range(1,height-1):
        members[0] = img.getpixel((i-1,j-1))
        members[1] = img.getpixel((i-1,j))
        members[2] = img.getpixel((i-1,j+1))
        members[3] = img.getpixel((i,j-1))
        members[4] = img.getpixel((i,j))
        members[5] = img.getpixel((i,j+1))
        members[6] = img.getpixel((i+1,j-1))
        members[7] = img.getpixel((i+1,j))
        members[8] = img.getpixel((i+1,j+1))
        members.sort()
        newimg.putpixel((i,j),(members[4]))
```

And this is the result :
![Result](https://cdn-images-1.medium.com/max/800/1*ZPis4b0GS0debu46lvDFAw.png)

## Sobel filter

The Sobel operator is an algorithm for edge detection, a technique to find the limits between regions in an image. The edge detection algorithm help us separate some specific parts of the source image and take them off from the background. There is more interesting theory about edge detection and the Sobel operator , but we will focus on the Python 🐍 implementation.
Due to the excitement for the South American World Cup qualifiers I decided to use this image for example :
![Vamos Perú](https://cdn-images-1.medium.com/max/800/1*9jwN3-6_N6aoTUgmdTlqyA.jpeg)
In Python 🐍 the filter works like this, enter to check the result:

```python
from PIL import Image
import math
path = "peru.jpeg" # Your image path
img = Image.open(path)
newimg = Image.new("RGB", (width, height), "white")
for x in range(1, width-1):  # ignore the edge pixels for simplicity (1 to width-1)
    for y in range(1, height-1): # ignore edge pixels for simplicity (1 to height-1)

        # initialise Gx to 0 and Gy to 0 for every pixel
        Gx = 0
        Gy = 0

        # top left pixel
        p = img.getpixel((x-1, y-1))
        r = p[0]
        g = p[1]
        b = p[2]

        # intensity ranges from 0 to 765 (255 * 3)
        intensity = r + g + b

        # accumulate the value into Gx, and Gy
        Gx += -intensity
        Gy += -intensity

        # remaining left column
        p = img.getpixel((x-1, y))
        r = p[0]
        g = p[1]
        b = p[2]

        Gx += -2 * (r + g + b)

        p = img.getpixel((x-1, y+1))
        r = p[0]
        g = p[1]
        b = p[2]

        Gx += -(r + g + b)
        Gy += (r + g + b)

        # middle pixels
        p = img.getpixel((x, y-1))
        r = p[0]
        g = p[1]
        b = p[2]

        Gy += -2 * (r + g + b)

        p = img.getpixel((x, y+1))
        r = p[0]
        g = p[1]
        b = p[2]

        Gy += 2 * (r + g + b)

        # right column
        p = img.getpixel((x+1, y-1))
        r = p[0]
        g = p[1]
        b = p[2]

        Gx += (r + g + b)
        Gy += -(r + g + b)

        p = img.getpixel((x+1, y))
        r = p[0]
        g = p[1]
        b = p[2]

        Gx += 2 * (r + g + b)

        p = img.getpixel((x+1, y+1))
        r = p[0]
        g = p[1]
        b = p[2]

        Gx += (r + g + b)
        Gy += (r + g + b)

        # calculate the length of the gradient (Pythagorean theorem)
        length = math.sqrt((Gx * Gx) + (Gy * Gy))

        # normalise the length of gradient to the range 0 to 255
        length = length / 4328 * 255

        length = int(length)

        # draw the length in the edge image
        #newpixel = img.putpixel((length,length,length))
        newimg.putpixel((x,y),(length,length,length))
```

And this is the result :
![Result](https://cdn-images-1.medium.com/max/800/1*gzEy2Q6xKX6-OTmK8pdF7w.png)

## Conclusion

I mentioned that there is much more theory about this subject; so, I will leave some articles that, in my opinion, are the most complete and better explained in the web.

### References

- [Saush Blog’s , good description about sobel operator and other image processing filter.](https://blog.saush.com)

- [An edge detection implementation in C++.](https://stackoverflow.com/questions/40445415/sobel-edge-detection-implementation)

- [A detailed article about of median filter.](http://fourier.eng.hmc.edu/e161/lectures/smooth_sharpen/node2.htm)
  [http://homepages.inf.ed.ac.uk/rbf/HIPR2/sobel.htm](Another implementation of Sobel filter.)

Thanks for reading this little post , totally open to feedback. Questions in the comment box and show your support 👏❤️ .
You can watch my open-source projects in my [Github](https://github.com/enzoftware) account.
