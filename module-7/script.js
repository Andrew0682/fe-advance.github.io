const keyboard = {
        topRow: "qwertyuiop[]",
        middleRow: "asdfghjkl;'",
        bottomRow: "zxcvbnm,./",
        createLayout: function(kb) {
          const body = document.querySelector("body");
          let ul = document.createElement('ul');
          for (let i = 0; i < kb.length; i += 1) {
              let li = document.createElement('li');
              li.textContent = kb[i]
              // ul.after(li);
              ul.appendChild(li);
          }
          body.appendChild(ul);
      
              
        }
    };
function run() {
    keyboard.createLayout(keyboard.topRow);
    keyboard.createLayout(keyboard.middleRow);
    keyboard.createLayout(keyboard.bottomRow);
}
run();