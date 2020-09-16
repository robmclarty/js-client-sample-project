import hello from './hello'
import { version } from '../package.json'

const helloWorld = () => {
  console.log(hello, version)
}

helloWorld()
