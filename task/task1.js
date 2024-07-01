const input = [2,3,5,3,3,2,5]
const count = {}

for (const num of input) {
    count[num] = count[num] 
    ? count[num]+1 : 1
}
console.log(count);
