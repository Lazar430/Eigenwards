import matplotlib.pyplot as plt

# Turn off axes and frame
fig, ax = plt.subplots(figsize=(2, 1), dpi=300)
ax.axis("off")

# Render LaTeX-style math text
ax.text(0.5, 0.5, r"$\lambda$", fontsize=24, ha='center', va='center', color="#64d8cb")

# Save as transparent SVG
fig.savefig("logo.svg", format="svg", transparent=True, bbox_inches='tight', pad_inches=0)

plt.close(fig)


