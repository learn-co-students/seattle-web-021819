## Objectives
- Understand, theoretically, how authentication and authorization work
- Sign in vs sign up
- Go over sessions, cookies, and implement log in, and log out


## User Stories

1. As a registered user, I should be able to log in by providing my username (no passwords yet)
- Does my schema need to change
- Do I need any additional routes/views/models

2. As an un-authenticated user, I should be able to see a list of students and information about an individual student.

3. As an authenticated user I should be able to do all of the above plus create a new student.

4. If an un-authenticated user tries to see the new student form, they should be redirected to the login page.

## Auths
- authentication
  - verify that a user is who they say they are
  - username and password
- authorization
  - can i do this thing
  - do i have permission to see this
  - redirect if user isn't authorized


## Steps
- create a user model
  - username
- /login => post
  - form to login
- logout?
- users/new => post /users


# Login
  - login path
  - sessions new/create
  - form_tag
  - if user is found, proceed
  - if no user, send error message back to form

# Logout
  - path
  - clear the session









