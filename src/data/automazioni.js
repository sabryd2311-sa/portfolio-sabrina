export const automazioni = [
  {
    id: 'gestione-documentale',
    titolo: 'Gestione Documentale Automatica',
    sottotitolo: 'e Logica Condizionale',
    stack: ['n8n', 'Gmail', 'Google Drive', 'Slack'],
    immagine: '/assets/images/automazione-1.png',
    descrizione: 'Suite di flussi di lavoro per automatizzare le operazioni di gestione documentale — salvataggio, archiviazione e notifica — con logica condizionale avanzata.',
    obiettivo: 'Creare una suite di flussi che automatizzano le operazioni di base di gestione documentale (salvataggio, archiviazione e notifica) e introducono un livello di controllo logico sui comandi ricevuti via email o chat.',
    architettura: [
      {
        nome: 'Workflow Base — Archiviazione Allegati (Gmail → Drive → Slack)',
        passi: [
          'Trigger: Nuova email ricevuta su Gmail.',
          'Azione: Scarica automaticamente l\'allegato contenuto nell\'email.',
          'Salvataggio: Carica il file binario in Google Drive.',
          'Notifica: Invia un messaggio su Slack confermando il salvataggio.',
        ],
      },
      {
        nome: 'Workflow Inverso — Creazione e Invio File (Slack → Drive → Gmail)',
        passi: [
          'Trigger: Nuovo messaggio ricevuto su Slack.',
          'Azione: Prende il contenuto del messaggio Slack.',
          'Salvataggio: Crea un nuovo file di testo in Google Drive.',
          'Invio: Manda una mail con il file appena creato come allegato.',
        ],
      },
      {
        nome: 'Logica Condizionale Avanzata',
        passi: [
          'Trigger da Gmail o Slack.',
          'Nodo IF: verifica se il testo contiene "Crea cartella: NOME".',
          'Se VERA: estrae il nome tramite regex e crea la cartella su Drive.',
          'Se FALSA: il flusso termina senza azioni.',
        ],
      },
    ],
    competenze: ['I/O Binario', 'Integrazione Sincrona', 'Logica Condizionale', 'Design Workflow Bidirezionale'],
    problemi: [],
    risultato: 'Un sistema resiliente per archiviazione e gestione file, capace di interpretare istruzioni semplici via testo e automatizzare operazioni come la creazione di strutture di cartelle.',
  },
  {
    id: 'content-factory',
    titolo: 'Content Factory Automatizzata',
    sottotitolo: '& SEO Score',
    stack: ['n8n', 'Google Sheets', 'Gemini/OpenAI', 'Notion'],
    immagine: '/assets/images/automazione-2.png',
    descrizione: 'Una "fabbrica di contenuti" automatica che legge temi da Google Sheets, genera contenuti di marketing con AI e pubblica su Notion con ottimizzazione SEO.',
    obiettivo: 'Creare un sistema set-and-forget che trasforma una lista di idee grezze in una libreria di contenuti pronti per la pubblicazione, completi di ottimizzazione SEO.',
    architettura: [
      {
        nome: 'Workflow Base — Generazione e Pubblicazione',
        passi: [
          'Schedule Trigger: il flusso si attiva ogni giorno per controllare nuovi argomenti.',
          'Google Sheets: legge gli argomenti e le tipologie di contenuto desiderate.',
          'Loop Over Items: processa un argomento alla volta per non confondere l\'AI.',
          'AI Agent (Content Creator): genera il contenuto richiesto (Post, Blog, SEO).',
          'Notion (Create Page): crea una pagina per ogni contenuto generato.',
          'AI Agent (Keyword Generator): genera keyword SEO pertinenti.',
          'Google Sheets (Update Row): scrive le keyword nella colonna apposita.',
        ],
      },
    ],
    competenze: ['Looping & Iterazione', 'API Interoperability', 'Prompt Engineering Strategico', 'SEO Automation'],
    problemi: [],
    risultato: 'Sistema set-and-forget che trasforma una lista di idee in una libreria di contenuti pronti per la pubblicazione, con SEO integrato e monitoraggio errori via Slack.',
    extra: 'Implementato un nodo Error Trigger: in caso di malfunzionamento (AI non risponde, API Notion fallisce) invia notifica immediata su Slack con il dettaglio dell\'errore.',
  },
  {
    id: 'lead-generation',
    titolo: 'Lead Generation Avanzato',
    sottotitolo: 'e Scoring AI',
    stack: ['n8n', 'Google Search', 'PhantomBuster', 'Gemini/OpenAI', 'AirTable'],
    immagine: '/assets/images/automazione-3.png',
    descrizione: 'Pipeline end-to-end che, partendo da una keyword, estrae dati da LinkedIn, li arricchisce e li qualifica automaticamente con un sistema di scoring AI da 0 a 5.',
    obiettivo: 'Creare una pipeline di automazione end-to-end che estragga dati grezzi, li processi e li qualifichi automaticamente tramite scoring AI, fornendo un database pronto per l\'azione commerciale.',
    architettura: [
      {
        nome: 'Workflow Base — Ricerca e Strutturazione',
        passi: [
          'Trigger: Schedule giornaliero o Webhook.',
          'Google Search API: trova URL e informazioni di profili LinkedIn.',
          'AI Agent (Data Extraction): struttura il testo grezzo in JSON con Nome, Ruolo, Azienda, URL.',
          'AirTable: archivia i dati formattati.',
        ],
      },
      {
        nome: 'Extra — Scoring e Valutazione AI',
        passi: [
          'AI Agent (Scorer): assegna uno Score da 0 a 5 confrontando i dati con la keyword.',
          'Database: lo Score viene inserito in colonna apposita per filtrare i lead HOT (≥4).',
        ],
      },
      {
        nome: 'Extra Extra — Integrazione PhantomBuster',
        passi: [
          'Sostituzione di Google Search con PhantomBuster per dati più precisi e mirati.',
        ],
      },
    ],
    competenze: ['AI for Decision Making', 'Advanced Prompt Engineering', 'Integrazione API Esterne', 'Data Transformation', 'Automazione B2B'],
    problemi: [
      {
        problema: 'Il nodo Code JavaScript allucinava restituendo il doppio degli items richiesti.',
        soluzione: 'Dopo vari tentativi di correzione del codice, ho modificato direttamente i settings del nodo impostando "esegui una sola volta", eliminando il problema alla radice.',
      },
    ],
    risultato: 'Sistema di Lead Generation che non solo automatizza la raccolta dati, ma li qualifica attivamente per pertinenza — database immediatamente pronto per l\'azione commerciale.',
  },
  {
    id: 'lead-qualification',
    titolo: 'Lead Qualification Intelligente',
    sottotitolo: 'e Gestione del Funnel',
    stack: ['n8n', 'FormBricks', 'Gemini/OpenAI', 'Gmail', 'Zendesk', 'Slack'],
    immagine: '/assets/images/automazione-4.png',
    descrizione: 'Sistema End-to-End che cattura lead da sondaggi, li valuta con AI e li instrada automaticamente in percorsi di vendita differenziati (follow-up aggressivo o email di cortesia).',
    obiettivo: 'Creare un sistema che cattura lead da un sondaggio personalizzato, li valuta tramite AI e li indirizza verso percorsi di vendita specifici in base al loro interesse reale.',
    architettura: [
      {
        nome: 'Progetto 4A — Acquisizione, Valutazione e Split Funnel',
        passi: [
          'Webhook FormBricks: cattura istantaneamente i dati del sondaggio.',
          'AI Agent (Scorer): analizza il testo libero per valutare "bontà" del lead.',
          'Nodo IF/Switch: combina il risultato AI con il criterio Budget.',
          'Ramo True: invia email di follow-up aggressivo.',
          'Ramo False: invia email di cortesia per mantenere il contatto.',
          'Gmail Trigger: monitora le risposte al follow-up.',
          'Zendesk + Slack: crea ticket e notifica il team di vendita.',
        ],
      },
      {
        nome: 'Progetto 4B — Reportistica Giornaliera Automatizzata',
        passi: [
          'Schedule Trigger: attivazione automatica a fine giornata (23:59).',
          'Zendesk: estrae tutti i ticket del giorno.',
          'AI Agent: sintetizza i dati in un Report testuale.',
          'Extra Mile: inserisce il report in un Google Doc e lo condivide via mail.',
        ],
      },
    ],
    competenze: ['Real-time Processing', 'AI for Business Decisions', 'Funnel Logic', 'Integrazione Multi-Piattaforma', 'Time-Based Automation'],
    problemi: [],
    risultato: 'Pipeline di vendita completamente automatizzata, dalla cattura del lead alla qualifica AI, all\'assegnazione automatica al team commerciale.',
  },
  {
    id: 'rag-chatbot',
    titolo: 'RAG Chatbot, Vector DB',
    sottotitolo: 'e Reportistica Avanzata',
    stack: ['n8n', 'Vector Store/Embedding', 'Supabase', 'Zendesk', 'PostgreSQL', 'HTML'],
    immagine: '/assets/images/automazione-5.png',
    descrizione: 'Chatbot RAG (Retrieval-Augmented Generation) che risponde a domande basandosi su una knowledge base documentale, con sistema di escalation automatica e dashboard BI.',
    obiettivo: 'Creare un Chatbot RAG che risponde a domande complesse basandosi su documenti specifici, con data handling robusto, escalation automatica su Zendesk e reportistica avanzata.',
    architettura: [
      {
        nome: 'Flusso A — Indicizzazione Knowledge Base',
        passi: [
          'Manual Trigger per l\'esecuzione iniziale.',
          'Preparazione: Edit Fields, Split Out, Download File preparano i PDF.',
          'Vettorizzazione: Embedding (Google Gemini) trasforma ogni chunk in vettore.',
          'Archiviazione: Vector Store Upsert crea la knowledge base su Supabase.',
        ],
      },
      {
        nome: 'Flusso B — Chatbot RAG e Escalation',
        passi: [
          'Webhook: attivato dalla domanda dell\'utente.',
          'Simple Memory: gestisce la storia della conversazione.',
          'RAG: embedding della domanda → ricerca vettoriale → contesto pertinente.',
          'AI Agent: formula la risposta basata sui fatti del documento.',
          'Failover: se non riesce a rispondere, crea un ticket Zendesk.',
        ],
      },
      {
        nome: 'Flusso C — Reporting e Dashboard BI',
        passi: [
          'Dashboard HTML generata da AI Agent con grafici e liste temi.',
          'Schedule Trigger giornaliero per reportistica di criticità.',
          'PostgreSQL + Zendesk: dati storici di interazioni e fallimenti.',
          'AI Agent: analizza criticità, trend e lacune nella documentazione.',
          'Google Docs + Gmail: report condiviso automaticamente al responsabile.',
        ],
      },
    ],
    competenze: ['Architettura RAG End-to-End', 'Database Avanzato (PostgreSQL)', 'Full-Stack Automation', 'AI for Business Intelligence'],
    problemi: [
      {
        problema: 'Superamento del limite di caratteri nel database vettoriale Supabase (molti PDF con tanto testo).',
        soluzione: 'Ho modificato direttamente il SQL Editor di Supabase impostando "query_embedding vector(768)" per trasformare l\'output in formato binary compatibile.',
      },
      {
        problema: 'La risposta del chatbot era "grezza" — caratteri speciali e ripetizione della domanda nella risposta.',
        soluzione: 'Introdotto codice JavaScript (con supporto Gemini) per ripulire l\'output, più "respond to chat" nel trigger per evitare allucinazioni.',
      },
    ],
    risultato: 'Sistema RAG completo: dalla preparazione dei documenti alla risposta live, con escalation automatica, dashboard interattiva e reportistica BI settimanale.',
  },
  {
    id: 'ai-news-digest',
    titolo: 'AI News Digest Automatizzato',
    sottotitolo: 'RSS + LLM + Email quotidiana',
    stack: ['n8n', 'RSS Feed', 'Google Gemini', 'Gmail', 'JavaScript'],
    immagine: '/assets/images/automazione-7.jpg',
    descrizione: 'Workflow quotidiano che raccoglie articoli da feed RSS, li filtra, li classifica per categoria e invia 3 email tematiche sintetizzate da LLM — AI generale, AI enterprise, AI marketing.',
    obiettivo: 'Automatizzare la raccolta e la sintesi quotidiana di news sull\'Intelligenza Artificiale, eliminando il rumore informativo e ricevendo ogni giorno una digest leggibile e categorizzata su ciò che conta davvero.',
    architettura: [
      {
        nome: 'Pipeline principale',
        passi: [
          'Schedule Trigger: il workflow parte automaticamente ogni giorno all\'orario stabilito.',
          'Lista feed RSS centralizzata in un nodo dedicato — aggiungere o rimuovere fonti senza ricostruire il flusso.',
          'Loop sui feed RSS: un loop legge ogni fonte una alla volta, rendendo il workflow scalabile.',
          'Normalizzazione articoli: ogni articolo viene trasformato in formato uniforme (titolo, fonte, autore, data, URL, snippet, dominio).',
          'Deduplicazione e scoring: rimozione duplicati, filtro contenuti irrilevanti, punteggio basato su freschezza, fonte e parole chiave.',
          'Classificazione in 3 categorie: AI generale, AI enterprise, AI marketing.',
          'Preparazione input LLM: compattazione dell\'input per ridurre token e rumore prima di inviare al modello.',
          'LLM Chain (x3): ogni categoria viene sintetizzata in una digest con titolo, riassunto, link e spiegazione della rilevanza.',
          'Parsing JSON e costruzione HTML: output del modello ripulito, convertito in JSON e trasformato in email HTML leggibili.',
          'Invio via Gmail: 3 email separate, una per ogni area tematica.',
        ],
      },
    ],
    competenze: ['RSS Feed Integration', 'Loop & Scalabilità', 'LLM Chaining', 'Deduplicazione & Scoring', 'HTML Email Generation', 'Prompt Engineering'],
    problemi: [],
    risultato: 'Una digest quotidiana personalizzata su AI, organizzata in 3 aree tematiche. Il workflow è completamente adattabile a qualsiasi argomento — finanza, marketing, cybersecurity, startup, trend di settore — modificando feed RSS, parole chiave, categorie e prompt.',
    extra: 'Il sistema è progettato per essere universale: cambiando feed RSS, parole chiave di classificazione e prompt delle LLM Chain, si ottiene una newsletter automatica su qualsiasi dominio di interesse.',
  },
  {
    id: 'ai-marketing-orchestrator',
    titolo: 'AI Marketing Orchestrator',
    sottotitolo: 'Sistema Multi-Agente su n8n',
    stack: ['n8n', 'Gemini', 'Google Docs', 'Notion', 'Google Calendar'],
    immagine: '/assets/images/automazione-6.png',
    descrizione: 'Sistema multi-agente che gestisce l\'intero ciclo di vita di una campagna di Content Marketing in autonomia: dalla strategia alla creazione, revisione, approvazione e calendarizzazione.',
    obiettivo: 'Replicare le dinamiche umane di una campagna marketing (Strategist, Copywriter, Social Media Manager, Revisore) usando agenti AI coordinati da logica multi-agente.',
    architettura: [
      {
        nome: 'Workflow 1 — Lo Stratega (Strategy Generator)',
        passi: [
          'Input: argomento della campagna (es. "Lancio Termoconvettore Innovativo").',
          'AI Agent (Direttore Creativo): genera Brand Tone e Piano Editoriale in 3 fasi.',
          'Output: salva la strategia completa in Google Doc come "memoria" condivisa.',
        ],
      },
      {
        nome: 'Workflow 2 — L\'Esecutore & Il Revisore (Execution Engine)',
        passi: [
          'Legge il piano dal Doc e smista i compiti a 3 agenti via nodo Switch.',
          'Agente Engagement: Social Media Manager per la fase viralità.',
          'Agente Storyteller: esperto narrazione per la fase Hype.',
          'Agente Sales: Copywriter a risposta diretta per la conversione.',
          'Brand Guardian (Revisore AI): approva o boccia ogni contenuto con feedback.',
          'Feedback Loop: rimanda il contenuto all\'agente con correzioni (max 3 tentativi).',
          'Delivery: contenuti approvati → Notion Database + Google Calendar.',
        ],
      },
    ],
    competenze: ['Multi-Agent Systems', 'Advanced Logic (Loop/Switch/Merge)', 'Error Handling & Circuit Breaker', 'Data Manipulation (JSON Parsing)'],
    problemi: [
      {
        problema: 'Trovare il prompt giusto per i 3 AI Agent (Social Media Manager, Hype, Pre-lancio) per ottenere output puliti da far valutare al Revisore.',
        soluzione: 'Rafforzato il prompt con system message + user message + JSON output parser molto solidi, iterando fino a ottenere output affidabili.',
      },
    ],
    risultato: 'Il sistema riduce drasticamente il tempo di ideazione e produzione, garantendo che ogni contenuto sia coerente con la voce del brand e approvato prima della pubblicazione.',
  },
]
