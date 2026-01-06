

// Get the name of the planet from the URL
const urlParams = new URLSearchParams(location.search);
const name = urlParams.get("name") || "Unknown";

// Make the name globally accessible for language.js
window.currentPlanetName = name;

// Set the title and name of the planet on the page
document.title = name;
if (document.getElementById("planetName")) {
  document.getElementById("planetName").textContent = name;
}

// Photos of the planet (local PNG files from the images/ folder)
const photoElement = document.querySelector(".planet-photo");

const images = {
  Sun: "images/sun.png",
  Mercury: "images/mercury.png",
  Venus: "images/venus.png",
  Earth: "images/earth.png",
  Mars: "images/mars.png",
  Jupiter: "images/jupiter.png",
  Saturn: "images/saturn.png",
  Uranus: "images/uranus.png",
  Neptune: "images/neptune.png"
};

if (photoElement) {
  const url = images[name] || "images/earth.png";
  photoElement.style.backgroundImage = `url('${url}')`;
}

// Complete translations for each planet
const infos = {
  en: {
    Sun: `
      <div class="info-block">
        <h2>About the Sun</h2>
        <p>The Sun is the heart of our Solar System — a gigantic ball of hot plasma that has been shining for 4.6 billion years and will continue for another 5 billion.</p>
      </div>
      <div class="info-block">
        <h2>Key Parameters</h2>
        <ul>
          <li>Diameter: 1,392,000 km (109 times larger than Earth)</li>
          <li>Mass: 333,000 times Earth's mass</li>
          <li>Surface temperature: ~5,500°C</li>
          <li>Core temperature: ~15 million °C</li>
          <li>Composition: ~74% hydrogen, ~24% helium</li>
          <li>Energy output: 3.8 × 10²⁶ watts (equivalent to 100 billion nuclear bombs per second)</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interesting Facts</h2>
        <ul>
          <li>The Sun contains 99.86% of the total mass of the entire Solar System.</li>
          <li>It generates energy through nuclear fusion — 620 million tons of hydrogen fuse into helium every second.</li>
          <li>Solar flares and coronal mass ejections can disrupt satellites, GPS, and power grids on Earth.</li>
          <li>The Sun's corona (outer atmosphere) is mysteriously hotter than its surface — up to 2 million °C.</li>
          <li>Sunspots follow an 11-year cycle and are regions of intense magnetic activity.</li>
          <li>In about 5 billion years, the Sun will expand into a red giant and likely engulf Mercury, Venus, and possibly Earth.</li>
          <li>The Parker Solar Probe is the first spacecraft to "touch" the Sun, flying through its corona.</li>
          <li>The solar wind creates beautiful auroras near Earth's poles.</li>
          <li>Every second, the Sun converts 4 million tons of its mass into pure energy (E=mc² in action).</li>
        </ul>
      </div>
    `,
    Mercury: `
      <div class="info-block">
        <h2>About Mercury</h2>
        <p>The smallest planet in the Solar System and the closest to the Sun. Its surface is a scarred, cratered landscape with extreme temperature swings.</p>
      </div>
      <div class="info-block">
        <h2>Key Parameters</h2>
        <ul>
          <li>Diameter: 4,879 km (38% of Earth's)</li>
          <li>Average distance from Sun: 57.9 million km</li>
          <li>Orbital period: 88 Earth days</li>
          <li>Rotation period: 59 Earth days</li>
          <li>Temperature range: –173°C to 427°C</li>
          <li>Known moons: 0</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interesting Facts</h2>
        <ul>
          <li>Mercury has water ice in permanently shadowed craters at its poles — despite being the closest planet to the Sun.</li>
          <li>The planet is slowly shrinking as its core cools, creating dramatic cliffs called "scarps" up to 3 km high.</li>
          <li>It has a huge iron core that takes up ~85% of the planet's radius — one of the highest densities in the Solar System.</li>
          <li>Mercury is in a 3:2 spin-orbit resonance — it rotates three times for every two orbits around the Sun.</li>
          <li>The Caloris Basin is one of the largest impact craters in the Solar System — 1,550 km across.</li>
          <li>MESSENGER (2011–2015) discovered volcanic vents and hollows on the surface.</li>
          <li>BepiColombo (ESA/JAXA mission) is currently on its way and will arrive in 2025.</li>
          <li>Mercury has a very thin exosphere, not a true atmosphere.</li>
          <li>It's the fastest planet — orbits the Sun at an average speed of 47 km/s.</li>
        </ul>
      </div>
    `,
    Venus: `
      <div class="info-block">
        <h2>About Venus</h2>
        <p>Earth's "evil twin" — similar in size and composition, but transformed into a hellish world by a runaway greenhouse effect.</p>
      </div>
      <div class="info-block">
        <h2>Key Parameters</h2>
        <ul>
          <li>Diameter: 12,104 km (95% of Earth's)</li>
          <li>Average distance from Sun: 108 million km</li>
          <li>Orbital period: 225 Earth days</li>
          <li>Rotation period: 243 Earth days (retrograde)</li>
          <li>Average temperature: 464°C (hottest planet)</li>
          <li>Known moons: 0</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interesting Facts</h2>
        <ul>
          <li>Venus is the hottest planet due to its thick CO₂ atmosphere and runaway greenhouse effect.</li>
          <li>Surface pressure is 92 times that of Earth — equivalent to being 900 m underwater.</li>
          <li>It rotates backwards (retrograde) and extremely slowly — a day on Venus is longer than its year.</li>
          <li>More than 1,600 major volcanoes — many may have been active in the geologically recent past.</li>
          <li>Clouds made of sulfuric acid, with lightning and possible acid snow.</li>
          <li>A substance called phosphine detected in the atmosphere — a potential sign of microbial life (still debated).</li>
          <li>Future missions: NASA's DAVINCI+ (atmosphere probe) and VERITAS (orbiter) launching in late 2020s.</li>
          <li>Venus once had oceans — they boiled away billions of years ago.</li>
          <li>The atmosphere rotates 60 times faster than the planet itself (super-rotation).</li>
        </ul>
      </div>
    `,
    Earth: `
      <div class="info-block">
        <h2>About Earth</h2>
        <p>Our unique home — the only known planet with abundant liquid water, life, and a protective atmosphere.</p>
      </div>
      <div class="info-block">
        <h2>Key Parameters</h2>
        <ul>
          <li>Diameter: 12,742 km</li>
          <li>Average distance from Sun: 149.6 million km (1 AU)</li>
          <li>Orbital period: 365.25 days</li>
          <li>Rotation period: 23 hours 56 minutes</li>
          <li>Average temperature: ~15°C</li>
          <li>Known moons: 1</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interesting Facts</h2>
        <ul>
          <li>71% of the surface is covered by oceans — more water than any other known planet.</li>
          <li>Plate tectonics reshape the surface and recycle carbon — unique in the Solar System.</li>
          <li>A strong magnetic field protects life from harmful solar radiation.</li>
          <li>The ozone layer blocks most ultraviolet light from the Sun.</li>
          <li>Over 8.7 million known species, with millions more undiscovered.</li>
          <li>Earth's atmosphere is 78% nitrogen, 21% oxygen — perfect for life as we know it.</li>
          <li>The Moon stabilizes Earth's axial tilt, preventing extreme climate swings.</li>
          <li>Earth is 4.54 billion years old and still geologically active.</li>
          <li>Human activity is now the dominant influence on climate and environment.</li>
        </ul>
      </div>
    `,
    Mars: `
      <div class="info-block">
        <h2>About Mars</h2>
        <p>The Red Planet — once wet and warm, now cold and dry, but the best candidate for past or present life beyond Earth.</p>
      </div>
      <div class="info-block">
        <h2>Key Parameters</h2>
        <ul>
          <li>Diameter: 6,779 km (53% of Earth's)</li>
          <li>Average distance from Sun: 228 million km</li>
          <li>Orbital period: 687 Earth days</li>
          <li>Rotation period: 24.6 hours</li>
          <li>Average temperature: –60°C</li>
          <li>Known moons: 2 (Phobos and Deimos)</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interesting Facts</h2>
        <ul>
          <li>Red color from iron oxide (rust) on the surface.</li>
          <li>Olympus Mons — the tallest volcano in the Solar System (21 km high).</li>
          <li>Valles Marineris — the largest canyon (4,000 km long, 7 km deep).</li>
          <li>Clear evidence of ancient riv+ers, lakes, and possibly oceans billions of years ago.</li>
          <li>Perseverance rover is searching for signs of ancient microbial life.</li>
          <li>Polar ice caps contain frozen water and CO₂.</li>
          <li>Global dust storms can engulf the entire planet for months.</li>
          <li>Human missions planned for the 2030s (NASA Artemis and SpaceX Starship).</li>
          <li>Subsurface water ice and possible underground lakes detected.</li>
        </ul>
      </div>
    `,
    Jupiter: `
      <div class="info-block">
        <h2>About Jupiter</h2>
        <p>The king of the planets — a gas giant with a stormy atmosphere and a huge family of moons.</p>
      </div>
      <div class="info-block">
        <h2>Key Parameters</h2>
        <ul>
          <li>Diameter: 142,984 km (11 times Earth's)</li>
          <li>Average distance from Sun: 778 million km</li>
          <li>Orbital period: 12 Earth years</li>
          <li>Rotation period: ~10 hours (fastest in the Solar System)</li>
          <li>Known moons: 95</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interesting Facts</h2>
        <ul>
          <li>The Great Red Spot is a storm larger than Earth that has raged for at least 350 years.</li>
          <li>Jupiter's powerful magnetic field is 20,000 times stronger than Earth's.</li>
          <li>Four largest moons (Galilean moons): Io (most volcanic body), Europa (subsurface ocean), Ganymede (largest moon), Callisto (heavily cratered).</li>
          <li>Europa is one of the best candidates for extraterrestrial life due to its global ocean beneath the ice.</li>
          <li>Juno spacecraft has been orbiting since 2016, studying the interior and atmosphere.</li>
          <li>Future mission: Europa Clipper (launch 2024, arrival 2030).</li>
          <li>Jupiter has faint rings made of dust from its moons.</li>
          <li>Its rapid rotation causes a noticeable equatorial bulge.</li>
        </ul>
      </div>
    `,
    Saturn: `
      <div class="info-block">
        <h2>About Saturn</h2>
        <p>The jewel of the Solar System — famous for its spectacular ring system.</p>
      </div>
      <div class="info-block">
        <h2>Key Parameters</h2>
        <ul>
          <li>Diameter: 120,536 km (9.5 times Earth's)</li>
          <li>Average distance from Sun: 1.4 billion km</li>
          <li>Orbital period: 29.5 Earth years</li>
          <li>Rotation period: ~10.7 hours</li>
          <li>Known moons: 146 (most in the Solar System)</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interesting Facts</h2>
        <ul>
          <li>The rings are made of billions of ice and rock particles — visible from Earth with small telescopes.</li>
          <li>Saturn's density is so low it could float in water.</li>
          <li>Titan — the only moon with a thick atmosphere and stable liquid on its surface (methane lakes).</li>
          <li>Enceladus shoots water geysers from a subsurface ocean — prime target for life search.</li>
          <li>Cassini mission (2004–2017) made incredible discoveries and plunged into Saturn's atmosphere.</li>
          <li>A mysterious hexagon-shaped storm at the north pole.</li>
          <li>Future mission: Dragonfly drone to explore Titan (launch 2028).</li>
          <li>The rings are relatively young — possibly only 100 million years old.</li>
        </ul>
      </div>
    `,
    Uranus: `
      <div class="info-block">
        <h2>About Uranus</h2>
        <p>The "sideways" ice giant — unique for its extreme axial tilt.</p>
      </div>
      <div class="info-block">
        <h2>Key Parameters</h2>
        <ul>
          <li>Diameter: 51,118 km (4 times Earth's)</li>
          <li>Average distance from Sun: 2.9 billion km</li>
          <li>Orbital period: 84 Earth years</li>
          <li>Rotation period: ~17 hours (retrograde)</li>
          <li>Known moons: 28</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interesting Facts</h2>
        <ul>
          <li>Uranus rotates on its side (98° tilt) — likely from a massive ancient impact.</li>
          <li>This tilt causes extreme seasons — each pole gets 42 years of continuous sunlight followed by 42 years of darkness.</li>
          <li>Faint ring system discovered by Voyager 2 in 1986.</li>
          <li>Methane in the atmosphere absorbs red light, giving it a pale blue color.</li>
          <li>Coldest planetary atmosphere in the Solar System (–224°C).</li>
          <li>Only visited once — by Voyager 2 in 1986.</li>
          <li>A proposed Uranus Orbiter and Probe mission could launch in the 2030s.</li>
          <li>Interior may produce "diamond rain" as carbon compresses.</li>
        </ul>
      </div>
    `,
    Neptune: `
      <div class="info-block">
        <h2>About Neptune</h2>
        <p>The windiest planet — a deep blue ice giant at the edge of the Solar System.</p>
      </div>
      <div class="info-block">
        <h2>Key Parameters</h2>
        <ul>
          <li>Diameter: 49,528 km (3.9 times Earth's)</li>
          <li>Average distance from Sun: 4.5 billion km</li>
          <li>Orbital period: 165 Earth years</li>
          <li>Rotation period: ~16 hours</li>
          <li>Known moons: 16</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interesting Facts</h2>
        <ul>
          <li>Strongest sustained winds in the Solar System — up to 2,100 km/h.</li>
          <li>Triton — a captured Kuiper Belt object with nitrogen geysers and retrograde orbit.</li>
          <li>The Great Dark Spot was a massive storm observed by Voyager 2 (later disappeared).</li>
          <li>Deep blue color from methane absorbing red light.</li>
          <li>Discovered by mathematical prediction in 1846.</li>
          <li>Only visited by Voyager 2 in 1989.</li>
          <li>Internal heat source drives extreme weather despite distance from Sun.</li>
          <li>Diamond rain likely in the deep interior.</li>
        </ul>
      </div>
    `
  },
  uk: {
    Sun: `
      <div class="info-block">
        <h2>Про Сонце</h2>
        <p>Сонце — серце нашої Сонячної системи — гігантська куля гарячої плазми, яка світить вже 4.6 мільярди років і буде світити ще 5 мільярдів.</p>
      </div>
      <div class="info-block">
        <h2>Ключові параметри</h2>
        <ul>
          <li>Діаметр: 1,392,000 км (109 разів більше Землі)</li>
          <li>Маса: 333,000 разів більше маси Землі</li>
          <li>Температура поверхні: ~5,500°C</li>
          <li>Температура ядра: ~15 мільйонів °C</li>
          <li>Склад: ~74% водню, ~24% гелію</li>
          <li>Енергія: 3.8 × 10²⁶ Вт (еквівалент 100 мільярдів ядерних бомб за секунду)</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Цікаві факти</h2>
        <ul>
          <li>Сонце містить 99.86% усієї маси Сонячної системи.</li>
          <li>Енергія від ядерного синтезу — 620 мільйонів тонн водню перетворюється на гелій кожну секунду.</li>
          <li>Сонячні спалахи та викиди можуть порушувати роботу супутників, GPS і електромереж на Землі.</li>
          <li>Корона Сонця гарячіша за поверхню — до 2 мільйонів °C (загадка фізики).</li>
          <li>Сонячні плями мають 11-річний цикл.</li>
          <li>За 5 мільярдів років Сонце стане червоним гігантом і поглине внутрішні планети.</li>
          <li>Parker Solar Probe — перший апарат, що "торкнувся" Сонця.</li>
          <li>Сонячний вітер створює полярні сяйва.</li>
          <li>Кожну секунду Сонце перетворює 4 мільйони тонн маси на енергію (E=mc²).</li>
        </ul>
      </div>
    `,
    Mercury: `
      <div class="info-block">
        <h2>Про Меркурій</h2>
        <p>Найменша планета Сонячної системи та найближча до Сонця. Поверхня — кратерний ландшафт з екстремальними температурами.</p>
      </div>
      <div class="info-block">
        <h2>Ключові параметри</h2>
        <ul>
          <li>Діаметр: 4,879 км (38% від Землі)</li>
          <li>Середня відстань від Сонця: 57.9 мільйонів км</li>
          <li>Рік: 88 земних днів</li>
          <li>День: 59 земних днів</li>
          <li>Температура: від –173°C до 427°C</li>
          <li>Супутників: 0</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Цікаві факти</h2>
        <ul>
          <li>На полюсах є лід у кратерах, що завжди в тіні — попри близькість до Сонця.</li>
          <li>Планета повільно зменшується через охолодження ядра — утворюються скелі висотою до 3 км.</li>
          <li>Велике залізне ядро займає ~85% радіусу — одна з найвищих густин.</li>
          <li>Резонанс 3:2 — 3 оберти за 2 орбіти.</li>
          <li>Басейн Калорес — один з найбільших кратерів (1,550 км).</li>
          <li>MESSENGER відкрив вулканічні отвори.</li>
          <li>BepiColombo летить зараз.</li>
          <li>Тонка екзосфера, не атмосфера.</li>
          <li>Найшвидша планета — 47 км/с.</li>
        </ul>
      </div>
    `,
    Venus: `
      <div class="info-block">
        <h2>Про Венеру</h2>
        <p>«Злий близнюк» Землі — схожий за розмірами та складом, але перетворений на пекельний світ через неконтрольований парниковий ефект..</p>
      </div>
      <div class="info-block">
        <h2>Ключові Параметри</h2>
        <ul>
          <li>Діаметр: 12 104 км (95% від діаметра Землі)</li>
          <li>Середня відстань від Сонця: 108 мільйонів км</li>
          <li>Орбітальний період: 225 земних днів</li>
          <li>Період обертання: 243 земні дні (ретроградний)</li>
          <li>Середня температура: 464 °C (найгарячіша планета)</li>
          <li>Відомі супутники: 0</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Цікаві факти</h2>
        <ul>
          <li>Венера є найспекотнішою планетою через свою щільну атмосферу з CO₂ та неконтрольований парниковий ефект</li>
          <li>Тиск на поверхні в 92 рази перевищує тиск на Землі — це еквівалентно перебуванню на глибині 900 м під водою.</li>
          <li>Вона обертається назад (ретроградно) і надзвичайно повільно — день на Венері довший за її рік</li>
          <li>Понад 1600 великих вулканів — багато з них, ймовірно, були активними в недалекому геологічному минулому.</li>
          <li>Хмари, що складаються з сірчаної кислоти, з блискавками та можливим кислотним снігом</li>
          <li>У атмосфері виявлено речовину під назвою фосфін — потенційний ознака існування мікроорганізмів (досі обговорюється)</li>
          <li>Майбутні місії: DAVINCI+ (зонд для дослідження атмосфери) та VERITAS (орбітальний апарат) NASA, запуск яких заплановано на кінець 2020-х років.</li>
          <li>Колись на Венері були океани — вони випарувалися мільярди років тому</li>
          <li>Атмосфера обертається в 60 разів швидше, ніж сама планета (суперобертання).</li>
        </ul>
      </div>
    `,
    Earth: `
      <div class="info-block">
        <h2>Про Землю</h2>
        <p>Наш унікальний дім — єдина відома планета з великою кількістю рідкої води, життям і захисною атмосферою</p>
      </div>
      <div class="info-block">
        <h2>Ключові параметри</h2>
        <ul>
          <li>Діаметр: 12 742 км</li>
          <li>Середня відстань від Сонця: 149,6 млн км (1 а.о.)</li>
          <li>Орбітальний період: 365,25 днів</li>
          <li>Період обертання: 23 години 56 хвилин</li>
          <li>Середня температура: ~15°C</li>
          <li>Відомі супутники: 1</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Цікаві факти</h2>
        <ul>
          <li>71% поверхні покрито океанами — це більше води, ніж на будь-якій іншій відомій планеті</li>
          <li>Тектоніка плит переформує поверхню і переробляє вуглець — унікальне явище в Сонячній системі</li>
          <li>Сильне магнітне поле захищає життя від шкідливого сонячного випромінювання</li>
          <li>Озоновий шар блокує більшу частину ультрафіолетового випромінювання Сонця</li>
          <li>Понад 8,7 мільйона відомих видів, а також мільйони ще не відкритих</li>
          <li>Атмосфера Землі складається на 78% з азоту і на 21% з кисню — ідеальні умови для життя, як ми його знаємо</li>
          <li>Місяць стабілізує нахил осі Землі, запобігаючи екстремальним кліматичним коливанням</li>
          <li>Земля має вік 4,54 мільярда років і досі залишається геологічно активною</li>
          <li>Людська діяльність зараз є домінуючим фактором впливу на клімат і навколишнє середовище</li>
        </ul>
      </div>
    `,
    Mars: `
      <div class="info-block">
        <h2>Про Марс</h2>
        <p>Червона планета — колись волога і тепла, а зараз холодна і суха, але найкращий кандидат для існування життя поза Землею в минулому чи сьогоденні.</p>
      </div>
      <div class="info-block">
        <h2>Ключові параметри</h2>
        <ul>
          <li>Діаметр: 6 779 км (53% від діаметра Землі)</li>
          <li>Середня відстань від Сонця: 228 мільйонів км</li>
          <li>Орбітальний період: 687 земних днів</li>
          <li>Період обертання: 24,6 години</li>
          <li>Середня температура: –60 °C</li>
          <li>Відомі супутники: 2 (Фобос і Деймос)</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Цікві факти</h2>
        <ul>
          <li>Червоний колір від оксиду заліза (іржа) на поверхні</li>
          <li>Олімп Монс — найвищий вулкан у Сонячній системі (висота 21 км).</li>
          <li>Валлес Марінеріс — найбільший каньйон (довжина 4000 км, глибина 7 км).</li>
          <li>Чіткі докази існування древніх річок, озер і, можливо, океанів мільярди років тому. </li>
          <li>Марсохід Perseverance шукає сліди древнього мікробного життя. </li>
          <li>Полярні шапки містять заморожену воду і CO₂. </li>
          <li>Глобальні пилові бурі можуть охоплювати всю планету протягом місяців. </li>
          <li>Людські місії, заплановані на 2030-ті роки (NASA Artemis і SpaceX Starship).</li>
          <li>Виявлено підземний водяний лід і можливі підземні озера.</li>
        </ul>
      </div>
    `,
     Jupiter: `
      <div class="info-block">
        <h2>Про Юпітер</h2>
        <p>Король планет — газовий гігант із бурхливою атмосферою та величезною родиною супутників.</p>
      </div>
      <div class="info-block">
        <h2>Основні параметри</h2>
        <ul>
          <li>Діаметр: 142 984 км (в 11 разів більше Землі)</li>
          <li>Середня відстань від Сонця: 778 млн км</li>
          <li>Орбітальний період: 12 земних років</li>
          <li>Період обертання: ~10 годин (найшвидший у Сонячній системі)</li>
          <li>Відомі супутники: 95</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Цікаві факти</h2>
        <ul>
          <li>Велика червона пляма — це буря, більша за Землю, яка вирує вже щонайменше 350 років.</li>
          <li>Потужне магнітне поле Юпітера в 20 000 разів сильніше за магнітне поле Землі. </li>
          <li>Чотири найбільші супутники (галілеєві супутники): Іо (найбільш вулканічне тіло), Європа (підземний океан), Ганімед (найбільший супутник), Калісто (з великою кількістю кратерів). </li>
          <li>Європа є одним з найкращих кандидатів для позаземного життя завдяки глобальному океану під кригою. </li>
          <li>Космічний апарат «Юнона» обертається навколо Юпітера з 2016 року, вивчаючи його внутрішню будову та атмосферу. </li>
          <li>Майбутня місія: «Європа Кліпер» (запуск у 2024 році, прибуття у 2030 році). </li>
          <li>Юпітер має слабкі кільця, утворені пилом з його супутників.</li>
          <li>Його швидке обертання спричиняє помітне випинання в екваторіальній області.</li>
        </ul>
      </div>
    `,
     Saturn: `
      <div class="info-block">
        <h2>Про Сатурн</h2>
        <p>Перлина Сонячної системи — відома своєю вражаючою системою кілець.</p>
      </div>
      <div class="info-block">
        <h2>Основні параметри</h2>
        <ul>
          <li>Діаметр: 120 536 км (9,5 разів більше за Землю)</li>
          <li>Середня відстань від Сонця: 1,4 млрд км</li>
          <li>Орбітальний період: 29,5 земних років</li>
          <li>Період обертання: ~10,7 годин</li>
          <li>Відомі супутники: 146 (найбільше в Сонячній системі)</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Цікаві факти</h2>
        <ul>
          <li>Кільця складаються з мільярдів частинок льоду та гірських порід — їх можна побачити з Землі за допомогою невеликих телескопів.</li>
          <li>Щільність Сатурна настільки низька, що він міг би плавати у воді.</li>
          <li>Титан — єдиний супутник із щільною атмосферою та стабільною рідиною на поверхні (озера метану).</li>
          <li>Енцелад вистрілює водяні гейзери з підземного океану — головна ціль для пошуку життя.</li>
          <li>Місія «Кассіні» (2004–2017) зробила неймовірні відкриття та занурилася в атмосферу Сатурна.</li>
          <li>Таємнича буря у формі шестикутника на північному полюсі. </li>
          <li>Майбутня місія: дрон Dragonfly для дослідження Титана (запуск у 2028 році). </li>
          <li>Кільця відносно молоді — можливо, їм лише 100 мільйонів років. </li>
        </ul>
      </div>
    `,
    Uranus: `
      <div class="info-block">
        <h2>Про Уран</h2>
        <p>«Боковий» крижаний гігант — унікальний завдяки своєму екстремальному нахилу осі. </p>
      </div>
      <div class="info-block">
        <h2>Основні параметри</h2>
        <ul>
          <li>Діаметр: 51 118 км (в 4 рази більше Землі)</li>
          <li>Середня відстань від Сонця: 2,9 млрд км</li>
          <li>Орбітальний період: 84 земні роки</li>
          <li>Період обертання: ~17 годин (ретроградний)</li>
          <li>Відомі супутники: 28</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Цікаві факти</h2>
        <ul>
          <li>Уран обертається на боці (нахил 98°) — ймовірно, внаслідок потужного удару в давнину.</li>
          <li>Цей нахил спричиняє екстремальні сезони — кожен полюс отримує 42 роки безперервного сонячного світла, за якими слідують 42 роки темряви.</li>
          <li>Слабка система кілець, відкрита «Вояджером-2» у 1986 році. </li>
          <li>Метан в атмосфері поглинає червоне світло, надаючи їй блідо-блакитного кольору. </li>
          <li>Найхолодніша атмосфера планети в Сонячній системі (–224 °C). </li>
          <li>Відвідана лише один раз — «Вояджером-2» у 1986 році. </li>
          <li>Запропонована місія «Уран Орбітер і Зонд» може стартувати у 2030-х роках. </li>
          <li>Всередині може утворюватися «діамантовий дощ» у результаті стиснення вуглецю. </li>
        </ul>
      </div>
    `,
    Neptune: `
      <div class="info-block">
        <h2>Про Нептун</h2>
        <p>Найвітряніша планета — глибоко-синій крижаний гігант на краю Сонячної системи.</p>
      </div>
      <div class="info-block">
        <h2>Основні параметри</h2>
        <ul>
          <li>Діаметр: 49 528 км (3,9 рази більше за Землю)</li>
          <li>Середня відстань від Сонця: 4,5 млрд км</li>
          <li>Орбітальний період: 165 земних років</li>
          <li>Період обертання: ~16 годин</li>
          <li>Відомі супутники: 16</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Цікаві факти</h2>
        <ul>
          <li>Найсильніші постійні вітри в Сонячній системі — до 2100 км/год.</li>
          <li>Тритон — захоплений об'єкт поясу Койпера з азотними гейзерами та ретроградною орбітою.</li>
          <li>Велика темна пляма — це величезна буря, яку спостерігав «Вояджер-2» (пізніше зникла).</li>
          <li>Глибокий синій колір від метану, що поглинає червоне світло.</li>
          <li>Відкритий за допомогою математичного прогнозу в 1846 році.</li>
          <li>Відвіданий тільки «Вояджером-2» у 1989 році. </li>
          <li>Внутрішнє джерело тепла викликає екстремальні погодні умови, незважаючи на віддаленість від Сонця. </li>
          <li>У глибинах внутрішньої частини, ймовірно, йде діамантовий дощ. </li>
        </ul>
      </div>
    `
  },
  pl: {
   Sun: `
    <div class="info-block">
        <h2>O Słońcu</h2>
        <p>Słońce jest sercem naszego Układu Słonecznego — gigantyczną kulą gorącego plazmy, która świeci od 4,6 miliarda lat i będzie świecić przez kolejne 5 miliardów lat. </p>
      </div>
      <div class="info-block">
        <h2>Kluczowe parametry</h2>
        <ul>
          <li>Średnica: 1 392 000 km (109 razy większa od Ziemi)</li>
          <li>Masa: 333 000 razy większa od masy Ziemi</li>
          <li>Temperatura powierzchni: ~5500°C</li>
          <li>Temperatura jądra: ~15 milionów °C</li>
          <li>Skład: ~74% wodoru, ~24% helu</li>
          <li>Moc wyjściowa: 3,8 × 10²⁶ watów (odpowiednik 100 miliardów bomb atomowych na sekundę)</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Ciekawostki</h2>
        <ul>
          <li>Słońce zawiera 99,86% całkowitej masy całego Układu Słonecznego.</li>
          <li>Wytwarza energię poprzez fuzję jądrową — co sekundę 620 milionów ton wodoru łączy się w hel.</li>
          <li>Rozbłyski słoneczne i wyrzuty koronalne mogą zakłócać działanie satelitów, GPS i sieci energetycznych na Ziemi.</li>
          <li>Korona słoneczna (zewnętrzna atmosfera) jest w tajemniczy sposób cieplejsza niż powierzchnia Słońca — osiąga temperaturę nawet 2 milionów °C.</li>
          <li>Plamy słoneczne pojawiają się w cyklu 11-letnim i są obszarami intensywnej aktywności magnetycznej.</li>
          <li>Za około 5 miliardów lat Słońce rozszerzy się do rozmiarów czerwonego olbrzyma i prawdopodobnie pochłonie Merkurego, Wenus, a być może także Ziemię. </li>
          <li>Sonda Parker Solar Probe jest pierwszym statkiem kosmicznym, który „dotknął” Słońca, przelatując przez jego koronę. </li>
          <li>Wiatr słoneczny tworzy piękne zorze polarne w pobliżu biegunów Ziemi. </li>
          <li>W każdej sekundzie Słońce przekształca 4 miliony ton swojej masy w czystą energię (E=mc² w działaniu). </li>
        </ul>
      </div>
    `,
     Mercury: `
     <div class="info-block">
        <h2>O Merkurym</h2>
        <p>Najmniejsza planeta Układu Słonecznego i najbliższa Słońcu. Jej powierzchnia jest pokryta bliznami i kraterami, a temperatury ulegają ekstremalnym wahaniom.</p>
      </div>
      <div class="info-block">
        <h2>Kluczowe parametry</h2>
        <ul>
          <li>Średnica: 4879 km (38% średnicy Ziemi)</li>
          <li>Średnia odległość od Słońca: 57,9 mln km</li>
          <li>Okres orbitalny: 88 dni ziemskich</li>
          <li>Okres obrotu: 59 dni ziemskich</li>
          <li>Zakres temperatur: od –173°C do 427°C</li>
          <li>Znane księżyce: 0</li>
        </ul>
      </div>
       <div class="info-block">
        <h2>Ciekawostki</h2>
        <ul>
          <li>Na Merkuryu, mimo że jest to planeta najbliższa Słońcu, w kraterach na biegunach, które są stale zacienione, występuje lód wodny.
          <li>Planeta powoli się kurczy w miarę ochładzania się jej jądra, tworząc dramatyczne klify zwane „skarpami” o wysokości do 3 km. </li>
          <li>Ma ogromne żelazne jądro, które zajmuje około 85% promienia planety — jest to jedna z najwyższych gęstości w Układzie Słonecznym. </li>
          <li>Merkury znajduje się w rezonansie spinowo-orbitalnym 3:2 — obraca się trzy razy na każde dwa obroty wokół Słońca. </li>
          <li>Basen Caloris jest jednym z największych kraterów uderzeniowych w Układzie Słonecznym — ma średnicę 1550 km. </li>
          <li>Sonda MESSENGER (2011–2015) odkryła na powierzchni kratery wulkaniczne i zagłębienia. </li>
          <li>Sonda BepiColombo (misja ESA/JAXA) jest obecnie w drodze i dotrze na miejsce w 2025 roku. </li>
          <li>Merkury ma bardzo rzadką egzosferę, a nie prawdziwą atmosferę. </li>
          <li>Jest to najszybsza planeta — orbituje wokół Słońca ze średnią prędkością 47 km/s. </li>
        </ul>
      </div>
    `,
     Venus: `
      <div class="info-block">
        <h2>O Wenus</h2>
        <p>„Zła bliźniaczka” Ziemi — podobna pod względem wielkości i składu, ale przekształcona w piekielny świat przez niekontrolowany efekt cieplarniany.</p>
      </div>
      <div class="info-block">
        <h2>Kluczowe parametry</h2>
        <ul>
          <li>Średnica: 12 104 km (95% średnicy Ziemi)</li>
          <li>Średnia odległość od Słońca: 108 milionów km</li>
          <li>Okres orbitalny: 225 dni ziemskich</li>
          <li>Okres obrotu: 243 dni ziemskie (retrogradacyjny)</li>
          <li>Średnia temperatura: 464°C (najgorętsza planeta)</li>
          <li>Znane księżyce: 0</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Ciekawostki</h2>
        <ul>
          <li>Wenus jest najgorętszą planetą ze względu na gęstą atmosferę CO₂ i niekontrolowany efekt cieplarniany.</li>
          <li>Ciśnienie na powierzchni jest 92 razy większe niż na Ziemi — odpowiada to głębokości 900 m pod wodą.</li>
          <li>Obraca się ona wstecz (retrogradacyjnie) i niezwykle wolno — dzień na Wenus jest dłuższy niż jej rok. </li>
          <li>Ponad 1600 dużych wulkanów — wiele z nich mogło być aktywnych w niedawnej przeszłości geologicznej. </li>
          <li>Chmury złożone z kwasu siarkowego, z wyładowaniami atmosferycznymi i możliwym kwaśnym śniegiem. </li>
          <li>W atmosferze wykryto substancję zwaną fosfiną — potencjalny znak życia mikrobiologicznego (nadal przedmiot dyskusji).</li>
          <li>Przyszłe misje: DAVINCI+ (sonda atmosferyczna) i VERITAS (orbiter) NASA, których start zaplanowano na koniec lat 20. XXI wieku. </li>
          <li>Wenus miała kiedyś oceany — wyparowały one miliardy lat temu. </li>
          <li>Atmosfera obraca się 60 razy szybciej niż sama planeta (superrotacja). </li>
        </ul>
      </div>
    `,
    Earth: `
      <div class="info-block">
        <h2>O Ziemi</h2>
        <p>Nasza wyjątkowa planeta — jedyna znana planeta z obfitymi zasobami wody w stanie ciekłym, formami życia i atmosferą ochronną.</p>
      </div>
      <div class="info-block">
        <h2>Kluczowe parametry</h2>
        <ul>
          <li>Średnica: 12 742 km</li>
          <li>Średnia odległość od Słońca: 149,6 mln km (1 AU)</li>
          <li>Okres orbitalny: 365,25 dni</li>
          <li>Okres obrotu: 23 godziny 56 minut</li>
          <li>Średnia temperatura: ~15°C</li>
          <li>Znane księżyce: 1</li>
        </ul>
      </div>
      </div>
      <div class="info-block">
        <h2>Ciekawostki</h2>
        <ul>
          <li>71% powierzchni pokryte jest oceanami — więcej wody niż na jakiejkolwiek innej znanej planecie. </li>
          <li>Tektonika płyt przekształca powierzchnię i przetwarza węgiel — zjawisko unikalne w Układzie Słonecznym. </li>
          <li>Silne pole magnetyczne chroni życie przed szkodliwym promieniowaniem słonecznym. </li>
          <li>Warstwa ozonowa blokuje większość promieniowania ultrafioletowego pochodzącego ze Słońca. </li>
          <li>Ponad 8,7 miliona znanych gatunków, a miliony innych pozostają nieodkryte. </li>
          <li>Atmosfera ziemska składa się w 78% z azotu i w 21% z tlenu — idealna dla życia, jakie znamy. </li>
          <li>Księżyc stabilizuje nachylenie osi Ziemi, zapobiegając ekstremalnym wahaniom klimatu. </li>
          <li>Ziemia ma 4,54 miliarda lat i nadal jest aktywna geologicznie. </li>
          <li>Działalność człowieka ma obecnie dominujący wpływ na klimat i środowisko. </li>
        </ul>
      </div>
    `,
    Mars: `
    <div class="info-block">
        <h2>O Marsie</h2>
        <p>Czerwona planeta — niegdyś wilgotna i ciepła, obecnie zimna i sucha, ale najlepszy kandydat do istnienia życia poza Ziemią w przeszłości lub obecnie. </p>
      </div>
      <div class="info-block">
        <h2>Kluczowe parametry</h2>
        <ul>
          <li>Średnica: 6779 km (53% średnicy Ziemi)</li>
          <li>Średnia odległość od Słońca: 228 milionów km</li>
          <li>Okres orbitalny: 687 dni ziemskich</li>
          <li>Okres obrotu: 24,6 godziny</li>
          <li>Średnia temperatura: –60°C</li>
          <li>Znane księżyce: 2 (Fobos i Deimos)</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Ciekawostki</h2>
        <ul>
          <li>Czerwony kolor spowodowany obecnością tlenku żelaza (rdzy) na powierzchni. </li>
          <li>Olympus Mons — najwyższy wulkan w Układzie Słonecznym (wysokość 21 km).</li>
          <li>Valles Marineris — największy kanion (4000 km długości, 7 km głębokości).</li>
          <li>Wyraźne ślady starożytnych rzek, jezior i prawdopodobnie oceanów sprzed miliardów lat.</li>
          <li>Łazik Perseverance poszukuje śladów starożytnego życia mikrobiologicznego.</li>
          <li>Polarne czapy lodowe zawierają zamrożoną wodę i CO₂.</li>
          <li>Globalne burze piaskowe mogą ogarniać całą planetę przez wiele miesięcy. </li>
          <li>Misje załogowe planowane na lata 30. XXI wieku (NASA Artemis i SpaceX Starship).</li>
          <li>Wykryto pod powierzchnią wody lód i prawdopodobnie podziemne jeziora. </li>
        </ul>
      </div>
    `,
     Jowisz: `
      <div class="info-block">
        <h2>O Jowiszu</h2>
        <p>Król planet — gazowy gigant z burzliwą atmosferą i ogromną rodziną księżyców.</p>
      </div>
      <div class="info-block">
        <h2>Kluczowe parametry</h2>
        <ul>
          <li>Średnica: 142 984 km (11 razy większa od Ziemi)</li>
          <li>Średnia odległość od Słońca: 778 milionów km</li>
          <li>Okres orbitalny: 12 lat ziemskich</li>
          <li>Okres obrotu: ~10 godzin (najszybszy w Układzie Słonecznym)</li>
          <li>Znane księżyce: 95</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Ciekawostki</h2>
        <ul>
          <li>Wielka Czerwona Plama to burza większa od Ziemi, która szaleje od co najmniej 350 lat.</li>
          <li>Potężne pole magnetyczne Jowisza jest 20 000 razy silniejsze niż pole magnetyczne Ziemi. </li>
          <li>Cztery największe księżyce (księżyce galilejskie): Io (najbardziej wulkaniczny obiekt), Europa (podpowierzchniowy ocean), Ganimedes (największy księżyc), Kallisto (pokryty kraterami). </li>
          <li>Europa jest jednym z najlepszych kandydatów do istnienia życia pozaziemskiego ze względu na globalny ocean pod lodem. </li>
          <li>Sonda kosmiczna Juno orbituje od 2016 roku, badając wnętrze i atmosferę. </li>
          <li>Przyszła misja: Europa Clipper (start w 2024 r., przybycie w 2030 r.). </li>
          <li>Jowisz ma słabo widoczne pierścienie utworzone z pyłu pochodzącego z jego księżyców. </li>
          <li>Jego szybki obrót powoduje zauważalne wybrzuszenie równikowe. </li>
        </ul>
      </div>
      `,
    Saturn: `
      <div class="info-block">
        <h2>O Saturnie</h2>
        <p>Klejnot Układu Słonecznego — słynący ze spektakularnego systemu pierścieni.</p>
      </div>
      <div class="info-block">
        <h2>Kluczowe parametry</h2>
        <ul>
          <li>Średnica: 120 536 km (9,5 razy większa od Ziemi)</li>
          <li>Średnia odległość od Słońca: 1,4 mld km</li>
          <li>Okres orbitalny: 29,5 roku ziemskiego</li>
          <li>Okres obrotu: ~10,7 godziny</li>
          <li>Znane księżyce: 146 (najwięcej w Układzie Słonecznym)</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Ciekawostki</h2>
        <ul>
          <li>Pierścienie składają się z miliardów cząstek lodu i skał — widocznych z Ziemi za pomocą małych teleskopów.</li>
          <li>Gęstość Saturna jest tak mała, że mógłby unosić się na wodzie.</li>
          <li>Titan — jedyny księżyc z gęstą atmosferą i stabilną cieczą na powierzchni (jeziora metanu).</li>
          <li>Enceladus wyrzuca gejzery wody z podpowierzchniowego oceanu — główny cel poszukiwań życia.</li>
          <li>Misja Cassini (2004–2017) dokonała niesamowitych odkryć i zanurzyła się w atmosferze Saturna.</li>
          <li>Tajemnicza burza w kształcie sześciokąta na biegunie północnym. </li>
          <li>Przyszła misja: dron Dragonfly do badania Tytana (start w 2028 r.). </li>
          <li>Pierścienie są stosunkowo młode — prawdopodobnie mają tylko 100 milionów lat. </li>
        </ul>
      </div>
    `,
    Uran: `
      <div class="info-block">
        <h2>O Uranie</h2>
        <p>„Boczny” lodowy gigant — wyjątkowy ze względu na ekstremalne nachylenie osi. </p>
      </div>
      <div class="info-block">
        <h2>Kluczowe parametry</h2>
        <ul>
          <li>Średnica: 51 118 km (4 razy większa od Ziemi)</li>
          <li>Średnia odległość od Słońca: 2,9 mld km</li>
          <li>Okres orbitalny: 84 lata ziemskie</li>
          <li>Okres obrotu: ~17 godzin (retrogradacyjny)</li>
          <li>Znane księżyce: 28</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Ciekawostki</h2>
        <ul>
          <li>Uran obraca się na boku (nachylenie 98°) — prawdopodobnie w wyniku potężnego uderzenia w przeszłości. </li>
          <li>Nachylenie to powoduje ekstremalne pory roku — każdy biegun otrzymuje 42 lata ciągłego nasłonecznienia, po których następuje 42 lata ciemności. </li>
          <li>Słaby układ pierścieni odkryty przez sondę Voyager 2 w 1986 roku. </li>
          <li>Metan w atmosferze pochłania światło czerwone, nadając jej blado niebieski kolor. </li>
          <li>Najzimniejsza atmosfera planetarna w Układzie Słonecznym (–224°C). </li>
          <li>Odwiedzona tylko raz — przez sondę Voyager 2 w 1986 roku. </li>
          <li>Proponowana misja sondy orbitalnej i sondy badawczej do Urana może zostać rozpoczęta w latach 30. XXI wieku. </li>
          <li>Wewnątrz planety może powstawać „diamentowy deszcz” w wyniku kompresji węgla. </li>
        </ul>
      </div>
    `,
    Neptun: `
      <div class="info-block">
        <h2>O Neptunie</h2>
        <p>Najbardziej wietrzna planeta — ciemnoniebieski lodowy gigant na krańcu Układu Słonecznego.</p>
      </div>
      <div class="info-block">
        <h2>Kluczowe parametry</h2>
        <ul>
          <li>Średnica: 49 528 km (3,9 razy większa od Ziemi)</li>
          <li>Średnia odległość od Słońca: 4,5 mld km</li>
          <li>Okres orbitalny: 165 lat ziemskich</li>
          <li>Okres obrotu: ~16 godzin</li>
          <li>Znane księżyce: 16</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Ciekawostki</h2>
        <ul>
          <li>Najsilniejsze stałe wiatry w Układzie Słonecznym — do 2100 km/h.</li>
          <li>Tryton — obiekt z pasa Kuipera z gejzerami azotu i orbitą wsteczną. </li>
          <li>Wielka Ciemna Plama była ogromną burzą zaobserwowaną przez sondę Voyager 2 (później zniknęła). </li>
          <li>Głęboki niebieski kolor spowodowany metanem pochłaniającym światło czerwone. </li>
          <li>Odkryty dzięki matematycznym przewidywaniom w 1846 roku. </li>
          <li>Odwiedzony tylko przez sondę Voyager 2 w 1989 roku. </li>
          <li>Wewnętrzne źródło ciepła powoduje ekstremalne warunki pogodowe pomimo odległości od Słońca. </li>
          <li>W głębi wnętrza prawdopodobnie występują diamentowe deszcze. </li>
        </ul>
      </div>
    `
  },
  de: {
     Sonne: `
      <div class="info-block">
        <h2>Über die Sonne</h2>
        <p>Die Sonne ist das Herzstück unseres Sonnensystems – ein gigantischer Ball aus heißem Plasma, der seit 4,6 Milliarden Jahren leuchtet und dies noch weitere 5 Milliarden Jahre tun wird.</p>
      </div>
      <div class="info-block">
        <h2>Wichtige Parameter</h2>
        <ul>
          <li>Durchmesser: 1.392.000 km (109-mal größer als die Erde)</li>
          <li>Masse: 333.000-mal so groß wie die Masse der Erde</li>
          <li>Oberflächentemperatur: ~5.500 °C</li>
          <li>Kerntemperatur: ~15 Millionen °C</li>
          <li>Zusammensetzung: ~74 % Wasserstoff, ~24 % Helium</li>
          <li>Energieabgabe: 3,8 × 10²⁶ Watt (entspricht 100 Milliarden Atombomben pro Sekunde)</li>
        </ul>
      </div>
       <div class="info-block">
        <h2>Interessante Fakten</h2>
        <ul>
          <li>Die Sonne enthält 99,86 % der Gesamtmasse des gesamten Sonnensystems.</li>
          <li>Sie erzeugt Energie durch Kernfusion – jede Sekunde verschmelzen 620 Millionen Tonnen Wasserstoff zu Helium.</li>
          <li>Sonneneruptionen und koronale Massenauswürfe können Satelliten, GPS und Stromnetze auf der Erde stören.</li>
          <li>Die Korona (äußere Atmosphäre) der Sonne ist auf mysteriöse Weise heißer als ihre Oberfläche – bis zu 2 Millionen °C.</li>
          <li>Sonnenflecken folgen einem 11-Jahres-Zyklus und sind Regionen mit intensiver magnetischer Aktivität.</li>
          <li>In etwa 5 Milliarden Jahren wird sich die Sonne zu einem roten Riesen ausdehnen und wahrscheinlich Merkur, Venus und möglicherweise auch die Erde verschlingen. </li>
          <li>Die Parker Solar Probe ist das erste Raumfahrzeug, das die Sonne „berührt” und durch ihre Korona fliegt. </li>
          <li>Der Sonnenwind erzeugt wunderschöne Polarlichter in der Nähe der Pole der Erde. </li>
          <li>Jede Sekunde wandelt die Sonne 4 Millionen Tonnen ihrer Masse in reine Energie um (E=mc² in Aktion). </li>
        </ul>
      </div>
    `,
     Merkur: `
      <div class="info-block">
        <h2>Über Merkur</h2>
        <p>Der kleinste Planet im Sonnensystem und der der Sonne am nächsten gelegene. Seine Oberfläche ist eine zerklüftete, kraterübersäte Landschaft mit extremen Temperaturschwankungen.</p>
      </div>
      <div class="info-block">
        <h2>Wichtige Parameter</h2>
        <ul>
          <li>Durchmesser: 4.879 km (38 % des Erddurchmessers)</li>
          <li>Durchschnittliche Entfernung von der Sonne: 57,9 Millionen km</li>
          <li>Umlaufzeit: 88 Erdentage</li>
          <li>Rotationsperiode: 59 Erdentage</li>
          <li>Temperaturbereich: –173 °C bis 427 °C</li>
          <li>Bekannte Monde: 0</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interessante Fakten</h2>
        <ul>
          <li>Auf Merkur gibt es Wassereis in permanent im Schatten liegenden Kratern an den Polen – obwohl er der Sonne am nächsten gelegene Planet ist.</li>
          <li>Der Planet schrumpft langsam, da sein Kern abkühlt, wodurch dramatische, bis zu 3 km hohe Klippen entstehen, die als „Skarpen” bezeichnet werden. </li>
          <li>Er hat einen riesigen Eisenkern, der etwa 85 % des Planetenradius ausmacht – eine der höchsten Dichten im Sonnensystem. </li>
          <li>Merkur befindet sich in einer 3:2-Spin-Orbit-Resonanz – er dreht sich dreimal pro zwei Umläufe um die Sonne. </li>
          <li>Das Caloris-Becken ist mit einem Durchmesser von 1.550 km einer der größten Einschlagskrater im Sonnensystem. </li>
          <li>MESSENGER (2011–2015) entdeckte vulkanische Schlote und Vertiefungen auf der Oberfläche. </li>
          <li>BepiColombo (ESA/JAXA-Mission) ist derzeit unterwegs und wird 2025 eintreffen. </li>
          <li>Merkur hat eine sehr dünne Exosphäre, keine echte Atmosphäre. </li>
          <li>Er ist der schnellste Planet – er umkreist die Sonne mit einer Durchschnittsgeschwindigkeit von 47 km/s. </li>
        </ul>
      </div>
    `,
     Venus: `
      <div class="info-block">
        <h2>Über die Venus</h2>
        <p>Der „böse Zwilling” der Erde – ähnlich in Größe und Zusammensetzung, aber durch einen außer Kontrolle geratenen Treibhauseffekt in eine höllische Welt verwandelt. </p>
      </div>
      <div class="info-block">
        <h2>Wichtige Parameter</h2>
        <ul>
          <li>Durchmesser: 12.104 km (95 % der Erde)</li>
          <li>Durchschnittliche Entfernung von der Sonne: 108 Millionen km</li>
          <li>Umlaufzeit: 225 Erdentage</li>
          <li>Rotationsperiode: 243 Erdentage (retrograd)</li>
          <li>Durchschnittstemperatur: 464 °C (heißester Planet)</li>
          <li>Bekannte Monde: 0</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interessante Fakten</h2>
        <ul>
          <li>Die Venus ist aufgrund ihrer dichten CO₂-Atmosphäre und des außer Kontrolle geratenen Treibhauseffekts der heißeste Planet. </li>
          <li>Der Oberflächendruck beträgt das 92-fache des Drucks auf der Erde – das entspricht einem Druck in 900 m Tiefe unter Wasser. </li>
          <li>Sie dreht sich rückwärts (retrograd) und extrem langsam – ein Tag auf der Venus ist länger als ihr Jahr.</li>
          <li>Mehr als 1.600 große Vulkane – viele davon waren möglicherweise in der geologisch jüngeren Vergangenheit aktiv.</li>
          <li>Wolken aus Schwefelsäure, mit Blitzen und möglicherweise saurem Schnee.</li>
          <li>In der Atmosphäre wurde eine Substanz namens Phosphin nachgewiesen – ein mögliches Anzeichen für mikrobielles Leben (noch umstritten).</li>
          <li>Zukünftige Missionen: DAVINCI+ (Atmosphärensonde) und VERITAS (Orbiter) der NASA, Start Ende der 2020er Jahre. </li>
          <li>Venus hatte einst Ozeane – diese sind vor Milliarden von Jahren verdampft. </li>
          <li>Die Atmosphäre rotiert 60 Mal schneller als der Planet selbst (Superrotation). </li>
        </ul>
      </div>
    `,
    Erde: `
      <div class="info-block">
        <h2>Über die Erde</h2>
        <p>Unsere einzigartige Heimat – der einzige bekannte Planet mit reichlich flüssigem Wasser, Leben und einer schützenden Atmosphäre.</p>
      </div>
      <div class="info-block">
        <h2>Wichtige Parameter</h2>
        <ul>
          <li>Durchmesser: 12.742 km</li>
          <li>Durchschnittliche Entfernung von der Sonne: 149,6 Millionen km (1 AE)</li>
          <li>Umlaufzeit: 365,25 Tage</li>
          <li>Rotationsperiode: 23 Stunden 56 Minuten</li>
          <li>Durchschnittstemperatur: ~15 °C</li>
          <li>Bekannte Monde: 1</li>
        </ul>
      </div>
       <div class="info-block">
        <h2>Interessante Fakten</h2>
        <ul>
          <li>71 % der Oberfläche sind von Ozeanen bedeckt – mehr Wasser als auf jedem anderen bekannten Planeten.</li>
          <li>Plattentektonik formt die Oberfläche um und recycelt Kohlenstoff – einzigartig im Sonnensystem.</li>
          <li>Ein starkes Magnetfeld schützt das Leben vor schädlicher Sonnenstrahlung.</li>
          <li>Die Ozonschicht blockt den größten Teil der ultravioletten Strahlung der Sonne ab.</li>
          <li>Über 8,7 Millionen bekannte Arten, Millionen weitere sind noch unentdeckt.</li>
          <li>Die Erdatmosphäre besteht zu 78 % aus Stickstoff und zu 21 % aus Sauerstoff – perfekt für das Leben, wie wir es kennen.</li>
          <li>Der Mond stabilisiert die Neigung der Erdachse und verhindert so extreme Klimaschwankungen. </li>
          <li>Die Erde ist 4,54 Milliarden Jahre alt und geologisch noch immer aktiv. </li>
          <li>Menschliche Aktivitäten haben heute den größten Einfluss auf Klima und Umwelt. </li>
        </ul>
      </div>
    `,
     Mars: `
      <div class="info-block">
        <h2>Über den Mars</h2>
        <p>Der rote Planet – einst feucht und warm, heute kalt und trocken, aber der beste Kandidat für vergangenes oder gegenwärtiges Leben außerhalb der Erde.</p>
      </div>
      <div class="info-block">
        <h2>Wichtige Parameter</h2>
        <ul>
          <li>Durchmesser: 6.779 km (53 % des Erddurchmessers)</li>
          <li>Durchschnittliche Entfernung von der Sonne: 228 Millionen km</li>
          <li>Umlaufzeit: 687 Erdentage</li>
          <li>Rotationsperiode: 24,6 Stunden</li>
          <li>Durchschnittstemperatur: –60 °C</li>
          <li>Bekannte Monde: 2 (Phobos und Deimos)</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interessante Fakten</h2>
        <ul>
          <li>Rote Farbe durch Eisenoxid (Rost) auf der Oberfläche.</li>
          <li>Olympus Mons – der höchste Vulkan im Sonnensystem (21 km hoch).</li>
          <li>Valles Marineris – der größte Canyon (4.000 km lang, 7 km tief).</li>
          <li>Eindeutige Hinweise auf alte Flüsse, Seen und möglicherweise Ozeane vor Milliarden von Jahren.</li>
          <li>Der Rover „Perseverance” sucht nach Spuren von uraltem mikrobiellem Leben.</li>
          <li>Die Polkappen enthalten gefrorenes Wasser und CO₂.</li>
          <li>Globale Staubstürme können den gesamten Planeten monatelang einhüllen. </li>
          <li>Für die 2030er Jahre sind bemannte Missionen geplant (NASA Artemis und SpaceX Starship).</li>
          <li>Unterirdisches Wassereis und mögliche unterirdische Seen entdeckt. </li>
        </ul>
      </div>
    `,
     Jupiter: `
      <div class="info-block">
        <h2>Über Jupiter</h2>
        <p>Der König der Planeten – ein Gasriese mit einer stürmischen Atmosphäre und einer riesigen Mondfamilie.</p>
      </div>
      <div class="info-block">
        <h2>Wichtige Parameter</h2>
        <ul>
          <li>Durchmesser: 142.984 km (11-mal so groß wie die Erde)</li>
          <li>Durchschnittliche Entfernung von der Sonne: 778 Millionen km</li>
          <li>Umlaufzeit: 12 Erdjahre</li>
          <li>Rotationsperiode: ~10 Stunden (die schnellste im Sonnensystem)</li>
          <li>Bekannte Monde: 95</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interessante Fakten</h2>
        <ul>
          <li>Der Große Rote Fleck ist ein Sturm, der größer ist als die Erde und seit mindestens 350 Jahren tobt.</li>
          <li>Das starke Magnetfeld des Jupiter ist 20.000 Mal stärker als das der Erde. </li>
          <li>Die vier größten Monde (Galileische Monde): Io (vulkanischster Körper), Europa (unterirdischer Ozean), Ganymed (größter Mond), Callisto (stark verkratert). </li>
          <li>Europa ist aufgrund seines globalen Ozeans unter dem Eis einer der besten Kandidaten für außerirdisches Leben. </li>
          <li>Die Raumsonde Juno umkreist den Jupiter seit 2016 und untersucht sein Inneres und seine Atmosphäre. </li>
          <li>Zukünftige Mission: Europa Clipper (Start 2024, Ankunft 2030). </li>
          <li>Jupiter hat schwache Ringe, die aus Staub seiner Monde bestehen.</li>
          <li>Seine schnelle Rotation verursacht eine deutliche Ausbuchtung am Äquator.</li>
        </ul>
      </div>
    `,
    Saturn: `
      <div class="info-block">
        <h2>Über Saturn</h2>
        <p>Das Juwel des Sonnensystems – berühmt für sein spektakuläres Ringsystem.</p>
      </div>
      <div class="info-block">
        <h2>Wichtige Parameter</h2>
        <ul>
          <li>Durchmesser: 120.536 km (9,5-mal so groß wie die Erde)</li>
          <li>Durchschnittliche Entfernung von der Sonne: 1,4 Milliarden km</li>
          <li>Umlaufzeit: 29,5 Erdjahre</li>
          <li>Rotationsperiode: ~10,7 Stunden</li>
          <li>Bekannte Monde: 146 (die meisten im Sonnensystem)</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interessante Fakten</h2>
        <ul>
          <li>Die Ringe bestehen aus Milliarden von Eis- und Gesteinspartikeln – von der Erde aus mit kleinen Teleskopen sichtbar.</li>
          <li>Die Dichte des Saturn ist so gering, dass er im Wasser schwimmen könnte.</li>
          <li>Titan – der einzige Mond mit einer dichten Atmosphäre und stabiler Flüssigkeit auf seiner Oberfläche (Methanseen).</li>
          <li>Enceladus schießt Wasserfontänen aus einem unterirdischen Ozean – ein Hauptziel für die Suche nach Leben.</li>
          <li>Die Cassini-Mission (2004–2017) machte unglaubliche Entdeckungen und tauchte in die Atmosphäre des Saturn ein.</li>
          <li>Ein mysteriöser hexagonförmiger Sturm am Nordpol. </li>
          <li>Zukünftige Mission: Dragonfly-Drohne zur Erforschung von Titan (Start 2028). </li>
          <li>Die Ringe sind relativ jung – möglicherweise nur 100 Millionen Jahre alt. </li>
        </ul>
      </div>
    `,
     Uranus: `
      <div class="info-block">
        <h2>Über Uranus</h2>
        <p>Der „seitlich liegende” Eisriese – einzigartig aufgrund seiner extremen Achsenneigung.</p>
      </div>
      <div class="info-block">
        <h2>Wichtige Parameter</h2>
        <ul>
          <li>Durchmesser: 51.118 km (4-mal so groß wie die Erde)</li>
          <li>Durchschnittliche Entfernung von der Sonne: 2,9 Milliarden km</li>
          <li>Umlaufzeit: 84 Erdjahre</li>
          <li>Rotationsperiode: ~17 Stunden (retrograd)</li>
          <li>Bekannte Monde: 28</li>
        </ul>
      </div>
       <div class="info-block">
        <h2>Interessante Fakten</h2>
        <ul>
          <li>Uranus rotiert auf seiner Seite (98° Neigung) – wahrscheinlich aufgrund eines massiven Einschlags in der Vergangenheit.</li>
          <li>Diese Neigung verursacht extreme Jahreszeiten – jeder Pol erhält 42 Jahre lang ununterbrochenes Sonnenlicht, gefolgt von 42 Jahren Dunkelheit.</li>
          <li>Ein schwaches Ringsystem wurde 1986 von Voyager 2 entdeckt. </li>
          <li>Methan in der Atmosphäre absorbiert rotes Licht und verleiht ihr eine blassblaue Farbe. </li>
          <li>Kälteste Planetenatmosphäre im Sonnensystem (–224 °C). </li>
          <li>Nur einmal besucht – von Voyager 2 im Jahr 1986. </li>
          <li>Eine geplante Uranus-Orbiter- und Sondenmission könnte in den 2030er Jahren starten. </li>
          <li>Im Inneren könnte es durch die Kompression von Kohlenstoff zu „Diamantregen” kommen. </li>
        </ul>
      </div>
    `,
     Neptun: `
      <div class="info-block">
        <h2>Über Neptun</h2>
        <p>Der windigste Planet – ein tiefblauer Eisriese am Rande des Sonnensystems.</p>
      </div>
      <div class="info-block">
        <h2>Wichtige Parameter</h2>
        <ul>
          <li>Durchmesser: 49.528 km (3,9-mal so groß wie die Erde)</li>
          <li>Durchschnittliche Entfernung von der Sonne: 4,5 Milliarden km</li>
          <li>Umlaufzeit: 165 Erdjahre</li>
          <li>Rotationsperiode: ~16 Stunden</li>
          <li>Bekannte Monde: 16</li>
        </ul>
      </div>
      <div class="info-block">
        <h2>Interessante Fakten</h2>
        <ul>
          <li>Stärkste anhaltende Winde im Sonnensystem – bis zu 2.100 km/h.</li>
          <li>Triton – ein eingefangenes Objekt aus dem Kuipergürtel mit Stickstoffgeysiren und retrograder Umlaufbahn.</li>
          <li>Der Große Dunkle Fleck war ein gewaltiger Sturm, der von Voyager 2 beobachtet wurde (später verschwand er).</li>
          <li>Tiefblaue Farbe durch Methan, das rotes Licht absorbiert.</li>
          <li>Entdeckt durch mathematische Vorhersage im Jahr 1846.</li>
          <li>Wurde nur 1989 von Voyager 2 besucht. </li>
          <li>Interne Wärmequelle sorgt trotz Entfernung von der Sonne für extremes Wetter. </li>
          <li>Diamantregen wahrscheinlich im tiefen Inneren. </li>
        </ul>
      </div>
    `
  }
};

// Inserting information taking into account the language
const currentLang = localStorage.getLanguage || "en";
document.getElementById("planetInfo").innerHTML = (infos[currentLang] && infos[currentLang][name]) || infos.en[name] || "<p>No information available.</p>";