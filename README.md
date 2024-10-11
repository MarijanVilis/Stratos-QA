# Git Push Procedure for running the pipeline
## Git commit message if you want to run the pipeline
~~~ 
git add .
git commit -m "run pipeline - Describe your changes here"
git push origin main
~~~

## If you want to just initiate the pipeline with an empty commit
~~~
git commit --allow-empty -m "run pipeline - Manual trigger"
git push origin main
~~~

## If you just want to push the changes without running the pipeline
~~~ 
git add .
git commit -m "Describe your changes here"
git push origin main
~~~
