# Tic-Tac-Toe
Description
The Tic-Tac-Toe game is a simple and interactive web-based implementation of the classic two-player game. The objective is to get three of your symbols (either X or O) in a row (horizontally, vertically, or diagonally) before your opponent does.
![image](https://github.com/user-attachments/assets/970f8c64-d4d5-430a-bbaf-096e954ebda9)

This game has:

A clean and intuitive UI for a seamless gaming experience.
Functionality to handle winning conditions for both players (X and O).
A detection system for draw scenarios when all boxes are filled without a winner.
Buttons to reset the game or start a new game.

Features

Player Turns:

Alternates between X and O after each valid move.
Winning Conditions:

Detects when a player (X or O) has won the game.
Highlights the winner with a congratulatory message.

Draw Scenario:

Declares a draw if all boxes are filled and no winner is determined.

Reset/New Game:

Allows players to reset the game board or start a new game.
Game States
Winner: X
Occurs when player X aligns three of their symbols in:
A row (e.g., top row: boxes 0, 1, 2).
A column (e.g., middle column: boxes 1, 4, 7).
A diagonal (e.g., boxes 0, 4, 8).
Winner: O
Same winning conditions as X but for player O.
Draw
Occurs when all nine boxes are filled without a winner.

How to Play
Open the game in a web browser.
Player O always starts first.
Take turns clicking on a box to place your symbol (X or O).
The game announces the winner or declares a draw when applicable.
Use the Reset button to clear the board or the New Game button to restart.

How to Run Locally
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/tic-tac-toe.git
Navigate to the project folder:
bash
Copy code
cd tic-tac-toe
Open the index.html file in your browser to start playing.
File Structure
bash
Copy code
tic-tac-toe/
├── index.html      # Main HTML file

├── style.css       # Styling for the game

├── callbacks.js    # Game logic and interactivity

├── README.md       # Game documentation

Future Improvements
Add a scoreboard to track wins and draws across multiple games.
Enhance the UI with animations and themes.
Add a multiplayer mode over a network.

Demo
Upload your project to GitHub Pages or a similar hosting service and provide the live demo link here: Play Tic-Tac-Toe

License
This project is licensed under the MIT License.
