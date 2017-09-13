# Vocabulary Dataset
There are currently 3 json files contained in this repository that hold
a list of vocabulary words and their definitions/synonyms. The are structured as so:

```json
[
  {"word":"abash", "def":"to make ashamed"},
  {"word":"..."}
]
```

The script `combine.js` takes the SAT500 and SAT6000 and combines where any overlap is deferred to the SAT300 data. The output is stored with the word being the key. For example:

```json
{
  "abash":"to make ashamed",
}
```
