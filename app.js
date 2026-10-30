/**
 * B.O.A.T. — Ballon d'Or of All Time
 * Official Fan Voting Engine & Tournament System
 * France Football & UEFA 70th Jubilee Initiative
 */

// ==========================================================================
// 1. Contenders Dataset (The Elite 10 Multi-Time Ballon d'Or Legends)
// ==========================================================================
const CONTENDERS = [
    {
        id: 'cr7-2008',
        name: 'Cristiano Ronaldo',
        shortName: 'CR7',
        season: '2007–08',
        year: 2008,
        club: 'Manchester United',
        country: 'Portugal',
        flag: '🇵🇹',
        position: 'Winger / Forward',
        era: 'modern',
        uclWinner: true,
        goals: 42,
        assists: 8,
        appearances: 49,
        trophies: ['UEFA Champions League', 'Premier League', 'FA Community Shield', 'FIFA Club World Cup'],
        individualAwards: ["Ballon d'Or", 'FIFA World Player of the Year', 'European Golden Shoe', 'Premier League POTS'],
        ballonDorVoteShare: '77.8%',
        historicBoatRank: 1,
        initialVotes: 7714200,
        quote: "Cristiano was the fastest, most physically dominant winger Europe had seen. Scoring 42 goals from the wing in England changed the standard forever.",
        description: "A watershed season in football history. Ronaldo dominated both the Premier League and the Champions League, scoring the towering header in the Moscow final and claiming his first Ballon d'Or.",
        accentColor: '#D4AF37',
        badge: 'CROWNED B.O.A.T. WINNER'
    },
    {
        id: 'messi-2012',
        name: 'Lionel Messi',
        shortName: 'LM10',
        season: '2011–12',
        year: 2012,
        club: 'FC Barcelona',
        country: 'Argentina',
        flag: '🇦🇷',
        position: 'Forward / False 9',
        era: 'modern',
        uclWinner: false,
        goals: 73,
        assists: 29,
        appearances: 60,
        trophies: ['Copa del Rey', 'Supercopa de España', 'UEFA Super Cup', 'FIFA Club World Cup'],
        individualAwards: ["Ballon d'Or", 'European Golden Shoe (50 league goals)', 'La Liga Best Player'],
        ballonDorVoteShare: '41.6%',
        historicBoatRank: 2,
        initialVotes: 6542100,
        quote: "A calendar year with 91 official goals that shattered Gerd Müller's 40-year-old world record. Pure individual artistry.",
        description: "The most statistically astronomical individual year in the history of association football. Messi produced 73 club goals in 2011-12 and reached 91 goals in the 2012 calendar year.",
        accentColor: '#2563EB',
        badge: 'HISTORIC 91 GOALS'
    },
    {
        id: 'cr7-2017',
        name: 'Cristiano Ronaldo',
        shortName: 'CR7',
        season: '2016–17',
        year: 2017,
        club: 'Real Madrid',
        country: 'Portugal',
        flag: '🇵🇹',
        position: 'Striker / Forward',
        era: 'modern',
        uclWinner: true,
        goals: 42,
        assists: 12,
        appearances: 46,
        trophies: ['UEFA Champions League', 'La Liga', 'FIFA Club World Cup', 'UEFA Super Cup'],
        individualAwards: ["Ballon d'Or", 'The Best FIFA Men\'s Player', 'UCL Top Scorer (12 goals)'],
        ballonDorVoteShare: '94.6%',
        historicBoatRank: 3,
        initialVotes: 1520400,
        quote: "Ten goals in the Champions League quarter-finals, semi-finals, and final against Bayern, Atletico, and Juventus. Peak clutch performance.",
        description: "The pinnacle of knockout efficiency. Ronaldo fired Real Madrid to the first back-to-back Champions League titles in the modern era and sealed Madrid's first La Liga/European Cup double since 1958.",
        accentColor: '#D4AF37',
        badge: 'UCL KNOCKOUT RECORD'
    },
    {
        id: 'r9-1997',
        name: 'Ronaldo Nazário',
        shortName: 'R9',
        season: '1996–97',
        year: 1997,
        club: 'FC Barcelona',
        country: 'Brazil',
        flag: '🇧🇷',
        position: 'Striker',
        era: 'classic',
        uclWinner: false,
        goals: 47,
        assists: 12,
        appearances: 49,
        trophies: ['UEFA Cup Winners\' Cup', 'Copa del Rey', 'Supercopa de España', 'Copa América (1997)'],
        individualAwards: ["Ballon d'Or (Youngest ever at 21)", 'FIFA World Player of the Year', 'European Golden Shoe'],
        ballonDorVoteShare: '77.0%',
        historicBoatRank: 4,
        initialVotes: 1105300,
        quote: "He wasn't just a striker; he was a phenomenon. Running through entire defenses at full sprint with frightening power and stepovers.",
        description: "The season that gave birth to 'Il Fenómeno'. At just 20-21 years old, Ronaldo scored 47 goals in 49 games in Spain, executing legendary solo goals like the one against Compostela.",
        accentColor: '#10B981',
        badge: 'YOUNGEST WINNER'
    },
    {
        id: 'van-basten-1988',
        name: 'Marco van Basten',
        shortName: 'MVB',
        season: '1987–88',
        year: 1988,
        club: 'AC Milan / Netherlands',
        country: 'Netherlands',
        flag: '🇳🇱',
        position: 'Striker',
        era: 'classic',
        uclWinner: false,
        goals: 19,
        assists: 6,
        appearances: 28,
        trophies: ['UEFA European Championship (Euro 1988)', 'Serie A Championship'],
        individualAwards: ["Ballon d'Or", 'Euro 1988 Top Scorer & Best Player', 'World Soccer POTY'],
        ballonDorVoteShare: '84.8%',
        historicBoatRank: 5,
        initialVotes: 485600,
        quote: "The volley from the tightest possible angle in Munich against Dasaev remains arguably the greatest goal in major international tournament history.",
        description: "After recovering from an ankle injury, Van Basten inspired the Netherlands to their first major international trophy at Euro 1988 and spearheaded Sacchi's revolutionary AC Milan to the Scudetto.",
        accentColor: '#F97316',
        badge: 'EURO 1988 LEGEND'
    },
    {
        id: 'platini-1984',
        name: 'Michel Platini',
        shortName: 'MP10',
        season: '1983–84',
        year: 1984,
        club: 'Juventus / France',
        country: 'France',
        flag: '🇫🇷',
        position: 'Attacking Midfielder',
        era: 'classic',
        uclWinner: false,
        goals: 28,
        assists: 15,
        appearances: 43,
        trophies: ['UEFA European Championship (Euro 1984)', 'Serie A Championship', 'UEFA Cup Winners\' Cup'],
        individualAwards: ["Ballon d'Or", 'Euro 1984 Golden Boot (9 goals in 5 games record)', 'Serie A Capocannoniere'],
        ballonDorVoteShare: '98.5%',
        historicBoatRank: 6,
        initialVotes: 372100,
        quote: "Nine goals in five matches at Euro 1984 as a midfielder. A record that will likely stand forever in European championship history.",
        description: "The most dominant international tournament showing by an individual midfielder. Platini scored two consecutive hat-tricks and the winner in the final, alongside winning Serie A and Europe with Juventus.",
        accentColor: '#3B82F6',
        badge: 'EURO 9 GOALS RECORD'
    },
    {
        id: 'cruyff-1974',
        name: 'Johan Cruyff',
        shortName: 'JC14',
        season: '1973–74',
        year: 1974,
        club: 'FC Barcelona / Netherlands',
        country: 'Netherlands',
        flag: '🇳🇱',
        position: 'Playmaker / Center Forward',
        era: 'classic',
        uclWinner: false,
        goals: 21,
        assists: 17,
        appearances: 38,
        trophies: ['La Liga Championship (Ended 14-year drought)', 'FIFA World Cup Finalist (1974)'],
        individualAwards: ["Ballon d'Or", 'FIFA World Cup Golden Ball', 'Don Balón Award'],
        ballonDorVoteShare: '89.2%',
        historicBoatRank: 7,
        initialVotes: 298400,
        quote: "The architect of Total Football. He conquered the Santiago Bernabeu 5-0 and introduced the world to the famous 'Cruyff Turn'.",
        description: "Cruyff transformed Barcelona in his very first season, winning the league title and delivering the famous 5-0 victory over Real Madrid, followed by leading the Clockwork Orange to the 1974 World Cup final.",
        accentColor: '#EAB308',
        badge: 'TOTAL FOOTBALL'
    },
    {
        id: 'distefano-1957',
        name: 'Alfredo Di Stéfano',
        shortName: 'ADS',
        season: '1956–57',
        year: 1957,
        club: 'Real Madrid',
        country: 'Spain / Argentina',
        flag: '🇪🇸',
        position: 'All-Round Forward',
        era: 'classic',
        uclWinner: true,
        goals: 43,
        assists: 14,
        appearances: 43,
        trophies: ['European Champion Clubs\' Cup', 'La Liga Championship', 'Latin Cup'],
        individualAwards: ["Ballon d'Or", 'Pichichi Trophy (31 goals)', 'Sole 1989 Super Ballon d\'Or Laureate'],
        ballonDorVoteShare: '84.6%',
        historicBoatRank: 8,
        initialVotes: 214500,
        quote: "The engine of Real Madrid's five straight European Cups. Di Stéfano defended, dictated the tempo, and scored in every European final.",
        description: "The complete footballer. In 1957, Di Stéfano scored 43 goals in 43 matches, led Madrid to the European Cup and La Liga double, and laid the foundation that earned him the 1989 Super Ballon d'Or.",
        accentColor: '#D4AF37',
        badge: 'SUPER BALLON D\'OR'
    },
    {
        id: 'beckenbauer-1976',
        name: 'Franz Beckenbauer',
        shortName: 'FB',
        season: '1975–76',
        year: 1976,
        club: 'Bayern Munich / West Germany',
        country: 'Germany',
        flag: '🇩🇪',
        position: 'Libero / Sweeper',
        era: 'classic',
        uclWinner: true,
        goals: 7,
        assists: 11,
        appearances: 46,
        trophies: ['European Champion Clubs\' Cup (3rd consecutive)', 'Intercontinental Cup'],
        individualAwards: ["Ballon d'Or (Only defender to win multiple Ballons d'Or)", 'German Footballer of the Year'],
        ballonDorVoteShare: '69.4%',
        historicBoatRank: 9,
        initialVotes: 112300,
        quote: "The quintessential Libero. Beckenbauer commanded the pitch like a field marshal with effortless elegance and defensive genius.",
        description: "Captain of Bayern Munich's historic three-peat of European Cups (1974, 1975, 1976). Beckenbauer redefined defensive leadership and remains the greatest defender in Ballon d'Or history.",
        accentColor: '#EF4444',
        badge: 'DER KAISER'
    },
    {
        id: 'rummenigge-1981',
        name: 'Karl-Heinz Rummenigge',
        shortName: 'KHR',
        season: '1980–81',
        year: 1981,
        club: 'Bayern Munich',
        country: 'Germany',
        flag: '🇩🇪',
        position: 'Forward',
        era: 'classic',
        uclWinner: false,
        goals: 39,
        assists: 14,
        appearances: 45,
        trophies: ['Bundesliga Championship', 'European Cup Semifinalist'],
        individualAwards: ["Ballon d'Or", 'Bundesliga Top Scorer (29 goals)', 'World Soccer POTY'],
        ballonDorVoteShare: '86.1%',
        historicBoatRank: 10,
        initialVotes: 64200,
        quote: "Back-to-back Ballon d'Or winner at the peak of German dominance in European club football.",
        description: "Rummenigge was unplayable in 1980-81, retaining his Ballon d'Or trophy with 39 goals and carrying Bayern Munich to back-to-back German championships.",
        accentColor: '#DC2626',
        badge: 'BACK-TO-BACK WINNER'
    }
];

// ==========================================================================
// 2. Application State Management
// ==========================================================================
class BoatVotingApp {
    constructor() {
        this.votes = {};
        this.userVote = null;
        this.voterPass = null;
        this.soundEnabled = true;
        this.activeFilter = 'all';
        this.audioCtx = null;

        this.initStorage();
        this.initElements();
        this.initAudio();
        this.renderAll();
        this.bindEvents();
        this.startSimulatedStream();
    }

    initStorage() {
        // Load stored votes or seed with authentic baseline
        const savedVotes = localStorage.getItem('boat_votes_v1');
        if (savedVotes) {
            try {
                this.votes = JSON.parse(savedVotes);
            } catch (e) {
                this.resetToBaseline();
            }
        } else {
            this.resetToBaseline();
        }

        // Load user's ballot & voter pass if previously submitted
        const savedUserVote = localStorage.getItem('boat_user_ballot');
        if (savedUserVote) {
            try {
                this.userVote = JSON.parse(savedUserVote);
            } catch (e) { }
        }

        const savedPass = localStorage.getItem('boat_voter_pass');
        if (savedPass) {
            try {
                this.voterPass = JSON.parse(savedPass);
            } catch (e) { }
        }
    }

    resetToBaseline() {
        this.votes = {};
        CONTENDERS.forEach(c => {
            this.votes[c.id] = c.initialVotes;
        });
        localStorage.setItem('boat_votes_v1', JSON.stringify(this.votes));
    }

    saveVotes() {
        localStorage.setItem('boat_votes_v1', JSON.stringify(this.votes));
    }

    getTotalVotes() {
        return Object.values(this.votes).reduce((sum, v) => sum + v, 0);
    }

    getContenderPercentage(id) {
        const total = this.getTotalVotes();
        if (total === 0) return '0.0%';
        const count = this.votes[id] || 0;
        return ((count / total) * 100).toFixed(1) + '%';
    }

    // ==========================================================================
    // 3. Audio & Haptics Engine (Pure Web Audio API — No external audio files!)
    // ==========================================================================
    initAudio() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioCtx = new AudioContext();
            }
        } catch (e) {
            console.log('AudioContext not supported');
        }
    }

    playChime(type = 'vote') {
        if (!this.soundEnabled || !this.audioCtx) return;
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }

        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        if (type === 'vote') {
            // Elegant golden harmonic chime (Pentatonic chord)
            const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            freqs.forEach((freq, idx) => {
                const o = this.audioCtx.createOscillator();
                const g = this.audioCtx.createGain();
                o.type = 'sine';
                o.frequency.setValueAtTime(freq, now + idx * 0.06);
                g.gain.setValueAtTime(0.12, now + idx * 0.06);
                g.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.6);
                o.connect(g);
                g.connect(this.audioCtx.destination);
                o.start(now + idx * 0.06);
                o.stop(now + idx * 0.06 + 0.65);
            });
        } else if (type === 'click') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.start(now);
            osc.stop(now + 0.09);
        }
    }

    // ==========================================================================
    // 4. Element Selectors
    // ==========================================================================
    initElements() {
        this.contendersGrid = document.getElementById('contendersGrid');
        this.leaderboardRows = document.getElementById('leaderboardRows');
        this.tickerTotalVotes = document.getElementById('tickerTotalVotes');
        this.statTotalVotesDisplay = document.getElementById('statTotalVotesDisplay');
        this.heroWinnerPct = document.getElementById('heroWinnerPct');
        this.spotlightPct = document.getElementById('spotlightPct');

        // Modals
        this.voteModal = document.getElementById('voteModal');
        this.voteModalCard = document.getElementById('voteModalCard');
        this.closeVoteModalBtn = document.getElementById('closeVoteModalBtn');
        this.modalContenderSummary = document.getElementById('modalContenderSummary');
        this.voterForm = document.getElementById('voterForm');
        this.voterNameInput = document.getElementById('voterNameInput');
        this.voterCountryInput = document.getElementById('voterCountryInput');

        this.passModal = document.getElementById('passModal');
        this.closePassModalBtn = document.getElementById('closePassModalBtn');
        this.viewPassBtn = document.getElementById('viewPassBtn');
        this.mobileViewPassBtn = document.getElementById('mobileViewPassBtn');
        this.ticketNumberDisplay = document.getElementById('ticketNumberDisplay');
        this.ticketVoterName = document.getElementById('ticketVoterName');
        this.ticketVotedPlayer = document.getElementById('ticketVotedPlayer');
        this.ticketVoterCountry = document.getElementById('ticketVoterCountry');
        this.downloadPassBtn = document.getElementById('downloadPassBtn');
        this.shareVoteBtn = document.getElementById('shareVoteBtn');

        this.dossierModal = document.getElementById('dossierModal');
        this.dossierModalCard = document.getElementById('dossierModalCard');

        // Duel Selectors
        this.duelSelectA = document.getElementById('duelSelectA');
        this.duelSelectB = document.getElementById('duelSelectB');
        this.duelArena = document.getElementById('duelArena');

        // Sound Toggle
        this.soundToggleBtn = document.getElementById('soundToggleBtn');
        this.soundIcon = document.getElementById('soundIcon');
        this.soundStatusText = document.getElementById('soundStatusText');

        // Mobile Menu
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.mobileMenu = document.getElementById('mobileMenu');

        // Simulator
        this.simulateVotesBtn = document.getElementById('simulateVotesBtn');
        this.resetVotesBtn = document.getElementById('resetVotesBtn');

        this.targetCandidateForVote = null;
    }

    // ==========================================================================
    // 5. Render Methods
    // ==========================================================================
    renderAll() {
        this.renderContendersGrid();
        this.renderLeaderboard();
        this.renderHeadToHeadDuel();
        this.updateGlobalCounters();
        this.updateDuelSelectors();
    }

    updateGlobalCounters() {
        const total = this.getTotalVotes();
        const formatted = total.toLocaleString();
        const shortFormat = (total / 1000000).toFixed(1) + 'M+';

        if (this.tickerTotalVotes) this.tickerTotalVotes.innerText = formatted;
        if (this.statTotalVotesDisplay) this.statTotalVotesDisplay.innerText = shortFormat;

        const cr7Pct = this.getContenderPercentage('cr7-2008');
        if (this.heroWinnerPct) this.heroWinnerPct.innerText = cr7Pct;
        if (this.spotlightPct) this.spotlightPct.innerText = cr7Pct;

        const finalCr7Pct = document.getElementById('finalCr7Pct');
        const finalMessiPct = document.getElementById('finalMessiPct');
        if (finalCr7Pct && finalMessiPct) {
            const cr7Votes = this.votes['cr7-2008'] || 1;
            const messiVotes = this.votes['messi-2012'] || 1;
            const finalSum = cr7Votes + messiVotes;
            finalCr7Pct.innerText = ((cr7Votes / finalSum) * 100).toFixed(1) + '%';
            finalMessiPct.innerText = ((messiVotes / finalSum) * 100).toFixed(1) + '%';
        }
    }

    renderContendersGrid() {
        if (!this.contendersGrid) return;

        let filtered = CONTENDERS;
        if (this.activeFilter === 'modern') {
            filtered = CONTENDERS.filter(c => c.era === 'modern');
        } else if (this.activeFilter === 'classic') {
            filtered = CONTENDERS.filter(c => c.era === 'classic');
        } else if (this.activeFilter === 'ucl') {
            filtered = CONTENDERS.filter(c => c.uclWinner === true);
        }

        this.contendersGrid.innerHTML = filtered.map(c => {
            const votes = this.votes[c.id] || 0;
            const pct = this.getContenderPercentage(c.id);
            const isUserChoice = this.userVote && this.userVote.candidateId === c.id;

            return `
                <div class="contender-card rounded-2xl bg-obsidian-900/90 border ${isUserChoice ? 'border-gold-400 ring-2 ring-gold-400/40 shadow-gold-500/30' : 'border-gold-500/25'} p-5 flex flex-col justify-between relative overflow-hidden group">
                    
                    <!-- Top Ribbon / Badge -->
                    <div class="flex items-center justify-between text-xs mb-3">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-950 border border-gold-500/30 text-gold-300 font-mono text-[10px]">
                            <span>${c.flag}</span>
                            <span>${c.country}</span>
                        </span>
                        <span class="bg-gold-500/20 text-gold-300 border border-gold-500/30 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider">
                            ${c.season}
                        </span>
                    </div>

                    <!-- Contender Identity -->
                    <div class="text-center my-2">
                        <div class="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-gold-300 via-gold-500 to-amber-700 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
                            <div class="w-full h-full rounded-full bg-obsidian-950 flex flex-col items-center justify-center font-cinzel font-black text-xl text-gold-300">
                                <span>${c.shortName}</span>
                                <span class="text-[9px] font-sans font-normal text-gray-400">#${c.historicBoatRank}</span>
                            </div>
                        </div>

                        <h3 class="font-cinzel font-bold text-lg text-white mt-3 group-hover:text-gold-300 transition-colors">
                            ${c.name}
                        </h3>
                        <p class="text-xs text-gold-400 font-medium">${c.club}</p>
                        
                        <div class="mt-2 inline-block px-2 py-0.5 rounded bg-obsidian-950 border border-gold-500/20 text-[10px] text-gray-300 font-mono">
                            ${c.badge}
                        </div>
                    </div>

                    <!-- Key Stats Grid -->
                    <div class="my-4 grid grid-cols-3 gap-2 text-center bg-obsidian-950/70 p-2.5 rounded-xl border border-gray-800 text-xs">
                        <div>
                            <div class="text-[10px] text-gray-400 font-mono">GOALS</div>
                            <div class="font-bold text-white font-mono text-sm">${c.goals}</div>
                        </div>
                        <div>
                            <div class="text-[10px] text-gray-400 font-mono">G/A TOTAL</div>
                            <div class="font-bold text-white font-mono text-sm">${c.goals + c.assists}</div>
                        </div>
                        <div>
                            <div class="text-[10px] text-gray-400 font-mono">APP</div>
                            <div class="font-bold text-white font-mono text-sm">${c.appearances}</div>
                        </div>
                    </div>

                    <!-- Live Vote Bar -->
                    <div class="space-y-1.5 mb-4">
                        <div class="flex justify-between items-center text-xs font-mono">
                            <span class="text-gray-400">Live Vote Share:</span>
                            <span class="font-bold text-gold-300">${pct}</span>
                        </div>
                        <div class="w-full bg-obsidian-950 h-2 rounded-full overflow-hidden border border-gold-500/20">
                            <div class="h-full bg-gradient-to-r from-gold-400 to-amber-500 vote-progress-fill" style="width: ${pct}"></div>
                        </div>
                        <div class="text-[10px] font-mono text-gray-500 text-right">
                            ${votes.toLocaleString()} votes
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="grid grid-cols-2 gap-2 pt-2 border-t border-gray-800/80">
                        <button onclick="window.boatApp.openDossierModal('${c.id}')" class="py-2 px-3 rounded-lg bg-obsidian-800 hover:bg-obsidian-700 text-gray-300 text-xs font-semibold border border-gray-700/60 hover:text-white transition-all flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-circle-info text-[11px] text-gold-400"></i> Dossier
                        </button>
                        <button onclick="window.boatApp.promptVoteModal('${c.id}')" class="py-2 px-3 rounded-lg ${isUserChoice ? 'bg-emerald-600 text-white font-bold' : 'bg-gradient-to-r from-gold-400 to-gold-500 text-obsidian-950 font-bold hover:brightness-110'} text-xs shadow-md transition-all flex items-center justify-center gap-1.5">
                            <i class="fa-solid ${isUserChoice ? 'fa-check' : 'fa-vote-yea'}"></i>
                            <span>${isUserChoice ? 'Voted' : 'Vote'}</span>
                        </button>
                    </div>

                </div>
            `;
        }).join('');
    }

    renderLeaderboard() {
        if (!this.leaderboardRows) return;

        // Sort contenders by current live votes descending
        const sorted = [...CONTENDERS].sort((a, b) => {
            const vA = this.votes[a.id] || 0;
            const vB = this.votes[b.id] || 0;
            return vB - vA;
        });

        this.leaderboardRows.innerHTML = sorted.map((c, index) => {
            const votes = this.votes[c.id] || 0;
            const pct = this.getContenderPercentage(c.id);
            const rank = index + 1;
            const isWinner = rank === 1;

            return `
                <div class="p-3.5 sm:p-4 rounded-xl ${isWinner ? 'bg-gradient-to-r from-gold-950/60 via-obsidian-950 to-obsidian-950 border border-gold-400/60 shadow-lg' : 'bg-obsidian-950/80 border border-gray-800/80'} flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-gold-500/40">
                    
                    <!-- Left: Rank & Contender Info -->
                    <div class="flex items-center gap-3.5">
                        <div class="w-8 h-8 rounded-lg ${isWinner ? 'bg-gold-500 text-obsidian-950 ring-2 ring-gold-400 font-black' : 'bg-obsidian-800 text-gray-300 font-bold'} flex items-center justify-center font-mono text-sm shrink-0">
                            ${rank}
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="text-base">${c.flag}</span>
                                <h4 class="font-cinzel font-bold text-sm sm:text-base text-white hover:text-gold-300 cursor-pointer" onclick="window.boatApp.openDossierModal('${c.id}')">
                                    ${c.name}
                                </h4>
                                <span class="text-xs text-gold-400 font-mono font-semibold">(${c.season})</span>
                                ${isWinner ? '<i class="fa-solid fa-crown text-gold-400 text-xs"></i>' : ''}
                            </div>
                            <div class="text-xs text-gray-400 flex items-center gap-2">
                                <span>${c.club}</span>
                                <span class="text-gray-600">•</span>
                                <span class="text-gray-300 font-mono">${c.goals} Goals</span>
                                <span class="text-gray-600">•</span>
                                <span class="text-gold-400/80 font-mono text-[11px]">${c.trophies[0]}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Vote Share & Bar -->
                    <div class="sm:text-right sm:min-w-[180px]">
                        <div class="flex sm:justify-end items-center gap-2">
                            <span class="text-xs text-gray-400 font-mono hidden sm:inline">${votes.toLocaleString()} votes</span>
                            <span class="font-cinzel font-black text-sm sm:text-base text-gold-300 font-mono">${pct}</span>
                        </div>
                        <div class="w-full bg-obsidian-900 h-2 rounded-full overflow-hidden border border-gold-500/20 mt-1.5">
                            <div class="h-full bg-gradient-to-r ${isWinner ? 'from-gold-300 to-amber-500' : 'from-gold-500/80 to-gold-700/80'} vote-progress-fill" style="width: ${pct}"></div>
                        </div>
                        <span class="text-[10px] text-gray-400 font-mono sm:hidden block mt-1">${votes.toLocaleString()} votes</span>
                    </div>

                </div>
            `;
        }).join('');
    }

    updateDuelSelectors() {
        if (!this.duelSelectA || !this.duelSelectB) return;

        const optionsHtml = CONTENDERS.map(c => `<option value="${c.id}">${c.name} (${c.season} - ${c.club})</option>`).join('');
        this.duelSelectA.innerHTML = optionsHtml;
        this.duelSelectB.innerHTML = optionsHtml;

        // Default: CR7 2008 vs Messi 2012
        this.duelSelectA.value = 'cr7-2008';
        this.duelSelectB.value = 'messi-2012';

        this.renderHeadToHeadDuel();
    }

    renderHeadToHeadDuel() {
        if (!this.duelArena || !this.duelSelectA || !this.duelSelectB) return;

        const idA = this.duelSelectA.value || 'cr7-2008';
        const idB = this.duelSelectB.value || 'messi-2012';

        const pA = CONTENDERS.find(c => c.id === idA) || CONTENDERS[0];
        const pB = CONTENDERS.find(c => c.id === idB) || CONTENDERS[1];

        const votesA = this.votes[pA.id] || 1;
        const votesB = this.votes[pB.id] || 1;
        const sumDuel = votesA + votesB;
        const pctA = ((votesA / sumDuel) * 100).toFixed(1);
        const pctB = ((votesB / sumDuel) * 100).toFixed(1);

        this.duelArena.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                
                <!-- Center VS Divider -->
                <div class="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-obsidian-950 border-2 border-gold-400 text-gold-300 items-center justify-center font-cinzel font-black text-sm shadow-xl">
                    VS
                </div>

                <!-- Contender A Card -->
                <div class="p-6 rounded-2xl bg-obsidian-900/90 border border-gold-500/30 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xs font-mono text-gold-400">${pA.flag} ${pA.country}</span>
                            <span class="bg-gold-500/20 text-gold-300 text-xs px-2 py-0.5 rounded font-mono">${pA.season}</span>
                        </div>
                        <div class="text-center my-3">
                            <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold-300 to-amber-700 p-0.5 mb-2">
                                <div class="w-full h-full rounded-full bg-obsidian-950 flex items-center justify-center font-cinzel font-bold text-xl text-gold-300">
                                    ${pA.shortName}
                                </div>
                            </div>
                            <h3 class="font-cinzel font-bold text-xl text-white">${pA.name}</h3>
                            <p class="text-xs text-gold-400">${pA.club}</p>
                        </div>

                        <!-- Stats Comparison Bars -->
                        <div class="space-y-3 my-6 text-xs font-mono">
                            <div class="flex justify-between border-b border-gray-800 pb-1.5">
                                <span class="text-gray-400">Total Goals:</span>
                                <strong class="text-white text-sm">${pA.goals}</strong>
                            </div>
                            <div class="flex justify-between border-b border-gray-800 pb-1.5">
                                <span class="text-gray-400">Total Assists:</span>
                                <strong class="text-white text-sm">${pA.assists}</strong>
                            </div>
                            <div class="flex justify-between border-b border-gray-800 pb-1.5">
                                <span class="text-gray-400">Appearances:</span>
                                <strong class="text-white text-sm">${pA.appearances}</strong>
                            </div>
                            <div class="flex justify-between border-b border-gray-800 pb-1.5">
                                <span class="text-gray-400">Ballon d'Or Share:</span>
                                <strong class="text-gold-300 text-sm">${pA.ballonDorVoteShare}</strong>
                            </div>
                            <div class="pt-1">
                                <span class="text-gray-400 block mb-1">Key Trophies:</span>
                                <div class="flex flex-wrap gap-1">
                                    ${pA.trophies.map(t => `<span class="bg-obsidian-950 border border-gold-500/20 text-gold-300 px-2 py-0.5 rounded text-[10px]">${t}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Duel Vote A Button -->
                    <div class="pt-4 border-t border-gray-800">
                        <div class="flex justify-between text-xs font-mono mb-1.5">
                            <span class="text-gray-400">Head-to-Head Share:</span>
                            <span class="font-bold text-gold-300">${pctA}%</span>
                        </div>
                        <div class="w-full bg-obsidian-950 h-2.5 rounded-full overflow-hidden border border-gold-500/20 mb-3">
                            <div class="h-full bg-gradient-to-r from-gold-400 to-amber-500" style="width: ${pctA}%"></div>
                        </div>
                        <button onclick="window.boatApp.promptVoteModal('${pA.id}')" class="w-full py-2.5 rounded-xl bg-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-vote-yea"></i> Vote For ${pA.name}
                        </button>
                    </div>
                </div>

                <!-- Contender B Card -->
                <div class="p-6 rounded-2xl bg-obsidian-900/90 border border-gold-500/30 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xs font-mono text-gold-400">${pB.flag} ${pB.country}</span>
                            <span class="bg-gold-500/20 text-gold-300 text-xs px-2 py-0.5 rounded font-mono">${pB.season}</span>
                        </div>
                        <div class="text-center my-3">
                            <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold-300 to-amber-700 p-0.5 mb-2">
                                <div class="w-full h-full rounded-full bg-obsidian-950 flex items-center justify-center font-cinzel font-bold text-xl text-gold-300">
                                    ${pB.shortName}
                                </div>
                            </div>
                            <h3 class="font-cinzel font-bold text-xl text-white">${pB.name}</h3>
                            <p class="text-xs text-gold-400">${pB.club}</p>
                        </div>

                        <!-- Stats Comparison Bars -->
                        <div class="space-y-3 my-6 text-xs font-mono">
                            <div class="flex justify-between border-b border-gray-800 pb-1.5">
                                <span class="text-gray-400">Total Goals:</span>
                                <strong class="text-white text-sm">${pB.goals}</strong>
                            </div>
                            <div class="flex justify-between border-b border-gray-800 pb-1.5">
                                <span class="text-gray-400">Total Assists:</span>
                                <strong class="text-white text-sm">${pB.assists}</strong>
                            </div>
                            <div class="flex justify-between border-b border-gray-800 pb-1.5">
                                <span class="text-gray-400">Appearances:</span>
                                <strong class="text-white text-sm">${pB.appearances}</strong>
                            </div>
                            <div class="flex justify-between border-b border-gray-800 pb-1.5">
                                <span class="text-gray-400">Ballon d'Or Share:</span>
                                <strong class="text-gold-300 text-sm">${pB.ballonDorVoteShare}</strong>
                            </div>
                            <div class="pt-1">
                                <span class="text-gray-400 block mb-1">Key Trophies:</span>
                                <div class="flex flex-wrap gap-1">
                                    ${pB.trophies.map(t => `<span class="bg-obsidian-950 border border-gold-500/20 text-gold-300 px-2 py-0.5 rounded text-[10px]">${t}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Duel Vote B Button -->
                    <div class="pt-4 border-t border-gray-800">
                        <div class="flex justify-between text-xs font-mono mb-1.5">
                            <span class="text-gray-400">Head-to-Head Share:</span>
                            <span class="font-bold text-gold-300">${pctB}%</span>
                        </div>
                        <div class="w-full bg-obsidian-950 h-2.5 rounded-full overflow-hidden border border-gold-500/20 mb-3">
                            <div class="h-full bg-gradient-to-r from-gold-400 to-amber-500" style="width: ${pctB}%"></div>
                        </div>
                        <button onclick="window.boatApp.promptVoteModal('${pB.id}')" class="w-full py-2.5 rounded-xl bg-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-vote-yea"></i> Vote For ${pB.name}
                        </button>
                    </div>
                </div>

            </div>
        `;
    }

    // ==========================================================================
    // 6. Modal Workflows: Voting, Confirmation & Voter Pass Generation
    // ==========================================================================
    promptVoteModal(candidateId) {
        this.playChime('click');
        const contender = CONTENDERS.find(c => c.id === candidateId);
        if (!contender) return;

        this.targetCandidateForVote = contender;

        if (this.modalContenderSummary) {
            this.modalContenderSummary.innerHTML = `
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-gold-300 to-amber-600 p-0.5 shrink-0">
                    <div class="w-full h-full rounded-full bg-obsidian-950 flex items-center justify-center font-cinzel font-bold text-gold-300 text-sm">
                        ${contender.shortName}
                    </div>
                </div>
                <div>
                    <div class="font-cinzel font-bold text-white text-sm sm:text-base flex items-center gap-2">
                        ${contender.name} <span class="text-gold-400 text-xs">(${contender.season})</span>
                    </div>
                    <div class="text-xs text-gray-400">
                        ${contender.club} • ${contender.goals} Goals • ${contender.trophies[0]}
                    </div>
                </div>
            `;
        }

        // Pre-fill inputs if available
        if (this.userVote) {
            this.voterNameInput.value = this.userVote.voterName || '';
            this.voterCountryInput.value = this.userVote.voterCountry || '';
        }

        this.voteModal.classList.remove('hidden');
        requestAnimationFrame(() => {
            this.voteModal.classList.remove('opacity-0');
            this.voteModalCard.classList.remove('scale-95');
        });
    }

    closeVoteModal() {
        this.voteModal.classList.add('opacity-0');
        this.voteModalCard.classList.add('scale-95');
        setTimeout(() => {
            this.voteModal.classList.add('hidden');
        }, 300);
    }

    submitBallot(voterName, voterCountry) {
        if (!this.targetCandidateForVote) return;

        const candidate = this.targetCandidateForVote;

        // Increment live vote count
        this.votes[candidate.id] = (this.votes[candidate.id] || 0) + 1;
        this.saveVotes();

        // Generate unique VIP ticket pass
        const randomTicketNum = 'BOAT-' + Math.floor(100000 + Math.random() * 900000);
        const voterData = {
            voterName: voterName.trim(),
            voterCountry: voterCountry.trim(),
            candidateId: candidate.id,
            candidateName: `${candidate.name} (${candidate.season})`,
            ticketNumber: randomTicketNum,
            timestamp: new Date().toISOString()
        };

        this.userVote = voterData;
        this.voterPass = voterData;
        localStorage.setItem('boat_user_ballot', JSON.stringify(voterData));
        localStorage.setItem('boat_voter_pass', JSON.stringify(voterData));

        // Close vote modal
        this.closeVoteModal();

        // Golden Chime + Confetti Explosion!
        this.playChime('vote');
        this.triggerGoldenConfetti();

        // Update all UI elements
        this.renderAll();

        // Open Official Voter Pass modal immediately
        setTimeout(() => {
            this.openPassModal();
        }, 500);
    }

    openPassModal() {
        this.playChime('click');
        const pass = this.voterPass || {
            voterName: 'Verified Football Enthusiast',
            voterCountry: 'Global Fan Ballot',
            candidateName: 'Cristiano Ronaldo (2008)',
            ticketNumber: 'BOAT-820194'
        };

        if (this.ticketVoterName) this.ticketVoterName.innerText = pass.voterName;
        if (this.ticketVotedPlayer) this.ticketVotedPlayer.innerText = pass.candidateName;
        if (this.ticketVoterCountry) this.ticketVoterCountry.innerText = pass.voterCountry;
        if (this.ticketNumberDisplay) this.ticketNumberDisplay.innerText = `TICKET #${pass.ticketNumber}`;

        this.passModal.classList.remove('hidden');
        requestAnimationFrame(() => {
            this.passModal.classList.remove('opacity-0');
        });
    }

    closePassModal() {
        this.passModal.classList.add('opacity-0');
        setTimeout(() => {
            this.passModal.classList.add('hidden');
        }, 300);
    }

    // ==========================================================================
    // 7. Contender Dossier Modal (Detailed Season Insights)
    // ==========================================================================
    openDossierModal(candidateId) {
        this.playChime('click');
        const c = CONTENDERS.find(item => item.id === candidateId);
        if (!c) return;

        const pct = this.getContenderPercentage(c.id);

        this.dossierModalCard.innerHTML = `
            <button onclick="window.boatApp.closeDossierModal()" class="absolute top-5 right-5 text-gray-400 hover:text-white text-lg w-8 h-8 rounded-full bg-obsidian-800 flex items-center justify-center">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <!-- Dossier Header -->
            <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-gold-500/20 pb-6 mb-6">
                <div class="w-24 h-24 rounded-2xl bg-gradient-to-tr from-gold-300 via-gold-500 to-amber-700 p-0.5 shadow-xl shrink-0">
                    <div class="w-full h-full rounded-[14px] bg-obsidian-950 flex flex-col items-center justify-center font-cinzel font-black text-2xl text-gold-300">
                        ${c.shortName}
                        <span class="text-[10px] font-sans font-normal text-gray-400">${c.season}</span>
                    </div>
                </div>
                <div class="text-center sm:text-left">
                    <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                        <span class="text-base">${c.flag}</span>
                        <h3 class="font-cinzel font-black text-2xl text-white">${c.name}</h3>
                        <span class="bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs px-2 py-0.5 rounded font-mono">${c.club}</span>
                    </div>
                    <p class="text-xs text-gold-400 font-mono uppercase tracking-wider mb-2">${c.position} • Ballon d'Or Winner ${c.year}</p>
                    <p class="text-xs text-gray-300 leading-relaxed max-w-xl">${c.description}</p>
                </div>
            </div>

            <!-- Deep Stats Breakdown -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-6">
                <div class="p-3 rounded-xl bg-obsidian-950 border border-gold-500/20">
                    <div class="text-[10px] font-mono text-gray-400">TOTAL GOALS</div>
                    <div class="text-xl font-mono font-bold text-gold-300">${c.goals}</div>
                </div>
                <div class="p-3 rounded-xl bg-obsidian-950 border border-gold-500/20">
                    <div class="text-[10px] font-mono text-gray-400">ASSISTS</div>
                    <div class="text-xl font-mono font-bold text-gold-300">${c.assists}</div>
                </div>
                <div class="p-3 rounded-xl bg-obsidian-950 border border-gold-500/20">
                    <div class="text-[10px] font-mono text-gray-400">BALLON D'OR SHARE</div>
                    <div class="text-xl font-mono font-bold text-gold-300">${c.ballonDorVoteShare}</div>
                </div>
                <div class="p-3 rounded-xl bg-obsidian-950 border border-gold-500/20">
                    <div class="text-[10px] font-mono text-gray-400">B.O.A.T. VOTE SHARE</div>
                    <div class="text-xl font-mono font-bold text-emerald-400">${pct}</div>
                </div>
            </div>

            <!-- Trophies & Honors -->
            <div class="space-y-4 mb-6 text-xs">
                <div>
                    <h4 class="font-cinzel font-bold text-gold-400 mb-2 flex items-center gap-1.5">
                        <i class="fa-solid fa-trophy"></i> Team Trophies Won in Season
                    </h4>
                    <div class="flex flex-wrap gap-2">
                        ${c.trophies.map(t => `<span class="bg-obsidian-950 border border-gold-500/30 text-white px-3 py-1.5 rounded-lg font-medium">${t}</span>`).join('')}
                    </div>
                </div>

                <div>
                    <h4 class="font-cinzel font-bold text-gold-400 mb-2 flex items-center gap-1.5">
                        <i class="fa-solid fa-medal"></i> Individual Accolades
                    </h4>
                    <div class="flex flex-wrap gap-2">
                        ${c.individualAwards.map(a => `<span class="bg-gold-500/10 border border-gold-500/30 text-gold-300 px-3 py-1.5 rounded-lg font-medium">${a}</span>`).join('')}
                    </div>
                </div>

                <div class="p-4 rounded-xl bg-obsidian-950 border border-gray-800 italic text-gray-300 leading-relaxed">
                    "${c.quote}"
                </div>
            </div>

            <!-- Footer Action -->
            <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-800">
                <button onclick="window.boatApp.closeDossierModal()" class="px-4 py-2.5 rounded-xl bg-obsidian-800 hover:bg-obsidian-700 text-gray-300 text-xs">
                    Close Dossier
                </button>
                <button onclick="window.boatApp.closeDossierModal(); window.boatApp.promptVoteModal('${c.id}')" class="px-6 py-2.5 rounded-xl bg-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 flex items-center gap-2">
                    <i class="fa-solid fa-vote-yea"></i> Vote For This Season
                </button>
            </div>
        `;

        this.dossierModal.classList.remove('hidden');
        requestAnimationFrame(() => {
            this.dossierModal.classList.remove('opacity-0');
        });
    }

    closeDossierModal() {
        this.dossierModal.classList.add('opacity-0');
        setTimeout(() => {
            this.dossierModal.classList.add('hidden');
        }, 300);
    }

    // ==========================================================================
    // 8. Confetti & Visual Effects
    // ==========================================================================
    triggerGoldenConfetti() {
        if (typeof confetti !== 'function') return;

        // Elegant Ballon d'Or gold & white confetti cascade
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#D4AF37', '#FAF6ED', '#C59B27', '#EBD899', '#996515']
        });

        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#D4AF37', '#FAF6ED', '#C59B27']
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#D4AF37', '#FAF6ED', '#C59B27']
            });
        }, 200);
    }

    // ==========================================================================
    // 9. Simulated Global Stream (Spike / Ticker)
    // ==========================================================================
    startSimulatedStream() {
        // Increment online fans counter with subtle variation
        setInterval(() => {
            const onlineElem = document.getElementById('liveOnlineCount');
            if (onlineElem) {
                const current = parseInt(onlineElem.innerText.replace(/,/g, ''), 10) || 48219;
                const delta = Math.floor(Math.random() * 25) - 12;
                onlineElem.innerText = (current + delta).toLocaleString();
            }
        }, 4000);
    }

    simulateSurge() {
        this.playChime('click');
        // Add 10,000 votes distributed realistically (CR7 & Messi getting highest chunks)
        const surge = {
            'cr7-2008': 4400,
            'messi-2012': 3600,
            'cr7-2017': 800,
            'r9-1997': 600,
            'van-basten-1988': 200,
            'platini-1984': 150,
            'cruyff-1974': 120,
            'distefano-1957': 80,
            'beckenbauer-1976': 30,
            'rummenigge-1981': 20
        };

        Object.keys(surge).forEach(id => {
            this.votes[id] = (this.votes[id] || 0) + surge[id];
        });

        this.saveVotes();
        this.renderAll();
        this.triggerGoldenConfetti();
    }

    // ==========================================================================
    // 10. Event Bindings
    // ==========================================================================
    bindEvents() {
        // Filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.playChime('click');
                filterBtns.forEach(b => {
                    b.classList.remove('active', 'bg-gold-500', 'text-obsidian-950', 'font-bold');
                    b.classList.add('bg-obsidian-900', 'text-gray-300');
                });
                btn.classList.add('active', 'bg-gold-500', 'text-obsidian-950', 'font-bold');
                btn.classList.remove('bg-obsidian-900', 'text-gray-300');

                this.activeFilter = btn.dataset.filter;
                this.renderContendersGrid();
            });
        });

        // Vote modal events
        if (this.closeVoteModalBtn) {
            this.closeVoteModalBtn.addEventListener('click', () => this.closeVoteModal());
        }

        if (this.voterForm) {
            this.voterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = this.voterNameInput.value || 'Anonymous Fan';
                const country = this.voterCountryInput.value || 'Global Citizen';
                this.submitBallot(name, country);
            });
        }

        // Pass modal events
        if (this.closePassModalBtn) {
            this.closePassModalBtn.addEventListener('click', () => this.closePassModal());
        }
        if (this.viewPassBtn) {
            this.viewPassBtn.addEventListener('click', () => this.openPassModal());
        }
        if (this.mobileViewPassBtn) {
            this.mobileViewPassBtn.addEventListener('click', () => {
                this.mobileMenu.classList.add('hidden');
                this.openPassModal();
            });
        }

        // Duel selectors change
        if (this.duelSelectA && this.duelSelectB) {
            this.duelSelectA.addEventListener('change', () => this.renderHeadToHeadDuel());
            this.duelSelectB.addEventListener('change', () => this.renderHeadToHeadDuel());
        }

        // Sound toggle
        if (this.soundToggleBtn) {
            this.soundToggleBtn.addEventListener('click', () => {
                this.soundEnabled = !this.soundEnabled;
                if (this.soundEnabled) {
                    this.soundIcon.className = 'fa-solid fa-volume-high';
                    this.soundStatusText.innerText = 'Sound On';
                    this.playChime('click');
                } else {
                    this.soundIcon.className = 'fa-solid fa-volume-xmark text-gray-500';
                    this.soundStatusText.innerText = 'Muted';
                }
            });
        }

        // Mobile menu toggle
        if (this.mobileMenuToggle && this.mobileMenu) {
            this.mobileMenuToggle.addEventListener('click', () => {
                this.mobileMenu.classList.toggle('hidden');
            });
        }

        // Simulator buttons
        if (this.simulateVotesBtn) {
            this.simulateVotesBtn.addEventListener('click', () => this.simulateSurge());
        }
        if (this.resetVotesBtn) {
            this.resetVotesBtn.addEventListener('click', () => {
                this.playChime('click');
                this.resetToBaseline();
                this.renderAll();
            });
        }

        // Download / Print Pass
        if (this.downloadPassBtn) {
            this.downloadPassBtn.addEventListener('click', () => {
                window.print();
            });
        }

        // Social share
        if (this.shareVoteBtn) {
            this.shareVoteBtn.addEventListener('click', () => {
                const candidateName = this.voterPass ? this.voterPass.candidateName : 'Cristiano Ronaldo (2008)';
                const shareText = `I just voted for ${candidateName} in the official Ballon d'Or of All Time (B.O.A.T.) 70th Anniversary public vote! Cast your vote and claim your Paris Gala Sweepstakes ticket:`;
                const shareUrl = window.location.href;

                if (navigator.share) {
                    navigator.share({
                        title: "B.O.A.T. — Ballon d'Or of All Time",
                        text: shareText,
                        url: shareUrl
                    }).catch(() => { });
                } else {
                    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
                    alert('Vote share link copied to clipboard!');
                }
            });
        }

        // Close modals on outside click
        window.addEventListener('click', (e) => {
            if (e.target === this.voteModal) this.closeVoteModal();
            if (e.target === this.passModal) this.closePassModal();
            if (e.target === this.dossierModal) this.closeDossierModal();
        });
    }
}

// Global helper function for inline onclick handlers
function castVote(candidateId) {
    if (window.boatApp) {
        window.boatApp.promptVoteModal(candidateId);
    }
}

// Instantiate application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.boatApp = new BoatVotingApp();
});
