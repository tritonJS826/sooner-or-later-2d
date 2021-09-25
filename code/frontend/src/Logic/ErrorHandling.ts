class ErrorHandling {
  error: null | Error = null;

  constructor() {}

  setError(e: Error) {
    this.error = e;
  }

  addErrorListener() {
    window.addEventListener('error', (event) => {
      console.log(event);
      this.setError(new Error());
      // setError(event.error);
    });

    window.addEventListener('unhandledrejection', (promiseRejectionEvent) => {
      console.log(promiseRejectionEvent);
      this.setError(new Error());
      // setError(promiseRejectionEvent.reason);
    });
  }
}

export default ErrorHandling;
