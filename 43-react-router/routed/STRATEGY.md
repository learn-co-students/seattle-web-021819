<App state={
  contestants: [{name, zip, guess}]
}>
  <Router>
    "/" <Homepage>
    "/enter-01" <NewContestantNameForm>
    "/enter-02" <NewContestantZipForm>
    "/enter-03" <NewContestantGuessForm>
    "/contestants" <ContestantList>
    "/winner" <Winner>
  </Router>
</App>
