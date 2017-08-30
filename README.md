# loglevel-file-logger
File logger for [loglevel](https://github.com/pimterry/loglevel). This package is currently for React Native, it relies on [`react-native-fetch-blob`](https://github.com/wkh237/react-native-fetch-blob). We didn't add `react-native-fetch-blob` in dependencies, as we are thinking maybe it's possible to open up this library to use different file library, so you need to install `react-native-fetch-blob` by yourself.

## Usage

Install `react-native-fetch-blob` if it's not a dependency in your project yet.

```bash
yarn add react-native-fetch-blob
```

Then you can install `loglevel-file-logger` like this

```bash
yarn add loglevel-file-logger
```

Next, import it in the entry point file of your app.

```typescript
import setupLogger, { FetchBlobWriter } from 'loglevel-file-logger'

// Notice: this is a hack, somehow
//
//     import * as Log from 'loglevel'
//
// Will clone the module.exports object, which is the default logger.
// As we want to change `methodFactory` of the original object instead of
// cloned one, we import the logger like this instead.
const defaultLogger: Log = require('loglevel')

export default class App extends Component {
  private readonly fileWriter: FetchBlobWriter

  constructor (props: any, context?: any) {
    super(props, context)
    this.fileWriter = new FetchBlobWriter()
    this.fileWriter.ensureFile().then(() => {
      // make linter not to complain about promise not subscribed
    })
    setupLogger({
      log: defaultLogger,
      write: this.fileWriter.write.bind(this.fileWriter)
    })
}
```

Please notice that we use `require('loglevel')` to import the global root logger from loglevel, as if you use `import * as Log from 'loglevel'`, somehow it will copy the `export` object and we won't be able to replace the original `methodFactory` of it.
