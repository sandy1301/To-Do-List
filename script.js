const input = document.getElementById("input");
        const label = document.getElementById("label");
        const list = document.getElementById("list");

        label.addEventListener("click", function(event){
            event.preventDefault();
            if(input.value.trim() !== ""){
                const li = document.createElement("li");
                li.textContent = input.value;
                list.appendChild(li);
                input.value = "";
            }
        });
            list.addEventListener("click", function(event){
                if(event.target.tagName === "LI"){
                    event.target.remove();
                }
            });
            
  