![Untitled design](https://user-images.githubusercontent.com/73595465/179903998-90ab6fc0-8c7b-4b36-9ba1-29e2d89f10d3.png)

<p align="center"> https://acadmica.social </p>
<h1 align="center"> Acadmica </h1>

<p align="center">
Acadmica is running with the aim of becoming India's biggest student community, where students can help each other by sharing notes among themselves. We are engineering student ourselves, and we know the problems that engineering student faces in their college. College, development, coding, internships, placement preparation and whatnot. But we are providing notes, study materials, and coding questions for placements all in one place. We go through the internet to find the best resources for and serve you in one place. Also, if a student feels that his notes/study materials can help others, he or she can post the materials to us, and in return for that, you will be getting fame on social media handles.
</p>

 # Folder Structure

This is a multipages website. You can click on page at navbar to open your desired page.

- **public :** This is a folder which contains an HTML page
  | Page Name | What is in that Page |
  |-------------|------------------------|
  | index.html  | This page contains all the html code of **Acadmica** web portal |
  
- **src :**
  | Folder Name | What is in that Folder |
  |-------------|------------------------|
  | CSS         | It contains one folder named as **component-css** and one CSS file named as **index.css** |
  | JS          | JavaScript Folder |
  | Assets      | This folder contains all the images used in site. |
  
  - **component-css :**
    | File Name | What is in that File |
    |-----------|------------------------|
    | about.css | It contains css code of About Acadmica part |
    | footer.css | It contains css code of footer part |
    | main.css | It contains css code of main hero page part of Acadmica |
    | navbar.css | It contains css code of navbar of Acadmica |
    
  - **index.css :** This file contains css code of base css file, it connects all the css file in it.


## Setup & Contribution Guidelines:

1. Fork The repository

Click on **Fork** button present on the upper-right area of the screen to create a copy of this repository to your GitHub account.


2. Clone The repository using git

```bash

git clone https://github.com/<YOUR_USERNAME>/Acadmica.git

```

-> Navigate to Acadmica repo directory

```bash

cd Acadmica

```

3. Add a reference to the original repository as upstream


```bash

git remote add upstream https://github.com/tier3guy/Acadmica.git

```
Verify the remotes for this repository
```bash

git remote -v

```
Output of above command will be same as this:
```bash

origin  https://github.com/<YOUR_USERNAME>/Acadmica.git (fetch)
origin  https://github.com/<YOUR_USERNAME>/Acadmica.git (push)
upstream    https://github.com/Acadmica/Acadmica.git (fetch)
upstream    https://github.com/Acadmica/Acadmica.git (push)

```

4. Update Fork Repo From Upstream(remain updated with the orignal repo).

Update your local branch to be in sync with the original repo.

```console

$ git pull upstream master

```


### Contributing & making a pull request

1. Create a new branch.

```
git checkout -b <your_branch_name>
```

2. Perform your desired changes to the code base.


3. Track your changes:heavy_check_mark: .

```
git add .
```

4. Commit your changes
```
git commit -m "Relevant message"
```

5. Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

6. To create a pull request, click on `compare and pull requests`. Please ensure that you compare your feature branch to the desired branch `master` of the repo to make a PR.


7. Add an appropriate title and relevant description to your pull request explaining your changes and efforts done.
    And edit the PR template

8. Click on `Create Pull Request`.

<h1 align="center">A big thanks to our valuable contributors</h1>
<a href="https://github.com/tier3guy/Acadmica/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tier3guy/Acadmica" />
</a>
