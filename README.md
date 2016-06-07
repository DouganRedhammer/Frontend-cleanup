# Frontend-cleanup

Deletes the node_modules and bower_components directories from your frontend project.

## Dependencies
* del
* shelljs
* yargs

## Installation
````javascript
$ npm install -g frontend-cleanup
````
## Usage
````javascript
$ frontend-cleanup node_modules
````
````javascript
$ frontend-cleanup bower_components
````
## Options

**-v or --verbose [boolean]**  
Display the files and directories that were deleted.

**-r or --recursive  [boolean] [default: true]**  
Display the files and directories that were deleted.

**-h or --help**  
Show help.

## Examples

Delete all node_modules in the current working directory.
````javascript
$ frontend-cleanup node_modules
````

Delete all bower_components in the current working directory.
````javascript
$ frontend-cleanup bower_components
````

Delete all node_modules in the current working directory, all sub-directories, and display output.
````javascript
$ frontend-cleanup node_modules -r -v
````

Delete all bower_components in the current working directory, all sub-directories, and display output.
````javascript
$ frontend-cleanup bower_components -r -v
````

## License

MIT License

Copyright (c) 2016 Daniel Franklin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.