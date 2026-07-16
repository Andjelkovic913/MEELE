const prefixes = ["Tra","Bom","Cro","Ballo","Tung","Lirili","Bri","Sahur","Pata","Ska","Fru","Glo","Chim","Boneca","Trippi","Sigma","Ohio","Zibra","Fanu","Doo"];
const middles  = ["lale","bardi","codi","erina","tuska","lirili","nini","panzini","pino","tino","dilo","zaza","boo","chio","rumba","potto"];
const suffixes = ["ro","no","lo","tta","ni","dini","chio","lini","sso","po","fo","gna","toni","zilla"];
const italianWord = ["Tralala","Cappuccina","Crocodilo","Ballerino","Assassino","Bombardino","Elefanto","Spaghetto","Vaporetto","Trombonio","Salame"];

const palettes = {
  neon:   ["#ff2fb0","#2fe9ff","#d4ff3f","#7b2fff"],
  pastel: ["#ffc6d9","#c6e2ff","#d9ffcf","#ffe3ac"],
  mono:   ["#e4e4e4","#a8a8a8","#5c5c5c","#2b2b2b"],
  fire:   ["#ff5252","#ffb703","#ff8c00","#ff2f2f"],
  ocean:  ["#2fe9ff","#0077b6","#00b4d8","#023e8a"],
  toxic:   ["#39ff14","#adff02","#1b4401","#0d2b00"],
  royal:   ["#6a0dad","#ffd700","#2e0854","#c9a227"],
  candy:   ["#ff6fd8","#7ee8fa","#fff275","#ff9ecd"],
  volcano: ["#ff4500","#8b0000","#ffae00","#1a0000"],
  arctic:  ["#caf0f8","#90e0ef","#0096c7","#ffffff"],
  blood:   ["#8b0000","#3d0000","#c1121f","#1a0000"]
};

const animalCopy = {
  crocodile: "ancient reptilian menace",
  shark: "apex-predator energy with none of the discipline",
  elephant: "gentle-giant instincts wired to absolutely no impulse control",
  cat: "unbothered feline chaos in a body that should not move that fast",
  bird: "flighty, unpredictable, prone to sudden and unexplained departures",
  blob: "vaguely humanoid, deeply uncanny, blueprint unclear",
  frog: "damp, patient, and one croak away from a full breakdown",
  gorilla: "unbothered mass with the emotional range of a group chat argument",
  octopus: "eight limbs of pure improvisation and zero long-term planning",
  pigeon: "surprisingly territorial energy over a bench nobody else wanted",
  snake: "no arms, no legs, no notes, somehow still winning",
  cow: "peaceful exterior hiding a deeply unserious internal monologue",
  trex: "tiny arms, enormous confidence, zero self-awareness",
  spider: "eight legs of pure paranoia dressed up as competence",
  kangaroo: "unresolved anger issues stored entirely in the legs",
  worm: "no skeleton, no plan, disturbing amount of upper body strength",
  bat: "sleeps all day, causes problems exclusively after dark",
  unicorn: "majestic on paper, deeply cursed in practice",
  zombie: "shambling corpse that's still somehow clocking in for its shift",
  ghost: "restless spirit with unfinished business, mostly group chat drama",
  robot: "malfunctioning automaton running on firmware nobody consented to",
  demon: "middle-management demon from a much, much worse office",
  alien: "extraterrestrial visitor with zero concept of personal space",
  skeleton: "animated skeleton with no organs, no chill, and great posture",
  mummy: "ancient wrapped horror, somehow still the most exposed one here",
  cyclops: "one-eyed giant with optional depth perception and mandatory confidence",
  turtle: "ancient patience wrapped in a shell that has seen things",
  rabbit: "twitchy nervous energy hiding an unreasonable kick",
  owl: "silent judgmental stare that somehow rotates further than it should",
  hippo: "deceptively chill mass that is, statistically, extremely dangerous",
  chicken: "small-brained chaos with an unexplainable sense of superiority",
  penguin: "waddles with the confidence of something that cannot actually fly",
  walrus: "enormous tusked mass powered entirely by naps and mild irritation",
  fox: "sly opportunist energy wrapped in a suspiciously good outfit"
};
const objectCopy = {
  trumpet: "blares off-key opera at exactly 3:00 AM for no reason",
  espresso: "runs on pure caffeine, spite, and a leaking pressure valve",
  bulb: "short-circuits mid-sentence whenever it gets overstimulated",
  coconut: "sounds hollow when tapped, which tracks",
  tv: "broadcasts static dreams from a channel that doesn't exist",
  boombox: "loops the same four seconds of a song it refuses to name",
  duck: "squeaks ominously whenever the room goes quiet",
  ball: "gets kicked around by forces well beyond its control",
  bell: "tolls once, unprompted, whenever chaos is imminent",
  roll: "smells suspiciously wonderful for something this unsettling",
  cone: "redirects the flow of reality itself, badly",
  brush: "bristling with secrets nobody asked to know",
  flipflop: "slaps against the void with every single step",
  helmet: "protects a brain that may or may not actually be in there",
  microwave: "beeps three times exactly whenever something feels unresolved",
  cactus: "looks approachable and is, statistically, never approachable",
  discoball: "throws light around a room that never actually asked for a party",
  umbrella: "opens indoors at the worst possible moment, on purpose",
  waffle: "leaks syrup in situations that do not call for syrup",
  toilet: "flushes independently whenever the vibe gets too tense",
  toaster: "launches its contents at unpredictable velocity and angle",
  chainsaw: "idles menacingly even when there's nothing around to cut",
  skull: "hollow, judgmental, missing at least one important memory",
  ufo: "hums a frequency only dogs and group chats can hear",
  washer: "spin cycles through several unresolved emotions per load",
  clock: "chimes at the wrong hour on purpose, every single time",
  pineapple: "spiky exterior hiding a deeply divisive interior opinion",
  atm: "dispenses cash, judgment, and a receipt nobody asked for",
  grenade: "pin's already gone and nobody wants to be the one to mention it",
  piano: "plays a menacing little melody whenever the room goes silent",
  cake: "has candles that relight themselves out of pure spite",
  chandelier: "swings ominously in rooms with absolutely no draft",
  guitar: "strums a chord that sounds vaguely like a warning",
  basketball: "bounces off in random directions with zero regard for physics",
  pizzaslice: "drips grease in a way that should be medically concerning",
  trafficlight: "cycles through colors on a schedule only it understands",
  boxingglove: "throws a punch whenever the conversation gets boring",
  camera: "takes a photo at the exact worst possible moment, every time",
  crown: "grants authority nobody asked it to have",
  skateboard: "rolls off on its own whenever nobody's looking"
};
const vibeCopy = {
  chaotic: "operates on no known schedule and answers to nobody",
  menacing: "radiates a threat level nobody can quite explain",
  wholesome: "means well, somehow, despite all visual evidence",
  sleepy: "is roughly 40% awake at any given moment",
  unhinged: "left the group chat and never came back right",
  majestic: "carries itself like royalty nobody elected",
  feral: "has not been domesticated and does not intend to start now",
  cursed: "exists as a warning that went unheeded by everyone involved",
  smug: "radiates an insufferable sense of superiority over absolutely nothing",
  paranoid: "convinced everyone in the room is talking about it, and they might be right",
  greedy: "would sell out the entire group chat for a single coupon code",
  romantic: "falls in love at first sight, several times a day, with inanimate objects",
  glitchy: "occasionally freezes mid-sentence, skips a frame, or repeats itself twice"
};

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1); }
function shade(hex, amt){
  // lighten/darken a hex color by amt (-255..255)
  let c = hex.replace('#','');
  let num = parseInt(c,16);
  let r = Math.min(255,Math.max(0, (num>>16) + amt));
  let g = Math.min(255,Math.max(0, ((num>>8)&0xff) + amt));
  let b = Math.min(255,Math.max(0, (num&0xff) + amt));
  return "#" + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}

// ---------------- name generation ----------------
function makeName(seed){
  if (seed && seed.trim().length){
    const base = capitalize(seed.trim());
    return base + " " + capitalize(pick(middles)+pick(suffixes));
  }
  const style = Math.random();
  if (style < 0.4){
    return capitalize(pick(prefixes)+pick(middles)) + " " + capitalize(pick(middles)+pick(suffixes));
  } else if (style < 0.7){
    return pick(italianWord) + " " + capitalize(pick(prefixes)+pick(suffixes));
  } else {
    return capitalize(pick(prefixes)+pick(suffixes)) + " " + capitalize(pick(middles)+pick(suffixes));
  }
}

// ---------------- animal bodies (drawn centered around x=150,y=175) ----------------
const animalBody = {
  crocodile: (c1,ink) => `
    <ellipse cx="150" cy="175" rx="105" ry="34" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M248 175 L288 160 L288 190 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M75 155 L90 165 L75 175 L90 185 L75 195" fill="none" stroke="${shade(c1,-40)}" stroke-width="3" stroke-linecap="round"/>
    <line x1="115" y1="205" x2="105" y2="225" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="150" y1="209" x2="150" y2="228" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="185" y1="205" x2="195" y2="225" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="220" y1="200" x2="235" y2="218" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <path d="M110 141 L125 155 L140 141 L155 155 L170 141 L185 155 L200 141" fill="none" stroke="${shade(c1,-40)}" stroke-width="4"/>
  `,
  shark: (c1,ink) => `
    <ellipse cx="150" cy="175" rx="92" ry="32" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M150 143 L168 105 L180 145 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M235 175 L280 150 L275 200 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M110 200 L90 225 L130 208 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M70 165 Q80 170 70 175" stroke="${shade(c1,-40)}" stroke-width="3" fill="none"/>
    <path d="M75 155 Q85 160 75 165" stroke="${shade(c1,-40)}" stroke-width="3" fill="none"/>
  `,
  elephant: (c1,ink) => `
    <ellipse cx="150" cy="180" rx="100" ry="46" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M150 100 Q120 70 145 55 Q170 65 150 100" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="185" cy="55" rx="34" ry="42" fill="${shade(c1,20)}" stroke="${ink}" stroke-width="4" transform="rotate(20 185 55)"/>
    <ellipse cx="115" cy="55" rx="34" ry="42" fill="${shade(c1,20)}" stroke="${ink}" stroke-width="4" transform="rotate(-20 115 55)"/>
    <rect x="100" y="215" width="20" height="30" rx="6" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <rect x="135" y="220" width="20" height="30" rx="6" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <rect x="170" y="220" width="20" height="30" rx="6" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <rect x="205" y="215" width="20" height="30" rx="6" fill="${c1}" stroke="${ink}" stroke-width="4"/>
  `,
  cat: (c1,ink) => `
    <ellipse cx="150" cy="185" rx="80" ry="42" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M215 165 Q265 150 260 195 Q250 215 220 195" fill="none" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
    <path d="M115 148 L100 110 L130 135 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M175 148 L190 110 L160 135 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <line x1="115" y1="220" x2="110" y2="240" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="150" y1="225" x2="150" y2="245" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="185" y1="220" x2="190" y2="240" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
  `,
  bird: (c1,ink) => `
    <ellipse cx="150" cy="180" rx="70" ry="52" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M105 165 Q45 155 55 200 Q80 215 118 190 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4"/>
    <path d="M195 165 Q255 155 245 200 Q220 215 182 190 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4"/>
    <path d="M120 225 L165 225 L200 245 L155 240 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4"/>
    <line x1="135" y1="228" x2="130" y2="248" stroke="${ink}" stroke-width="5" stroke-linecap="round"/>
    <line x1="165" y1="228" x2="170" y2="248" stroke="${ink}" stroke-width="5" stroke-linecap="round"/>
  `,
  blob: (c1,ink) => `
    <ellipse cx="150" cy="180" rx="66" ry="58" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <line x1="92" y1="165" x2="45" y2="140" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
    <line x1="208" y1="165" x2="255" y2="140" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
    <line x1="125" y1="232" x2="112" y2="255" stroke="${ink}" stroke-width="9" stroke-linecap="round"/>
    <line x1="175" y1="232" x2="188" y2="255" stroke="${ink}" stroke-width="9" stroke-linecap="round"/>
  `,
  frog: (c1,ink) => `
    <ellipse cx="150" cy="182" rx="98" ry="46" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M62 175 Q30 165 40 200 Q60 220 90 200" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M238 175 Q270 165 260 200 Q240 220 210 200" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <ellipse cx="55" cy="205" rx="18" ry="9" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="3"/>
    <ellipse cx="245" cy="205" rx="18" ry="9" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="3"/>
  `,
  gorilla: (c1,ink) => `
    <ellipse cx="150" cy="185" rx="88" ry="52" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="150" cy="178" rx="40" ry="30" fill="${shade(c1,-25)}" stroke="${ink}" stroke-width="3"/>
    <path d="M78 160 Q55 200 75 245 Q95 250 105 220" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M222 160 Q245 200 225 245 Q205 250 195 220" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <ellipse cx="120" cy="235" rx="18" ry="12" fill="${shade(c1,-30)}" stroke="${ink}" stroke-width="3"/>
    <ellipse cx="180" cy="235" rx="18" ry="12" fill="${shade(c1,-30)}" stroke="${ink}" stroke-width="3"/>
  `,
  octopus: (c1,ink) => `
    <ellipse cx="150" cy="160" rx="80" ry="56" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M90 200 Q75 235 55 225 Q75 250 95 235" stroke="${c1}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M90 200 Q75 235 55 225 Q75 250 95 235" stroke="${ink}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M120 210 Q115 245 95 250 Q120 260 135 235" stroke="${c1}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M120 210 Q115 245 95 250 Q120 260 135 235" stroke="${ink}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M180 210 Q185 245 205 250 Q180 260 165 235" stroke="${c1}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M180 210 Q185 245 205 250 Q180 260 165 235" stroke="${ink}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M210 200 Q225 235 245 225 Q225 250 205 235" stroke="${c1}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M210 200 Q225 235 245 225 Q225 250 205 235" stroke="${ink}" stroke-width="2" fill="none" stroke-linecap="round"/>
  `,
  pigeon: (c1,ink) => `
    <ellipse cx="150" cy="185" rx="72" ry="52" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M95 165 Q50 175 65 215 Q95 225 120 200 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4"/>
    <path d="M205 165 Q250 175 235 215 Q205 225 180 200 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4"/>
    <path d="M130 232 L170 232 L195 255 L150 248 L105 255 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4"/>
    <line x1="135" y1="235" x2="130" y2="252" stroke="#ffb703" stroke-width="5" stroke-linecap="round"/>
    <line x1="165" y1="235" x2="170" y2="252" stroke="#ffb703" stroke-width="5" stroke-linecap="round"/>
  `,
  snake: (c1,ink) => `
    <path d="M55 205 Q95 145 150 178 Q205 210 235 155 Q250 128 240 100" fill="none" stroke="${ink}" stroke-width="54" stroke-linecap="round"/>
    <path d="M55 205 Q95 145 150 178 Q205 210 235 155 Q250 128 240 100" fill="none" stroke="${c1}" stroke-width="46" stroke-linecap="round"/>
    <path d="M55 205 Q95 145 150 178 Q205 210 235 155 Q250 128 240 100" fill="none" stroke="${shade(c1,-30)}" stroke-width="6" stroke-dasharray="3 12" stroke-linecap="round"/>
  `,
  cow: (c1,ink) => `
    <ellipse cx="150" cy="180" rx="98" ry="44" fill="#ffffff" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="110" cy="165" rx="22" ry="16" fill="${c1}" stroke="${ink}" stroke-width="3"/>
    <ellipse cx="190" cy="195" rx="26" ry="18" fill="${c1}" stroke="${ink}" stroke-width="3"/>
    <line x1="115" y1="205" x2="105" y2="225" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="150" y1="209" x2="150" y2="228" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="185" y1="205" x2="195" y2="225" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <path d="M60 175 Q45 190 55 205" fill="none" stroke="${shade(c1,-30)}" stroke-width="4" stroke-linecap="round"/>
  `,
  trex: (c1,ink) => `
    <ellipse cx="150" cy="185" rx="90" ry="48" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M232 175 L280 190 L248 210 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <line x1="108" y1="165" x2="80" y2="150" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="80" y1="150" x2="95" y2="135" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="192" y1="165" x2="220" y2="150" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="220" y1="150" x2="205" y2="135" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <path d="M120 225 L135 250 M150 228 L150 252 M180 225 L165 250" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
  `,
  spider: (c1,ink) => `
    <ellipse cx="150" cy="185" rx="56" ry="46" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M104 170 L50 140 M104 185 L40 185 M104 200 L50 230 M196 170 L250 140 M196 185 L260 185 M196 200 L250 230" stroke="${ink}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <circle cx="130" cy="165" r="4" fill="${ink}"/>
    <circle cx="170" cy="165" r="4" fill="${ink}"/>
  `,
  kangaroo: (c1,ink) => `
    <ellipse cx="150" cy="175" rx="66" ry="52" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M215 190 Q265 195 260 235 Q235 250 205 225" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M100 215 L70 260 L110 250 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M170 215 L150 260 L190 255 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <ellipse cx="150" cy="195" rx="26" ry="20" fill="${shade(c1,15)}" stroke="${ink}" stroke-width="3"/>
  `,
  worm: (c1,ink) => `
    <path d="M60 210 Q60 160 105 160 Q140 160 140 195 Q140 225 175 225 Q210 225 210 190 Q210 150 245 140" fill="none" stroke="${ink}" stroke-width="58" stroke-linecap="round"/>
    <path d="M60 210 Q60 160 105 160 Q140 160 140 195 Q140 225 175 225 Q210 225 210 190 Q210 150 245 140" fill="none" stroke="${c1}" stroke-width="48" stroke-linecap="round"/>
    <path d="M85 190 A6 10 0 1 1 85 191 M135 165 A6 10 0 1 1 135 166 M185 218 A6 10 0 1 1 185 219" fill="none" stroke="${shade(c1,-40)}" stroke-width="3"/>
  `,
  bat: (c1,ink) => `
    <ellipse cx="150" cy="185" rx="50" ry="46" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M100 165 Q40 150 30 195 Q35 225 65 220 Q60 200 90 195 Q75 210 90 220 Q110 220 100 195 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M200 165 Q260 150 270 195 Q265 225 235 220 Q240 200 210 195 Q225 210 210 220 Q190 220 200 195 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <line x1="130" y1="228" x2="122" y2="248" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>
    <line x1="170" y1="228" x2="178" y2="248" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>
  `,
  unicorn: (c1,ink) => `
    <ellipse cx="150" cy="180" rx="92" ry="42" fill="#ffffff" stroke="${ink}" stroke-width="4"/>
    <path d="M105 150 Q95 110 120 90 Q115 120 130 145" fill="#ff9fe0" stroke="${ink}" stroke-width="3" stroke-linejoin="round" opacity=".9"/>
    <path d="M125 150 Q120 105 145 85 Q140 118 150 148" fill="#9fd8ff" stroke="${ink}" stroke-width="3" stroke-linejoin="round" opacity=".9"/>
    <path d="M145 150 Q145 100 170 82 Q160 118 170 148" fill="#fff59f" stroke="${ink}" stroke-width="3" stroke-linejoin="round" opacity=".9"/>
    <line x1="115" y1="205" x2="105" y2="228" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="150" y1="209" x2="150" y2="232" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="185" y1="205" x2="195" y2="228" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
  `,
  zombie: (c1,ink) => `
    <path d="M108 145 L98 240 Q98 252 115 252 L185 252 Q202 252 202 240 L192 145 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M108 155 Q65 175 50 145" stroke="${c1}" stroke-width="16" fill="none" stroke-linecap="round"/>
    <path d="M108 155 Q65 175 50 145" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".25"/>
    <path d="M192 155 Q225 190 215 230" stroke="${c1}" stroke-width="16" fill="none" stroke-linecap="round"/>
    <line x1="125" y1="252" x2="118" y2="278" stroke="${c1}" stroke-width="16" stroke-linecap="round"/>
    <line x1="175" y1="252" x2="182" y2="278" stroke="${c1}" stroke-width="16" stroke-linecap="round"/>
    <path d="M115 175 L140 185 L120 195 M180 170 L160 180 L182 192" fill="none" stroke="${shade(c1,-40)}" stroke-width="3"/>
    <path d="M130 145 L120 165 M150 145 L150 168 M170 145 L180 165" stroke="${shade(c1,-30)}" stroke-width="2" opacity=".6"/>
  `,
  ghost: (c1,ink) => `
    <path d="M95 220 Q90 140 150 135 Q210 140 205 220 L205 245 L188 228 L171 245 L154 228 L137 245 L120 228 L103 245 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <ellipse cx="150" cy="242" rx="55" ry="6" fill="${shade(ink,180)}" opacity=".2"/>
  `,
  robot: (c1,ink) => `
    <rect x="100" y="145" width="100" height="90" rx="10" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <rect x="115" y="160" width="70" height="30" rx="4" fill="${shade(c1,-40)}" stroke="${ink}" stroke-width="3"/>
    <circle cx="130" cy="175" r="6" fill="#ffd60a" stroke="${ink}" stroke-width="2"/>
    <circle cx="170" cy="175" r="6" fill="#ff5252" stroke="${ink}" stroke-width="2"/>
    <rect x="70" y="150" width="26" height="70" rx="8" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <rect x="204" y="150" width="26" height="70" rx="8" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <rect x="115" y="235" width="26" height="35" rx="6" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <rect x="159" y="235" width="26" height="35" rx="6" fill="${c1}" stroke="${ink}" stroke-width="4"/>
  `,
  demon: (c1,ink) => `
    <path d="M100 160 Q40 130 30 180 Q35 210 75 195 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M200 160 Q260 130 270 180 Q265 210 225 195 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M110 145 L100 245 Q100 258 120 258 L180 258 Q200 258 200 245 L190 145 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <line x1="120" y1="258" x2="112" y2="282" stroke="${c1}" stroke-width="16" stroke-linecap="round"/>
    <line x1="180" y1="258" x2="188" y2="282" stroke="${c1}" stroke-width="16" stroke-linecap="round"/>
    <path d="M150 258 Q160 275 145 285" fill="none" stroke="${c1}" stroke-width="6" stroke-linecap="round"/>
  `,
  alien: (c1,ink) => `
    <path d="M120 145 Q100 200 118 250 Q150 262 182 250 Q200 200 180 145 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M120 160 Q75 175 60 220" stroke="${c1}" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M180 160 Q225 175 240 220" stroke="${c1}" stroke-width="12" fill="none" stroke-linecap="round"/>
    <line x1="135" y1="250" x2="128" y2="280" stroke="${c1}" stroke-width="12" stroke-linecap="round"/>
    <line x1="165" y1="250" x2="172" y2="280" stroke="${c1}" stroke-width="12" stroke-linecap="round"/>
  `,
  skeleton: (c1,ink) => `
    <line x1="150" y1="150" x2="150" y2="245" stroke="#e8e6e0" stroke-width="10" stroke-linecap="round"/>
    <path d="M115 170 Q150 180 185 170 M112 190 Q150 200 188 190 M115 210 Q150 220 185 210" stroke="#e8e6e0" stroke-width="8" fill="none" stroke-linecap="round"/>
    <line x1="150" y1="160" x2="90" y2="200" stroke="#e8e6e0" stroke-width="9" stroke-linecap="round"/>
    <line x1="150" y1="160" x2="210" y2="200" stroke="#e8e6e0" stroke-width="9" stroke-linecap="round"/>
    <line x1="130" y1="245" x2="120" y2="278" stroke="#e8e6e0" stroke-width="9" stroke-linecap="round"/>
    <line x1="170" y1="245" x2="180" y2="278" stroke="#e8e6e0" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="150" cy="245" rx="30" ry="10" fill="#e8e6e0" stroke="${ink}" stroke-width="3"/>
  `,
  mummy: (c1,ink) => `
    <path d="M105 145 L100 245 Q100 258 120 258 L180 258 Q200 258 200 245 L195 145 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M100 165 L200 158 M98 190 L202 182 M97 215 L203 208 M100 238 L200 232" stroke="${shade(c1,-40)}" stroke-width="4" fill="none"/>
    <line x1="105" y1="155" x2="60" y2="130" stroke="${c1}" stroke-width="14" stroke-linecap="round"/>
    <line x1="195" y1="155" x2="240" y2="130" stroke="${c1}" stroke-width="14" stroke-linecap="round"/>
    <line x1="125" y1="258" x2="118" y2="282" stroke="${c1}" stroke-width="14" stroke-linecap="round"/>
    <line x1="175" y1="258" x2="182" y2="282" stroke="${c1}" stroke-width="14" stroke-linecap="round"/>
  `,
  cyclops: (c1,ink) => `
    <path d="M95 150 Q90 250 130 260 L170 260 Q210 250 205 150 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <ellipse cx="70" cy="190" rx="28" ry="34" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="230" cy="190" rx="28" ry="34" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <line x1="120" y1="260" x2="112" y2="288" stroke="${c1}" stroke-width="18" stroke-linecap="round"/>
    <line x1="180" y1="260" x2="188" y2="288" stroke="${c1}" stroke-width="18" stroke-linecap="round"/>
    <path d="M110 155 L190 150" stroke="${shade(c1,-30)}" stroke-width="6" fill="none"/>
  `,
  turtle: (c1,ink) => `
    <ellipse cx="150" cy="185" rx="95" ry="46" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M110 160 L150 150 L190 160 M100 185 L150 175 L200 185 M110 210 L150 220 L190 210" stroke="${shade(c1,-30)}" stroke-width="3" fill="none"/>
    <ellipse cx="235" cy="180" rx="20" ry="16" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <line x1="110" y1="220" x2="100" y2="238" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
    <line x1="150" y1="228" x2="150" y2="246" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
    <line x1="190" y1="220" x2="200" y2="238" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
  `,
  rabbit: (c1,ink) => `
    <ellipse cx="150" cy="190" rx="70" ry="48" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M125 155 Q100 110 90 80 Q115 105 138 155 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M175 155 Q200 110 210 80 Q185 105 162 155 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="215" cy="200" r="18" fill="#ffffff" stroke="${ink}" stroke-width="3"/>
    <line x1="120" y1="228" x2="112" y2="248" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="150" y1="232" x2="150" y2="252" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="180" y1="228" x2="188" y2="248" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
  `,
  owl: (c1,ink) => `
    <ellipse cx="150" cy="182" rx="76" ry="58" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M85 155 L60 130 L75 168 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M215 155 L240 130 L225 168 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M85 195 Q40 210 55 240 Q75 245 95 225 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M215 195 Q260 210 245 240 Q225 245 205 225 Z" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M135 235 L120 250 M150 238 L150 254 M165 235 L180 250" stroke="#ffb703" stroke-width="6" stroke-linecap="round"/>
  `,
  hippo: (c1,ink) => `
    <ellipse cx="150" cy="185" rx="102" ry="50" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="110" cy="145" rx="16" ry="14" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="190" cy="145" rx="16" ry="14" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="130" cy="158" rx="8" ry="6" fill="${shade(c1,-30)}" stroke="${ink}" stroke-width="2"/>
    <ellipse cx="170" cy="158" rx="8" ry="6" fill="${shade(c1,-30)}" stroke="${ink}" stroke-width="2"/>
    <rect x="105" y="222" width="24" height="30" rx="6" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <rect x="171" y="222" width="24" height="30" rx="6" fill="${c1}" stroke="${ink}" stroke-width="4"/>
  `,
  chicken: (c1,ink) => `
    <ellipse cx="150" cy="190" rx="62" ry="48" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <path d="M130 145 Q125 120 138 118 Q140 130 148 122 Q148 135 158 125 Q160 138 150 145 Z" fill="#ff5252" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M150 158 L160 172 L142 172 Z" fill="#ffb703" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M130 178 Q120 190 132 196" fill="none" stroke="#ff5252" stroke-width="5" stroke-linecap="round"/>
    <line x1="130" y1="230" x2="125" y2="252" stroke="#ffb703" stroke-width="6" stroke-linecap="round"/>
    <line x1="170" y1="230" x2="175" y2="252" stroke="#ffb703" stroke-width="6" stroke-linecap="round"/>
  `,
  penguin: (c1,ink) => `
    <ellipse cx="150" cy="188" rx="58" ry="62" fill="${ink}" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="150" cy="198" rx="36" ry="46" fill="#ffffff"/>
    <path d="M92 165 Q65 190 80 225 Q95 228 105 205 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M208 165 Q235 190 220 225 Q205 228 195 205 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M130 240 L120 256 L142 250 Z" fill="#ffb703" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M170 240 L180 256 L158 250 Z" fill="#ffb703" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/>
  `,
  walrus: (c1,ink) => `
    <ellipse cx="150" cy="185" rx="98" ry="50" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <line x1="118" y1="175" x2="105" y2="165" stroke="${ink}" stroke-width="2" stroke-linecap="round"/>
    <line x1="118" y1="182" x2="102" y2="182" stroke="${ink}" stroke-width="2" stroke-linecap="round"/>
    <line x1="182" y1="175" x2="195" y2="165" stroke="${ink}" stroke-width="2" stroke-linecap="round"/>
    <line x1="182" y1="182" x2="198" y2="182" stroke="${ink}" stroke-width="2" stroke-linecap="round"/>
    <path d="M132 195 Q126 225 116 232" fill="none" stroke="#f3f0ff" stroke-width="9" stroke-linecap="round"/>
    <path d="M168 195 Q174 225 184 232" fill="none" stroke="#f3f0ff" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="105" cy="225" rx="20" ry="14" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="3"/>
    <ellipse cx="195" cy="225" rx="20" ry="14" fill="${shade(c1,-20)}" stroke="${ink}" stroke-width="3"/>
  `,
  fox: (c1,ink) => `
    <ellipse cx="150" cy="188" rx="76" ry="42" fill="${c1}" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="150" cy="198" rx="36" ry="26" fill="#ffffff"/>
    <path d="M108 150 L90 105 L128 138 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M192 150 L210 105 L172 138 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M218 195 Q255 195 250 165 Q245 220 210 215 Z" fill="${c1}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="238" cy="180" r="10" fill="#ffffff" stroke="${ink}" stroke-width="2"/>
    <line x1="120" y1="222" x2="112" y2="242" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <line x1="180" y1="222" x2="188" y2="242" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
  `
};

// ---------------- object heads (drawn centered around x=150,y=75, ~90x90 box) ----------------
const objectHead = {
  trumpet: (c2,ink) => `
    <path d="M120 75 L190 55 Q210 70 190 90 Z" fill="${c2}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <rect x="100" y="68" width="24" height="14" rx="4" fill="${c2}" stroke="${ink}" stroke-width="3"/>
    <circle cx="140" cy="62" r="5" fill="${shade(c2,-40)}" stroke="${ink}" stroke-width="2"/>
    <circle cx="150" cy="60" r="5" fill="${shade(c2,-40)}" stroke="${ink}" stroke-width="2"/>
    <circle cx="160" cy="62" r="5" fill="${shade(c2,-40)}" stroke="${ink}" stroke-width="2"/>
  `,
  espresso: (c2,ink) => `
    <rect x="108" y="45" width="84" height="55" rx="8" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <rect x="95" y="60" width="16" height="10" rx="3" fill="${shade(c2,-30)}" stroke="${ink}" stroke-width="3"/>
    <line x1="150" y1="100" x2="150" y2="115" stroke="${shade(c2,-40)}" stroke-width="5" stroke-linecap="round"/>
    <path d="M170 40 Q178 30 170 22" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>
  `,
  bulb: (c2,ink) => `
    <circle cx="150" cy="65" r="42" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <rect x="138" y="102" width="24" height="14" fill="${shade(c2,-50)}" stroke="${ink}" stroke-width="3"/>
    <line x1="138" y1="108" x2="162" y2="108" stroke="${ink}" stroke-width="2"/>
  `,
  coconut: (c2,ink) => `
    <circle cx="150" cy="70" r="44" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M120 45 Q150 35 180 45" stroke="${shade(c2,-40)}" stroke-width="3" fill="none"/>
    <path d="M115 60 Q150 50 185 60" stroke="${shade(c2,-40)}" stroke-width="3" fill="none"/>
  `,
  tv: (c2,ink) => `
    <rect x="100" y="40" width="100" height="70" rx="10" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <rect x="112" y="52" width="76" height="46" rx="4" fill="${shade(c2,-60)}" stroke="${ink}" stroke-width="3"/>
    <line x1="130" y1="40" x2="110" y2="15" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>
    <line x1="170" y1="40" x2="190" y2="15" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>
  `,
  boombox: (c2,ink) => `
    <rect x="95" y="55" width="110" height="55" rx="10" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M115 55 Q150 25 185 55" fill="none" stroke="${ink}" stroke-width="6"/>
    <circle cx="123" cy="83" r="16" fill="${shade(c2,-40)}" stroke="${ink}" stroke-width="3"/>
    <circle cx="177" cy="83" r="16" fill="${shade(c2,-40)}" stroke="${ink}" stroke-width="3"/>
  `,
  duck: (c2,ink) => `
    <ellipse cx="150" cy="75" rx="46" ry="40" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M188 75 L215 68 L215 85 Z" fill="#ffb703" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/>
  `,
  ball: (c2,ink) => `
    <circle cx="150" cy="72" r="44" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M150 40 L165 55 L160 73 L140 73 L135 55 Z" fill="${ink}"/>
    <line x1="150" y1="28" x2="150" y2="40" stroke="${ink}" stroke-width="2"/>
    <line x1="118" y1="60" x2="135" y2="55" stroke="${ink}" stroke-width="2"/>
    <line x1="182" y1="60" x2="165" y2="55" stroke="${ink}" stroke-width="2"/>
  `,
  bell: (c2,ink) => `
    <path d="M115 100 Q115 40 150 30 Q185 40 185 100 Z" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <rect x="108" y="98" width="84" height="12" rx="4" fill="${shade(c2,-30)}" stroke="${ink}" stroke-width="3"/>
    <circle cx="150" cy="20" r="6" fill="none" stroke="${ink}" stroke-width="3"/>
  `,
  roll: (c2,ink) => `
    <circle cx="150" cy="72" r="44" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M150 72 m-28,0 a28,28 0 1,1 56,0 a20,20 0 1,1 -40,0 a12,12 0 1,1 24,0" fill="none" stroke="${shade(c2,-40)}" stroke-width="3"/>
    <path d="M112 45 Q150 35 190 48" stroke="#fff" stroke-width="5" fill="none" opacity=".85"/>
  `,
  cone: (c2,ink) => `
    <path d="M150 20 L188 108 L112 108 Z" fill="${c2}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <rect x="120" y="65" width="60" height="10" fill="#fff" opacity=".85"/>
    <rect x="105" y="105" width="90" height="14" rx="4" fill="${shade(c2,-30)}" stroke="${ink}" stroke-width="3"/>
  `,
  brush: (c2,ink) => `
    <line x1="150" y1="115" x2="150" y2="70" stroke="${shade(c2,-30)}" stroke-width="8" stroke-linecap="round"/>
    <circle cx="150" cy="50" r="24" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <line x1="150" y1="50" x2="126" y2="30" stroke="${ink}" stroke-width="2"/>
    <line x1="150" y1="50" x2="150" y2="24" stroke="${ink}" stroke-width="2"/>
    <line x1="150" y1="50" x2="174" y2="30" stroke="${ink}" stroke-width="2"/>
    <line x1="150" y1="50" x2="128" y2="66" stroke="${ink}" stroke-width="2"/>
    <line x1="150" y1="50" x2="172" y2="66" stroke="${ink}" stroke-width="2"/>
  `,
  flipflop: (c2,ink) => `
    <ellipse cx="150" cy="75" rx="46" ry="34" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M150 45 L130 65 M150 45 L170 65" stroke="${ink}" stroke-width="5" fill="none" stroke-linecap="round"/>
  `,
  helmet: (c2,ink) => `
    <path d="M104 90 A46 46 0 0 1 196 90 Z" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <rect x="104" y="88" width="92" height="14" rx="4" fill="${shade(c2,-30)}" stroke="${ink}" stroke-width="3"/>
    <path d="M115 100 Q150 85 185 100" fill="none" stroke="${ink}" stroke-width="3"/>
  `,
  microwave: (c2,ink) => `
    <rect x="98" y="42" width="104" height="66" rx="6" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <rect x="108" y="50" width="60" height="50" rx="4" fill="${shade(c2,-50)}" stroke="${ink}" stroke-width="3"/>
    <circle cx="188" cy="60" r="6" fill="${shade(c2,-20)}" stroke="${ink}" stroke-width="2"/>
    <rect x="178" y="75" width="20" height="8" rx="2" fill="${shade(c2,-20)}" stroke="${ink}" stroke-width="2"/>
    <rect x="178" y="88" width="20" height="8" rx="2" fill="${shade(c2,-20)}" stroke="${ink}" stroke-width="2"/>
  `,
  cactus: (c2,ink) => `
    <rect x="135" y="35" width="30" height="80" rx="14" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M135 60 Q105 60 105 85 Q105 100 125 100 L135 100" fill="${c2}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M165 50 Q195 50 195 75 Q195 90 175 90 L165 90" fill="${c2}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <line x1="145" y1="45" x2="145" y2="55" stroke="${shade(c2,-40)}" stroke-width="2"/>
    <line x1="155" y1="65" x2="155" y2="75" stroke="${shade(c2,-40)}" stroke-width="2"/>
    <line x1="145" y1="90" x2="145" y2="100" stroke="${shade(c2,-40)}" stroke-width="2"/>
    <path d="M145 30 l3 8 8 1 -6 6 1 8 -6 -4 -6 4 1 -8 -6 -6 8 -1z" fill="#ff6fd8" stroke="${ink}" stroke-width="1.5"/>
  `,
  discoball: (c2,ink) => `
    <line x1="150" y1="10" x2="150" y2="24" stroke="${ink}" stroke-width="3"/>
    <circle cx="150" cy="70" r="46" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M104 70 h92 M150 24 v92 M118 40 L182 100 M182 40 L118 100" stroke="${shade(c2,-50)}" stroke-width="2" opacity=".6"/>
    <circle cx="150" cy="70" r="46" fill="none" stroke="${shade(c2,-50)}" stroke-width="1" opacity=".4"/>
  `,
  umbrella: (c2,ink) => `
    <path d="M100 78 A50 50 0 0 1 200 78 Z" fill="${c2}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M100 78 Q125 88 150 78 Q175 88 200 78" fill="none" stroke="${ink}" stroke-width="3"/>
    <line x1="150" y1="78" x2="150" y2="120" stroke="${shade(c2,-40)}" stroke-width="5"/>
    <path d="M150 120 Q135 128 140 116" fill="none" stroke="${shade(c2,-40)}" stroke-width="5" stroke-linecap="round"/>
  `,
  waffle: (c2,ink) => `
    <rect x="106" y="32" width="88" height="80" rx="10" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <line x1="128" y1="32" x2="128" y2="112" stroke="${shade(c2,-40)}" stroke-width="3"/>
    <line x1="150" y1="32" x2="150" y2="112" stroke="${shade(c2,-40)}" stroke-width="3"/>
    <line x1="172" y1="32" x2="172" y2="112" stroke="${shade(c2,-40)}" stroke-width="3"/>
    <line x1="106" y1="54" x2="194" y2="54" stroke="${shade(c2,-40)}" stroke-width="3"/>
    <line x1="106" y1="76" x2="194" y2="76" stroke="${shade(c2,-40)}" stroke-width="3"/>
    <line x1="106" y1="98" x2="194" y2="98" stroke="${shade(c2,-40)}" stroke-width="3"/>
    <path d="M110 40 Q150 55 190 40" stroke="#c17a1f" stroke-width="4" fill="none" opacity=".7"/>
  `,
  toilet: (c2,ink) => `
    <rect x="120" y="18" width="60" height="30" rx="6" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M108 48 L192 48 L192 70 Q192 92 150 96 Q108 92 108 70 Z" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="150" cy="70" rx="26" ry="16" fill="${shade(c2,-50)}" stroke="${ink}" stroke-width="3"/>
  `,
  toaster: (c2,ink) => `
    <rect x="100" y="55" width="100" height="55" rx="10" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <rect x="115" y="35" width="20" height="26" rx="3" fill="${shade(c2,-40)}" stroke="${ink}" stroke-width="3"/>
    <rect x="150" y="35" width="20" height="26" rx="3" fill="${shade(c2,-40)}" stroke="${ink}" stroke-width="3"/>
    <path d="M118 30 L125 8 M155 30 L162 8" stroke="#ffb703" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="185" cy="90" r="6" fill="${shade(c2,-20)}" stroke="${ink}" stroke-width="2"/>
  `,
  chainsaw: (c2,ink) => `
    <rect x="95" y="55" width="90" height="34" rx="8" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M185 60 L235 55 L235 85 L185 82 Z" fill="${shade(c2,-30)}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M188 58 L232 58 M188 65 L232 65 M188 72 L232 72 M188 79 L232 79" stroke="${ink}" stroke-width="2"/>
    <path d="M100 89 Q95 105 115 108 L145 108 Q140 92 100 89 Z" fill="${shade(c2,-10)}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
  `,
  skull: (c2,ink) => `
    <path d="M108 70 Q108 20 150 20 Q192 20 192 70 Q192 95 175 100 L175 115 L165 115 L165 100 L155 115 L145 115 L135 100 L125 115 L115 115 L115 100 Q108 95 108 70 Z" fill="${c2}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <ellipse cx="130" cy="65" rx="12" ry="15" fill="${ink}"/>
    <ellipse cx="170" cy="65" rx="12" ry="15" fill="${ink}"/>
    <path d="M150 78 L144 92 L156 92 Z" fill="${ink}"/>
  `,
  ufo: (c2,ink) => `
    <ellipse cx="150" cy="75" rx="90" ry="18" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M115 62 Q150 30 185 62 Z" fill="${shade(c2,20)}" stroke="${ink}" stroke-width="4" stroke-linejoin="round" opacity=".9"/>
    <circle cx="115" cy="80" r="6" fill="#ffd60a" stroke="${ink}" stroke-width="2"/>
    <circle cx="150" cy="86" r="6" fill="#ffd60a" stroke="${ink}" stroke-width="2"/>
    <circle cx="185" cy="80" r="6" fill="#ffd60a" stroke="${ink}" stroke-width="2"/>
  `,
  washer: (c2,ink) => `
    <rect x="100" y="30" width="100" height="82" rx="10" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <circle cx="150" cy="76" r="28" fill="${shade(c2,-50)}" stroke="${ink}" stroke-width="4"/>
    <circle cx="150" cy="76" r="16" fill="none" stroke="${shade(c2,-20)}" stroke-width="3"/>
    <circle cx="115" cy="42" r="5" fill="${shade(c2,-20)}" stroke="${ink}" stroke-width="2"/>
    <circle cx="132" cy="42" r="5" fill="${shade(c2,-20)}" stroke="${ink}" stroke-width="2"/>
  `,
  clock: (c2,ink) => `
    <path d="M120 20 L180 20 L180 45 L170 55 L130 55 L120 45 Z" fill="${c2}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="150" cy="75" r="38" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <circle cx="150" cy="75" r="28" fill="#fff" stroke="${ink}" stroke-width="2"/>
    <line x1="150" y1="75" x2="150" y2="58" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>
    <line x1="150" y1="75" x2="164" y2="80" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>
  `,
  pineapple: (c2,ink) => `
    <path d="M120 15 L130 40 L112 32 M150 10 L150 38 L140 30 M180 15 L170 40 L188 32" fill="${shade(c2,-20)}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <ellipse cx="150" cy="78" rx="46" ry="42" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M112 55 Q150 75 188 55 M108 78 Q150 98 192 78 M112 101 Q150 118 188 101" stroke="${shade(c2,-40)}" stroke-width="3" fill="none"/>
  `,
  atm: (c2,ink) => `
    <rect x="105" y="20" width="90" height="95" rx="8" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <rect x="115" y="30" width="70" height="40" rx="4" fill="${shade(c2,-60)}" stroke="${ink}" stroke-width="3"/>
    <rect x="115" y="80" width="70" height="14" rx="3" fill="${shade(c2,-30)}" stroke="${ink}" stroke-width="2"/>
    <circle cx="185" cy="100" r="4" fill="${shade(c2,-20)}" stroke="${ink}" stroke-width="2"/>
    <circle cx="185" cy="110" r="4" fill="${shade(c2,-20)}" stroke="${ink}" stroke-width="2"/>
  `,
  grenade: (c2,ink) => `
    <ellipse cx="150" cy="80" rx="40" ry="44" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M138 40 Q138 20 155 15 M162 40 Q162 22 155 15" stroke="${shade(c2,-40)}" stroke-width="4" fill="none"/>
    <circle cx="155" cy="14" r="6" fill="none" stroke="${ink}" stroke-width="3"/>
    <path d="M120 65 Q150 75 180 65 M118 85 Q150 95 182 85 M122 105 Q150 113 178 105" stroke="${shade(c2,-40)}" stroke-width="3" fill="none"/>
  `,
  piano: (c2,ink) => `
    <path d="M100 40 L200 40 L200 75 L160 75 L160 100 L100 100 Z" fill="${c2}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <rect x="108" y="80" width="88" height="16" fill="#fff" stroke="${ink}" stroke-width="2"/>
    <line x1="120" y1="80" x2="120" y2="96" stroke="${ink}" stroke-width="2"/>
    <line x1="132" y1="80" x2="132" y2="96" stroke="${ink}" stroke-width="2"/>
    <line x1="144" y1="80" x2="144" y2="96" stroke="${ink}" stroke-width="2"/>
    <line x1="156" y1="80" x2="156" y2="96" stroke="${ink}" stroke-width="2"/>
    <line x1="168" y1="80" x2="168" y2="96" stroke="${ink}" stroke-width="2"/>
    <line x1="180" y1="80" x2="180" y2="96" stroke="${ink}" stroke-width="2"/>
  `,
  cake: (c2,ink) => `
    <path d="M110 65 L190 65 L182 110 L118 110 Z" fill="${c2}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M118 65 L124 45 L134 65 M142 65 L148 45 L158 65 M166 65 L172 45 L182 65" fill="${shade(c2,20)}" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/>
    <line x1="130" y1="42" x2="130" y2="22" stroke="#ffb703" stroke-width="4" stroke-linecap="round"/>
    <line x1="150" y1="38" x2="150" y2="18" stroke="#ffb703" stroke-width="4" stroke-linecap="round"/>
    <line x1="170" y1="42" x2="170" y2="22" stroke="#ffb703" stroke-width="4" stroke-linecap="round"/>
    <circle cx="130" cy="20" r="3" fill="#ff5252"/>
    <circle cx="150" cy="16" r="3" fill="#ff5252"/>
    <circle cx="170" cy="20" r="3" fill="#ff5252"/>
  `,
  chandelier: (c2,ink) => `
    <line x1="150" y1="10" x2="150" y2="28" stroke="${ink}" stroke-width="3"/>
    <path d="M100 28 Q150 15 200 28" fill="none" stroke="${shade(c2,-30)}" stroke-width="5"/>
    <path d="M110 28 L100 60 M130 30 L124 65 M150 30 L150 68 M170 30 L176 65 M190 28 L200 60" stroke="${shade(c2,-30)}" stroke-width="3" fill="none"/>
    <circle cx="100" cy="66" r="8" fill="${c2}" stroke="${ink}" stroke-width="3"/>
    <circle cx="124" cy="72" r="8" fill="${c2}" stroke="${ink}" stroke-width="3"/>
    <circle cx="150" cy="75" r="9" fill="${c2}" stroke="${ink}" stroke-width="3"/>
    <circle cx="176" cy="72" r="8" fill="${c2}" stroke="${ink}" stroke-width="3"/>
    <circle cx="200" cy="66" r="8" fill="${c2}" stroke="${ink}" stroke-width="3"/>
  `,
  guitar: (c2,ink) => `
    <ellipse cx="150" cy="90" rx="35" ry="28" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="150" cy="90" rx="14" ry="11" fill="${shade(c2,-50)}" stroke="${ink}" stroke-width="2"/>
    <rect x="140" y="15" width="20" height="55" rx="6" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <line x1="145" y1="20" x2="145" y2="65" stroke="${shade(c2,-40)}" stroke-width="1.5"/>
    <line x1="150" y1="20" x2="150" y2="65" stroke="${shade(c2,-40)}" stroke-width="1.5"/>
    <line x1="155" y1="20" x2="155" y2="65" stroke="${shade(c2,-40)}" stroke-width="1.5"/>
  `,
  basketball: (c2,ink) => `
    <circle cx="150" cy="72" r="44" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <path d="M106 72 h88 M150 28 v88 M118 40 Q150 72 118 104 M182 40 Q150 72 182 104" stroke="${ink}" stroke-width="3" fill="none"/>
  `,
  pizzaslice: (c2,ink) => `
    <path d="M150 25 L200 115 L100 115 Z" fill="${c2}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M108 108 Q150 35 192 108" fill="none" stroke="${shade(c2,-40)}" stroke-width="4"/>
    <circle cx="140" cy="80" r="7" fill="#ff5252" stroke="${ink}" stroke-width="2"/>
    <circle cx="165" cy="95" r="7" fill="#ff5252" stroke="${ink}" stroke-width="2"/>
    <circle cx="150" cy="60" r="6" fill="#ff5252" stroke="${ink}" stroke-width="2"/>
  `,
  trafficlight: (c2,ink) => `
    <rect x="128" y="20" width="44" height="95" rx="10" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <circle cx="150" cy="42" r="12" fill="#ff5252" stroke="${ink}" stroke-width="2"/>
    <circle cx="150" cy="68" r="12" fill="#ffb703" stroke="${ink}" stroke-width="2"/>
    <circle cx="150" cy="94" r="12" fill="#39ff14" stroke="${ink}" stroke-width="2"/>
  `,
  boxingglove: (c2,ink) => `
    <ellipse cx="150" cy="70" rx="42" ry="38" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <ellipse cx="115" cy="80" rx="18" ry="14" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <rect x="130" y="100" width="40" height="20" rx="6" fill="${shade(c2,-30)}" stroke="${ink}" stroke-width="3"/>
    <path d="M140 55 Q150 48 160 55" stroke="${shade(c2,-40)}" stroke-width="3" fill="none"/>
  `,
  camera: (c2,ink) => `
    <rect x="100" y="45" width="100" height="65" rx="8" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <rect x="125" y="30" width="30" height="18" rx="4" fill="${c2}" stroke="${ink}" stroke-width="3"/>
    <circle cx="150" cy="78" r="24" fill="${shade(c2,-50)}" stroke="${ink}" stroke-width="4"/>
    <circle cx="150" cy="78" r="12" fill="${shade(c2,-20)}" stroke="${ink}" stroke-width="2"/>
    <circle cx="180" cy="58" r="5" fill="#fff" stroke="${ink}" stroke-width="2"/>
  `,
  crown: (c2,ink) => `
    <path d="M105 100 L112 45 L135 70 L150 35 L165 70 L188 45 L195 100 Z" fill="${c2}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <rect x="105" y="98" width="90" height="14" rx="4" fill="${shade(c2,-30)}" stroke="${ink}" stroke-width="3"/>
    <circle cx="150" cy="55" r="6" fill="#ff2fb0" stroke="${ink}" stroke-width="2"/>
    <circle cx="125" cy="70" r="5" fill="#2fe9ff" stroke="${ink}" stroke-width="2"/>
    <circle cx="175" cy="70" r="5" fill="#2fe9ff" stroke="${ink}" stroke-width="2"/>
  `,
  skateboard: (c2,ink) => `
    <rect x="90" y="60" width="120" height="24" rx="12" fill="${c2}" stroke="${ink}" stroke-width="4"/>
    <circle cx="115" cy="90" r="10" fill="${shade(c2,-40)}" stroke="${ink}" stroke-width="3"/>
    <circle cx="185" cy="90" r="10" fill="${shade(c2,-40)}" stroke="${ink}" stroke-width="3"/>
    <path d="M95 62 Q90 45 105 42" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>
  `
};

// ---------------- face + accessory per vibe ----------------
function faceAndAccessory(vibe, ink){
  switch(vibe){
    case "menacing":
      return {
        eyes: `<circle cx="134" cy="65" r="8" fill="#fff" stroke="${ink}" stroke-width="2"/><circle cx="166" cy="65" r="8" fill="#fff" stroke="${ink}" stroke-width="2"/><circle cx="136" cy="66" r="3" fill="${ink}"/><circle cx="168" cy="66" r="3" fill="${ink}"/>`,
        mouth: `<path d="M128 88 L136 96 L144 88 L152 96 L160 88 L168 96 L176 88" fill="none" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/>`,
        accessory: ``
      };
    case "wholesome":
      return {
        eyes: `<circle cx="134" cy="65" r="7" fill="${ink}"/><circle cx="166" cy="65" r="7" fill="${ink}"/><circle cx="131" cy="62" r="2" fill="#fff"/><circle cx="163" cy="62" r="2" fill="#fff"/>`,
        mouth: `<path d="M128 88 Q150 108 172 88" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>`,
        accessory: `<path d="M150 20 l4 8 8 1 -6 6 1 8 -7 -4 -7 4 1 -8 -6 -6 8 -1z" fill="#ffe066" stroke="${ink}" stroke-width="2"/>`
      };
    case "sleepy":
      return {
        eyes: `<path d="M126 65 Q134 70 142 65" stroke="${ink}" stroke-width="3" fill="none"/><path d="M158 65 Q166 70 174 65" stroke="${ink}" stroke-width="3" fill="none"/>`,
        mouth: `<line x1="140" y1="92" x2="160" y2="92" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>`,
        accessory: `<text x="200" y="30" font-family="Georgia" font-style="italic" font-size="16" fill="${ink}">z z z</text>`
      };
    case "unhinged":
      return {
        eyes: `<circle cx="134" cy="65" r="10" fill="#fff" stroke="${ink}" stroke-width="2"/><circle cx="166" cy="63" r="6" fill="#fff" stroke="${ink}" stroke-width="2"/><circle cx="134" cy="65" r="4" fill="${ink}"/><circle cx="166" cy="63" r="2" fill="${ink}"/>`,
        mouth: `<path d="M126 90 Q145 82 152 92 Q160 100 176 86" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>`,
        accessory: ``
      };
    case "majestic":
      return {
        eyes: `<circle cx="134" cy="65" r="6" fill="${ink}"/><circle cx="166" cy="65" r="6" fill="${ink}"/>`,
        mouth: `<path d="M134 90 Q150 96 166 90" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>`,
        accessory: `<path d="M120 22 L130 6 L150 20 L170 6 L180 22 Z" fill="#ffd60a" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/>`
      };
    case "feral":
      return {
        eyes: `<path d="M124 62 L142 68" stroke="${ink}" stroke-width="4" stroke-linecap="round"/><path d="M176 62 L158 68" stroke="${ink}" stroke-width="4" stroke-linecap="round"/><circle cx="133" cy="70" r="3" fill="${ink}"/><circle cx="167" cy="70" r="3" fill="${ink}"/>`,
        mouth: `<path d="M118 84 Q150 108 182 84" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round"/><path d="M126 88 L131 78 M138 92 L141 80 M162 92 L159 80 M174 88 L169 78" stroke="#fff" stroke-width="3" fill="none"/>`,
        accessory: ``
      };
    case "smug":
      return {
        eyes: `<path d="M124 66 Q134 60 144 66" stroke="${ink}" stroke-width="3" fill="none"/><path d="M156 66 Q166 60 176 66" stroke="${ink}" stroke-width="3" fill="none"/><circle cx="134" cy="63" r="2" fill="${ink}"/><circle cx="166" cy="63" r="2" fill="${ink}"/>`,
        mouth: `<path d="M136 90 Q150 94 164 88" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>`,
        accessory: `<path d="M195 20 l3 6 6 1 -4.5 4.5 1 6 -5.5 -3 -5.5 3 1 -6 -4.5 -4.5 6 -1z" fill="#fff" opacity=".8"/>`
      };
    case "paranoid":
      return {
        eyes: `<circle cx="134" cy="65" r="9" fill="#fff" stroke="${ink}" stroke-width="2"/><circle cx="166" cy="65" r="9" fill="#fff" stroke="${ink}" stroke-width="2"/><circle cx="129" cy="65" r="3" fill="${ink}"/><circle cx="161" cy="65" r="3" fill="${ink}"/>`,
        mouth: `<path d="M130 90 L138 86 L146 90 L154 86 L162 90 L170 86" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
        accessory: `<path d="M185 40 Q190 50 185 58 Q180 50 185 40 Z" fill="#7ee8fa" stroke="${ink}" stroke-width="2"/>`
      };
    case "greedy":
      return {
        eyes: `<circle cx="134" cy="65" r="8" fill="#fff" stroke="${ink}" stroke-width="2"/><circle cx="166" cy="65" r="8" fill="#fff" stroke="${ink}" stroke-width="2"/><text x="129" y="70" font-family="Georgia" font-weight="bold" font-size="11" fill="${ink}">$</text><text x="161" y="70" font-family="Georgia" font-weight="bold" font-size="11" fill="${ink}">$</text>`,
        mouth: `<path d="M126 88 Q150 104 174 88" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round"/><path d="M140 96 L138 108" stroke="#7ee8fa" stroke-width="3" stroke-linecap="round"/>`,
        accessory: `<circle cx="205" cy="25" r="10" fill="#ffd700" stroke="${ink}" stroke-width="2"/><text x="200" y="29" font-family="Georgia" font-weight="bold" font-size="10" fill="${ink}">$</text>`
      };
    case "romantic":
      return {
        eyes: `<path d="M134 60 C130 55 122 58 124 65 C126 71 134 76 134 76 C134 76 142 71 144 65 C146 58 138 55 134 60 Z" fill="#ff2fb0" stroke="${ink}" stroke-width="2"/><path d="M166 60 C162 55 154 58 156 65 C158 71 166 76 166 76 C166 76 174 71 176 65 C178 58 170 55 166 60 Z" fill="#ff2fb0" stroke="${ink}" stroke-width="2"/>`,
        mouth: `<ellipse cx="150" cy="92" rx="6" ry="4" fill="${ink}"/>`,
        accessory: `<path d="M200 20 C197 16 190 18 191 24 C192 29 200 34 200 34 C200 34 208 29 209 24 C210 18 203 16 200 20 Z" fill="#ff9ecd" stroke="${ink}" stroke-width="1.5"/>`
      };
    case "glitchy":
      return {
        eyes: `<rect x="128" y="59" width="12" height="12" fill="#fff" stroke="${ink}" stroke-width="2"/><rect x="132" y="62" width="12" height="12" fill="#2fe9ff" opacity=".6"/><rect x="160" y="59" width="12" height="12" fill="#fff" stroke="${ink}" stroke-width="2"/><rect x="156" y="62" width="12" height="12" fill="#ff2fb0" opacity=".6"/>`,
        mouth: `<path d="M126 88 L138 92 L134 84 L150 94 L146 82 L162 92 L158 86 L174 88" fill="none" stroke="${ink}" stroke-width="2.5"/>`,
        accessory: `<line x1="110" y1="20" x2="190" y2="20" stroke="#2fe9ff" stroke-width="2" opacity=".7"/><line x1="120" y1="28" x2="200" y2="28" stroke="#ff2fb0" stroke-width="2" opacity=".7"/>`
      };
    case "cursed":
      return {
        eyes: `<path d="M120 55 L148 68 L120 78" fill="none" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/><circle cx="167" cy="65" r="9" fill="#8a2be2" stroke="${ink}" stroke-width="2"/><circle cx="167" cy="65" r="3" fill="${ink}"/>`,
        mouth: `<path d="M124 90 Q135 80 146 90 Q158 100 172 88" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>`,
        accessory: `<path d="M150 12 L154 24 L166 24 L156 32 L160 44 L150 36 L140 44 L144 32 L134 24 L146 24 Z" fill="none" stroke="#8a2be2" stroke-width="2" opacity=".8"/>`
      };
    default: // chaotic
      return {
        eyes: `<circle cx="134" cy="65" r="8" fill="#fff" stroke="${ink}" stroke-width="2"/><circle cx="166" cy="65" r="8" fill="#fff" stroke="${ink}" stroke-width="2"/><circle cx="138" cy="68" r="3" fill="${ink}"/><circle cx="162" cy="61" r="3" fill="${ink}"/>`,
        mouth: `<path d="M126 88 Q140 100 150 88 Q160 100 174 88" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>`,
        accessory: `<path d="M195 18 L205 32 L215 18 L212 40 L225 36" stroke="#ffd60a" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
      };
  }
}

// ---------------- full SVG builder ----------------
// ---------------- attachment points (object doesn't have to sit on the head) ----------------
const DEFAULT_FACE_ANCHOR = {x:150, y:150};
const animalFaceAnchor = {
  crocodile: {x:255, y:150}, shark: {x:150, y:130}, elephant: {x:150, y:75},
  cat: {x:150, y:140}, bird: {x:150, y:150}, blob: {x:150, y:150},
  frog: {x:150, y:150}, gorilla: {x:150, y:178}, octopus: {x:150, y:135},
  pigeon: {x:150, y:150}, snake: {x:235, y:145}, cow: {x:150, y:150},
  trex: {x:150, y:150}, spider: {x:150, y:150}, kangaroo: {x:150, y:165},
  worm: {x:230, y:150}, bat: {x:150, y:150}, unicorn: {x:150, y:120},
  zombie: {x:150, y:170}, ghost: {x:150, y:175}, robot: {x:150, y:175},
  demon: {x:150, y:170}, alien: {x:150, y:170}, skeleton: {x:150, y:170},
  mummy: {x:150, y:170}, cyclops: {x:150, y:170},
  turtle: {x:235, y:180}, rabbit: {x:150, y:170}, owl: {x:150, y:175},
  hippo: {x:150, y:155}, chicken: {x:150, y:175}, penguin: {x:150, y:190},
  walrus: {x:150, y:180}, fox: {x:150, y:180}
};
const attachSlots = {
  head:     {x:150, y:75,  scale:1},
  chest:    {x:150, y:180, scale:0.45},
  shoulder: {x:85,  y:150, scale:0.4}
};
const attachSpotLabel = { head:"head", chest:"chest", shoulder:"shoulder" };

function buildStage(animal, obj, vibe, c1, c2, ink, attachSpot){
  const spotKey = attachSlots[attachSpot] ? attachSpot : "head";
  const spot = attachSlots[spotKey];
  const anchor = spotKey === "head" ? {x:150, y:75} : (animalFaceAnchor[animal] || DEFAULT_FACE_ANCHOR);
  const objTransform = `translate(${spot.x - 150*spot.scale},${spot.y - 75*spot.scale}) scale(${spot.scale})`;
  const faceTransform = `translate(${anchor.x - 150},${anchor.y - 75})`;
  const neckLine = spotKey === "head"
    ? `<line x1="150" y1="145" x2="150" y2="105" stroke="${c1}" stroke-width="16" stroke-linecap="round"/>`
    : "";

  const face = faceAndAccessory(vibe, ink);
  const skyTop = shade(c1,130);
  const skyBottom = shade(c1,55);
  const bld = shade(ink,95);
  return `
  <svg viewBox="-40 0 380 430" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${skyTop}"/>
        <stop offset="1" stop-color="${skyBottom}"/>
      </linearGradient>
    </defs>
    <rect x="-40" y="0" width="380" height="430" fill="url(#sky)"/>
    <circle cx="280" cy="55" r="26" fill="#fff" opacity=".2"/>

    <!-- distant skyline, dwarfed by the monster -->
    <g fill="${bld}" opacity=".55">
      <rect x="-35" y="330" width="24" height="70"/>
      <rect x="-8" y="300" width="20" height="100"/>
      <rect x="15" y="345" width="26" height="55"/>
      <rect x="255" y="315" width="22" height="85"/>
      <rect x="280" y="350" width="18" height="50"/>
      <rect x="300" y="290" width="24" height="110"/>
      <rect x="-8" y="290" width="6" height="12" opacity=".8"/>
      <rect x="305" y="280" width="6" height="12" opacity=".8"/>
    </g>

    <!-- ground -->
    <ellipse cx="150" cy="402" rx="220" ry="16" fill="${shade(ink,180)}" opacity=".3"/>

    <!-- tiny people, screaming and fleeing, for scale -->
    <g stroke="${ink}" stroke-width="2.5" fill="none" opacity=".75" stroke-linecap="round">
      <path d="M-22 396 v-10 M-22 386 l-4 6 M-22 386 l4 6 M-22 386 l-3 -6 M-22 386 l3 -6"/>
      <path d="M330 398 v-10 M330 388 l-4 6 M330 388 l4 6 M330 388 l-3 -6 M330 388 l3 -6"/>
    </g>

    <!-- THE MONSTER, scaled up to towering kaiju size -->
    <g transform="translate(150,400) scale(1.35) translate(-150,-250)">
      ${neckLine}
      ${animalBody[animal](c1, ink)}
      <g transform="${objTransform}">${objectHead[obj](c2, ink)}</g>
      <g transform="${faceTransform}">
        ${face.eyes}
        ${face.mouth}
        ${face.accessory}
      </g>
    </g>
  </svg>`;
}

// ---------------- lore ----------------
function loreParagraphs(name, animal, obj, vibe, habitat, iq){
  const p1 = `${name} is ${aOrAnWord(animalCopy[animal])} ${animalCopy[animal]}, fused at some point with ${aOrAn(obj)} ${objLabel(obj)}, and nobody involved in the process filled out the correct paperwork.`;
  const p2 = `Its ${objLabel(obj)} head ${objectCopy[obj]}, which mostly checks out given that it ${vibeCopy[vibe]}.`;
  const p3 = `Native to ${habitat}, ${name} is believed to have an IQ of roughly ${iq} — ${iqComment(iq)} — and is considered ${rarityMood(iq)} by everyone unfortunate enough to have met it.`;
  return `<p>${p1}</p><p>${p2}</p><p>${p3}</p>`;
}
function aOrAnWord(phrase){
  return "aeiou".includes(phrase[0].toLowerCase()) ? "an" : "a";
}
function animalLabel(animal){
  const overrides = {trex:"T-Rex", ufo:"UFO"};
  return overrides[animal] || capitalize(animal);
}
function objLabel(obj){
  const labels = {trumpet:"trumpet",espresso:"espresso machine",bulb:"lightbulb",coconut:"coconut",tv:"television",boombox:"boombox",duck:"rubber duck",ball:"soccer ball",bell:"church bell",roll:"cinnamon roll",cone:"traffic cone",brush:"toilet brush",flipflop:"flip-flop",helmet:"helmet",microwave:"microwave",cactus:"cactus",discoball:"disco ball",umbrella:"umbrella",waffle:"waffle",toilet:"toilet",toaster:"toaster",chainsaw:"chainsaw",skull:"skull",ufo:"UFO",washer:"washing machine",clock:"grandfather clock",pineapple:"pineapple",atm:"ATM machine",grenade:"grenade",piano:"piano",cake:"birthday cake",chandelier:"chandelier",guitar:"guitar",basketball:"basketball",pizzaslice:"slice of pizza",trafficlight:"traffic light",boxingglove:"boxing glove",camera:"camera",crown:"crown",skateboard:"skateboard"};
  return labels[obj];
}
function aOrAn(obj){
  const label = objLabel(obj);
  if (label === "UFO") return "a";
  if (label === "ATM machine") return "an";
  return "aeiou".includes(label[0].toLowerCase()) ? "an" : "a";
}
function iqComment(iq){
  if (iq < 40) return "which explains a lot";
  if (iq < 90) return "average, for a cryptid";
  if (iq < 150) return "suspiciously high for something shaped like this";
  return "borderline concerning, honestly";
}
function rarityMood(iq){
  if (iq < 40) return "harmless but loud";
  if (iq < 90) return "mildly unsettling";
  if (iq < 150) return "a genuine tactical threat";
  return "a possible cult leader";
}

// ---------------- main forge ----------------
document.getElementById("iq").addEventListener("input", e => {
  document.getElementById("iqval").textContent = e.target.value;
});
function syncAIKeyRow(){
  const show = document.getElementById("useAI").checked || document.getElementById("useAIImage").checked;
  document.getElementById("aikeyrow").style.display = show ? "block" : "none";
}
document.getElementById("useAI").addEventListener("change", syncAIKeyRow);
document.getElementById("useAIImage").addEventListener("change", syncAIKeyRow);

// ---------------- ChatGPT lore ----------------
// ---------------- color naming (for AI image prompts) ----------------
function hexToColorName(hex){
  const named = {
    "#ff2fb0":"hot pink","#2fe9ff":"electric cyan","#d4ff3f":"acid yellow-green","#7b2fff":"vivid purple",
    "#ffc6d9":"soft pink","#c6e2ff":"powder blue","#d9ffcf":"mint green","#ffe3ac":"pale peach",
    "#e4e4e4":"light gray","#a8a8a8":"gray","#5c5c5c":"charcoal gray","#2b2b2b":"near-black",
    "#ff5252":"bright red","#ffb703":"amber orange","#ff8c00":"deep orange","#ff2f2f":"crimson red",
    "#0077b6":"deep sea blue","#00b4d8":"turquoise blue","#023e8a":"navy blue",
    "#39ff14":"toxic green","#adff02":"radioactive lime","#1b4401":"deep moss green","#0d2b00":"near-black green",
    "#6a0dad":"royal purple","#ffd700":"gold","#2e0854":"deep violet","#c9a227":"antique gold",
    "#ff6fd8":"bubblegum pink","#7ee8fa":"sky cyan","#fff275":"pale yellow","#ff9ecd":"candy pink",
    "#ff4500":"lava orange","#8b0000":"dark red","#ffae00":"amber","#1a0000":"charred black",
    "#caf0f8":"ice blue","#90e0ef":"glacier blue","#0096c7":"cobalt blue","#ffffff":"white",
    "#3d0000":"blood maroon","#c1121f":"blood red"
  };
  return named[hex.toLowerCase()] || hex;
}

// ---------------- AI image generation ----------------
const attachmentSpots = [
  "fused directly onto its head",
  "grafted onto its chest",
  "mounted on its back like a growth",
  "attached to the tip of its tail",
  "replacing one of its hands",
  "embedded in its shoulder"
];

function buildImagePrompt(name, animal, obj, vibe, c1, c2, habitat){
  const animalName = animalLabel(animal).toLowerCase();
  const spot = pick(attachmentSpots);
  return `A polished 3D low-poly digital sculpt of a creature, presented like a premium collectible figure or a stylized video game boss render, centered and isolated against a dark, moody studio background with dramatic rim lighting and strong directional shadows. ` +
    `It has the body of ${aOrAnWord(animalName)} ${animalName} in ${hexToColorName(c1)}, with ${aOrAn(obj)} ${objLabel(obj)} in ${hexToColorName(c2)} ${spot}. ` +
    `Its overall vibe is ${vibe} and unsettling in a funny, absurd internet-brainrot way. ` +
    `It comes from ${habitat}, and the lighting, color mood, or small background details faintly hint at that origin without breaking the isolated studio-shot composition. ` +
    `Regardless of where the object is attached, the creature always has a clearly visible face on its head — distinct eyes and a mouth with real expression — and sturdy visible legs or limbs suited for walking, so it reads as a living, mobile creature rather than a static object. ` +
    `The model is built from clearly visible flat low-poly facets over chunky, exaggerated proportions, with richly textured stylized materials, glowing accent details such as eyes or seams, and a cohesive dark atmospheric color palette — high visual impact and an immediately recognizable silhouette, like a premium collectible toy or mobile-game boss render. ` +
    `No text, no labels, no logos anywhere in the image.`;
}

async function generateAIImage(name, animal, obj, vibe, c1, c2, habitat, apiKey){
  const prompt = buildImagePrompt(name, animal, obj, vibe, c1, c2, habitat);
  const res = await fetch("/api/image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      apiKey: apiKey,
      model: "gpt-image-1",
      prompt: prompt,
      size: "1024x1536",
      quality: "medium"
    })
  });
  if (!res.ok){
    const errBody = await res.json().catch(()=>({}));
    throw new Error(errBody?.error?.message || ("OpenAI image request failed: " + res.status));
  }
  const data = await res.json();
  const b64 = data.data?.[0]?.b64_json;
  if (!b64) throw new Error("No image returned from OpenAI.");
  return "data:image/png;base64," + b64;
}

async function chatGPTLore(name, animal, obj, vibe, habitat, iq, apiKey){
  const prompt = `Write a short, absurd, funny "internet brainrot" character bio (2-3 sentences, under 80 words total) for a character named "${name}". It has the body of a ${animal} and the head of a ${objLabel(obj)}. Its personality vibe is "${vibe}". It lives in "${habitat}". Its IQ is ${iq}. Style: deadpan mock-encyclopedia tone, like a cursed Wikipedia entry. No markdown, no headers, just plain prose sentences.`;

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      apiKey: apiKey,
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You write short, funny, deadpan absurdist character bios." },
        { role: "user", content: prompt }
      ],
      max_tokens: 200
    })
  });

  if (!res.ok){
    const errBody = await res.json().catch(()=>({}));
    throw new Error(errBody?.error?.message || ("OpenAI request failed: " + res.status));
  }
  const data = await res.json();
  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error("No text returned from OpenAI.");
  return text;
}

async function forge(fullSurprise){
  const animalSel = document.getElementById("animal");
  const objSel = document.getElementById("object");
  const vibeSel = document.getElementById("vibe");
  const paletteSel = document.getElementById("palette");
  const habitatSel = document.getElementById("habitat");
  const nameSeed = document.getElementById("nameseed").value;
  const iqLock = document.getElementById("iqlock").checked;

  if (fullSurprise){
    [animalSel, objSel, vibeSel, paletteSel, habitatSel].forEach(sel=>{
      sel.selectedIndex = Math.floor(Math.random()*sel.options.length);
    });
  }

  const animal = animalSel.value === "random" ? pick(Object.keys(animalBody)) : animalSel.value;
  const obj = objSel.value === "random" ? pick(Object.keys(objectHead)) : objSel.value;
  const vibe = vibeSel.value === "random" ? pick(Object.keys(vibeCopy)) : vibeSel.value;
  const paletteName = paletteSel.value === "random" ? pick(Object.keys(palettes)) : paletteSel.value;
  const habitat = habitatSel.value === "random" ? pick(["Italian sewers","the deep fry aisle","abandoned skate parks","group chats at 3am","your little cousin's tablet","a haunted vending machine","school bathroom mirrors","the algorithm itself","grandma's WhatsApp","airport baggage claim","a Discord server nobody moderates","the comments section of a cooking video","a gas station bathroom at 2am","your FYP at 4am","a wedding DJ's Bluetooth speaker","the back of a school bus","a Wish.com package that took 3 months","the group project chat nobody responds to","your uncle's Facebook page","a Minecraft server from 2013"]) : habitatSel.value;

  const pal = palettes[paletteName];
  const c1 = pick(pal);
  let c2 = pick(pal);
  while (c2 === c1) c2 = pick(pal);
  const ink = "#0b0b12";

  const iq = iqLock ? parseInt(document.getElementById("iq").value,10) : Math.floor(Math.random()*200);
  if (!iqLock){
    document.getElementById("iq").value = iq;
    document.getElementById("iqval").textContent = iq;
  }

  const name = makeName(nameSeed);
  const attachSpot = pick(Object.keys(attachSlots));

  const svgStage = buildStage(animal, obj, vibe, c1, c2, ink, attachSpot);
  const stageEl = document.getElementById("stage");
  stageEl.classList.remove("ai-mode");
  stageEl.innerHTML = svgStage;
  document.getElementById("name").innerHTML = name + `<em>${animalLabel(animal)} base + ${objLabel(obj)} (${attachSpotLabel[attachSpot]}) · ${vibe} vibe</em>`;
  document.getElementById("iqOut").textContent = iq;
  document.getElementById("rizz").textContent = Math.floor(Math.random()*100) + "%";
  document.getElementById("habitatOut").textContent = habitat;
  document.getElementById("vibeOut").textContent = capitalize(vibe);

  const useAIImage = document.getElementById("useAIImage").checked;
  const apiKey = document.getElementById("openaiKey").value.trim();
  document.getElementById("stageNote").innerHTML = "";

  if (useAIImage){
    stageEl.classList.remove("ai-mode");
    stageEl.innerHTML =
      `<div class="ai-image-loading"><div class="spinner"></div>generating with gpt-image-1…</div>`;
    try {
      const imgSrc = await generateAIImage(name, animal, obj, vibe, c1, c2, habitat, apiKey);
      stageEl.classList.add("ai-mode");
      stageEl.innerHTML = `<img class="ai-image" src="${imgSrc}" alt="${name}">`;
    } catch (err){
      stageEl.classList.remove("ai-mode");
      stageEl.innerHTML = svgStage;
      document.getElementById("stageNote").innerHTML =
        `<div class="ai-error stage-error">Image generation failed (${err.message}) — showing hand-drawn version instead.</div>`;
    }
  }

  const useAI = document.getElementById("useAI").checked;
  const loreEl = document.getElementById("lore");

  if (useAI){
    loreEl.innerHTML = `<span class="ai-loading">asking ChatGPT to write this one...</span>`;
    try {
      const text = await chatGPTLore(name, animal, obj, vibe, habitat, iq, apiKey);
      loreEl.innerHTML = `<p>${text}</p>`;
    } catch (err){
      loreEl.innerHTML = loreParagraphs(name, animal, obj, vibe, habitat, iq) +
        `<div class="ai-error">ChatGPT call failed (${err.message}) — showing built-in lore instead.</div>`;
    }
  } else {
    loreEl.innerHTML = loreParagraphs(name, animal, obj, vibe, habitat, iq);
  }

  const rarities = [
    {label:"COMMON", color:"#8a8a8a"},
    {label:"UNCOMMON", color:"#2fb0e9"},
    {label:"RARE", color:"#7b2fff"},
    {label:"EPIC", color:"#ff2fb0"},
    {label:"MYTHIC SIGMA", color:"#ffb703"}
  ];
  const r = pick(rarities);
  const rEl = document.getElementById("rarity");
  rEl.textContent = r.label;
  rEl.style.background = r.color;

  document.getElementById("card").classList.add("show");
}