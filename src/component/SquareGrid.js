import React from 'react';

function SquareGrid({ width, height, colors }) {
  // Generate a random color from the provided colors
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
 
  // Create a 2D array to represent the grid
  const grid = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => getRandomColor())
  );

  // Function to find the biggest area with the same color
  const findBiggestArea = () => {
    let maxArea = 0;
    let maxColor = '';

    // Keep track of visited cells to avoid redundant calculations
    const visited = Array.from({ length: height }, () =>
      Array.from({ length: width }, () => false)
    );
    console.log("visited",visited)
    // DFS function to calculate the area of a connected region
    const calculateArea = (row, col, color) => {
      if (
        row < 0 ||
        row >= height ||
        col < 0 ||
        col >= width ||
        visited[row][col] ||
        grid[row][col] !== color
      ) {
        return 0;
      }

      visited[row][col] = true;
      let area = 1;

      area += calculateArea(row - 1, col, color); // Up
      area += calculateArea(row + 1, col, color); // Down
      area += calculateArea(row, col - 1, color); // Left
      area += calculateArea(row, col + 1, color); // Right

      return area;
    };

    // Iterate through each cell to find the biggest area
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        if (!visited[row][col]) {
          const currentColor = grid[row][col];
          const area = calculateArea(row, col, currentColor);

          if (area > maxArea) {
            maxArea = area;
            maxColor = currentColor;
          }
        }
      }
    }

    return { maxArea, maxColor };
  };

  // Calculate the biggest area and its color
  const { maxArea, maxColor } = findBiggestArea();

  return (
    <div>
      <p>The biggest area contains {maxArea} cells with<span style={{background:maxColor,padding:"5px 10px",margin:"0 10px",display:"inline-block"}}>{maxColor}</span>  color</p>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${width}, 30px)` }}>
        {grid.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{ backgroundColor: color, width: '35px', height: '35px',border:"1px solid white" }}
            />
          ))
        )}
      </div>
    </div>
  );
}


export default SquareGrid;
