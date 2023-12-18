# sum-game

スイカゲーム clone on Nintendo Switch


## Getting Started
Follow these steps to set up and run this game:

</br>

### Built with

<div>
  <img height="32px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript"/>
  <img height="32px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/>
  <img height="32px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="CSS"/>
  <img height="32px" src="https://brm.io/matter-js/img/matter-js.svg" alt="matter.js"/>
  <img height="32px" src="https://vitejs.dev/logo.svg" alt="vite"/>
</div>

</br>

### Prerequisites

- [Node.js](https://nodejs.org/): Ensure Node.js is installed on your machine.

</br>



### Installation
- Follow these steps to set up and run the Sum Game App:


  1. Clone this repo and navigate to it:
      ```sh
      git clone git@github.com:integer-1/sum-game.git
      cd sum-game
      ```

  2. Install NPM packages:

      ```sh
      npm install
      ```

  3. You should have Vite
      ```sh
      npm create vite@latest
      ```
      <details >
        <summary>Vite set up tip</summary>
          - Project name : sum-game </br>
          - Frame work : Vanilla </br>
          - Variant : JavaScript
      </details>

  4. You should have Matter.Js
      ```sh
      npm install matter-js
      ```

      [matter.js](https://brm.io/matter-js/)  is a 2D physics engine for the web

  5. Start the server with `npm run dev`<br>
      You can find the server running on and the client on [http://localhost:5173](http://localhost:5173).


</br>

### Step-by-Step Guide to Playing the Sum Game
- Follow these simple steps to play this game:

  1. **Game Elements:** </br>
    The game consists of a play area with walls on the sides and a ground at the bottom. </br>
    Fruits fall from the top of the screen, and you can move a catcher left or right to sum them.
  2. **Starting the Game:**</br>
    When you open the game, you will see the initial play area with a score displayed.

  3. **Controls:**</br>
    Use the left arrow key to move the catcher to the left. </br>
    Use the right arrow key to move the catcher to the right.</br>
    Use the down arrow key to release the catcher and catch a falling fruit.

  4. **Catching Fruits:** </br>
    Fruits fall from the top of the screen randomly.
    Position the catcher using the left and right arrow keys to be under the falling fruit.
    Press the down arrow key to release the fruit and sum the same fruit.

  5. **Scoring:**</br>
    Each time you successfully sum two same fruit, your score increases by 1 point.
    The score is displayed on the screen.

  6. **Game Over:**</br>
    The game ends when a fruit collides with the top line (or if you prefer, when you decide to end it).
    When the game ends, an alert message will appear, indicating that the game is over.

  7. **Restarting the Game:** </br>
    To play again, you can refresh the page or reload the game.

    
    **Enjoy playing Sum Game!**

</br>
