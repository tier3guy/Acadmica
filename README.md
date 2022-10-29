![Untitled design](https://user-images.githubusercontent.com/73595465/179903998-90ab6fc0-8c7b-4b36-9ba1-29e2d89f10d3.png)

<p align="center"> https://acadmica.social </p>
<h1 align="center"> Acadmica </h1>

<p align="left">
Acadmica is running with the aim of becoming India's largest student community, where students can help each other by sharing notes among themselves. We are engineering student ourselves; thus we are well aware of the problems faced by students in their college life. Be it college academics, development (personal or professional), programming or coding, internships, placement preparation, techfests and events, cultural clubs and whatnot?! </p>
<p align = "justified">
Worry not! We provide subjectwise notes, subjectwise study material; various coding questions and DSA sheets for placements, developer roadmaps for almost everything -- all in one place. We go through the internet to find the best resources to serve you. Any contribution is also welcome if you feel your content (notes/study materials) can help others, he/she can send the material to us, you will be given credits for your work ofcourse in all the social media handles of @cadmica!
</p>

# ```Project Structure```
### Folder Structure Explained

This is a multipage-website. You can click on various pages at the navbar to go to the desired page.

- ```public``` This folder contains an HTML page called ``index.html`` which also happens to be the homepage of the site.
  | Page Name | Folder Description |
  |-------------|------------------------|
  | ```index.html```  | This page contains all the HTML code of **Acadmica** web portal |
  
- ```src```
  | Folder Name | Folder Description |
  |-------------|------------------------|
  | CSS         | It contains one folder named as **component-css** and one CSS file named as ``index.css`` |
  | JS          | JavaScript Folder |
  | Assets      | This folder contains all the images used in site. |
  
 - ```component-css```
    | File Name | File Description |
    |-----------|------------------------|
    | ```about.css``` | It contains CSS code of About Acadmica part |
    | ```footer.css``` | It contains CSS code of footer part |
    | ```main.css``` | It contains CSS code of main hero page part of Acadmica |
    | ```navbar.css``` | It contains CSS code of navbar of Acadmica |
    
 - ```index.css :``` This file contains CSS code of base CSS file and it also connects all the CSS files inside it.


# Setup & Contribution Guidelines:

 1. Fork the repository

    Click on ```Fork``` button present on the upper-right area of the screen to create a copy of this repository to your GitHub account.


 2. Clone the repository

   ```bash

   git clone https://github.com/<YOUR_USERNAME>/Acadmica.git
 
   ```
 3. Navigate to Acadmica repo directory

  ```bash

   cd Acadmica 

  ```

 4. Add a reference to the original repository as upstream

   ```bash

   git remote add upstream https://github.com/tier3guy/Acadmica.git

   ```
 5. Verify the remotes for this repository
   ```bash

   git remote -v

   ```
 - [x] Output of above commands should be the same as:
   ```bash

   origin   https://github.com/<YOUR_USERNAME>/Acadmica.git (fetch)
   origin   https://github.com/<YOUR_USERNAME>/Acadmica.git (push)
   upstream https://github.com/Acadmica/Acadmica.git (fetch)
   upstream https://github.com/Acadmica/Acadmica.git (push)

   ```

 6. Update Fork Repo From Upstream (to remain updated with the orignal repo)

 7. Update your local branch to be in-sync with the original repo

   ```console

     git pull upstream master

   ```


## Contribution guide

1. Create a new branch
```
git checkout -b <your_branch_name>
```

2. Perform your desired changes to the code base in your forked repo
3. Track your changes heavy_check_mark: .

```
git add .
```

4. Commit your changes
```
git commit -m "Relevant message"
```

5. Push the committed changes in your feature branch to your remote repo
```
git push -u origin <your_branch_name>
```

6. To create a pull request, click on ```compare and pull requests``` button
7. Please ensure that you compare your feature branch to the desired branch `master` of the repo to make a PR


8. Add an appropriate title and relevant description to your pull request explaining your changes and efforts done
9. Make sure to edit the PR template

10. Click on `Create Pull Request`.

<h1 align="center">A big thanks to our valuable contributors! It would not have been possible without each of you!</h1>
<a href="https://github.com/tier3guy/Acadmica/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tier3guy/Acadmica" />
</a>
