import"./Theme.astro_astro_type_script_index_0_lang.ee5a355e.js";import"./hoisted.0168dec0.js";import"./SlugId.astro_astro_type_script_index_0_lang.288d8d2f.js";document.addEventListener("DOMContentLoaded",u);const m=document.getElementById("AllCustomItems"),t=document.getElementById("ServerUtilities"),s=document.getElementById("ServerFood"),o=document.getElementById("ServerDrinks"),l=document.getElementById("ServerWildMusicDiscs"),c=document.getElementById("ServerMiscellaneous"),a=document.getElementById("zackman1291Miniatures"),i=document.getElementById("zackman1291Toys"),d=document.getElementById("EggyLaddWeapons");document.getElementById("ServerUtilitiesButton").onclick=()=>{e(t)};document.getElementById("ServerFoodButton").onclick=()=>{e(s)};document.getElementById("ServerDrinksButton").onclick=()=>{e(o)};document.getElementById("ServerWildMusicDiscsButton").onclick=()=>{e(l)};document.getElementById("ServerMiscellaneousButton").onclick=()=>{e(c)};document.getElementById("zackman1291MiniaturesButton").onclick=()=>{e(a)};document.getElementById("zackman1291ToysButton").onclick=()=>{e(i)};document.getElementById("EggyLaddWeaponsButton").onclick=()=>{e(d)};function u(){y(),t.style.display="block",k()}function y(){m.style.display="none",t.style.display="none",s.style.display="none",o.style.display="none",l.style.display="none",c.style.display="none",a.style.display="none",i.style.display="none",d.style.display="none"}function e(n){y(),n.style.display==="none"?n.style.display="block":n.style.display="none"}function k(){let r=location.hash.toLocaleLowerCase().replace("#","");if(!r)e(t);else switch(r){case"server-utilities":e(t);break;case"server-food":e(s);break;case"server-drinks":e(o);break;case"server-wild-music-discs":e(l);break;case"server-miscellaneous":e(c);break;case"zackman1291-miniatures":e(a);break;case"zackman1291-toys":e(i);break;case"eggyladd-weapons":e(d);break;case"all":e(m);break;default:e(t)}}
