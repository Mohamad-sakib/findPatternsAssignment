input expected
ADD 1 1 2  
SUB 1 1 0
RAND 0.5
RAND 1 10 5
RAND 1 invalid args
add 1 1 invalid command

this is time to decide right format of date will be transmitted accross client and server it should be json object
contract changed

input expected
{cmd:ADD, args:[1, 1] {result:2}  
{cmd:SUB, args:[1, 1] {result:0}  
{cmd:RAND, args:[] {result:0.5}  
{cmd:RAND, args:[1,10] {result:5}  
{cmd:RAND, args:[1] {error:"invalid args"}  
{cmd:add, args:[1,2] {error:"invalid command"}
