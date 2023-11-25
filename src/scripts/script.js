document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#search-input");
  const searchBtn = document.querySelector(".google-search-btn");
  const luckyBtn = document.querySelector(".lucky-search-btn");

  searchBtn.addEventListener("click", () => search(searchInput));
  luckyBtn.addEventListener("click", () => {
    window.location.href = "https://www.google.com/doodles";
  });

  searchInput.addEventListener("keyup", e => e.keyCode === 13 ? search(searchInput) : null);
});

const search = (e) => {
  const input = e.value;
  window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enNZ948NZ948&oq=" + input + "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8";
};
