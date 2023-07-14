let cards = document.querySelectorAll('.card');
let members = document.querySelectorAll('.member');
    
function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
    
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].innerText.toLowerCase()
            .includes(search_query.toLowerCase())) {
            cards[i].style.display = "flex";
        } else {     
            cards[i].style.display = "none";
        }
    }

    for (var i = 0; i < members.length; i++) {
        if(members[i].innerText.toLowerCase()
            .includes(search_query.toLowerCase())) {
            members[i].style.display = "flex";
        } else {     
            members[i].style.display = "none";
        }
    }

}

//A little delay
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});