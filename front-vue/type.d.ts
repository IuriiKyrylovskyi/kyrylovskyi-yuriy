declare module '*.vue' {
  import type { DefineComponent } from 'type'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: DefineComponent<object, object, any>
  export default component
}
