export const TableData = [
    [
        { 
            index: 1,
            class: 'w-20 h-20 border-r border-white border-b border-slate-950 transition-colors duration-300 items-center justify-center',
            whoClicked: null, 
        }, 
        { 
            index: 2,
            class: 'w-20 h-20 border-r border-white border-b border-slate-950 transition-colors duration-300 items-center justify-center',
            whoClicked: null, 
        }, 
        { 
            index: 3,
            class: 'w-20 h-20 border-b border-white border-slate-950 transition-colors duration-300 items-center justify-center',
            whoClicked: null,  
        }
    ],
    [
        { 
            index: 4,
            class: 'w-20 h-20 border-r border-white border-b border-slate-950 transition-colors duration-300',
            whoClicked: null, 
        }, 
        { 
            index: 5,
            class: 'w-20 h-20 border-r border-white border-b border-slate-950 transition-colors duration-300',
            whoClicked: null, 
        }, 
        { 
            index: 6,
            class: 'w-20 h-20 border-b border-white border-slate-950 transition-colors duration-300',
            whoClicked: null,  
        }
    ],
    [
        { 
            index: 7,
            class: 'w-20 h-20 border-white border-r border-slate-950 transition-colors duration-300',
            whoClicked: null, 
        }, 
        { 
            index: 8,
            class: 'w-20 h-20 border-white border-r border-slate-950 transition-colors duration-300',
            whoClicked: null, 
        }, 
        { 
            index: 9,
            class: 'w-20 h-20 border-white border-slate-950 transition-colors duration-300',
            whoClicked: null,  
        }
    ],
]


export const WinningCombo = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

export const newGameObj = {
    id: 0,
    players: ['', ''],
    totalRounds: 3,
    currentRound: 1,
    isCompleted: false,
    rounds: [],
    scores: [0, 0]
};

export const singleRound = {
    id: 0,
    won: '',
    loss: '',
    moves: [
        [],
        []
    ],
    playingNow: 0,
    isCompleted: false,
}