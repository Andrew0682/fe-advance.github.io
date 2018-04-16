let alphabet = {
    lines: {
        topLine: 0,
        middleLine: 0,
        bottomLine: 0
    },
    setLines:{
        topF: function(){
            let t = document.querySelector(".top");
            alphabet.lines.topLine = t;
        },
        middleF: function(){
            let m = document.querySelector(".middle");
            alphabet.lines.middleLine = m;
        },
        bottomF: function(){
            let b = document.querySelector(".bottom");
            alphabet.lines.bottomLine = b;
        }
    },
    layout:{
        topRow: ['q' , 'w' , 'e' , 'r' , 't' , 'y' , 'u' , 'i' , 'o' , 'p'],
        middleRow: ['a' , 's' , 'd' , 'f' , 'g' , 'h' , 'j' , 'k' , 'l'],
        bottomRow: ['z' , 'x' , 'c' , 'v' , 'b' , 'n' , 'm']
    },
    createLayout: function(){
        this.setLines.topF()
        this.setLines.middleF();
        this.setLines.bottomF();
        
        let line = Object.keys(this.lines);
        
        let key = Object.keys(this.layout);
        
        for(let i = 0; i < line.length; i++){
            let currentLine =  this.lines[line[i]];
            let row = this.layout[key[i]];
            for(let j = 0; j < row.length; j++){
                let wrap = document.createElement("div");
                wrap.textContent = `${row[j]}`;
                currentLine.appendChild(wrap);
            };
        }
    }
};
alphabet.createLayout();