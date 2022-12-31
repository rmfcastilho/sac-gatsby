import React from 'react';


const Logo = () => (
  <svg
    width="201"
    height="66"
    viewBox="0 0 201 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="201" height="66" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_42_766"
          transform="translate(0 -0.0383929) scale(0.00357143 0.0108766)"
        />
      </pattern>
      <image
        id="image0_42_766"
        width="280"
        height="99"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABjCAYAAABAHB86AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1OWE3NTBmZC0yNDAyLTRkNjQtOGE3YS00NDcyMTNmY2YyNzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzQ3NTBFODFEN0Y1MTFFQTg0NzVCMkVCMTNCM0Q5NDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzQ3NTBFODBEN0Y1MTFFQTg0NzVCMkVCMTNCM0Q5NDAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OWE3NTBmZC0yNDAyLTRkNjQtOGE3YS00NDcyMTNmY2YyNzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTlhNzUwZmQtMjQwMi00ZDY0LThhN2EtNDQ3MjEzZmNmMjcxIi8+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"
      />
    </defs>
  </svg>
);


export default Logo;
