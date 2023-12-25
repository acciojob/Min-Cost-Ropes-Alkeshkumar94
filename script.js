function mincost(arr)
{ 
//write your code here
// return the min cost
	let total=0;
  arr.sort((a,b)=>a-b);
	while(arr.length>1){
		let current=arr[0]+arr[1];
		total+=current;
		arr.splice(0,2);
		arr.push(current);
  arr.sort((a,b)=>a-b);
		
	}
	return total;
}
console.log(mincost([1,2,3,4]));
module.exports=mincost;
