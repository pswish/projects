#! /bin/bash
## example for intialized variables
default_option="-d"
optName1="directory"
optName2="file"

mk()
{
 local option=$default_option parameter optName ans

## taking command line arguments
 case $# in
  0) printf "Try mk directory/\n"
     return 0;;
  1) paramter=$1;;
  *) option=$1
     parameter=$2;;
esac

while :
do
  case $option in
   -d) optNane=$optName1
       mkdir $parameter;;
   -f) optName=$optName2
       touch $parameter;;
   *) printf "Syntax Error\n"
       return 1;;
 esac

 ## example for Q&A Dialogue
 read -ep "Do you want to create another $optName (Y/N)? " ans
 if [[ $ans =~ [^yY] ]]
 then 
  break
 fi
 read -ep "Please input the name of the $optName: " parameter
done
}
