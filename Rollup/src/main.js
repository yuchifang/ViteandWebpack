
// src/main.js
// import { scripts } from '../package.json';

export default function main() {
    console.log("abc")
    import('./foo.js').then(({ default: foo }) => foo())
    import('./new.js').then(({ default: test }) => console.log(test))
}
main()

