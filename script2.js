
let scoreWater = 0;
let scoreSnake = 0;
let scoreGun = 0;
let finalScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Enter your choice (water, snake, or gun):").toLowerCase();
        switch (choice) {
            case 'water':
                scoreWater += 1;
                break;
            case 'gun':n
                scoreGun += 2;
                break;
            case 'snake':
                scoreSnake= scoreGun-scoreWater;
                break;
            default:
                console.log("Invalid choice, please enter water, snake, or gun.");
                i--;
                continue;
        }
        finalScore = scoreWater + scoreSnake + scoreGun;
        
    }


    
    if (finalScore < 0) {
        confirm("Game is over");
    } else if (finalScore > 0) {
        confirm("You won");
    } else {
        confirm("Try again");
    }
}



playGame();