let btn=document.querySelector('.res-btn');
let menu=document.querySelector('.studio-menu-wrap');
let linkbtn=document.querySelectorAll("#link-btn");
btn.addEventListener('click',function(){//toogle menu
menu.classList.toggle("hide");
console.log('test');
});
linkbtn.forEach(function(index){
	index.addEventListener("click",function	(e){
		e.preventDefault()
		let addDiv=document.createElement("div"),
		mValue=Math.max(index.clientWidth,index.clientHeight),
		rect=index.getBoundingClientRect();
		sDiv=addDiv.style,
		px="px",
		sDiv.width=sDiv.height=mValue+px;
		sDiv.left=e.clientX-rect.left-(mValue/2)+px;
		sDiv.top=e.clientY-rect.top-(mValue/2)+px;
		addDiv.classList.add("circle");
		background=getComputedStyle(index).borderBlockEndColor;
		addDiv.style.backgroundColor=background;
		console.log(background);
		this.appendChild(addDiv);
		//console.log(sDiv);
	})
})



