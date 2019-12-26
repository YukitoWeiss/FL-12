let winNum,
    guessNum,
    prizes = {
        3: '100',
        2: '50',
        1: '25'
    },
    totalPrize = 0,
    numMax = 9,
    next = true,
    round = 1,
    agreed;

if (confirm('Do you want to play a game?') === true) {
    while (next === true) {
        if (round === 1) {
            winNum = Math.floor(Math.random() * numMax);
            for (let i = 3; i > 0; i--) {
                guessNum = parseInt(prompt(`
                Please guess win number from 0 to 8
                Attempts left: ${i}
                Total prize: ${totalPrize}$
                Possible prize on current attempt: ${prizes[i]}$
                `, '0'));
                if (winNum === guessNum) {
                    totalPrize += parseInt(prizes[i]);
                    agreed = confirm(`Congratulation, you won!   Your prize is: ${totalPrize}$. 
Do you want to continue?`);
                    if (agreed === true) {
                        round = 2;
                    } else {
                        alert(`Thank you for your participation. Your prize is: ${totalPrize}`);
                        agreed = confirm('Do you want to play again?');
                        if (agreed === true) {
                            round = 2;
                            break;
                        } else {
                            next = false;
                            break;
                        }
                    }
                    break;
                } else if (i <= 1) {
                    alert(`Thank you for your participation. Your prize is: ${totalPrize}`);
                    agreed = confirm('Do you want to play again?');
                    if (agreed === true) {
                        round = 1;
                        break;
                    } else {
                        next = false;
                        break;
                    }
                }
            }
        } else {
            winNum = Math.floor(Math.random() * numMax + 4);
            for (let i = 3; i > 0; i--) {
                guessNum = parseInt(prompt(`
                Please guess win number from 0 to 12
                Attempts left: ${i}
                Total prize: ${totalPrize}$
                Possible prize on current attempt: ${prizes[i] * 2}$
                `, '0'));
                if (winNum === guessNum) {
                    totalPrize += parseInt(prizes[i] * 2);
                    agreed = confirm(`Congratulation, you won!   Your prize is: ${totalPrize}$. 
Do you want to continue?`);
                    if (agreed === true) {
                        round = 2;
                    } else {
                        alert(`Thank you for your participation. Your prize is: ${totalPrize}`);
                        agreed = confirm('Do you want to play again?');
                        if (agreed === true) {
                            round = 2;
                            break;
                        } else {
                            totalPrize = 0;
                            next = false;
                            break;
                        }
                    }
                    break;
                } else if (i <= 1) {
                    alert(`Thank you for your participation. Your prize is: ${totalPrize}`);
                    agreed = confirm('Do you want to play again?');
                    if (agreed === true) {
                        totalPrize = 0;
                        round = 1;
                        break;
                    } else {
                        totalPrize = 0;
                        next = false;
                        break;
                    }
                }
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}