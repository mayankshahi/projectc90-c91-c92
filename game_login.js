function addUser()
{
    palyer1 = document.getElementById("player1_name_input").value;
    palyer2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1" , palyer1);
    localStorage.setItem("player2" , palyer2);
    window.location = "game_page.html";
}