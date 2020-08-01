export type TransportTypeValue = {
  type: string;
  filename?: string;
}

export class TransportType {
  static FILE (filename: string) {
    return <TransportTypeValue>{
      type: 'file',
      filename
    };
  }

  static get CONSOLE () {
    return <TransportTypeValue>{
      type: 'console'
    };
  }
}

export type LoggerTransport = {
  type: TransportTypeValue,
  level: string
}

export default TransportType;
