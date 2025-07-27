#!/bin/bash

# Check for argument
if [ -z "$1" ]; then
    echo "Usage: ./make_svg.sh output_name.svg"
    exit 1
fi

OUTPUT="$1"

# Compile LaTeX to DVI
latex -interaction=nonstopmode icon.tex

# Convert DVI to SVG
dvisvgm --no-fonts icon.dvi -o "$OUTPUT"

# Remove auxiliary files
rm -f icon.aux icon.log icon.dvi
