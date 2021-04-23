export default (name: string): string =>
  `
export * from './events';
export * from './${name}.event.factory';
`
    .trimStart()
    .trimEnd();
