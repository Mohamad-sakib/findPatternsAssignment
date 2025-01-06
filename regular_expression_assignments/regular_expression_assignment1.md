1. What does the expression `"cat, bat, rat".match(/b\w+/)` do?
   => match method matches(select the first or more occurence of pattern based on flag) part of string that(satify the patter createrd using regex) start with b followed by sequence of char that satisfy the pattern \w (matchs charater of word).

2. What will `"123-456-7890".match(/\d{3}/)` return?
   =>match strictly the 3 consecutive char of string that(satisy the previous pattern) are inbetween [0 -9]

3. What does `"hello\nworld".match(/.\n./)` return?
   =>matchs anyChar except \n followed by \n followed by anyChar;

4. What will `"name@example.com".match(/\w+@\w+\.\w+/)` return?
   =>match part of string start with chars of words followed by @ followed by word followed by . followed by word. ,
   => name@example.com

5. What does `"file.txt".match(/\.txt/)` do?
   => match anychar except \n followed by txt
   =>.txt

6. What does `"red green blue".match(/green/)` do?
   => match first occurence of green in string
   =>green

7. What will `"abcdef".match(/[a-c]/)` return?
   =>match any single char between a and c.
   =>a

8. What does `"The quick brown fox".match(/q.+?k/)` return?
   =>match q followed by 1 and more occurence of char(that staisfy .) followed by 0 or 1 ocuurence of previous patter followed by k.
   =>quick
   => if k would be present at starting, result would be k only(confused).

9. What does `"apple".match(/a[a-z]+/)` return?
   =>match part of string start with a followed by sequence of consecutive char between a to z;
   =>apple
10. What will `"a1b2c3".match(/\d+/)` return?
    =>match sequences of consecutive chars that are between [0-9]
    => 1

11. What does `"good food mood".match(/o+o/)` do?
    =>match o followed by 1 and more occurence of o followed o
    =>oo

12. What does `"@username".match(/@\w+/)` return?
    =>@ followed by sequece of char stisfy the \w;
    =>@username

13. What does `"path/to/file".match(/\/to\//)` do?
    =>/ followed by to followed by /
    =>/to/
14. What does `"1.23".match(/\d\.\d+/)` return?
    =>any digit followed by any char except \n followed by sequece of consictive chars between [0-9]
    =>1.23

15. What will `"AB123CD".match(/[A-Z]+\d+/)` return?
    =>sequece of one and more char between [A-Z] followed by sequece of one and more consecutive digits;
    =>AB123

16. What does `"hello_world".match(/\w+_\w+/)` return?
    =>sequence of char satisfy \w followed by \_ followed by sequence of char;
    =>hello_world

17. What does `"123abc456".match(/\d{3}/)` return?
    =>match strictly 3 consecutive chars that are inbetween [0-9]
    =>123
18. What does `"My name is John".match(/name\s\w+/)` return?
    =>name is followed by space followed by word
    =>name is

19. What will `"https://example.com".match(/https?:\/\/\w+\.\w+/)` return?
    =>0 and more occurence of https followed by : followed by / followed by / word followed by . followed by word
    =>https://example.com

20. What does `"abcdEFGH".match(/[A-Z]+/)` return?
    =>EFGH

21. What does `"abc123".match(/(\w)(\d)/)` return?
    =>one word char followed by one digit
    =>c1
22. What will `"hello world".match(/(\w+)\s(\w+)/)` return?
    => match word (captured) followed by space followed by word (captured);
    =>hello world;
23. What does `"1234".match(/\d{2,3}/)` return?
    => sequece 2 to 3 consecutive digit between [0-9];\
    => 123

24. What will `"aaaabbb".match(/a{2,}/)` return?
    =>match sequence of 2 and more consecutive a
    =>aaaa

25. What does `"hello".match(/[aeiou]{2}/)` return?
    =>sequece of consecutive strictly two char in between [aioue]
    =>null

26. What does `"ABCD1234".match(/[A-Z]+\d+/)` return?
    =>one and more concecutive ocuurence of char between [A-Z] followed by one and and more concecutive occurence of char between [0-9]

27. What does `"file_name.ext".match(/(\w+)\.(\w+)/)` return?
    =>word followed by . followed by word
    =>file_name.ext;

28. What does `"Mississippi".match(/s{2,}/)` return?
    =>match strictly 2 consecutive occurence of s ;
    =>ss

29. What will `"hello world".match(/(\w)(?=\s\w)/)` return?
    => match only one char of word follwed by space followed by one char of word
    =>o

30. What does `"2025-01-01".match(/\d{4}-(\d{2})-(\d{2})/)[2]` return?
    =>match strictly 4 consecutive digits followed by - followed by strictly 2 consecutive digit(captured) followed by - followed by strictly 2 consecutive digit(captured) then returns 2 index value;
    =>01

31. What does `"abc123".match(/(\d+)(\w+)/)` return?
    =>sequence of consecutive digits followed by word
    =>123

32. What does `"hello123".match(/\D+/)` return?
    =>sequece of consecutive chars that are not digit
    =>hello

33. What will `"yes no maybe".match(/(\w+)\s(\w+)\s(\w+)/)` return?
    => word followed by space followed by word followed by space followed by word
    =>yes no maybe

34. What does `"color: #123456".match(/#[0-9a-fA-F]{6}/)` return?
    => # followed by strictly 6 consecutive chars in bewteen ranges in char class
    =>#123456

35. What does `"aaa111bbb222".match(/([a-z]+)(\d+)/)` return?
    =>sequece of consecutive chars in between [a-z] (captured) followed by digits
    =>aaa111

36. What will `"1,234.56".match(/\d{1,3}(,\d{3})*\.\d{2}/)` return?
    =>1 to 3 consecutive occurence of digit followed by o or more occurence of , and strictly 3 digits followed by . followed by strictly 2 consecutive digit
    =>1,234.56

37. What does `"aabbcc".match(/a(b{2})c/)` return?
    =>a followed by striclty 2 occurence of concecutive b(captured) followed by c
    =>abbc

38. What does `"xyzz".match(/x(y(z))/)` return?
    =>x followed by (y followed by z(captured))(captured);
    =>xyz

39. What does `"abab".match(/(ab)\1/)` return?
    =>ab(captured) followed by ab
    =>abab
40. What will `"abc123abc".match(/(abc)\d+\1/)` return?
    =>abc(captured) followed by digits followed by same digits
    =>abc123abc
