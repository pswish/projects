#! /bin/bash
. mkmsettings.cfg

mkm()  {
 local ans name optName
 printf "What do you want to create?\n"
 printf "1. $optName1\n"
 printf "2. $optName2\n"
 printf "3. quit\n"
 read -ep "(1 to 3) ===> " ans
 if [[ $ans =~ [^1] && $ans =~ [^2] ]]
 then
   return 0
 fi
 [[ $ans == 1 ]] && optName=$optName1 || optName=$optName2
read -ep "Please enter the name of $optName: " name
case $ans in
  1) mkdir $name;;
  2) touch $name;;
esac
}
