const header=document.querySelector('[data-header]');
const menu=document.querySelector('[data-menu]');
const nav=document.querySelector('[data-nav]');
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>24),{passive:true});
menu?.addEventListener('click',()=>{
  const open=menu.getAttribute('aria-expanded')==='true';
  menu.setAttribute('aria-expanded',String(!open));
  menu.querySelector('span').textContent=open?'+':'−';
  nav.classList.toggle('open',!open);
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  menu.setAttribute('aria-expanded','false');menu.querySelector('span').textContent='+';nav.classList.remove('open');
}));
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.project video,.work-card video').forEach(video=>{
  const card=video.closest('a');
  card.addEventListener('mouseenter',()=>{if(!reduced)video.play().catch(()=>{});});
  card.addEventListener('mouseleave',()=>{video.pause();video.currentTime=0;});
});
document.querySelectorAll('[data-work-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-work-filter]').forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  const filter=button.dataset.workFilter;
  document.querySelectorAll('[data-work-category]').forEach(card=>card.hidden=filter!=='all'&&!card.dataset.workCategory.split(' ').includes(filter));
}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>reduced?el.classList.add('visible'):observer.observe(el));
const form=document.querySelector('[data-inquiry-form]');
form?.addEventListener('submit',event=>{
  if(!form.checkValidity()){
    event.preventDefault();
    const note=form.querySelector('[data-form-note]');
    note.textContent='Please complete the highlighted required fields.';
    note.classList.add('error');
  }
});
const archivedProjects=["3D Printing Pumpkin Bomb","Anakin Skywalker Cosplay","Arc Reactor","ARES","Armor Stand","Baylan Skoll","Black Panther","Blades of Chaos","Boba Fett Helmet","Cal Kestis Lightsaber","Channel Trailer","Damaged Vader","Daredevil 2003","Daredevil MCU","Daredevil Black Helmet","Darksaber","Deadpool Helmets","DO3D Busts","Dr Doom Classic Mask","Draupnir","Fan Remote Holder","Firefly Pendant","Fixing a 3D Printer","Galactus Electronic Eyes","Graphite Rub Demo","Heart Gears","Iron Doom","Leviathan Axe","Mandalorian Judah","Meshy AI Red Hulk","Mirror Board","Mjolnir","Moon Knight","NSabers","Nursery Painting","P1P Enclosure","P1P Unboxing","Photoscanning Shoe Sizing","Plastic Welding Pieces","Power Sword","PlayStation Wolverine Mask","Qimir","Rainworks","Electronic Ring Display","Rivals Daredevil","Severance Empty Head VFX","Sleep Token","Socorro Saber","Stairs","Star Destroyer","Stroller Tag","Target Hand","Target Head","Target Name Tags","Thunderbolts","US Agent Helmet","US Agent Shield","Vecna","Venom Skull","Vessel Masks","Winter Soldier Arm","Wolverine","X-Force Wolverine Helmet","Zillo Saber"];
const library=document.querySelector('[data-project-library]');
if(library){
  const kind=title=>/helmet|mask|cosplay|armor|daredevil|wolverine|vader|qimir|vecna|ares/i.test(title)?'WEARABLE':/electronic|reactor|saber|gears|remote|printer|welding/i.test(title)?'TECH':/vfx|meshy|photo|scanning/i.test(title)?'DIGITAL':'PROJECT';
  const render=query=>{
    const found=archivedProjects.filter(title=>title.toLowerCase().includes(query.toLowerCase()));
    library.innerHTML=found.length?found.map(title=>`<a href="https://www.youtube.com/@GinoDePoloCreations/search?query=${encodeURIComponent(title)}" target="_blank" rel="noopener"><span>${kind(title)}</span>${title}<strong>&nearr;</strong></a>`).join(''):'<p class="library-empty">No matching project. Try a broader search.</p>';
  };
  render('');
  document.querySelector('[data-library-search]')?.addEventListener('input',event=>render(event.target.value));
}
