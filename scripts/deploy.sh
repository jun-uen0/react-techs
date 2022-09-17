#/bin/sh

# Check firebase login user and target project
firebase login
firebase target

read -p "Correct user & project？ (y/N):" yn
case "$yn" in [yY]*) ;; *) echo "終了します" ; exit ;; esac

# Move to root directory
cd $(dirname $0)
cd ../
pwd
ls

# Build
. ~/.nvm/nvm.sh
nvm use
npm i
npm run build

# Deploy
firebase deploy