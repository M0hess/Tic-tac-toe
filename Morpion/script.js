    let currentPlayer = "X"
    let board = Array(9).fill("")
    const cells = document.querySelectorAll(".cell")

    function handleClick(event) {
        const index = event.target.dataset.id
        if(board[index] !== "") return
        board[index] = currentPlayer
        event.target.textContent = currentPlayer
        if(checkForWin()) {
            alert('Le joueur ${currentPlayer} a gagné')
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X"    
        
    }

    function checkForWin() {
        const combs = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

        combs.some(comb => {
            const [a,b,c ] = comb

            return board[a] && board[a] === board[b] && board[a] === board[c]
        })
    }

    function main() {
        cells.forEach(cell => {cell.addEventListener('click', handleClick)})
    }

    main()