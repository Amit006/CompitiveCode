
1) Give me an example of below keywords
pass - 
break, 
continue


#pass 
def temp():
	pas

#break
def temp(list):
	for i in list:
		if(i %2 ===0 ):
			print(" even number present skip")
			break;
		print(" else part")
	print(" after loop")
--- output ---
it skip on even num and print - after loop 

#continue
list = [1,2,3,4,5,6]
def temp(list):
	for i in list:
		if(i %2 ===0 ):
			print(" even number present skip", i)
			continue;
		print(" else part", i)
	print(" end loop")
------output-------
 else part 1
 even number present skip 2
 else part 3
 even number present skip 4
 else part 5
 even number present skip 6
 end loop
	



for i in item:
	if(i%2 ===0):
		print(" even num present in list")
	pass



list 

2)Share data between two component A and B

@Component({
selector: 'app-child',
template: `<h1> {{message}}}</h1>` 
})
export Class Amit{
@input message

constructor(){

}

ngOnInit(){	

}	
}

@Component({
selector: "app-parent",
template: `<app-child [message]="parentMessage"> </app-child>`
})
export class ParentComponent {
	parentMessage = "Hello from parent"
	

}


Component A -> e- > c  
Component B -> e -> c 
