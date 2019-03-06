# GitHub Collaboration Walkthrough

This lecture was a walkthrough of how to (and how not to) collaborate with GitHub

## Part 1: When Things Go Right

Soundarya and Erin are collaborating on a project that uses an API and gets input from the command line.  We have agreed that Erin is going to work on the API part, and Soundarya is going to work on the CLI part.  In parallel we make feature branches, commit our changes, then create pull requests against the `master` branch.  Both pull requests are successfully able to merge.

### Part 1: Setup

For the purposes of this example, we are using the "Star Wars API" lab.

Erin starts the project by going to the [lab on GitHub](https://github.com/learn-co-students/apis-and-iteration-seattle-web-career-012819) and clicking the "Fork" button in the upper right part of the page.

Now, from the [forked repo](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819), Erin adds Soundarya as a collaborator.
1. Click on the "Settings" tab
2. Click on "Collaborators" in the menu on the left
3. Type Soundarya's username (with no @ sign) into the search box, select the result with her photo, and click "Add collaborator"

Each team member clones a copy of Erin's fork onto their computer
1. `git clone https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819.git`
2. `cd apis-and-iteration-seattle-web-career-012819`

### Erin Part 1: Adding API Functionality

Erin makes a new feature branch to get the relevant character movie data from the API.  (Right now it is connecting to the API but not getting any of the relevant info yet.)

1. `git checkout -b api-communicator-2` creates the new branch
2. Make changes to the relevant file
   - At the end of making changes, the code still won't "work" 100%, because nothing has changed in the CLI.  (If you type `ruby bin/run.rb`, it won't print out the results of the API calls.)  That's ok!  You can test by hard-coding values or using `binding.pry`.  Eventually we will learn how to do that "properly" with rspec, but not yet.
3. `git status` should show that the only file with changes is `lib/api_communicator.rb`
4. `git add lib/api_communicator.rb`
5. `git commit -m "Implemented get_characters_from_api and print_movies methods"` commits the changes to the local copy of the api-communicator-2 branch
6. `git push origin api-communicator-2` publishes the changes to the [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/tree/api-communicator-2) of the api-communicator-2 branch
7. On GitHub, [set up a pull request](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/pull/new/api-communicator-2)
   - The base repository will be set to learn-co-students/apis-and-iteration-seattle-web-career-012819 and base: master.  We want to change that to hoffm386/apis-and-iteration-seattle-web-career-012819 and base: master.  That will change the interface so it just says "base: **master**" on the left and "compare: **api-communicator-2**" on the right.  The difference is that we are comparing across two branches of the same repository, rather than our branch on our fork vs. the learn-co repo.

### Soundarya Part 1: Adding CLI Functionality

Soundarya is working at the same time as Erin, but on a different part of the code.  She is adding the command line interface code so that the program will print a welcome message and prompt the user for the name of a character.  (Right now it is calling the API method with `nil` instead of getting actual user input.)

1. `git checkout -b rajiprinze/cliAdditions` creates the new branch
2. Make changes to the relevant file
   - At the end of making changes, the CLI part works, but it doesn't actually have the API functionality.  (If you type `ruby bin/run.rb`, it will give a welcome and prompt for a character name, but won't get the character info from the API.)  That's ok!  You can test by adding a `binding.pry` to the API part of the code and making sure that the user input gets passed incorrectly.  Eventually we will learn how to do that "properly" with rspec, but not yet.
3. `git status` should show that the only file with changes is `lib/command_line_interface.rb`
4. `git add lib/command_line_interface.rb`
5. `git commit -m "added changes to cli"` commits the changes to the local copy of the rajiprinze/cliAdditions branch
6. `git push origin rajiprinze/cliAdditions` publishes the changes to the [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/tree/rajiprinze/cliAdditions) of the rajiprinze/cliAdditions branch
7. On GitHub, [set up a pull request](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/pull/new/rajiprinze/cliAdditions)
   - The base repository will be set to learn-co-students/apis-and-iteration-seattle-web-career-012819 and base: master.  We want to change that to hoffm386/apis-and-iteration-seattle-web-career-012819 and base: master.  That will change the interface so it just says "base: **master**" on the left and "compare: **rajiprinze/cliAdditions**" on the right.  The difference is that we are comparing across two branches of the same repository, rather than our branch on our fork vs. the learn-co repo.

### Part 1: Merging

Both Erin's branch and Soundarya's branch have pull requests ready to go.  Now that they have agreed that the changes should be merged into master, Erin goes to the [pull requests page](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/pulls) for the repository and approves both pull requests.  (Either person could do this, since both are contributors on the repo.)  There are no merge conflicts.  Yay!

To get their local copies of the repository synced up with the remote GitHub copy, Erin and Soundarya each run the following:
1. `git checkout master` to move from their feature branch (`api-communicator-2` and `rajiprinze/cliAdditions`, respectively) back to master
2. `git pull origin master` to fetch changes from the remote GitHub copy and merge them in.  There are no merge conflicts.  Yay!

## Part 2: When Things Go Wrong

Soundarya and Erin agree that the README file should be edited to say that they are the authors.  However, they don't communicate clearly about who is doing this task, so both are start making changes to the same file.

### Erin Part 2: Adding Authors

1. `git checkout -b update-readme` creates the new branch
2. Add "by Erin and Soundarya" to the second line of README.md
3. `git status` should show that the only file with changes is `README.md`
4. `git add README.md`
5. `git commit -m "updated readme"` commits the changes to the local copy of the update-readme branch
6. `git push origin update-readme` publishes the changes to the [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/tree/update-readme)
7. On GitHub, [set up a pull request](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/pull/new/update-readme)
  - The base repository will be set to learn-co-students/apis-and-iteration-seattle-web-career-012819 and base: master.  We want to change that to hoffm386/apis-and-iteration-seattle-web-career-012819 and base: master.  That will change the interface so it just says "base: **master**" on the left and "compare: **update-readme**" on the right.  The difference is that we are comparing across two branches of the same repository, rather than our branch on our fork vs. the learn-co repo.

### Soundarya Part 2: Adding Authors

1. `git checkout -b rajiprinze/addNames` creates the new branch
2. Add "authors : Erin and Soundarya :)" to the second line of README.md
3. `git status` should show that the only file with changes is `README.md`
4. `git add README.md`
5. `git commit -m "Adding authors"` commits the changes to the local copy of the rajiprinze/addNames branch
6. `git push origin rajiprinze/addNames` publishes the changes to the [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/tree/rajiprinze/addNames)
7. On GitHub, [set up a pull request](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/pull/new/rajiprinze/addNames)
  - The base repository will be set to learn-co-students/apis-and-iteration-seattle-web-career-012819 and base: master.  We want to change that to hoffm386/apis-and-iteration-seattle-web-career-012819 and base: master.  That will change the interface so it just says "base: **master**" on the left and "compare: **rajiprinze/addNames**" on the right.  The difference is that we are comparing across two branches of the same repository, rather than our branch on our fork vs. the learn-co repo.

### Part 2: Merging

Both Erin's branch and Soundarya's branch have pull requests ready to go.  Now that they have agreed that the changes should be merged into master, Erin goes to the [pull requests page](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/pulls) for the repository and approves Soundarya's pull request.  (Either person could do this, since both are contributors on the repo.)

Soundarya's pull request is successfully merged!

But then when they try to approve Erin's pull request, there is a merge conflict :(

Because Erin's changes are the ones that conflict with master, Erin needs to resolve the merge conflict.

1. `git pull origin master` will fetch the latest version of master (with Soundarya's changes merged in) and attempt to merge them into Erin's branch
   - This generates the output:
     ```
     CONFLICT (content): Merge conflict in README.md
     Automatic merge failed; fix conflicts and then commit the result.
     ```
2. `git status`
   - This generates the output:
   ```On branch update-readme
      You have unmerged paths.
        (fix conflicts and run "git commit")
        (use "git merge --abort" to abort the merge)

      Unmerged paths:
        (use "git add <file>..." to mark resolution)

	         both modified:   README.md

      no changes added to commit (use "git add" and/or "git commit -a")
   ```
3. This tells Erin that she needs to open README.md to find the merge conflict, so `atom README.md`
4. When Erin looks at the README, there is a section that looks like this:
   ```<<<<<<< HEAD
      by Erin and Soundarya
      =======
      authors : Erin and Soundarya :)
      >>>>>>> 9960c6e102ffb03e65bd9eeb3d24863e12baa034
   ```
   - This means that since master was last pulled, two different commits have made changes to the same line.  One of them (Erin's) was "by Erin and Soundarya", which is between the "<<<<<<< HEAD" and "=======".  The other one (Soundarya's) was "authors : Erin and Soundarya :)", which is between the "=======" and the ">>>>>>> 9960c6e102ffb03e65bd9eeb3d24863e12baa034".
   - Erin has three different options here:
     a) Accept Soundarya's version.  To do that, she would erase the git markup ("<<<<<<< HEAD", "=======", and "">>>>>>> 9960c6e102ffb03e65bd9eeb3d24863e12baa034") and erase the line she added ("by Erin and Soundarya")
     b) Overwrite Soundarya's version with her version.  To do that, she should erase the git markup ("<<<<<<< HEAD", "=======", and "">>>>>>> 9960c6e102ffb03e65bd9eeb3d24863e12baa034") and erase the line Soundarya added ("authors : Erin and Soundarya :)")
     c) Make some new version.  One example of that would be combining both "by Erin and Soundarya" and "authors : Erin and Soundarya :)" into a single line.  She would still need to erase the git markup ("<<<<<<< HEAD", "=======", and "">>>>>>> 9960c6e102ffb03e65bd9eeb3d24863e12baa034") as well.
   - Erin chooses option (c) and combines the two lines into one, then saves the file
5. `git add README.md`
6. `git status`
   - This generates the output:
     ```On branch update-readme
        All conflicts fixed but you are still merging.
          (use "git commit" to conclude merge)

        Changes to be committed:

	         modified:   README.md
      ```
7. `git commit -m "resolved merge conflict with names in README"` commits the changes to the local copy of the update-readme branch
8. `git push origin update-readme` publishes the changes to the [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/tree/update-readme)
9. Now if Erin refreshes the page on the pull request for this branch, the button will turn green.  Now we can approve Erin's pull request!

(For Soundarya's local copy to reflect this new version, she will need to run `git pull origin master`)
