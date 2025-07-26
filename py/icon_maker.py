from matplotlib import patches, path, pyplot as plt
import numpy as np

import rounded_polygon as rp

# Corner radius (relative to unit size)
r = 0.1
color = "#64d8cb"

def rectangle(x, y, width, height):
    return np.array([
        (x, y),
        (x, y - height),
        (x + width, y - height),
        (x + width, y)
    ])

def right_triangle(x, y, length):
    return np.array([
        (x, y),
        (x + length, y),
        (x, y + length)
    ])

gap = 0.8
width = 0.5
height = 2

x0, y0 = -1, 1

x1, y1 = 1, 1
length = height

xy1 = rectangle(x0, y0, width, height)

xy2 = rectangle(x0 + gap, y0, height, width)

rp1 = rp.rounded_polygon(vertices = xy1, padding = 0.1,
                         facecolor = '#64d8cb', edgecolor = 'none', lw = 3)
rp2 = rp.rounded_polygon(vertices = xy2, padding = 0.1,
                         facecolor = '#64d8cb', edgecolor = 'none', lw = 3)

# Create figure
fig, ax = plt.subplots()
ax.add_patch(rp1)
ax.add_patch(rp2)

# Format plot: tight and transparent
ax.set_xlim(-1, 1.8)
ax.set_ylim(-1, 1)
ax.set_aspect('equal')
ax.axis('off')
ax.set_position([0, 0, 1, 1])

# Save as transparent SVG
plt.savefig("triangle.svg", format="svg", transparent=True)
