setOnClick(eById("modal-submit-to-leaderboard"), () => {
  const score = parseInt(eById("modal-score").value);
  const name = eById("modal-name").value;
  if (score && name) {
    submitScore(score, name);
    hideModal();
  } else {
    alert("Please enter a valid score and name.");
  }
});
