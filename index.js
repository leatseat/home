
fetch("https://api.ipdata.co/?api-key=c5f0c58519c44542c6f4119781a3f572488f269f5d12f907a3daa004")
.then(x=> x.json())
.then(x=> console.log(x))
