# JavaScript Crash Course by DottorLone 
<img width="501" alt="Screenshot 2024-04-23 alle 14 51 12" src="https://github.com/DottorLone/js-crash-course/assets/65162895/22d43bb1-cd3c-4154-a7c3-e268bb057e9b">

Questo progetto nasce come playlist e diventa un mini corso intensivo di JavaScript progettato per dimostrare in modo interattivo concetti fondamentali di JavaScript. 
L'obiettivo è fornire una comprensione pratica di funzioni come DOM manipulation, Promises, Callbacks, Async/Await e altre strutture di controllo di JavaScript.
E come promemoria ecco il link alla playlist su spotify: https://open.spotify.com/embed/playlist/56VLs2q2sF5QrIS408OJDy?utm_source=generator&theme=0

mi trovi anche su IG: https://www.instagram.com/dottorlone

## Caratteristiche

- **DOM Manipulation**: Modifica dinamica del contenuto HTML attraverso il DOM.
- **Async Operations**: Gestione di operazioni asincrone con Promises e Async/Await.
- **Event Handling**: Uso di eventi per interagire con l'utente.
- **Dynamic Content Creation**: Creazione dinamica di elementi HTML.

## Installazione

Per eseguire questo progetto localmente, seguire i seguenti passi:

1. Clona il repository.
2. Naviga nella cartella del progetto: `cd javascript-crash-course`
3. Installa le dipendenze: `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Se vuoi su una porta diversa `ng serve --port <porta>`. Naviga su `http://localhost:<porta>/`.

<img width="1145" alt="Screenshot 2024-04-23 alle 22 29 29" src="https://github.com/DottorLone/js-crash-course/assets/65162895/244c4444-f1f0-479a-acc7-97dc34b735a8">


## Altrimenti trovi tutto spiegato qui:

# DOM

Il Document Object Model (DOM) è una rappresentazione strutturata del contenuto di una pagina web. Ci permette di modificare, aggiungere o rimuovere elementi dalla pagina dinamicamente. Per esempio, cliccando sul tasto "Objects" qui sotto, useremo il DOM per creare due nuovi input sul tuo schermo, simulando la creazione dinamica di contenuti

    const inputsContainer = document.getElementById('inputsContainer');
    if (!inputsContainer) return;

    var inputKey = document.createElement("input");
    inputKey.id = "inputKey";
    inputKey.type = "text";
    inputKey.placeholder = "Key";
    inputsContainer.appendChild(inputKey);

    var inputValue = document.createElement("input");
    inputValue.id = "inputValue";
    inputValue.type = "text";
    inputValue.placeholder = "Value";
    inputsContainer.appendChild(inputValue);

# Function & Object

Un oggetto in programmazione è una struttura dati che raggruppa valori eterogenei sotto un'unica identità, solitamente per rappresentare entità specifiche come persone, ordini o fatture. Ogni oggetto combina dati e funzionalità relative all'entità che rappresenta, facilitando la gestione e l'interazione con questi dati in maniera organizzata.

In JavaScript, una 'Function' è un blocco di codice progettato per eseguire una particolare operazione. Viene eseguita quando "qualcosa" invoca (chiama) essa. 'Function' è anche un oggetto in JavaScript, il che significa che può avere proprietà e il suo comportamento può essere modificato.

    showFunctionExplanation() {
        this.functionDescriptionVisible = true;
        const inputKey = document.getElementById("inputKey") as HTMLInputElement;
        const inputValue = document.getElementById("inputValue") as HTMLInputElement;
    
        if (!inputKey.value || !inputValue.value) {
          alert('Per favore inserisci sia una chiave che un valore.');
          return;
        }
    
        const object = { [inputKey.value]: inputValue.value };
        this.appendResult(`Oggetto creato: ${JSON.stringify(object)}`,0);
    
        // Abilita ulteriori funzionalità dopo la creazione dell'oggetto
        this.showForEachButton = true;
      }

#  ForEach Loop


Il forEach loop in JavaScript è un metodo che viene applicato agli array per eseguire una funzione su ciascun elemento dell'array stesso. Questo metodo è particolarmente utile per iterare su collezioni di dati in modo semplice e leggibile, evitando l'uso di cicli tradizionali come for o while.

La funzione passata a forEach è chiamata per ogni elemento dell'array, ricevendo l'elemento corrente, l'indice di quell'elemento e l'array completo come argomenti

    forEachExample() {
        const items = ['Item 1', 'Item 2', 'Item 3'];
        items.forEach(item => {
          this.appendResult(item,1);
          this.showPromiseButton = true;
        });
      }

# Promise

Una Promise in JavaScript è un oggetto che rappresenta il risultato eventualmente disponibile di un'operazione asincrona. Questo meccanismo permette di gestire in modo più ordinato situazioni dove sono necessari tempi di attesa per dati provenienti, ad esempio, da un server web o da un processo di lettura di file. Una Promise può trovarsi in uno di questi tre stati:

Pending: lo stato iniziale, non è ancora noto se la promise sarà risolta o rifiutata.
Fulfilled: significa che l'operazione è completata con successo e la promise è risolta con un valore.
Rejected: indica che l'operazione è fallita, e la promise è rifiutata con un motivo di errore.
Questo modello di programmazione asincrona permette agli sviluppatori di scrivere codice che può attendere la risoluzione delle operazioni senza bloccare l'esecuzione del resto del programma. Le promesse possono essere concatenate e gestite attraverso i metodi .then(), .catch(), e .finally(), offrendo un controllo dettagliato sul flusso asincrono e migliorando la gestione degli errori rispetto ai tradizionali callback.

    promiseExample() {
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve("Promise eseguita!"), 2000);
          this.showCallbackButton = true;
        });
        promise.then(result => {
          this.appendResult(`Risultato della Promise: ${result}`,2);
        });
      }

# Callbacks

Una 'Callback' è una funzione che viene passata come argomento a un'altra funzione e che può essere invocata all'interno di quest'ultima per completare una specifica routine o azione. Questo modello è particolarmente utile in JavaScript per gestire situazioni asincrone, come la ricezione di dati da una rete o il completamento di operazioni di I/O, permettendo al codice di procedere senza attese, mentre l'operazione asincrona viene eseguita in background.

    callbackExample() {
        const processCallback = (callback: any) => {
          setTimeout(() => {
            callback('Dati elaborati tramite callback');
          }, 2000);
        };
        processCallback((result: any) => {
          this.showAsyncButton = true;
          this.appendResult(`Risultato del Callback: ${result}`,3);
    });

# Async/Await

Le parole chiave async e await in JavaScript modernizzano la gestione delle operazioni asincrone, rendendole più intuitive e simili a flussi di esecuzione sincroni. Un funzione dichiarata con async ritorna automaticamente una Promise, e all'interno di questa funzione, await può essere usato per mettere in pausa l'esecuzione finché una Promise non è risolta o rifiutata, semplificando notevolmente la sintassi rispetto all'uso delle Promises tradizionali.

    asyncAwaitExample() {
        const fetchData = () => new Promise(resolve => setTimeout(() => resolve("Dati caricati"), 2000));
        (async () => {
          const data = await fetchData();
          this.appendResult(`Async/Await: ${data}`,4);
          this.showUndefinedButton = true;
        })();
      }

# Undefined

In JavaScript, il tipo undefined rappresenta un valore speciale che viene automaticamente assegnato alle variabili che sono state dichiarate ma non ancora inizializzate. Questo significa che nessun valore esplicito è stato assegnato a tale variabile. undefined è anche il valore di ritorno di funzioni che non restituiscono esplicitamente qualcosa e l'output di espressioni che accedono a proprietà di oggetti non esistenti o a elementi di array non definiti.

# Console (.log)

L'oggetto console in JavaScript fornisce accesso a una console di debugging che può essere utilizzata per stampare informazioni che aiutano nello sviluppo e nel debug del codice. Il metodo console.log() è uno dei più usati di questo oggetto e serve per stampare messaggi nella console del browser o dell'ambiente di esecuzione, come Node.js.Per migliorare la leggibilità dei messaggi di log, console.log() può essere combinato con stringhe di formattazione e altri metodi dell'oggetto console, come console.error(), console.warn() e console.info(), per differenziare i tipi di output a seconda della loro importanza o gravità.

    consoleLogExample() {
        console.log('Questo è un messaggio di console.log');
        this.appendResult('Controlla la console per un messaggio di console.log',6);
    }
