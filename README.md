# Let's create a README.md file with the content for the Tic-Tac-Toe game.

content = """
# Tic-Tac-Toe Game

## Description
The Tic-Tac-Toe game is a simple and interactive web-based implementation of the classic two-player game. The objective is to get three of your symbols (either `X` or `O`) in a row (horizontally, vertically, or diagonally) before your opponent does.

This game includes:  
- A clean and intuitive UI for a seamless gaming experience.  
- Functionality to handle winning conditions for both players (`X` and `O`).  
- A detection system for draw scenarios when all boxes are filled without a winner.  
- Buttons to reset the game or start a new game.  

---

## Features
1. **Player Turns:**  
   - Alternates between `X` and `O` after each valid move.  

2. **Winning Conditions:**  
   - Detects when a player (`X` or `O`) has won the game.  
   - Highlights the winner with a congratulatory message.  

3. **Draw Scenario:**  
   - Declares a draw if all boxes are filled and no winner is determined.  

4. **Reset/New Game:**  
   - Allows players to reset the game board or start a new game.  

---

## Game States

### Winner: `X`
- Occurs when player `X` aligns three of their symbols in:  
  - A row (e.g., top row: boxes 0, 1, 2).  
  - A column (e.g., middle column: boxes 1, 4, 7).  
  - A diagonal (e.g., boxes 0, 4, 8).  

### Winner: `O`
- Same winning conditions as `X` but for player `O`.  

### Draw
- Occurs when all nine boxes are filled without a winner.  

---

## How to Play
1. Open the game in a web browser.  
2. Player `O` always starts first.  
3. Take turns clicking on a box to place your symbol (`X` or `O`).  
4. The game announces the winner or declares a draw when applicable.  
5. Use the **Reset** button to clear the board or the **New Game** button to restart.  

---

## How to Run Locally

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git

## File structure


tic-tac-toe/

├── index.html      # Main HTML file

├── style.css       # Styling for the game

├── callbacks.js    # Game logic and interactivity

├── README.md       # Game documentation
