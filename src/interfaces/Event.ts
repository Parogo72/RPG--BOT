export interface EventInterface {
  name: string,
  execute: () => Promise<void>
}