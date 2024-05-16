import{b as S,K as k,r as F,e as i,f as N,c as T,n as a,l as e,s as n,t as B,B as L,q as V,E as c,z as x,O as U,N as z,T as j,P,p as q}from"./.pnpm-DD7z4_75.js";import{i as K,a as M}from"./index-Dh755jfq.js";import{u as O}from"./aria2Store-LDNdhuAX.js";import{u as R}from"./fileListStore-CMBB-N2S.js";import{c as y}from"./copy-CWrVflxP.js";const G=m=>new Promise(p=>setTimeout(p,m)),H=V("h2",null,"链接列表",-1),Y=S({__name:"DownloadLinks",setup(m){const p=R(),{downloadLinks:_}=k(p),u=F([]),b=t=>u.value=t,g=O(),{aria2ConfigForm:d,aria2ConfigDialogVisible:v}=k(g),f=async t=>{try{await K.post(`${d.value.host}:${d.value.port}/jsonrpc`,{jsonrpc:"2.0",id:M(),method:"aria2.addUri",params:[`token:${d.value.token}`,[t.url],{out:t.filename,header:[`User-Agent: ${t.ua}`]}]})}catch{return c.error("发送失败, 请检查控制台输出, 自行谷歌搜索或提交issue")}c.success(`已把${t.filename}任务发送给下载器`)},h=async()=>{c.error("请确保最大同时下载文件数在5及以下,否则可能出现下载失败!"),await G(3e3),c.success("开始下载"),u.value.forEach(t=>f(t))},$=()=>v.value=!0;return(t,l)=>{const r=x,w=U,s=z,E=j,D=P,A=q;return i(_).length!==0?(N(),T(A,{key:0,class:"card"},{default:a(()=>[H,e(w,null,{default:a(()=>[e(r,{type:"primary",disabled:u.value.length<=0,onClick:l[0]||(l[0]=o=>h())},{default:a(()=>[n(" 批量下载 ")]),_:1},8,["disabled"]),e(r,{type:"primary",onClick:l[1]||(l[1]=o=>$())},{default:a(()=>[n("下载配置")]),_:1})]),_:1}),e(D,{border:"","show-overflow-tooltip":"",class:"table",data:i(_),onSelectionChange:b},{default:a(()=>[e(s,{type:"selection",width:"40"}),e(s,{prop:"ua",label:"UA"},{default:a(({row:o})=>[e(E,{type:"danger",onClick:C=>i(y)(o.ua,"已复制UA")},{default:a(()=>[n(B(o.ua),1)]),_:2},1032,["onClick"])]),_:1}),e(s,{prop:"filename",label:"文件名"}),e(s,{prop:"url",label:"下载链接"}),e(s,{label:"操作",width:"190"},{default:a(({row:o})=>[e(r,{type:"primary",size:"small",onClick:C=>i(y)(o.url,"已将链接复制到粘贴板内")},{default:a(()=>[n(" 复制链接 ")]),_:2},1032,["onClick"]),e(r,{type:"primary",size:"small",onClick:C=>f(o)},{default:a(()=>[n(" 发送Aria2 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})):L("",!0)}}});export{Y as default};