const A=[
{n:'Troposfer',r:'0–12 km',t:'Makin tinggi makin dingin',d:'Lapisan terdingin kedua dan terpadat. Tempat hujan, angin, awan, serta pesawat terbang. Menyimpan hampir semua uap air atmosfer.',f:'Tinggi troposfer berbeda: ±8 km di kutub, ±18 km di ekuator.',c:'#5AA9F0',h:260},
{n:'Stratosfer',r:'12–50 km',t:'Makin tinggi makin hangat (ozon menyerap UV)',d:'Berisi lapisan ozon yang melindungi Bumi dari radiasi UV. Hampir bebas cuaca dan awan.',f:'Batas tertinggi yang bisa dicapai pesawat jet.',c:'#8E7CF0',h:200},
{n:'Mesosfer',r:'50–80 km',t:'Makin dingin, hingga ±−85°C (terdingin)',d:'Tempat sebagian besar meteor terbakar saat masuk ke Bumi.',f:'Hanya bisa dijangkau roket penelitian.',c:'#5b4fc4',h:180},
{n:'Termosfer',r:'80–700 km',t:'Makin tinggi makin panas (kepadatan sangat rendah)',d:'Mengandung ionosfer. Tempat aurora terjadi dan ISS mengorbit.',f:'Ionosfer memantulkan gelombang radio.',c:'#2a3a8a',h:220},
{n:'Eksosfer',r:'700–10.000 km',t:'Sangat rendah kepadatannya, menyatu dengan angin Matahari',d:'Lapisan terluar. Partikel bergerak bebas, banyak satelit mengorbit di sini.',f:'Batasnya perlahan memudar ke luar angkasa.',c:'#0b1230',h:260}];
const S=[
{n:'Horizon O',r:'Organik / humus',t:'Paling atas',d:'Daun, ranting, dan sisa makhluk hidup yang membusuk. Kaya humus, gelap, menyuburkan tanah.',f:'Humus adalah “makanan” utama tanah subur.',c:'#2b1d14',h:60},
{n:'Horizon A',r:'Topsoil',t:'Di bawah Horizon O',d:'Campuran mineral dan humus. Tempat akar tumbuh, cacing dan mikroorganisme hidup.',f:'Lapisan paling penting untuk pertanian.',c:'#4a2f1d',h:80},
{n:'Horizon E',r:'Eluviasi / pencucian',t:'Di bawah Horizon A (tidak selalu ada)',d:'Warnanya lebih terang karena leaching: besi, tanah liat, dan aluminium hanyut oleh air hujan ke lapisan bawah.',f:'Mineralnya menumpuk di Horizon B.',c:'#b9b19c',h:70,rain:1},
{n:'Horizon B',r:'Subsoil',t:'Di bawah Horizon A atau E',d:'Tempat penumpukan mineral yang tercuci (besi, tanah liat, kalsium). Kemerahan atau kekuningan, bahan organik sedikit.',f:'Warna merah berasal dari oksida besi.',c:'#9a4a2a',h:90,rain:1},
{n:'Horizon C',r:'Regolith',t:'Di atas batuan dasar',d:'Pecahan batuan yang mulai melapuk, hampir tanpa bahan organik. Cikal bakal tanah.',f:'Dari sinilah tanah baru terbentuk.',c:'#6b5a48',h:80},
{n:'Horizon R',r:'Bedrock',t:'Paling bawah',d:'Batuan padat yang belum lapuk, fondasi seluruh lapisan tanah di atasnya.',f:'Bisa berusia jutaan tahun.',c:'#3a3d44',h:80}];
const E=[
{n:'Kerak Bumi',r:'5–70 km',t:'Naik sampai ±1.100°C di dasar kerak',d:'Lapisan tertipis. Kerak benua (20–70 km) didominasi granit, kerak samudra (5–10 km) didominasi basalt. Tempat makhluk hidup dan gempa.',f:'Kerak hanya <1% volume Bumi.',c:'#6B3E26',rad:1},
{n:'Mantel',r:'±2.900 km',t:'±1.000°C sampai ribuan °C',d:'Lapisan paling tebal. Batuan silikat (peridotit) mengalir sangat lambat dalam arus konveksi yang menggerakkan lempeng tektonik.',f:'Terbagi jadi mantel atas dan mantel bawah.',c:'#C0392B',rad:.9},
{n:'Inti Luar',r:'±2.260 km',t:'±4.000–5.500°C',d:'Besi dan nikel cair. Gerakannya menghasilkan medan magnet Bumi (geodynamo).',f:'Geodynamo melindungi Bumi dari radiasi luar angkasa.',c:'#FF7A1A',rad:.62},
{n:'Inti Dalam',r:'jari-jari ±1.220 km',t:'±5.000–6.000°C',d:'Besi dan nikel padat. Tetap padat meski sangat panas karena tekanan luar biasa besar.',f:'Panasnya mendekati permukaan Matahari.',c:'#FFC244',rad:.3}];
const QS=[
['Lapisan atmosfer mana yang paling dingin?',['Troposfer','Stratosfer','Mesosfer','Termosfer'],2,'Mesosfer makin dingin sampai ±−85°C.'],
['Lapisan ozon berada di…',['Troposfer','Stratosfer','Termosfer','Eksosfer'],1,'Ozon di stratosfer menyerap radiasi UV.'],
['ISS mengorbit di lapisan…',['Mesosfer','Stratosfer','Termosfer','Troposfer'],2,'ISS berada di termosfer (80–700 km).'],
['Hujan dan awan terbentuk di…',['Troposfer','Mesosfer','Eksosfer','Stratosfer'],0,'Troposfer adalah tempat hampir semua fenomena cuaca.'],
['Lapisan internal Bumi paling tebal adalah…',['Kerak','Mantel','Inti luar','Inti dalam'],1,'Mantel tebalnya ±2.900 km.'],
['Medan magnet Bumi dihasilkan oleh…',['Kerak benua','Mantel atas','Inti luar yang cair','Inti dalam yang padat'],2,'Aliran logam cair di inti luar (geodynamo).'],
['Mengapa inti dalam padat padahal sangat panas?',['Tidak ada panas di sana','Tekanannya sangat besar','Terbuat dari batu','Terlalu jauh dari Matahari'],1,'Tekanan luar biasa menjaga besi-nikel tetap padat.'],
['Kerak benua didominasi batuan…',['Basalt','Peridotit','Granit','Besi'],2,'Kerak samudra basalt, kerak benua granit.'],
['Horizon tanah yang paling kaya humus adalah…',['Horizon O','Horizon B','Horizon C','Horizon R'],0,'Horizon O terdiri dari bahan organik yang membusuk.'],
['Proses pencucian (leaching) paling jelas terjadi di…',['Horizon O','Horizon E','Horizon C','Horizon R'],1,'Di Horizon E mineral hanyut ke Horizon B.']];

let xp=0,seen={};
function gain(k){if(!seen[k]){seen[k]=1;xp+=50;document.getElementById('xp').textContent=xp+' XP';const t=document.createElement('div');t.className='ts';t.textContent='+50 XP';document.body.appendChild(t);setTimeout(()=>t.remove(),2000)}}
let cur=[],ci=0,ck='';
function pop(L,i,k){cur=L;ci=i;ck=k;gain(k+i);draw();document.getElementById('pop').classList.add('on')}
function draw(){const x=cur[ci];document.getElementById('pb').style.boxShadow='0 0 60px '+x.c+'99';document.getElementById('pb').innerHTML=`<div class="bar" style="background:${x.c}"></div><div class="in"><div class="lab">${String(ci+1).padStart(2,'0')} / ${String(cur.length).padStart(2,'0')}</div><h3 style="font-size:28px">${x.n}</h3><div class="r"><small>UKURAN</small>${x.r}</div><div class="r"><small>SUHU / POSISI</small>${x.t}</div><div class="r"><small>CIRI UTAMA</small>${x.d}</div><div class="fk"><b>Fakta seru:</b> ${x.f}</div><div class="pn"><button onclick="mv(-1)">← Sebelumnya</button><button onclick="document.getElementById('pop').classList.remove('on')">Tutup ✕</button><button onclick="mv(1)">Lanjut →</button></div></div>`}
function mv(d){ci=(ci+d+cur.length)%cur.length;gain(ck+ci);draw()}
document.getElementById('pop').onclick=e=>{if(e.target.id=='pop')e.target.classList.remove('on')};

// Atmosfer (Eksosfer di atas, Troposfer di bawah)
const ai=document.getElementById('atmIn');
[...A].reverse().forEach(z=>{
  const i=A.indexOf(z);
  const d=document.createElement('div');
  d.className='z';
  d.style.height=z.h+'px';
  d.dataset.i=i;
  d.innerHTML=`<button class="z-btn" type="button"><b>${z.n}</b><small>${z.r}</small></button>`;
  d.querySelector('.z-btn').onclick=()=>pop(A,i,'a');
  deco(d,i);
  ai.appendChild(d);
});

function deco(z,i){
  let h=`<b class='dc wmk'>${A[i].n.toUpperCase()}</b><span class='dc zl' style='right:14px;bottom:8px'>${A[i].r}</span>`;
  if(i==0){
    h+=`<svg class="dc" style="left:0;bottom:0;width:100%;height:100px" viewBox="0 0 600 100" preserveAspectRatio="none"><path d="M0 100 L0 55 Q70 25 150 60 Q230 95 320 40 Q410 -15 500 50 Q550 75 600 45 L600 100 Z" fill="#1b3b5c"/><path d="M0 100 L0 72 Q90 50 180 75 Q270 95 360 65 Q450 40 530 78 Q570 90 600 70 L600 100 Z" fill="#0f263d"/></svg><div class="dc fly-jet" style="top:35px"><svg width="105" height="38" viewBox="0 0 105 38"><line x1="-80" y1="19" x2="20" y2="19" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" filter="blur(1px)"/><path d="M12 19 C18 14 78 14 92 18 C100 20 104 22 98 23 C84 25 22 24 12 19 Z" fill="#ffffff"/><path d="M88 17 Q93 18 95 20 Q91 20 88 19 Z" fill="#1e293b"/><polygon points="42,19 30,35 42,35 64,19" fill="#cbd5e1"/><polygon points="30,35 28,31 31,31" fill="#0284c7"/><rect x="45" y="25" width="14" height="5" rx="2.5" fill="#64748b"/><polygon points="14,19 8,5 18,5 26,19" fill="#2563eb"/></svg></div><div class="dc" style="left:8%;top:18px"><svg width="170" height="65" viewBox="0 0 170 65"><path d="M25 50 Q10 50 10 36 Q10 22 28 22 Q38 8 62 10 Q80 4 104 16 Q122 8 142 20 Q160 22 158 40 Q158 50 135 50 Z" fill="rgba(255,255,255,0.88)" filter="drop-shadow(0 6px 14px rgba(10,30,60,0.15))"/></svg></div><div class="dc" style="right:6%;top:85px"><svg width="140" height="55" viewBox="0 0 140 55"><path d="M20 44 Q8 44 8 32 Q8 20 24 20 Q32 8 50 10 Q66 5 84 14 Q100 8 116 16 Q130 20 128 34 Q128 44 110 44 Z" fill="rgba(255,255,255,0.78)" filter="drop-shadow(0 4px 10px rgba(10,30,60,0.12))"/></svg></div><div class="dc bob-balloon" style="left:82%;top:110px"><svg width="32" height="46" viewBox="0 0 32 46"><ellipse cx="16" cy="17" rx="14" ry="16" fill="#f59e0b"/><path d="M10 17 Q16 26 16 33 Q16 26 22 17 Q16 1 10 17 Z" fill="#ef4444"/><rect x="13" y="38" width="6" height="5" rx="1" fill="#78350f"/><line x1="12" y1="33" x2="14" y2="38" stroke="#92400e" stroke-width="0.8"/><line x1="20" y1="33" x2="18" y2="38" stroke="#92400e" stroke-width="0.8"/></svg></div><svg class="dc" style="left:12%;top:90px" width="70" height="90" viewBox="0 0 70 90"><line x1="10" y1="10" x2="5" y2="80" stroke="rgba(147,197,253,0.6)" stroke-width="1.5" stroke-dasharray="6 8"/><line x1="25" y1="5" x2="20" y2="85" stroke="rgba(147,197,253,0.6)" stroke-width="1.5" stroke-dasharray="8 6"/><line x1="40" y1="15" x2="35" y2="75" stroke="rgba(147,197,253,0.6)" stroke-width="1.5" stroke-dasharray="6 8"/><line x1="55" y1="8" x2="50" y2="82" stroke="rgba(147,197,253,0.6)" stroke-width="1.5" stroke-dasharray="7 7"/></svg>`;
  } else if(i==1){
    h+=`<div class="dc ozone-bar"><span>🛡️ LAPISAN OZON (O₃) · PENYERAP RADIASI UV MATAHARI</span></div><div class="dc" style="right:12%;top:20px"><svg width="80" height="80" viewBox="0 0 80 80"><path d="M10 10 L35 35 L10 60" stroke="#facc15" stroke-width="2" stroke-dasharray="4 3" fill="none"/><path d="M22 10 L47 35 L22 60" stroke="#facc15" stroke-width="2" stroke-dasharray="4 3" fill="none"/><path d="M44 8 C60 22 60 48 44 62" stroke="#22e5ff" stroke-width="3" fill="none" filter="drop-shadow(0 0 8px #22e5ff)"/></svg></div><div class="dc bob-radiosonde" style="left:15%;top:30px"><svg width="40" height="70" viewBox="0 0 40 70"><ellipse cx="20" cy="20" rx="18" ry="19" fill="rgba(255,255,255,0.92)" stroke="rgba(200,225,255,0.6)" stroke-width="1.2"/><line x1="20" y1="39" x2="20" y2="52" stroke="#cbd5e1" stroke-width="1"/><path d="M15 48 Q20 44 25 48 Z" fill="#ef4444"/><line x1="20" y1="52" x2="20" y2="60" stroke="#cbd5e1" stroke-width="1"/><rect x="16" y="60" width="8" height="7" rx="1.5" fill="#f8fafc" stroke="#64748b" stroke-width="0.8"/></svg></div><div class="dc fly-supersonic" style="top:18px"><svg width="90" height="26" viewBox="0 0 90 26"><ellipse cx="6" cy="13" rx="8" ry="2.5" fill="#60a5fa" filter="blur(2px)"/><path d="M2 13 L86 13 Q72 10 52 5 L44 5 L50 13 L44 21 L52 21 Q72 16 86 13 Z" fill="#1e293b"/><polygon points="30,13 18,2 14,2 20,13 14,24 18,24" fill="#0f172a"/></svg></div>`;
  } else if(i==2){
    h+=`<div class="dc meteor-trail" style="left:15%;top:18px"></div><div class="dc meteor-trail" style="left:60%;top:45px;animation-delay:-2.2s"></div><svg class="dc" style="left:0;top:25px;width:100%;height:40px" viewBox="0 0 600 40" preserveAspectRatio="none"><path d="M0 20 Q150 5 300 20 Q450 35 600 20" stroke="rgba(56,189,248,0.4)" stroke-width="2.5" fill="none" filter="blur(2px)"/><path d="M0 28 Q180 15 360 28 Q500 38 600 25" stroke="rgba(168,85,247,0.3)" stroke-width="2" fill="none" filter="blur(2px)"/></svg>`;
  } else if(i==3){
    h+=`<div class="dc aurora-wrap"><div class="aurora-curtain"></div></div><div class="dc fly-iss" style="top:40px"><svg width="125" height="55" viewBox="0 0 125 55"><defs><linearGradient id="solarG" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#1e3a8a"/><stop offset="50%" stop-color="#2563eb"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient></defs><rect x="4" y="6" width="34" height="17" rx="2" fill="url(#solarG)" stroke="#60a5fa" stroke-width="0.8"/><rect x="4" y="31" width="34" height="17" rx="2" fill="url(#solarG)" stroke="#60a5fa" stroke-width="0.8"/><line x1="21" y1="6" x2="21" y2="48" stroke="#94a3b8" stroke-width="1.5"/><rect x="87" y="6" width="34" height="17" rx="2" fill="url(#solarG)" stroke="#60a5fa" stroke-width="0.8"/><rect x="87" y="31" width="34" height="17" rx="2" fill="url(#solarG)" stroke="#60a5fa" stroke-width="0.8"/><line x1="104" y1="6" x2="104" y2="48" stroke="#94a3b8" stroke-width="1.5"/><line x1="36" y1="27" x2="89" y2="27" stroke="#cbd5e1" stroke-width="3"/><rect x="52" y="20" width="20" height="15" rx="3" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/><rect x="58" y="12" width="8" height="30" rx="2" fill="#e2e8f0" stroke="#64748b" stroke-width="0.8"/><circle cx="62" cy="27" r="3" fill="#38bdf8"/></svg></div><div class="dc" style="left:10%;bottom:12px"><svg width="90" height="36" viewBox="0 0 90 36"><path d="M4 32 Q45 -8 86 32" stroke="rgba(34,229,255,0.7)" stroke-width="1.8" stroke-dasharray="4 3" fill="none"/><circle cx="45" cy="11" r="2.5" fill="#22e5ff" filter="drop-shadow(0 0 5px #22e5ff)"/></svg></div>`;
  } else {
    h+=`<div class="dc" style="left:10%;top:24px"><svg width="56" height="56" viewBox="0 0 56 56"><defs><radialGradient id="moonG" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="#ffffff"/><stop offset="50%" stop-color="#cbd5e1"/><stop offset="85%" stop-color="#64748b"/><stop offset="100%" stop-color="#334155"/></radialGradient></defs><circle cx="28" cy="28" r="22" fill="url(#moonG)" filter="drop-shadow(0 0 14px rgba(226,232,240,0.45))"/><ellipse cx="20" cy="20" rx="3.5" ry="2.5" fill="rgba(71,85,105,0.3)"/><ellipse cx="30" cy="32" rx="5" ry="3.5" fill="rgba(71,85,105,0.35)"/></svg></div><div class="dc fly-sat" style="top:32px"><svg width="86" height="46" viewBox="0 0 86 46"><rect x="2" y="14" width="26" height="17" rx="2" fill="#1d4ed8" stroke="#60a5fa" stroke-width="0.8"/><rect x="58" y="14" width="26" height="17" rx="2" fill="#1d4ed8" stroke="#60a5fa" stroke-width="0.8"/><line x1="26" y1="22" x2="60" y2="22" stroke="#e2e8f0" stroke-width="2"/><rect x="34" y="12" width="18" height="20" rx="3" fill="#f59e0b" stroke="#fbbf24" stroke-width="1"/><circle cx="43" cy="22" r="3.5" fill="#38bdf8"/><path d="M43 12 Q43 2 34 4" stroke="#e2e8f0" stroke-width="1.4" fill="none"/><circle cx="43" cy="38" r="1.5" fill="#ef4444"/></svg></div>`;
  }
  if(i>=2){
    const sc=i==2?14:(i==3?24:45);
    for(let k=0;k<sc;k++){
      h+=`<i class="dc st-twinkle" style="left:${(Math.random()*95+2).toFixed(1)}%;top:${(Math.random()*90+5).toFixed(1)}%;animation-delay:-${(Math.random()*2.5).toFixed(1)}s"></i>`;
    }
  }
  z.insertAdjacentHTML('afterbegin',h);
}

const at=document.getElementById('atm');at.scrollTop=at.scrollHeight;
function ar(){const m=at.getBoundingClientRect(),c=m.top+m.height/2;ai.querySelectorAll('.z').forEach(z=>{const b=z.getBoundingClientRect();if(b.top<=c&&b.bottom>c){const x=A[z.dataset.i];rn.textContent=x.n;rr.textContent=x.r;rt.textContent=x.t}})}
at.onscroll=ar;ar();
A.forEach((x,i)=>{const b=document.createElement('button');b.innerHTML=`${x.n}<small>${x.r}</small>`;b.onclick=()=>pop(A,i,'a');al.appendChild(b)});

// Tanah (Geological Soil Profile)
function getSoilArt(i){
  switch(i){
    case 0:
      return `<svg class="h-art" viewBox="0 0 600 80" preserveAspectRatio="none"><path d="M40 30 Q55 20 70 32 Q60 45 40 30 Z" fill="#190e07" opacity="0.7"/><path d="M120 45 Q135 30 155 42 Q145 60 120 45 Z" fill="#140a05" opacity="0.8"/><path d="M420 25 Q440 15 460 30 Q445 45 420 25 Z" fill="#1a1008" opacity="0.7"/><path d="M510 40 Q530 25 550 38 Q535 55 510 40 Z" fill="#140b05" opacity="0.8"/></svg>`;
    case 1:
      return `<svg class="h-art" viewBox="0 0 600 100" preserveAspectRatio="none"><g stroke="#d4a373" stroke-linecap="round" fill="none" opacity="0.85"><path d="M300 0 C298 25 285 45 270 70 C260 85 245 98 240 100" stroke-width="3"/><path d="M285 45 C255 55 230 65 190 75 C160 82 130 85 95 90" stroke-width="2"/><path d="M230 65 C215 78 195 88 170 95" stroke-width="1.4"/><path d="M270 70 C290 82 320 90 355 98" stroke-width="1.8"/><path d="M300 15 C330 30 370 42 410 52 C450 62 490 68 535 72" stroke-width="2.2"/><path d="M410 52 C430 68 460 78 495 88" stroke-width="1.4"/><path d="M80 0 C85 20 95 38 110 58 C120 72 135 85 150 95" stroke-width="1.6"/><path d="M510 0 C505 22 490 45 475 65 C460 82 440 92 425 100" stroke-width="1.8"/></g></svg>`;
    case 2:
      return `<svg class="h-art" viewBox="0 0 600 80" preserveAspectRatio="none"><g fill="rgba(255,255,255,0.4)"><circle cx="80" cy="25" r="1.5"/><circle cx="140" cy="55" r="2"/><circle cx="210" cy="30" r="1.5"/><circle cx="290" cy="60" r="2"/><circle cx="360" cy="22" r="1.5"/><circle cx="440" cy="48" r="2"/><circle cx="520" cy="35" r="1.5"/></g></svg><i class="dc leach-drop" style="left:22%;top:5px"></i><i class="dc leach-drop" style="left:48%;top:15px;animation-delay:-0.5s"></i><i class="dc leach-drop" style="left:74%;top:8px;animation-delay:-1.1s"></i>`;
    case 3:
      return `<svg class="h-art" viewBox="0 0 600 110" preserveAspectRatio="none"><g fill="#682410" opacity="0.6"><rect x="70" y="25" width="28" height="22" rx="4"/><rect x="180" y="45" width="36" height="26" rx="5"/><rect x="320" y="20" width="32" height="24" rx="4"/><rect x="440" y="55" width="40" height="28" rx="6"/><rect x="520" y="25" width="26" height="20" rx="4"/></g><path d="M240 0 C238 25 230 50 220 75" stroke="#b08968" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.65"/><path d="M425 0 C420 30 410 60 400 80" stroke="#b08968" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.65"/></svg>`;
    case 4:
      return `<svg class="h-art" viewBox="0 0 600 100" preserveAspectRatio="none"><polygon points="50,45 75,25 115,30 130,60 100,75 65,70" fill="#44382e" stroke="#5c4d3f" stroke-width="2"/><polygon points="190,55 220,30 270,35 295,65 260,85 210,80" fill="#3d3229" stroke="#544538" stroke-width="2"/><polygon points="340,40 375,20 420,28 440,58 410,75 360,70" fill="#4a3d32" stroke="#5f4f41" stroke-width="2"/><polygon points="480,50 510,32 550,38 565,68 535,82 495,78" fill="#3d3229" stroke="#544538" stroke-width="2"/></svg>`;
    case 5:
      return `<svg class="h-art" viewBox="0 0 600 110" preserveAspectRatio="none"><g stroke="#1e2026" stroke-width="2.5" fill="none" opacity="0.9"><path d="M0 25 L180 32 L360 22 L600 35"/><path d="M0 65 L220 58 L420 68 L600 58"/><path d="M140 28 L170 58 L155 90"/><path d="M380 23 L410 64 L395 105"/></g><path d="M40 0 L90 45 L130 110" stroke="rgba(255,255,255,0.25)" stroke-width="1.8" fill="none"/><path d="M480 0 L515 50 L560 110" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" fill="none"/></svg>`;
  }
}

soil.innerHTML = `<div class="soil-surface"><svg viewBox="0 0 600 48" preserveAspectRatio="none"><defs><linearGradient id="grassG1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#15803d"/></linearGradient><linearGradient id="grassG2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22c55e"/><stop offset="100%" stop-color="#166534"/></linearGradient></defs><path d="M0,48 L10,18 L20,48 L35,12 L48,48 L65,15 L78,48 L95,10 L110,48 L125,16 L140,48 L160,8 L175,48 L190,14 L205,48 L225,10 L240,48 L260,18 L275,48 L295,8 L310,48 L330,15 L345,48 L365,10 L380,48 L400,16 L415,48 L435,8 L450,48 L470,14 L485,48 L505,10 L520,48 L540,16 L555,48 L575,8 L590,48 L600,20 L600,48 Z" fill="url(#grassG1)"/><path d="M0,48 L15,25 L28,48 L42,20 L55,48 L75,22 L88,48 L105,18 L118,48 L135,22 L148,48 L170,16 L185,48 L200,24 L215,48 L235,18 L250,48 L270,22 L285,48 L305,16 L320,48 L340,24 L355,48 L375,18 L390,48 L410,22 L425,48 L445,16 L460,48 L480,24 L495,48 L515,18 L530,48 L550,22 L565,48 L585,16 L600,28 L600,48 Z" fill="url(#grassG2)"/></svg><span style="position:relative;z-index:2">🌱 PERMUKAAN TANAH · VEGETASI & HUMUS</span></div>`;

const horizonDepths = ['0–5 cm', '5–25 cm', '25–45 cm', '45–80 cm', '80–130 cm', '130+ cm'];
const horizonGradients = [
  'linear-gradient(180deg, #23160c 0%, #301d10 100%)',
  'linear-gradient(180deg, #382213 0%, #462b18 100%)',
  'linear-gradient(180deg, #968c77 0%, #b0a690 100%)',
  'linear-gradient(180deg, #87361a 0%, #a04323 100%)',
  'linear-gradient(180deg, #544638 0%, #695747 100%)',
  'linear-gradient(180deg, #262930 0%, #353842 100%)'
];

S.forEach((x, i) => {
  const b = document.createElement('button');
  b.className = 'h';
  const hh = Math.round(x.h * 1.55);
  b.style.cssText = `height:${hh}px;background:${horizonGradients[i]};color:${i == 2 ? '#1f2937' : '#ffffff'};`;
  b.innerHTML = `
    ${getSoilArt(i)}
    <div class="h-label">
      <b>${x.n}</b>
      <span>${x.r}</span>
    </div>
    <div class="h-depth">${horizonDepths[i]}</div>
  `;
  b.onclick = () => pop(S, i, 's');
  soil.appendChild(b);

  const l = document.createElement('button');
  l.innerHTML = `${x.n}<small>${x.r} (${horizonDepths[i]})</small>`;
  l.onclick = () => pop(S, i, 's');
  sl.appendChild(l);
});

// Simplex/Value Noise function (used by terrain and cross-sections)
const hs=(x,y)=>{const s=Math.sin(x*127.1+y*311.7)*43758.5453;return s-Math.floor(s)},vn=(x,y)=>{const ix=Math.floor(x),iy=Math.floor(y),fx=x-ix,fy=y-iy,u=fx*fx*(3-2*fx),w=fy*fy*(3-2*fy);return hs(ix,iy)*(1-u)*(1-w)+hs(ix+1,iy)*u*(1-w)+hs(ix,iy+1)*(1-u)*w+hs(ix+1,iy+1)*u*w},fb=(x,y)=>{let v=0,a=.5;for(let o=0;o<5;o++){v+=a*vn(x,y);a/=2;x*=2.03;y*=2.03}return v};window.FB=fb;

// Section 3 Three.js Helper
function mk(cv){const r=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true});const s=new THREE.Scene(),cam=new THREE.PerspectiveCamera(40,1,.1,50);cam.position.z=4.2;s.add(new THREE.AmbientLight(0xffffff,.75));const l=new THREE.DirectionalLight(0xffffff,.9);l.position.set(3,2,4);s.add(l);const g=new THREE.Group();s.add(g);
const rs=()=>{const w=cv.clientWidth,h=cv.clientHeight;r.setPixelRatio(Math.min(devicePixelRatio||1,2));r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()};addEventListener('resize',rs);rs();
let dn=false,lx=0,ly=0,mvd=0;cv.onpointerdown=e=>{dn=true;lx=e.clientX;ly=e.clientY;mvd=0;cv.setPointerCapture(e.pointerId)};
cv.onpointermove=e=>{if(!dn)return;g.rotation.y+=(e.clientX-lx)*.01;g.rotation.x=Math.max(-1,Math.min(1,g.rotation.x+(e.clientY-ly)*.01));mvd+=Math.abs(e.clientX-lx)+Math.abs(e.clientY-ly);lx=e.clientX;ly=e.clientY};
cv.onpointerup=()=>dn=false;return{r,s,cam,g,moved:()=>mvd>6}}

// ==========================================
// REALISTIC 3D EARTH (Hero Section)
// ==========================================
const heroCanvas = document.getElementById('hc');
const heroRenderer = new THREE.WebGLRenderer({
  canvas: heroCanvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance'
});
heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

const heroScene = new THREE.Scene();
const heroCamera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
heroCamera.position.set(0, 0, 4.3);

const resizeHero = () => {
  const w = heroCanvas.clientWidth || 800;
  const h = heroCanvas.clientHeight || 500;
  heroRenderer.setSize(w, h, false);
  heroCamera.aspect = w / h;
  heroCamera.updateProjectionMatrix();
};
addEventListener('resize', resizeHero);
resizeHero();

// Sun & Space Lighting (Realistic Day/Night contrast)
const sunDirection = new THREE.Vector3(5, 2.5, 4).normalize();
const sunLight = new THREE.DirectionalLight(0xffffff, 1.3);
sunLight.position.copy(sunDirection).multiplyScalar(10);
heroScene.add(sunLight);

const ambientSpace = new THREE.AmbientLight(0x0a1426, 0.22);
heroScene.add(ambientSpace);

// Distant Starfield Background (Deep Space)
(function createStarfield() {
  const count = 1600;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random(), v = Math.random();
    const theta = u * 2 * Math.PI;
    const phi = Math.acos(2 * v - 1);
    const r = 38 + Math.random() * 26;
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
    const bright = 0.35 + Math.random() * 0.65;
    const tone = Math.random();
    if (tone < 0.6) {
      col[i * 3] = 0.85 * bright;
      col[i * 3 + 1] = 0.92 * bright;
      col[i * 3 + 2] = 1.0 * bright;
    } else if (tone < 0.85) {
      col[i * 3] = bright;
      col[i * 3 + 1] = bright;
      col[i * 3 + 2] = bright;
    } else {
      col[i * 3] = bright;
      col[i * 3 + 1] = 0.88 * bright;
      col[i * 3 + 2] = 0.72 * bright;
    }
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  heroScene.add(new THREE.Points(geo, new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: false
  })));
})();

// Earth Hierarchy
const earthSystem = new THREE.Group();
heroScene.add(earthSystem);

// Axial tilt: 23.44° (obliquity of Earth's rotational axis)
const tiltGroup = new THREE.Group();
tiltGroup.rotation.z = 23.44 * Math.PI / 180;
earthSystem.add(tiltGroup);

const earthSpinGroup = new THREE.Group();
tiltGroup.add(earthSpinGroup);

const cloudsSpinGroup = new THREE.Group();
tiltGroup.add(cloudsSpinGroup);

// Texture Loader
const texLoader = new THREE.TextureLoader();
texLoader.setCrossOrigin('anonymous');
const textures = (typeof window !== 'undefined' && window.EARTH_TEXTURES) ? window.EARTH_TEXTURES : {};

let sharedEarthTex = null;
const loadT = (key, fallbackUrl, cb) => {
  const src = textures[key] || fallbackUrl;
  return texLoader.load(src, t => {
    t.anisotropy = Math.min(heroRenderer.capabilities.getMaxAnisotropy() || 8, 8);
    if (cb) cb(t);
  }, undefined, () => {
    if (src !== fallbackUrl) {
      texLoader.load(fallbackUrl, t => {
        t.anisotropy = Math.min(heroRenderer.capabilities.getMaxAnisotropy() || 8, 8);
        if (cb) cb(t);
      }, undefined, () => {});
    }
  });
};

// Earth Surface (NASA Blue Marble)
const earthRadius = 1.4;
const earthGeo = new THREE.SphereGeometry(earthRadius, 64, 64);
const earthMat = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  specular: new THREE.Color(0x334455),
  shininess: 28,
  bumpScale: 0.035
});
const earthMesh = new THREE.Mesh(earthGeo, earthMat);
earthSpinGroup.add(earthMesh);

// Initial baseline world texture (immediate display, upgraded as high-res NASA textures load)
try {
  const fallbackTex = worldTex();
  earthMat.map = fallbackTex;
  earthMat.needsUpdate = true;
} catch(e) {}

// Load Earth Textures
loadT('earth', 'img/earth.jpg', t => {
  sharedEarthTex = t;
  earthMat.map = t;
  earthMat.needsUpdate = true;
  if (typeof cm !== 'undefined' && cm) {
    cm.map = t;
    cm.needsUpdate = true;
  }
});

loadT('normal', 'img/earth_normal.jpg', t => {
  earthMat.bumpMap = t;
  earthMat.bumpScale = 0.035;
  earthMat.needsUpdate = true;
});

loadT('specular', 'img/earth_specular.jpg', t => {
  earthMat.specularMap = t;
  earthMat.needsUpdate = true;
});

// Night City Lights (NASA Black Marble, visible only on night side)
let lightsMesh = null;
loadT('lights', 'img/earth_lights.png', t => {
  const lightsMat = new THREE.ShaderMaterial({
    uniforms: {
      tLights: { value: t },
      uSunDir: { value: sunDirection }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tLights;
      uniform vec3 uSunDir;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        float sunDot = dot(normalize(vNormal), normalize(uSunDir));
        float night = smoothstep(0.08, -0.16, sunDot);
        vec4 lightCol = texture2D(tLights, vUv);
        vec3 col = lightCol.rgb * vec3(1.15, 0.95, 0.72) * night * 1.5;
        gl_FragColor = vec4(col, lightCol.r * night);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  lightsMesh = new THREE.Mesh(new THREE.SphereGeometry(earthRadius + 0.0015, 64, 64), lightsMat);
  earthSpinGroup.add(lightsMesh);
});

// Cloud Layer (Realistic Tropospheric Clouds)
let cloudsMesh = null;
loadT('clouds', 'img/earth_clouds.png', t => {
  const cloudsMat = new THREE.MeshPhongMaterial({
    map: t,
    transparent: true,
    opacity: 0.82,
    blending: THREE.NormalBlending,
    depthWrite: false
  });
  cloudsMesh = new THREE.Mesh(new THREE.SphereGeometry(earthRadius + 0.008, 64, 64), cloudsMat);
  cloudsSpinGroup.add(cloudsMesh);
});

// Realistic Rayleigh Atmosphere Limb
const atmosMat = new THREE.ShaderMaterial({
  uniforms: { uSunDir: { value: sunDirection } },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vWorldNormal;
    varying vec3 vViewPos;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPos = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform vec3 uSunDir;
    varying vec3 vNormal;
    varying vec3 vWorldNormal;
    varying vec3 vViewPos;
    void main() {
      vec3 viewDir = normalize(vViewPos);
      float fresnel = 1.0 - max(dot(viewDir, vNormal), 0.0);
      fresnel = pow(fresnel, 3.4);
      float sunDot = dot(normalize(vWorldNormal), normalize(uSunDir));
      float sunIllum = smoothstep(-0.25, 0.45, sunDot) * 0.75 + 0.25;
      vec3 atmosBlue = vec3(0.28, 0.62, 1.0);
      gl_FragColor = vec4(atmosBlue, fresnel * sunIllum * 0.95);
    }
  `,
  transparent: true,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});
tiltGroup.add(new THREE.Mesh(new THREE.SphereGeometry(earthRadius + 0.018, 64, 64), atmosMat));

// Faint Outer Atmospheric Glow
const outerAtmosMat = new THREE.ShaderMaterial({
  uniforms: { uSunDir: { value: sunDirection } },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vWorldNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 uSunDir;
    varying vec3 vNormal;
    varying vec3 vWorldNormal;
    void main() {
      float intensity = pow(0.66 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.6);
      float sunDot = dot(normalize(vWorldNormal), normalize(uSunDir));
      float sunIllum = smoothstep(-0.35, 0.45, sunDot) * 0.7 + 0.3;
      vec3 col = vec3(0.25, 0.58, 1.0);
      gl_FragColor = vec4(col, 1.0) * intensity * sunIllum * 0.7;
    }
  `,
  transparent: true,
  side: THREE.BackSide,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});
tiltGroup.add(new THREE.Mesh(new THREE.SphereGeometry(earthRadius + 0.12, 64, 64), outerAtmosMat));

// Interactive Controls, Inertia & Zoom
let isDragging = false;
let prevPointerX = 0, prevPointerY = 0;
let velX = 0, velY = 0;
let rotX = 0.12, rotY = 0;
let autoRotate = true;
let userInteractedTime = 0;
let targetZoom = 4.3;
const minZoom = 2.2;
const maxZoom = 6.5;

heroCanvas.addEventListener('pointerdown', e => {
  isDragging = true;
  prevPointerX = e.clientX;
  prevPointerY = e.clientY;
  velX = 0;
  velY = 0;
  heroCanvas.setPointerCapture(e.pointerId);
  userInteractedTime = performance.now();
});

heroCanvas.addEventListener('pointermove', e => {
  if (!isDragging) return;
  const dx = e.clientX - prevPointerX;
  const dy = e.clientY - prevPointerY;
  velX = dx * 0.0045;
  velY = dy * 0.0045;
  rotY += velX;
  rotX = Math.max(-1.3, Math.min(1.3, rotX + velY));
  prevPointerX = e.clientX;
  prevPointerY = e.clientY;
  userInteractedTime = performance.now();
});

const stopDrag = () => { isDragging = false; };
heroCanvas.addEventListener('pointerup', stopDrag);
heroCanvas.addEventListener('pointercancel', stopDrag);

// Scroll Wheel Zoom
heroCanvas.addEventListener('wheel', e => {
  e.preventDefault();
  targetZoom = Math.max(minZoom, Math.min(maxZoom, targetZoom + e.deltaY * 0.0025));
  userInteractedTime = performance.now();
}, { passive: false });

// Touch Pinch-to-Zoom
let touchDist0 = 0, zoomStart = targetZoom;
heroCanvas.addEventListener('touchstart', e => {
  if (e.touches.length === 2) {
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    touchDist0 = Math.hypot(dx, dy);
    zoomStart = targetZoom;
  }
}, { passive: true });

heroCanvas.addEventListener('touchmove', e => {
  if (e.touches.length === 2 && touchDist0 > 0) {
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    const d = Math.hypot(dx, dy);
    targetZoom = Math.max(minZoom, Math.min(maxZoom, zoomStart * (touchDist0 / d)));
    userInteractedTime = performance.now();
  }
}, { passive: true });

// UI Control Buttons
const btnRotate = document.getElementById('btnRotate');
const btnClouds = document.getElementById('btnClouds');
const btnLights = document.getElementById('btnLights');
const btnReset = document.getElementById('btnReset');
const btnZoomIn = document.getElementById('btnZoomIn');
const btnZoomOut = document.getElementById('btnZoomOut');

if (btnRotate) {
  btnRotate.onclick = () => {
    autoRotate = !autoRotate;
    btnRotate.classList.toggle('active', autoRotate);
    btnRotate.textContent = autoRotate ? '⏸️ Putar' : '▶️ Putar';
  };
}
if (btnClouds) {
  btnClouds.onclick = () => {
    if (cloudsMesh) {
      cloudsMesh.visible = !cloudsMesh.visible;
      btnClouds.classList.toggle('active', cloudsMesh.visible);
    }
  };
}
if (btnLights) {
  btnLights.onclick = () => {
    if (lightsMesh) {
      lightsMesh.visible = !lightsMesh.visible;
      btnLights.classList.toggle('active', lightsMesh.visible);
    }
  };
}
if (btnReset) {
  btnReset.onclick = () => {
    rotX = 0.12;
    rotY = 0;
    velX = 0;
    velY = 0;
    targetZoom = 4.3;
    autoRotate = true;
    if (btnRotate) {
      btnRotate.classList.add('active');
      btnRotate.textContent = '⏸️ Putar';
    }
  };
}
if (btnZoomIn) {
  btnZoomIn.onclick = () => {
    targetZoom = Math.max(minZoom, targetZoom - 0.6);
  };
}
if (btnZoomOut) {
  btnZoomOut.onclick = () => {
    targetZoom = Math.min(maxZoom, targetZoom + 0.6);
  };
}

// Section 3 (Dalam Bumi) UI Setup
const cr=document.createElement('div'),sz=[100,88,60,30],bgc=['radial-gradient(circle,#8a5a3a,#6B3E26)','radial-gradient(circle,#e0603f,#a8281a)','radial-gradient(circle,#ff9a3c,#FF7A1A)','radial-gradient(circle,#fff6d0,#FFC244)'],pos=[[-50,47],[200,37],[40,22],[0,0]];let drl=null;
E.forEach((e,i)=>{const r=document.createElement('div');r.className='rg';r.style.cssText=`width:${sz[i]}%;height:${sz[i]}%;top:${(100-sz[i])/2}%;left:${(100-sz[i])/2}%;background:${bgc[i]};color:${e.c}`;r.onclick=ev=>{ev.stopPropagation();sel(i)};cr.appendChild(r);
const a=pos[i][0]*Math.PI/180,d=pos[i][1],h=document.createElement('button');h.className='hs';h.style.cssText=`left:${50+d*Math.cos(a)}%;top:${50+d*Math.sin(a)}%;background:${e.c}`;h.onclick=()=>sel(i);cr.appendChild(h);
const b=document.createElement('button');b.innerHTML=`${e.n}<small>${e.r}</small>`;b.onclick=()=>sel(i);el.appendChild(b)});
function sel(i,auto){hl(i);const e=E[i];
  document.getElementById('tip').innerHTML=`<div class="lab">LAPISAN ${i+1}/4 · ${e.r}</div><b style="font-size:18px;color:${e.c}">${e.n}</b><br>Materi ditampilkan pada popup.<br><button class="btn o" style="margin-top:8px;padding:4px 14px;font-size:13px" onclick="pop(E,${i},'e')">Buka Materi</button>`;
  if(!auto&&drl){clearInterval(drl);drl=null;document.getElementById('borBtn').textContent='Bor Otomatis ke Inti';zt=4.2}
  pop(E,i,'e')}
function bor(){const bt=document.getElementById('borBtn');if(drl){clearInterval(drl);drl=null;bt.textContent='Bor Otomatis ke Inti';zt=4.2;return}let k=0;sel(0,1);zt=3;bt.textContent='Berhenti';drl=setInterval(()=>{if(!document.getElementById('pop').classList.contains('on')){clearInterval(drl);drl=null;bt.textContent='Bor Lagi';zt=4.2;return}k++;if(k>3){clearInterval(drl);drl=null;bt.textContent='Bor Lagi';zt=4.2;return}sel(k,1)},2200)}
var CL,zt=4.2;

const C=mk(cc);C.r.localClippingEnabled=true;
const bp=[new THREE.Plane(new THREE.Vector3(1,0,0),0),new THREE.Plane(new THREE.Vector3(0,1,0),0)],cp=[new THREE.Plane(),new THREE.Plane()],rad=[1.5,1.32,.9,.45],mt=[],pk=[];
E.forEach((e,i)=>{const m=new THREE.MeshPhongMaterial({color:e.c,side:THREE.DoubleSide,transparent:true,emissive:e.c,emissiveIntensity:i>1?.5:.08,shininess:40}),mc=m.clone();m.clippingPlanes=cp;m.clipIntersection=true;mt.push([m,mc]);
const ri=i<3?rad[i+1]:0,s=new THREE.Mesh(new THREE.SphereGeometry(rad[i],64,48),m),a=new THREE.Mesh(new THREE.RingGeometry(ri,rad[i],48,1,Math.PI,Math.PI),mc),b=new THREE.Mesh(new THREE.RingGeometry(ri,rad[i],48,1,Math.PI/2,Math.PI),mc);a.rotation.y=Math.PI/2;b.rotation.x=Math.PI/2;a.userData.cap=b.userData.cap=1;
[s,a,b].forEach(o=>{o.userData.i=i;o.renderOrder=3-i;C.g.add(o);pk.push(o)})});
const gc=document.createElement('canvas');gc.width=gc.height=128;const gx=gc.getContext('2d'),gr=gx.createRadialGradient(64,64,0,64,64,64);gr.addColorStop(0,'rgba(255,240,180,1)');gr.addColorStop(.4,'rgba(255,140,40,.5)');gr.addColorStop(1,'rgba(255,100,0,0)');gx.fillStyle=gr;gx.fillRect(0,0,128,128);
const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(gc),blending:THREE.AdditiveBlending,depthWrite:false}));sp.scale.set(2.4,2.4,1);C.g.add(sp);C.g.rotation.set(-.5,.8,0);
function hl(i){mt.forEach((a,j)=>a.forEach(m=>{m.opacity=(j==i||i<0)?1:.28;m.emissiveIntensity=j==i?1:(j>1?.5:.08)}))}
const ray=new THREE.Raycaster();cc.addEventListener('click',ev=>{if(C.moved())return;const b=cc.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((ev.clientX-b.left)/b.width*2-1,-((ev.clientY-b.top)/b.height)*2+1),C.cam);const h=ray.intersectObjects(pk).find(h=>{const q=C.g.worldToLocal(h.point.clone());return h.object.userData.cap||!(q.x<-.001&&q.y<-.001)});if(h)sel(h.object.userData.i)});
const cw=document.getElementById('cw'),pins=E.map((e,i)=>{const b=document.createElement('button');b.className='hs';b.style.background=e.c;b.onclick=()=>sel(i);cw.appendChild(b);return b}),pr=[1.41,1.11,.66,.2],V=new THREE.Vector3(),N=new THREE.Vector3();
(function L(){requestAnimationFrame(L);
if(!isDragging){rotY+=velX;rotX=Math.max(-1.3,Math.min(1.3,rotX+velY));velX*=.92;velY*=.92}
const now=performance.now();
if(autoRotate&&!isDragging&&(now-userInteractedTime>2200)){earthSpinGroup.rotation.y+=.0012;cloudsSpinGroup.rotation.y+=.0015}
earthSystem.rotation.y=rotY;earthSystem.rotation.x=rotX;
heroCamera.position.z+=(targetZoom-heroCamera.position.z)*.08;
heroRenderer.render(heroScene,heroCamera);
C.cam.position.z+=(zt-C.cam.position.z)*.05;sp.scale.setScalar(2.4+.25*Math.sin(Date.now()/400));C.g.updateMatrixWorld();cp.forEach((p,k)=>p.copy(bp[k]).applyMatrix4(C.g.matrixWorld));C.r.render(C.s,C.cam);
N.set(-1,0,0).applyQuaternion(C.g.quaternion);const vis=N.z>.05;
pins.forEach((p,i)=>{V.set(0,-pr[i],i<3?.15:0);C.g.localToWorld(V);V.project(C.cam);p.style.left=(V.x*.5+.5)*100+'%';p.style.top=(-V.y*.5+.5)*100+'%';p.style.opacity=vis?1:0;p.style.pointerEvents=vis?'auto':'none'})})();

// Kuis
const sh=a=>a.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(v=>v[1]);
let Q,qi,sc,wr;const qz=document.getElementById('quiz');
function startQ(){Q=sh(QS).map(q=>({q:q[0],o:sh(q[1].map((t,i)=>({t,ok:i==q[2]}))),e:q[3]}));qi=0;sc=0;wr=[];sq()}
function sq(){const q=Q[qi];qz.innerHTML=`<div class="lab">SOAL ${qi+1} DARI ${Q.length}</div><div class="pr"><div style="width:${qi/Q.length*100}%"></div></div><h3 style="font-size:22px;margin-bottom:12px">${q.q}</h3><div id="os"></div><div id="fb" style="margin-top:10px"></div>`;
const os=document.getElementById('os');q.o.forEach((o,i)=>{const b=document.createElement('button');b.className='op';b.textContent='ABCD'[i]+'. '+o.t;b.onclick=()=>ans(i);os.appendChild(b)})}
function ans(i){const q=Q[qi],os=document.getElementById('os'),fb=document.getElementById('fb'),bs=os.children;if(bs[0].disabled)return;[...bs].forEach((b,j)=>{b.disabled=true;if(q.o[j].ok)b.classList.add('ok')});
if(q.o[i].ok){sc++;gain('q'+qi);bs[i].classList.add('ok');fb.innerHTML='<b style="color:#34d27b">Yes, benar!</b> '+q.e}else{bs[i].classList.add('no');wr.push({q:q.q,u:q.o[i].t,c:q.o.find(o=>o.ok).t,e:q.e});fb.innerHTML='<b style="color:#ff8a96">Hampir!</b> '+q.e}
fb.innerHTML+=`<div style="margin-top:12px"><button class="btn" onclick="nq()">${qi==Q.length-1?'Lihat Skor':'Lanjut'}</button></div>`}
function nq(){qi++;qi<Q.length?sq():res()}
function confetti(){const c=['#22E5FF','#FF7A1A','#FFC244','#8E7CF0','#34d27b'];for(let i=0;i<60;i++){const d=document.createElement('i');d.className='cf';d.style.cssText=`left:${Math.random()*100}vw;background:${c[i%5]};animation-duration:${2+Math.random()*2.5}s;animation-delay:${Math.random()}s`;document.body.appendChild(d);setTimeout(()=>d.remove(),5500)}}
const spot=document.createElement('div');spot.id='spot';document.body.appendChild(spot);const sbar=document.createElement('div');sbar.id='sp';document.body.appendChild(sbar);
addEventListener('mousemove',e=>{spot.style.left=e.clientX+'px';spot.style.top=e.clientY+'px';const c=e.target.closest&&e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});
addEventListener('scroll',()=>{sbar.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight)*100+'%'});
document.querySelectorAll('.card').forEach((c,i)=>c.insertAdjacentHTML('afterbegin',`<div class='ic' style='background:${['linear-gradient(#BFE3FF,#5b4fc4,#0b1230)','linear-gradient(#7ee08a,#4a2f1d,#3a3d44)','radial-gradient(#FFC244,#FF7A1A,#6B3E26)'][i]}'></div>`));
const aw=document.createElement('div');aw.style.cssText='position:relative;min-width:0';atm.before(aw);aw.appendChild(atm);atm.scrollTop=atm.scrollHeight;
aw.insertAdjacentHTML('beforeend',"<div id='alt'><small>KETINGGIAN</small><b id='altv'>0 km</b></div><div id='rul'></div>");
const zr=[[0,260,0,12],[260,460,12,50],[460,640,50,80],[640,860,80,700],[860,1120,700,10000]];
function au(){const p=atm.scrollHeight-(atm.scrollTop+atm.clientHeight/2),z=zr.find(a=>p<=a[1])||zr[4],k=Math.max(0,(p-z[0])/(z[1]-z[0]));document.getElementById('altv').textContent=Math.round(z[2]+k*(z[3]-z[2])).toLocaleString('id-ID')+' km'}
atm.addEventListener('scroll',au);au();

function worldTex(){const W=1024,H2=512,P=[[[-165,63],[-168,66],[-156,71],[-141,70],[-128,70],[-115,68],[-95,72],[-85,69],[-82,63],[-93,58],[-80,52],[-78,60],[-68,60],[-62,56],[-56,52],[-66,45],[-70,42],[-76,36],[-81,31],[-80,25],[-84,30],[-90,29],[-97,26],[-97,21],[-92,18],[-87,21],[-88,16],[-83,10],[-77,8],[-80,7],[-86,11],[-92,14],[-105,20],[-109,26],[-114,31],[-117,32],[-121,35],[-124,40],[-124,48],[-130,55],[-140,60],[-150,60],[-158,57]],[[-73,78],[-60,82],[-30,83],[-20,76],[-22,70],[-40,65],[-44,60],[-52,64],[-58,70],[-70,76]],[[-77,8],[-72,12],[-62,10],[-52,5],[-50,0],[-44,-2],[-35,-6],[-39,-14],[-41,-22],[-48,-26],[-53,-34],[-58,-38],[-62,-40],[-65,-46],[-68,-52],[-72,-54],[-74,-47],[-73,-38],[-71,-30],[-70,-18],[-76,-14],[-81,-5],[-80,0],[-78,5]],[[-9,37],[-9,43],[-2,44],[-4,48],[2,51],[8,54],[10,57],[5,60],[5,62],[12,66],[18,70],[28,71],[40,67],[44,68],[60,69],[70,73],[80,73],[100,77],[115,74],[140,72],[160,70],[180,69],[180,65],[170,62],[163,58],[156,51],[155,58],[142,59],[138,54],[141,49],[135,43],[129,41],[129,35],[126,34],[125,40],[121,40],[118,38],[122,31],[120,26],[113,22],[108,21],[106,17],[109,12],[105,9],[101,13],[100,8],[103,1],[98,8],[97,16],[94,18],[92,22],[88,22],[80,15],[77,8],[73,17],[72,21],[67,25],[62,25],[57,26],[56,26],[59,22],[52,16],[44,12],[43,15],[39,22],[35,28],[35,36],[30,36],[27,37],[26,40],[23,40],[23,36],[19,40],[16,38],[12,42],[8,44],[3,43],[-1,37],[-5,36]],[[-17,15],[-17,21],[-13,28],[-9,32],[-6,36],[10,37],[11,33],[20,31],[32,31],[34,27],[37,20],[43,12],[51,12],[48,5],[40,-3],[40,-10],[35,-20],[33,-26],[28,-33],[20,-35],[18,-32],[14,-22],[12,-12],[9,-1],[9,4],[5,6],[-4,5],[-8,4],[-13,8]],[[114,-22],[122,-18],[130,-12],[136,-12],[137,-16],[142,-11],[146,-19],[153,-26],[151,-34],[146,-39],[140,-38],[135,-34],[129,-32],[115,-34],[113,-26]],[[-180,-72],[-120,-74],[-60,-70],[0,-70],[60,-68],[120,-66],[180,-72],[180,-90],[-180,-90]],[[-5,50],[1,51],[-2,56],[-3,58],[-6,56],[-4,53]],[[130,31],[135,34],[140,36],[142,40],[141,44],[145,44],[140,37],[132,33]],[[109,1],[117,7],[119,1],[116,-4],[110,-3]],[[95,5],[104,-2],[106,-6],[100,-1]],[[105,-6],[114,-8],[106,-7]],[[44,-25],[49,-15],[50,-13],[47,-24]],[[172,-34],[178,-38],[175,-41],[172,-41]],[[172,-41],[174,-42],[170,-46],[167,-45]],[[-24,64],[-14,65],[-15,63.5],[-22,63.5]],[[131,-1],[141,-3],[148,-6],[150,-10],[142,-10],[138,-8],[134,-4]],[[119,1],[125,1],[122,-3],[121,-5],[120,-2]],[[120,18],[122,18],[124,12],[126,7],[122,7],[120,14]],[[80,9],[82,7],[80,6]],[[-85,22],[-80,23],[-74,20],[-78,20]],[[-74,19],[-69,19],[-69,18],[-74,18]],[[-59,47],[-53,47],[-53,51],[-57,51]],[[-80,73],[-65,72],[-62,66],[-70,62],[-78,64],[-90,70]],[[12,38],[15,38],[15,37],[13,37]],[[8,41],[9,41],[9,39],[8,39]],[[-10,52],[-6,52],[-6,55],[-9,54]],[[145,-41],[148,-41],[147,-43]],[[52,71],[57,76],[68,77],[56,71]],[[-90,77],[-75,80],[-62,82],[-80,83],[-92,80]],[[142,46],[143,54],[144,52],[143,46]]],m=document.createElement('canvas');m.width=W;m.height=H2;const c=m.getContext('2d');c.fillStyle='#000';c.fillRect(0,0,W,H2);c.fillStyle='#fff';P.forEach(p=>{c.beginPath();p.forEach((q,i)=>{const X=(q[0]+180)/360*W,Y=(90-q[1])/180*H2;i?c.lineTo(X,Y):c.moveTo(X,Y)});c.closePath();c.fill()});c.fillStyle='#000';[[[-94,59],[-93,56],[-88,56],[-82,55],[-79,51],[-79,55],[-78,58],[-82,63],[-88,64],[-93,62]],[[47,45],[53,47],[54,41],[54,37],[50,37],[49,40],[47,43]],[[28,42],[30,46],[35,45],[41,43],[41,41],[35,42],[31,41]],[[48,30],[50,27],[52,25],[56,26],[56,27],[52,28],[50,30]],[[20,54],[24,57],[23,60],[28,60],[24,64],[21,62],[17,59],[18,56]],[[33,28],[35,27],[40,18],[43,13],[42,13],[38,17],[34,26]]].forEach(p=>{c.beginPath();p.forEach((q,i)=>{const X=(q[0]+180)/360*W,Y=(90-q[1])/180*H2;i?c.lineTo(X,Y):c.moveTo(X,Y)});c.closePath();c.fill()});
const b=document.createElement('canvas');b.width=W;b.height=H2;const bc=b.getContext('2d');bc.filter='blur(5px)';bc.drawImage(m,0,0);const md=bc.getImageData(0,0,W,H2).data,o=document.createElement('canvas');o.width=W;o.height=H2;const oc=o.getContext('2d'),im=oc.createImageData(W,H2);
for(let j=0;j<H2;j++)for(let i=0;i<W;i++){const k=(j*W+i)*4,a=md[k]/255,lat=Math.abs(90-j/H2*180);let r,g,bl;
if(a<.5){const s=Math.max(0,a*2);r=6+s*20;g=30+s*110;bl=80+s*120;if(lat>74){const w=Math.min(1,(lat-74)/8);r+=(225-r)*w;g+=(235-g)*w;bl+=(245-bl)*w}}
else{const t=i/W*6.2832,n=FB(Math.cos(t)*4+j/70,Math.sin(t)*4+j/110);if(lat>68){r=g=bl=225+n*30}else if(lat>14&&lat<33&&n>.48){r=205+n*30;g=170+n*30;bl=110}else if(lat<15){r=20+n*50;g=80+n*70;bl=30+n*20}else{r=50+n*90;g=100+n*60;bl=45+n*30}if(n>.64&&lat<68){r+=50;g+=30;bl+=20}}
im.data[k]=r;im.data[k+1]=g;im.data[k+2]=bl;im.data[k+3]=255}oc.putImageData(im,0,0);return new THREE.CanvasTexture(o)}

function lav(c1,c2,o){const w=256,c=document.createElement('canvas');c.width=c.height=w;const x=c.getContext('2d'),im=x.createImageData(w,w);for(let y=0;y<w;y++)for(let X=0;X<w;X++){const n=FB(X/50+o,y/50+o*.6),f=Math.pow(Math.abs(Math.sin(n*9)),.7),k=(y*w+X)*4;for(let q=0;q<3;q++)im.data[k+q]=c1[q]*f+c2[q]*(1-f);im.data[k+3]=255}x.putImageData(im,0,0);return new THREE.CanvasTexture(c)}
[[[150,100,64],[44,26,16]],[[255,96,48],[70,8,8]],[[255,170,40],[150,40,0]],[[255,252,210],[255,190,60]]].forEach((p,i)=>{const t=lav(p[0],p[1],i*5),m=mt[i][1];m.map=t;m.emissiveMap=t;m.emissive.set(0xffffff);m.color.set(0xffffff);m.emissiveIntensity=i>0?.5:.1;m.needsUpdate=true});
const cm=mt[0][0];if(sharedEarthTex){cm.map=sharedEarthTex;}else{const wt2=worldTex();cm.map=wt2;}cm.color.set(0xffffff);cm.emissive.set(0x111111);cm.needsUpdate=true;
function hl(i){mt.forEach((a,j)=>a.forEach(m=>{m.opacity=(j==i||i<0)?1:.28;m.emissiveIntensity=j==i?1:(j>0?.5:.1)}))}
rad.forEach(r=>[Math.PI,Math.PI/2].forEach((t0,q)=>{const pts=[];for(let k=0;k<=48;k++){const a=t0+k/48*Math.PI;pts.push(new THREE.Vector3(r*Math.cos(a),r*Math.sin(a),0))}const l=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.5}));if(q==0)l.rotation.y=Math.PI/2;else l.rotation.x=Math.PI/2;C.g.add(l)}));
C.s.add(new THREE.Mesh(new THREE.SphereGeometry(1.95,64,48),new THREE.ShaderMaterial({transparent:true,side:THREE.BackSide,blending:THREE.AdditiveBlending,depthWrite:false,vertexShader:'varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec3 n;void main(){float i=pow(.7-dot(n,vec3(0.,0.,1.)),3.);gl_FragColor=vec4(1.,.45,.1,1.)*i*1.6;}'})));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('section>.lab,section>h1,section>h2,section>.sub,section>.row,.cards,#quiz').forEach(e=>{e.classList.add('rv');io.observe(e)});
function res(){const p=sc*10;if(p>=50)confetti();const m=p>=80?['Luar biasa!','Keren, kamu sudah menguasai sebagian besar materi!']:p>=50?['Bagus, terus semangat!','Tinggal sedikit lagi, cek yang meleset di bawah.']:['Ayo coba lagi!','Pelajari lagi materinya, kamu pasti bisa.'];
qz.innerHTML=`<div style="text-align:center"><div class="lab">MISI SELESAI</div><div class="ring" style="background:conic-gradient(var(--cy),var(--or) ${p}%,#16233f 0)"><span>${p}</span></div><h3>${m[0]}</h3><p class="sub">Skor kamu: ${sc}/${Q.length}. ${m[1]}</p><button class="btn" onclick="startQ()">Main Lagi</button> <a class="btn o" style="text-decoration:none;display:inline-block" href="#home">Balik ke Beranda</a></div>${wr.length?'<h3 style="margin-top:20px">Yuk, Cek yang Meleset</h3>':''}${wr.map(w=>`<div class="wr"><b>${w.q}</b><br><span style="color:#ff8a96">Jawabanmu: ${w.u}</span><br><span style="color:#34d27b">Yang benar: ${w.c}</span><br>${w.e}</div>`).join('')}`}
