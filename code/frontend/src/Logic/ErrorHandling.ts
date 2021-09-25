class ErrorHandling {
  error: null | Error = null;

  constructor() {}

  addErrorListener() {
    window.addEventListener('error', (event) => {
      console.log(event);
    });

    window.addEventListener('unhandledrejection', (promiseRejectionEvent) => {
      console.log(promiseRejectionEvent);
    });
  }
}

export default ErrorHandling;
