# Caesar Cipher Cracker

A Caesar cipher in JavaScript that can encrypt and decrypt messages, and crack them without knowing the key.

Written by hand, without AI, as JavaScript practice.

## Run it

```
node example.js
```

Requires Node.js. No dependencies.

## How it works

**`caesar(message, shift)`** shifts every letter by `shift` places in the alphabet.

- Uppercase and lowercase letters are shifted separately, so case is preserved.
- Spaces, punctuation and numbers are left unchanged.
- Any shift works, including negative and very large ones (e.g. `-100` or `29`), by wrapping around the alphabet.
- Decrypting is the same as encrypting with the opposite shift: `caesar(secret, -7)`.

**`crackCipher(input)`** recovers a message without the key.

1. It tries all 26 possible shifts.
2. For each result, it counts how many common English words it contains (`the`, `and`, `you`, `to`...).
3. It returns the result with the highest score.

If no shift produces any common English words, it returns `"No English found"`.

## Limitations

- The cracker only works on English text that contains at least a few common words. A sentence like `"Zebras quickly jump."` can't be cracked this way.
- Punctuation attached to words (e.g. `"key."`) isn't stripped before scoring, so those words don't count.
- The Caesar cipher itself is not secure: with only 26 possible keys, anyone can try them all, which is exactly what `crackCipher` does.
