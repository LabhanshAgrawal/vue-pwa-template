cd docs
rm -rf _book
gitbook build
cd _book
git init
git add -A
git commit -m 'update book'
git push -f git@github.com:LabhanshAgrawal/pwa.git master:gh-pages
