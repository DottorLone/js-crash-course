import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements AfterViewInit {
  domDescriptionVisible = false;
  showInputs = false;
  functionDescriptionVisible = false;
  showForEachButton = false;

  // Aggiungi nuovi flag per le altre funzioni
  showPromiseButton = false;
  showCallbackButton = false;
  showAsyncButton = false;
  showUndefinedButton = false;
  showConsoleLogButton = false;

  ngAfterViewInit() {
    const button = document.getElementById('createInputsButton');
    button?.addEventListener('click', this.createInputs.bind(this));
  }

  showDOMDescription() {
    this.domDescriptionVisible = !this.domDescriptionVisible;
  }

  createInputs() {
    this.showInputs = true;
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
  }

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

  forEachExample() {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    items.forEach(item => {
      this.appendResult(item,1);
      this.showPromiseButton = true;
    });
  }

  promiseExample() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise eseguita!"), 2000);
      this.showCallbackButton = true;
    });
    promise.then(result => {
      this.appendResult(`Risultato della Promise: ${result}`,2);
    });
  }

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
  }

  asyncAwaitExample() {
    const fetchData = () => new Promise(resolve => setTimeout(() => resolve("Dati caricati"), 2000));
    (async () => {
      const data = await fetchData();
      this.appendResult(`Async/Await: ${data}`,4);
      this.showUndefinedButton = true;
    })();
  }

  showUndefinedExample() {
    let undefinedVariable;
    this.showConsoleLogButton = true;
    this.appendResult(`Undefined variable: ${undefinedVariable}`,5);
  }

  consoleLogExample() {
    console.log('Questo è un messaggio di console.log');
    this.appendResult('Controlla la console per un messaggio di console.log',6);
  }

  appendResult(text: string, number: number) {
    const resultContainer = document.getElementById(`resultsContainer${number}`);
    const p = document.createElement('p');
    p.textContent = text;
    resultContainer ? resultContainer.appendChild(p) : null;
  }
}
