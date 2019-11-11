#! /bin/bash

. parameters.cfg
menu()
{
  local IFS=$' \t\n'                        ## Use default setting of IFS
  local num n=1 opt item cmd
  echo
## Loop though the command-line arguments
  for item in $(cat file1.txt);
  do
    printf "  %3d. %s\n" "$n" "${item%%:*}"
    n=$(( $n + 1 ))
  done
  echo
## If there are fewer than 10 items, set option to accept key without ENTER
  if [ $# -lt 10 ]
  then
    opt=-sn1
  else
    opt=
  fi
n1=$(( $n-1 ))
  read -p " (1 to $n1) ==> " $opt num         ## Get response from user
## Check that user entry is valid
  case $num in
    [qQ0] | "" ) return ;;                   ## q, Q or 0 or "" exits
    *[!0-9]* | 0*)                           ## invalid entry
       printf "\aInvalid response: %s\n" "$num" >&2
       return 1
       ;;
  esac
  echo
if [ "$num" -le "$n1" ]   ## Check that number is <= to the number of menu items
  then
	if [ $num -eq "1" ]; then
    		eval $opt1
  	elif [ $num -eq "2" ]; then
    		eval $opt2
  	elif [ $num -eq "3" ]; then
    		eval $opt3
  	elif [ $num -eq "4" ]; then
    		eval $opt4
  	elif [ $num -eq "5" ]; then
   		eval $opt5
  	else
   	printf "\aInvalid response: %s\n" "$num" >&2
    return 1
	fi
  fi
}
