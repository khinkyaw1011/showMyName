const myname='Hla Hla Sein';
 
export function showMyName(){

    return myname;
}
export function showMyNameUI(){
    const h1=document.createElement('h1');
    h1.innerHTML=myname;
    h1.style.position='fixed';
    h1.style.zIndex=1000;
    h1.style.fontSize=100+'px';
    h1.style.top=0;
    h1.style.right=0;
    h1.style.backgroundColor="black";
    h1.style.fontWeight="bold";
    document.body.append(h1);
}